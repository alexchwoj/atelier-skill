<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="brand/atelier-logo.svg">
    <img src="brand/atelier-logo-dark.svg" alt="Atelier" height="72">
  </picture>
</p>

# Atelier

An agent skill that turns Claude Code, Codex, OpenCode, Cursor or Gemini CLI into a senior designer who writes production frontend: websites and interfaces that look designed, not generated.

## What it does

- **Builds** landing pages, heroes, full sites, app screens and components, starting from a library of 1,266 proven build prompts (pages, sections and components), 315 design systems and 21 visual-style guides. A chosen or pasted prompt is followed faithfully (with a fidelity check), and its generated images and video are swapped for real photos and footage of the same mood when their subject does not fit the brand.
- **Designs game interfaces:** HUDs, menus, inventories, settings and full UI kits, with gamepad navigation and accessibility, for the web, Unity, Unreal or Godot.
- **Runs a whole studio** from a one-line idea: concept, three directions sketched as real first screens on a comparison board, logo, palette, type, copy, imagery, the site, and a live tweaks panel to steer the result by hand.
- **Designs motion** that reads as decided, not defaulted: micro-interactions, transitions, toast stacks, list reorders, scroll stories, choreographed heroes, animated logos and 3 to 10 second product intros, timed by role and distance with a motion character per brand, exportable as Lottie. A runtime checker proves the animations run (filmstrip, jank, reduced-motion leaks, sameness) and a static lint catches the motion tells generated pages share.
- **Refines** existing UI with 21 commands: `deslop`, `critique`, `audit`, `polish`, `bolder`, `quieter`, `distill`, `harden`, `adapt`, `animate`, `colorize`, `typeset`, `clarify`, `onboard`, `delight`, `overdrive`, `optimize`, `document`, `vary`, `push`, `tweaks`.

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

Optional: Node 22+ and Chrome for the screenshot and motion checkers, Lottie previews and media contact sheets, `npm i -g opentype.js` for logo export.

**Media search.** Real photos come from the bundled library, Openverse and Wikimedia Commons with no setup. For the best stock photographs and free video, add any of these free keys to your environment: `PEXELS_API_KEY` ([pexels.com/api](https://www.pexels.com/api/)), `PIXABAY_API_KEY` ([pixabay.com/api/docs](https://pixabay.com/api/docs/)), `UNSPLASH_ACCESS_KEY` ([unsplash.com/developers](https://unsplash.com/developers)).

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

## Project site

`docs/` is the project site (GitHub Pages can serve it as is): the same request built without and with Atelier, compared with a drag slider. To add an example, put `without.html` and `with.html` in `docs/examples/<slug>/`, add an entry to `docs/examples/examples.json` (`group`, `title`, `kind`, `request`; `size: "wide"` for 16:9 game screens, `shotQuery` to capture a mock in a given state, `note` for a caption), then run `node tools/build-site.mjs` (add `--shots` to retake every screenshot).

## Credits

See `atelier/THIRD_PARTY_NOTICES.md`.
