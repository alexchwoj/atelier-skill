#!/usr/bin/env node
// Find free, real photographs and video for a page, from several sources at once, and lay the
// candidates out on a numbered contact sheet so you choose by looking, not by title.
//
//   node media.mjs "slow drone shot over a foggy atlantic coast" --type video --sheet .atelier/media/hero.png
//   node media.mjs "board-formed concrete wall, soft daylight" --orient landscape --n 8
//   node media.mjs "matcha whisked in a black bowl" --source unsplash,pexels --json
//
// Sources (all free to use; each result carries its licence and credit):
//   library    755 curated Wikimedia Commons photos shipped with the skill (offline)
//   openverse  Openverse: Flickr, Wikimedia, museums; CC licences that allow commercial use and changes (no key)
//   commons    Wikimedia Commons live search, photos and video (no key)
//   pexels     photos and video, Pexels licence           (needs PEXELS_API_KEY)
//   pixabay    photos and video, Pixabay content licence   (needs PIXABAY_API_KEY)
//   unsplash   photos, Unsplash licence                    (needs UNSPLASH_ACCESS_KEY)
// Keys are free from each site's developer page; sources without a key are skipped.
//
// Options: --type photo|video|any (photo)  --orient landscape|portrait|square  --n 6 (per source)
//          --source a,b,c (all available)  --sheet <file.png>  --json
//          library only: --tone light|mid|dark  --temp warm|neutral|cool  --people none|figure|face|hands  --cat <category>

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { findChrome } from './chrome.mjs';

const SKILL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const UA = 'atelier-skill/1.0 (https://github.com/alexchwoj/atelier-skill)';

const args = process.argv.slice(2);
const opts = { n: 6, type: 'photo' };
const words = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--json') opts.json = true;
  else if (a === '--help' || a === '-h') opts.help = true;
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
  else words.push(a);
}

const KEYS = { pexels: process.env.PEXELS_API_KEY, pixabay: process.env.PIXABAY_API_KEY, unsplash: process.env.UNSPLASH_ACCESS_KEY };
const ALL = ['library', 'openverse', 'commons', 'pexels', 'pixabay', 'unsplash'];
const available = ALL.filter((s) => !(s in KEYS) || KEYS[s]);

// --frame <video or image url>: download it (with this tool's own User-Agent, which Wikimedia requires)
// and save stills at --at seconds (default 1 and the middle) so you can look before choosing.
if (opts.frame) {
  const out = path.resolve(opts.out || '.atelier/media/frame.jpg');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const r = await fetch(opts.frame, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(120000) });
  if (!r.ok) { console.log(`download failed: HTTP ${r.status}`); process.exit(1); }
  const ext = (opts.frame.split('?')[0].match(/\.(\w{2,4})$/) || [, 'bin'])[1];
  const tmp = path.join(os.tmpdir(), `atelier-media-${Date.now()}.${ext}`);
  fs.writeFileSync(tmp, Buffer.from(await r.arrayBuffer()));
  if (/^(jpe?g|png|webp|avif|gif)$/i.test(ext)) { fs.copyFileSync(tmp, out.replace(/\.\w+$/, `.${ext}`)); console.log(out.replace(/\.\w+$/, `.${ext}`)); process.exit(0); }
  const probe = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', tmp], { encoding: 'utf8' });
  if (probe.error) { console.log(`ffmpeg not found. The file is at ${tmp}: load it in a page and screenshot it with shot.mjs.`); process.exit(2); }
  const dur = parseFloat(probe.stdout) || 2;
  const times = opts.at ? String(opts.at).split(',').map(Number) : [Math.min(1, dur / 4), dur / 2];
  times.forEach((t, i) => {
    const file = times.length > 1 ? out.replace(/(\.\w+)$/, `-${i + 1}$1`) : out;
    spawnSync('ffmpeg', ['-y', '-v', 'error', '-ss', String(t), '-i', tmp, '-frames:v', '1', '-pix_fmt', 'yuvj420p', file]);
    console.log(fs.existsSync(file) ? `${file} (at ${t.toFixed(1)}s)` : `no frame at ${t}s`);
  });
  console.log(`duration ${dur.toFixed(1)}s · downloaded copy: ${tmp}`);
  process.exit(0);
}

if (opts.help || !words.length) {
  console.log(`usage: node media.mjs "<what the picture shows>" [--type photo|video|any] [--orient landscape|portrait|square]
                     [--n 6] [--source ${ALL.join(',')}] [--sheet <file.png>] [--json]
available now: ${available.join(', ')}${available.length < ALL.length ? `\nadd a free key to unlock more: ${ALL.filter((s) => !available.includes(s)).map((s) => `${s} (${s === 'unsplash' ? 'UNSPLASH_ACCESS_KEY' : s.toUpperCase() + '_API_KEY'})`).join(', ')}` : ''}`);
  process.exit(0);
}

const query = words.join(' ');
const n = Math.max(1, Number(opts.n) || 6);
const wantPhoto = opts.type !== 'video';
const wantVideo = opts.type === 'video' || opts.type === 'any';
const sources = (opts.source ? opts.source.split(',') : available).filter((s) => {
  if (!ALL.includes(s)) { console.error(`unknown source: ${s}`); return false; }
  if (!available.includes(s)) { console.error(`${s}: skipped, no API key in the environment`); return false; }
  return true;
});

const orientOf = (w, h) => (w / h > 1.15 ? 'landscape' : h / w > 1.15 ? 'portrait' : 'square');
const okOrient = (w, h) => !opts.orient || !w || !h || orientOf(w, h) === opts.orient;
const strip = (html) => String(html || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const get = async (url, headers = {}, ms = 25000) => {
  const r = await fetch(url, { headers: { 'User-Agent': UA, ...headers }, signal: AbortSignal.timeout(ms) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
};

// Every result: { source, kind, title, w, h, url, thumb, poster?, duration?, page, author, license }
const PROVIDERS = {
  async library(q) {
    if (!wantPhoto) return [];
    const photos = JSON.parse(fs.readFileSync(path.join(SKILL, 'library', 'photos.json'), 'utf8'));
    const STOP = new Set(['a', 'an', 'the', 'of', 'on', 'in', 'at', 'with', 'and', 'for', 'to', 'from', 'by']);
    const terms = q.toLowerCase().split(/[\s,]+/).filter((t) => t.length > 1 && !STOP.has(t));
    const stem = (t) => t.replace(/(ies|es|s)$/, '');
    const score = (p) => {
      const subject = p.subject.toLowerCase();
      const tags = p.tags.map((t) => t.toLowerCase());
      let s = 0;
      for (const t of terms) {
        const st = stem(t);
        if (tags.some((g) => g === t || stem(g) === st)) s += 3;
        else if (tags.some((g) => g.includes(st))) s += 1.5;
        if (subject.includes(st)) s += 2;
        if (p.cat === t || p.cat === st) s += 2;
      }
      return s;
    };
    return photos
      .filter((p) => okOrient(p.w, p.h) && (!opts.tone || p.tone === opts.tone) && (!opts.temp || p.temp === opts.temp) &&
        (!opts.people || p.people === opts.people) && (!opts.cat || p.cat === opts.cat))
      .map((p) => ({ p, s: score(p) })).filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s).slice(0, n)
      .map(({ p }) => ({ source: 'library', kind: 'photo', title: p.subject, w: p.w, h: p.h, url: wikiThumb(p.url, 1920, p.w), thumb: wikiThumb(p.url, 500, p.w),
        srcset: wikiSrcset(p.url, p.w), page: p.page, author: p.author, license: p.license }));
  },

  async openverse(q) {
    if (!wantPhoto) return [];
    const aspect = { landscape: 'wide', portrait: 'tall', square: 'square' }[opts.orient];
    const u = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(q)}&page_size=${Math.min(n * 2, 20)}&license_type=commercial,modification${aspect ? `&aspect_ratio=${aspect}` : ''}`;
    const data = await get(u, {}, 12000); // Openverse is often slow; better to move on
    return (data.results || []).filter((r) => okOrient(r.width, r.height) && (!r.width || r.width >= 1000)).slice(0, n).map((r) => ({
      source: 'openverse', kind: 'photo', title: r.title || q, w: r.width, h: r.height, url: r.url, thumb: r.thumbnail || r.url,
      page: r.foreign_landing_url, author: r.creator || 'unknown', license: `${r.license === 'cc0' || r.license === 'pdm' ? r.license.toUpperCase() : 'CC ' + r.license.toUpperCase()} ${r.license_version || ''}`.trim(),
    }));
  },

  async commons(q) {
    const types = [wantPhoto && 'bitmap', wantVideo && 'video'].filter(Boolean).join('|');
    const u = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=${Math.min(n * 3, 30)}` +
      `&gsrsearch=${encodeURIComponent(`${q} filetype:${types}`)}&prop=videoinfo&viprop=url|size|mime|extmetadata|derivatives&viurlwidth=500` +
      '&viextmetadatafilter=LicenseShortName|Artist|ObjectName|ImageDescription';
    const data = await get(u);
    const pages = Object.values((data.query && data.query.pages) || {}).sort((a, b) => a.index - b.index);
    // Commons search matches other languages and stems loosely ("sea fog" finds Dutch "haar"):
    // keep a file only when its own title or description shares a word with the query.
    const terms = q.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter((t) => t.length > 2).map((t) => t.replace(/(ies|es|s)$/, ''));
    const out = [];
    for (const pg of pages) {
      const i = (pg.videoinfo || [])[0];
      if (!i || !okOrient(i.width, i.height) || i.width < 960) continue;
      const meta = i.extmetadata || {};
      const about = `${pg.title} ${strip(meta.ImageDescription && meta.ImageDescription.value)}`.toLowerCase();
      if (terms.length && !terms.some((t) => about.includes(t))) continue;
      const video = /^(video|application\/ogg)/.test(i.mime);
      if (video && (i.duration < 2 || i.duration > 120)) continue; // b-roll, not talks or films
      const base = { source: 'commons', title: strip(meta.ObjectName && meta.ObjectName.value) || pg.title.replace(/^File:|\.\w+$/g, ''), w: i.width, h: i.height,
        page: i.descriptionurl, author: strip(meta.Artist && meta.Artist.value) || 'unknown', license: strip(meta.LicenseShortName && meta.LicenseShortName.value) || 'see page' };
      if (video) {
        const webm = (i.derivatives || []).filter((d) => /webm/.test(d.type) && d.height <= 1080).sort((a, b) => b.height - a.height)[0];
        if (!webm) continue;
        out.push({ ...base, kind: 'video', url: webm.src, thumb: i.thumburl, poster: i.responsiveUrls && i.responsiveUrls['2'] || i.thumburl, duration: i.duration });
      } else out.push({ ...base, kind: 'photo', url: wikiThumb(i.url, 1920, i.width), thumb: i.thumburl, srcset: wikiSrcset(i.url, i.width) });
      if (out.length >= n) break;
    }
    return out;
  },

  async pexels(q) {
    const o = opts.orient ? `&orientation=${opts.orient}` : '';
    const out = [];
    const auth = { Authorization: KEYS.pexels };
    if (wantPhoto) {
      const d = await get(`https://api.pexels.com/v1/search?q=${encodeURIComponent(q)}&per_page=${n}${o}`, auth);
      for (const p of d.photos || []) out.push({ source: 'pexels', kind: 'photo', title: p.alt || q, w: p.width, h: p.height,
        url: `${p.src.original}?auto=compress&cs=tinysrgb&w=1920`, thumb: p.src.medium, page: p.url, author: p.photographer, license: 'Pexels licence' });
    }
    if (wantVideo) {
      const d = await get(`https://api.pexels.com/videos/search?q=${encodeURIComponent(q)}&per_page=${n}${o}`, auth);
      for (const v of d.videos || []) {
        const file = (v.video_files || []).filter((f) => f.file_type === 'video/mp4' && f.height && f.height <= 1080 && f.width >= 1280).sort((a, b) => b.height - a.height)[0]
          || (v.video_files || []).find((f) => f.file_type === 'video/mp4');
        if (file) out.push({ source: 'pexels', kind: 'video', title: q, w: v.width, h: v.height, url: file.link, thumb: v.image, poster: v.image,
          duration: v.duration, page: v.url, author: v.user && v.user.name, license: 'Pexels licence' });
      }
    }
    return out;
  },

  async pixabay(q) {
    const o = { landscape: 'horizontal', portrait: 'vertical' }[opts.orient];
    const out = [];
    const qs = `key=${KEYS.pixabay}&q=${encodeURIComponent(q.slice(0, 100))}&per_page=${Math.max(3, n)}&safesearch=true`;
    if (wantPhoto) {
      const d = await get(`https://pixabay.com/api/?${qs}&image_type=photo${o ? `&orientation=${o}` : ''}`);
      for (const p of (d.hits || []).slice(0, n)) out.push({ source: 'pixabay', kind: 'photo', title: p.tags, w: p.imageWidth, h: p.imageHeight,
        url: p.largeImageURL, thumb: p.webformatURL, page: p.pageURL, author: p.user, license: 'Pixabay licence' });
    }
    if (wantVideo) {
      const d = await get(`https://pixabay.com/api/videos/?${qs}`);
      for (const v of (d.hits || []).slice(0, n)) {
        const f = v.videos.large && v.videos.large.url ? v.videos.large : v.videos.medium;
        if (!okOrient(f.width, f.height)) continue;
        out.push({ source: 'pixabay', kind: 'video', title: v.tags, w: f.width, h: f.height, url: f.url, thumb: f.thumbnail || v.videos.medium.thumbnail,
          poster: f.thumbnail, duration: v.duration, page: v.pageURL, author: v.user, license: 'Pixabay licence' });
      }
    }
    return out;
  },

  async unsplash(q) {
    if (!wantPhoto) return [];
    const o = { landscape: 'landscape', portrait: 'portrait', square: 'squarish' }[opts.orient];
    const d = await get(`https://api.unsplash.com/search/photos?q=${encodeURIComponent(q)}&per_page=${n}${o ? `&orientation=${o}` : ''}`,
      { Authorization: `Client-ID ${KEYS.unsplash}`, 'Accept-Version': 'v1' });
    return (d.results || []).map((p) => ({ source: 'unsplash', kind: 'photo', title: p.alt_description || p.description || q, w: p.width, h: p.height,
      url: `${p.urls.raw}&w=1920&q=80&auto=format`, thumb: p.urls.small,
      srcset: [640, 960, 1280, 1920, 2560].map((w) => `${p.urls.raw}&w=${w}&q=80&auto=format ${w}w`).join(', '),
      page: `${p.links.html}?utm_source=atelier&utm_medium=referral`, author: p.user && p.user.name, license: 'Unsplash licence' }));
  },
};

// Wikimedia only serves its standard thumbnail widths; any other width answers HTTP 400.
const WIKI_WIDTHS = [500, 960, 1280, 1920, 3840];
function wikiThumb(url, width, full) {
  const m = url.match(/^(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons)\/([0-9a-f]\/[0-9a-f]{2})\/([^?]+)/);
  if (!m || (full && width >= full)) return url;
  const file = m[3];
  const name = /\.(tiff?)$/i.test(file) ? `lossy-page1-${width}px-${file}.jpg` : `${width}px-${file}${/\.svg$/i.test(file) ? '.png' : ''}`;
  return `${m[1]}/thumb/${m[2]}/${file}/${name}`;
}
const wikiSrcset = (url, full) => WIKI_WIDTHS.filter((w) => w < full).map((w) => `${wikiThumb(url, w, full)} ${w}w`).join(', ');

// Live search engines match keywords, so a long description of the frame often finds nothing.
// A source that comes back empty is asked again with the description's core nouns.
const STYLE = new Set(['slow', 'soft', 'warm', 'cool', 'cold', 'golden', 'pale', 'dark', 'light', 'bright', 'misty', 'hazy', 'haze', 'drift', 'drifting',
  'shot', 'aerial', 'drone', 'close', 'closeup', 'macro', 'wide', 'top', 'side', 'over', 'under', 'into', 'across', 'calm', 'gentle', 'cinematic',
  'moody', 'beautiful', 'quiet', 'early', 'late', 'morning', 'evening', 'dusk', 'dawn', 'sunrise', 'sunset', 'night', 'white', 'black', 'grey', 'gray',
  'the', 'and', 'with', 'from', 'for', 'its', 'his', 'her', 'a', 'an', 'of', 'on', 'in', 'at', 'to', 'by']);
const core = query.toLowerCase().split(/[^\p{L}\p{N}-]+/u).filter((w) => w.length > 2 && !STYLE.has(w)).slice(0, 3).join(' ');

const settled = await Promise.allSettled(sources.map(async (s) => {
  const first = await PROVIDERS[s](query);
  return first.length || !core || core === query.toLowerCase() || s === 'library' ? first : PROVIDERS[s](core);
}));
const results = [];
settled.forEach((r, i) => {
  if (r.status === 'fulfilled') results.push(...r.value);
  else console.error(`${sources[i]}: ${r.reason && r.reason.message || r.reason}`);
});
results.forEach((r, i) => { r.n = i + 1; r.credit = `${r.title.slice(0, 80)}, ${r.author || 'unknown'}, ${r.license} (${r.page})`; });

if (opts.sheet) await contactSheet(results, path.resolve(opts.sheet));

if (opts.json) {
  console.log(JSON.stringify(results, null, 1));
  process.exit(0);
}
if (!results.length) {
  console.log('Nothing found. Describe what the frame shows (place, material, light, motion) in other words, drop --orient, or try --type any.');
  process.exit(0);
}
for (const r of results) {
  const len = r.duration ? ` · ${Math.round(r.duration)}s` : '';
  console.log(`[${r.n}] ${r.source} · ${r.kind} · ${r.w}x${r.h}${len} · ${r.license} · ${r.author}\n    ${r.title.slice(0, 110)}\n    ${r.kind === 'video' ? `video: ${r.url}\n    poster: ${r.poster}` : `src: ${r.url}${r.srcset ? `\n    srcset: ${r.srcset.length > 160 ? r.srcset.slice(0, 157) + '…' : r.srcset}` : ''}`}\n    page: ${r.page}\n`);
}
console.log(opts.sheet ? `Contact sheet: ${path.resolve(opts.sheet)} (open it and choose by number)` : 'Add --sheet <file.png> to see every candidate on one numbered sheet before choosing.');
console.log('Credit every asset used (a "Photographs:" or "Footage:" line). CC BY and CC BY-SA require it; Pexels, Pixabay and Unsplash ask for it.');
console.log('Check the frames for visible brand names, logos and recognisable people: a stand-in must not suggest a client, partner or endorsement.');

async function contactSheet(list, out) {
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const cards = list.map((r) => `<figure><img src="${r.thumb}" alt=""><figcaption><b>${r.n}</b> ${r.source} · ${r.kind === 'video' ? `video ${Math.round(r.duration || 0)}s` : r.kind} · ${r.w}x${r.h}<br>${r.title.slice(0, 60).replace(/</g, '&lt;')}</figcaption></figure>`).join('');
  const html = `<!doctype html><meta charset="utf-8"><style>body{margin:0;padding:16px;background:#151515;color:#ddd;font:13px/1.35 system-ui,sans-serif}
main{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}figure{margin:0}img{width:100%;aspect-ratio:16/10;object-fit:cover;display:block;background:#333}
figcaption{padding:6px 2px}b{display:inline-block;background:#fff;color:#000;padding:1px 7px;border-radius:3px;margin-right:4px}</style>
<p>${query.replace(/</g, '&lt;')}</p><main>${cards}</main>`;
  const htmlFile = out.replace(/\.png$/i, '') + '.html';
  fs.writeFileSync(htmlFile, html);
  const chrome = findChrome();
  if (!chrome) { console.error(`No Chrome found for the sheet; open ${htmlFile} instead.`); return; }
  const rows = Math.ceil(list.length / 4) || 1;
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'atelier-sheet-'));
  spawnSync(chrome, ['--headless=new', '--hide-scrollbars', `--user-data-dir=${profile}`, `--screenshot=${out}`, `--window-size=1400,${70 + rows * 300}`,
    '--virtual-time-budget=20000', pathToFileURL(htmlFile).href], { stdio: 'ignore', timeout: 60000 });
  fs.rmSync(profile, { recursive: true, force: true });
  if (!fs.existsSync(out)) console.error(`The sheet did not render; open ${htmlFile} instead.`);
}
