<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="brand/atelier-logo.svg">
    <img src="brand/atelier-logo-dark.svg" alt="Atelier" height="72">
  </picture>
</p>

# Atelier

An agent skill that turns Claude Code, Codex, OpenCode, Cursor or Gemini CLI into a senior designer who writes production frontend: websites and interfaces that look designed, not generated.

## What it does

- **Builds** landing pages, heroes, full sites, app screens and components, starting from a library of 1,266 proven build prompts (pages, sections and components), 315 design systems and 21 visual-style guides.
- **Designs game interfaces:** HUDs, menus, inventories, settings and full UI kits, with gamepad navigation and accessibility, for the web, Unity, Unreal or Godot.
- **Runs a whole studio** from a one-line idea: concept, three directions sketched as real first screens on a comparison board, logo, palette, type, copy, imagery, the site, and a live tweaks panel to steer the result by hand.
- **Refines** existing UI with 20 commands: `critique`, `audit`, `polish`, `bolder`, `quieter`, `distill`, `harden`, `adapt`, `animate`, `colorize`, `typeset`, `clarify`, `onboard`, `delight`, `overdrive`, `optimize`, `document`, `vary`, `push`, `tweaks`.

## Install

**Any agent, one command** (Claude Code, Codex, Cursor, OpenCode, Gemini CLI, Copilot, Windsurf):

```bash
npx github:alexchwoj/atelier-skill
```

It copies the skill into `~/.claude/skills/atelier` and `~/.agents/skills/atelier` (the shared folder Codex, Cursor, OpenCode and Gemini CLI read). Options: `--agent claude,codex`, `--project` (this repo only), `--uninstall`.

**Claude Code plugin:**

```
/plugin marketplace add alexchwoj/atelier-skill
/plugin install atelier@atelier-skill
```

**From a clone** (links instead of copying, so `git pull` updates every agent):

```bash
git clone https://github.com/alexchwoj/atelier-skill && cd atelier-skill
node install.mjs
```

**Other installers:** `npx skills add alexchwoj/atelier-skill` or `gemini skills install https://github.com/alexchwoj/atelier-skill.git --path atelier`.

Optional: Node 22+ and Chrome for the screenshot checker, `npm i -g opentype.js` for logo export.

## Use

Start a new session, then:

| Agent | Example |
| --- | --- |
| Claude Code | `/atelier studio a booking app for climbing gyms` (as a plugin: `/atelier:atelier …`) |
| Codex | `$atelier a landing page for my ceramics studio that feels like Apple` |
| Cursor, OpenCode, Gemini CLI | describe the page; the skill loads when the request matches |

More: `/atelier critique src/app/page.tsx`, `/atelier bolder the pricing section`.

## Add to the library

1. Add a prompt as `atelier/library/prompts/<category>/<slug>.md` (or a design under `designs/`) and its title to that folder's `index.json`.
2. Run `npm run build`.

## Credits

See `atelier/THIRD_PARTY_NOTICES.md`.
