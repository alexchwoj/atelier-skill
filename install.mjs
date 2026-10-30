#!/usr/bin/env node
// Installs the Atelier skill for Claude Code, Codex, Cursor, OpenCode, Gemini CLI and others.
//
//   npx github:alexchwoj/atelier-skill                 install for every agent (user level, copies)
//   node install.mjs                                   from a clone: links, so `git pull` updates it
//   node install.mjs --agent claude,codex              only some agents
//   node install.mjs --project                         into this project (.claude/skills, .agents/skills)
//   node install.mjs --copy                            copy instead of link
//   node install.mjs --uninstall                       remove it
//   node install.mjs --list                            show where it would go
//
// Agents and where they read skills:
//   claude    ~/.claude/skills            (project: .claude/skills)
//   agents    ~/.agents/skills            (project: .agents/skills)  read by Codex, Cursor, OpenCode, Gemini CLI
//   copilot   ~/.copilot/skills           (only if ~/.copilot exists)
//   windsurf  ~/.codeium/windsurf/skills  (only if ~/.codeium/windsurf exists)

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const NAME = 'atelier';
const REPO = path.dirname(fileURLToPath(import.meta.url));
const SOURCE = path.join(REPO, NAME);
const HOME = os.homedir();

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const value = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : null; };

if (flag('--help') || flag('-h')) {
  console.log(fs.readFileSync(fileURLToPath(import.meta.url), 'utf8').split('\n').filter((l) => l.startsWith('//')).map((l) => l.slice(3)).join('\n'));
  process.exit(0);
}

if (!fs.existsSync(path.join(SOURCE, 'SKILL.md'))) {
  console.error(`Cannot find ${NAME}/SKILL.md next to this script.`);
  process.exit(1);
}

const project = flag('--project');
const base = project ? process.cwd() : HOME;
const TARGETS = {
  claude: { dir: path.join(base, '.claude', 'skills'), label: 'Claude Code' },
  agents: { dir: path.join(base, '.agents', 'skills'), label: 'Codex, Cursor, OpenCode, Gemini CLI' },
  copilot: { dir: path.join(base, '.copilot', 'skills'), label: 'GitHub Copilot', optional: path.join(base, '.copilot') },
  windsurf: { dir: path.join(base, '.codeium', 'windsurf', 'skills'), label: 'Windsurf', optional: path.join(base, '.codeium', 'windsurf') },
};
// Friendly names map onto the shared folders.
const ALIAS = { codex: 'agents', cursor: 'agents', opencode: 'agents', gemini: 'agents', 'claude-code': 'claude' };

let chosen;
const agentArg = value('--agent');
if (agentArg && agentArg !== 'all') {
  chosen = [...new Set(agentArg.split(',').map((a) => ALIAS[a.trim()] || a.trim()))];
  const bad = chosen.filter((a) => !TARGETS[a]);
  if (bad.length) { console.error(`Unknown agent: ${bad.join(', ')}. Use claude, codex, cursor, opencode, gemini, copilot, windsurf or all.`); process.exit(1); }
} else {
  chosen = Object.keys(TARGETS).filter((k) => !TARGETS[k].optional || fs.existsSync(TARGETS[k].optional));
}

// Running from an npx cache: the folder disappears later, so copy.
const fromCache = /[\\/](_npx|npm-cache|\.npm)[\\/]/i.test(REPO);
const copy = flag('--copy') || fromCache;

function isAtelier(p) {
  try {
    const skill = fs.readFileSync(path.join(p, 'SKILL.md'), 'utf8');
    return /^name:\s*atelier\s*$/m.test(skill);
  } catch { return false; }
}

function remove(p) {
  const st = fs.lstatSync(p);
  if (st.isSymbolicLink()) fs.unlinkSync(p);
  else fs.rmSync(p, { recursive: true, force: true });
}

function install(dir) {
  const dest = path.join(dir, NAME);
  fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(dest) || isLink(dest)) {
    if (!isLink(dest) && !isAtelier(dest)) return `skipped: ${dest} exists and is not Atelier`;
    remove(dest);
  }
  if (copy) {
    fs.cpSync(SOURCE, dest, { recursive: true });
    return `copied  ${dest}`;
  }
  fs.symlinkSync(SOURCE, dest, process.platform === 'win32' ? 'junction' : 'dir');
  return `linked  ${dest} -> ${SOURCE}`;
}

function isLink(p) {
  try { return fs.lstatSync(p).isSymbolicLink(); } catch { return false; }
}

function uninstall(dir) {
  const dest = path.join(dir, NAME);
  if (!fs.existsSync(dest) && !isLink(dest)) return `absent  ${dest}`;
  if (!isLink(dest) && !isAtelier(dest)) return `skipped: ${dest} is not Atelier`;
  remove(dest);
  return `removed ${dest}`;
}

console.log(`Atelier ${flag('--uninstall') ? 'uninstall' : 'install'} (${project ? `project: ${base}` : 'user level'}${flag('--uninstall') ? '' : `, ${copy ? 'copy' : 'link'}`})\n`);
for (const key of chosen) {
  const t = TARGETS[key];
  let line;
  if (flag('--list')) line = `would use ${path.join(t.dir, NAME)}`;
  else {
    try { line = flag('--uninstall') ? uninstall(t.dir) : install(t.dir); }
    catch (err) { line = `failed: ${err.message}${err.code === 'EPERM' ? ' (try --copy)' : ''}`; }
  }
  console.log(`  ${t.label.padEnd(36)} ${line}`);
}

if (!flag('--uninstall') && !flag('--list')) {
  console.log(`
Start a new session in your agent, then:
  Claude Code     /atelier studio <your product idea>
  Codex           $atelier <request>   (or just describe the page)
  Cursor, Gemini  describe the page; the skill loads when relevant

Optional tools: Node 22+ and Chrome for scripts/shot.mjs; \`npm i -g opentype.js\` for scripts/wordmark.mjs.`);
}
