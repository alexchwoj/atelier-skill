// Atelier tweaks panel: live controls for a page's design tokens, for review only, never shipped.
//
// Declare what can be tweaked in the page, then include this file:
//
//   <script type="application/json" id="atelier-tweaks">
//   {
//     "--accent-h":     { "label": "Accent hue", "type": "range", "min": 0, "max": 360 },
//     "--accent":       { "type": "color" },
//     "--radius":       { "type": "range", "min": 0, "max": 32, "unit": "px" },
//     "--font-display": { "label": "Display", "type": "select",
//                         "options": { "Fraunces": "\"Fraunces\", serif", "Gloock": "\"Gloock\", serif" } },
//     "data-theme":     { "label": "Theme", "type": "select", "options": ["light", "dark"] },
//     "data-density":   { "label": "Compact", "type": "toggle", "on": "compact", "off": "comfortable" }
//   }
//   </script>
//   <script src="tweaks.js" defer></script>
//
// Keys starting with "--" set custom properties on :root; keys starting with "data-" set
// attributes on <html>. Values persist per page in localStorage. "Copy" puts the chosen values on
// the clipboard as CSS and attributes, ready to bake into the tokens. Hide with ?tweaks=off.

(() => {
  if (new URLSearchParams(location.search).get('tweaks') === 'off') return;
  const spec = document.getElementById('atelier-tweaks');
  if (!spec) return;
  let defs;
  try { defs = JSON.parse(spec.textContent); } catch (e) { console.warn('atelier tweaks: invalid JSON', e); return; }

  const root = document.documentElement;
  const storeKey = 'atelier-tweaks:' + location.pathname;
  const initial = {};
  const state = {};
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storeKey) || '{}'); } catch (e) {}

  const read = (key) => key.startsWith('--')
    ? getComputedStyle(root).getPropertyValue(key).trim()
    : root.getAttribute(key) || '';
  const write = (key, value) => {
    if (key.startsWith('--')) root.style.setProperty(key, value);
    else root.setAttribute(key, value);
  };
  const format = (def, raw) => def.type === 'range' ? raw + (def.unit || '') : raw;
  const persist = () => { try { localStorage.setItem(storeKey, JSON.stringify(state)); } catch (e) {} };

  for (const [key, def] of Object.entries(defs)) {
    initial[key] = read(key);
    if (key in saved) { state[key] = saved[key]; write(key, saved[key]); }
  }

  const host = document.createElement('div');
  host.setAttribute('data-atelier-tweaks', '');
  const shadow = host.attachShadow({ mode: 'open' });
  shadow.innerHTML = `
    <style>
      :host { all: initial; }
      .wrap { position: fixed; right: 16px; bottom: 16px; z-index: 2147483647; font: 12px/1.4 ui-sans-serif, system-ui, sans-serif; color: #e8e8e8; }
      .toggle, button { font: inherit; color: inherit; background: #1b1b1b; border: 1px solid #3a3a3a; border-radius: 8px; padding: 6px 10px; cursor: pointer; }
      .toggle:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible { outline: 2px solid #8ab4ff; outline-offset: 2px; }
      .panel { width: 260px; max-height: min(70vh, 560px); overflow: auto; margin-bottom: 8px; padding: 12px; background: #111; border: 1px solid #333; border-radius: 12px; box-shadow: 0 12px 40px rgb(0 0 0 / .45); }
      .panel[hidden] { display: none; }
      label { display: grid; gap: 4px; margin-bottom: 10px; }
      .row { display: flex; justify-content: space-between; gap: 8px; }
      .val { color: #9a9a9a; font-variant-numeric: tabular-nums; }
      input[type=range], select { width: 100%; }
      input[type=color] { width: 100%; height: 28px; border: 0; background: none; padding: 0; }
      select { background: #1b1b1b; color: inherit; border: 1px solid #3a3a3a; border-radius: 6px; padding: 4px; }
      .actions { display: flex; gap: 6px; margin-top: 4px; }
    </style>
    <div class="wrap">
      <div class="panel" hidden role="dialog" aria-label="Design tweaks"></div>
      <button class="toggle" type="button" aria-expanded="false">Tweaks</button>
    </div>`;
  const panel = shadow.querySelector('.panel');
  const toggle = shadow.querySelector('.toggle');

  const options = (def) => Array.isArray(def.options)
    ? def.options.map((v) => [v, v])
    : Object.entries(def.options || {});

  for (const [key, def] of Object.entries(defs)) {
    const current = key in state ? state[key] : initial[key];
    const label = document.createElement('label');
    const row = document.createElement('div');
    row.className = 'row';
    const name = document.createElement('span');
    name.textContent = def.label || key;
    const val = document.createElement('span');
    val.className = 'val';
    row.append(name, val);
    let input;
    if (def.type === 'range') {
      input = Object.assign(document.createElement('input'), { type: 'range', min: def.min ?? 0, max: def.max ?? 100, step: def.step ?? 1 });
      input.value = parseFloat(current) || 0;
    } else if (def.type === 'color') {
      input = Object.assign(document.createElement('input'), { type: 'color' });
      if (/^#[0-9a-f]{6}$/i.test(current)) input.value = current;
    } else if (def.type === 'toggle') {
      input = Object.assign(document.createElement('input'), { type: 'checkbox' });
      input.checked = current === def.on;
    } else {
      input = document.createElement('select');
      for (const [text, value] of options(def)) input.append(new Option(text, value, false, value === current));
    }
    const apply = () => {
      const raw = def.type === 'toggle' ? (input.checked ? def.on : def.off) : input.value;
      const value = format(def, raw);
      state[key] = value;
      write(key, value);
      val.textContent = def.type === 'select' ? '' : value;
      persist();
    };
    input.addEventListener('input', apply);
    val.textContent = def.type === 'select' || def.type === 'toggle' ? '' : current;
    label.append(row, input);
    panel.append(label);
  }

  const actions = document.createElement('div');
  actions.className = 'actions';
  const copy = Object.assign(document.createElement('button'), { type: 'button', textContent: 'Copy' });
  const reset = Object.assign(document.createElement('button'), { type: 'button', textContent: 'Reset' });
  copy.addEventListener('click', async () => {
    const vars = Object.keys(defs).filter((k) => k.startsWith('--')).map((k) => `  ${k}: ${state[k] ?? initial[k]};`);
    const attrs = Object.keys(defs).filter((k) => !k.startsWith('--')).map((k) => `<html ${k}="${state[k] ?? initial[k]}">`);
    const text = [':root {', ...vars, '}', ...attrs].join('\n');
    try { await navigator.clipboard.writeText(text); copy.textContent = 'Copied'; }
    catch (e) { console.log(text); copy.textContent = 'In console'; }
    setTimeout(() => { copy.textContent = 'Copy'; }, 1500);
  });
  reset.addEventListener('click', () => {
    try { localStorage.removeItem(storeKey); } catch (e) {}
    location.reload();
  });
  actions.append(copy, reset);
  panel.append(actions);

  toggle.addEventListener('click', () => {
    const open = panel.hidden;
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  });
  shadow.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) { panel.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); }
  });
  document.body.append(host);
})();
