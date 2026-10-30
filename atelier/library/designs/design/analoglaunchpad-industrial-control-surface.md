---
version: "1"
name: "Rackmount Oscilloscope Console"
description: "A hardware-panel skeuomorphism system: warm cream chassis housing dark steel-gradient rack modules, mono-spaced label type, and glowing CRT-style waveform traces standing in for content media."
colors:
  background: "#D2C9BD"
  surface: "#333842"
  surface-alt: "#252A32"
  text-primary: "#EEF0E9"
  text-secondary: "#272A2D"
  accent: "#32E68A"
  accent-alert: "#FF5042"
  ink: "#12151A"
  border: "#373A3B"
  border-dark: "#171A1F"
typography:
  display-lg:
    fontFamily: "DM Mono"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "1.33"
    letterSpacing: "-0.6px"
  headline-md:
    fontFamily: "DM Mono"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: "1.56"
    letterSpacing: "-0.4px"
  body-md:
    fontFamily: "DM Mono"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: "2"
  label-md:
    fontFamily: "DM Mono"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "1.33"
  body-mode:
    fontFamily: "DM Mono"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  accent-mono-label:
    fontFamily: "DM Mono"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.08em"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "28px"
  small-gap: "12px"
rounded:
  control: "50px"
  card: "50px"
  pill: "50px"
components:
  button-primary:
    background: "linear-gradient(rgb(105, 112, 120), rgb(56, 61, 67))"
    text-color: "#EEF0E9"
    radius: "0px"
    height: "36px"
    shadow: "rgb(238, 238, 238) 1px 1px 0px 0px inset, rgb(17, 17, 17) 0px 1px 2px 0px"
    border: "1px solid #373A3B"
  button-secondary:
    background: "#303030"
    text-color: "#A6ADB0"
    radius: "0px"
    height: "32px"
    shadow: "rgb(160, 165, 166) 0px 1px 0px 0px inset, rgb(17, 17, 17) 0px 2px 2px 0px"
    border: "1px solid #171A1F"
  card-module-large:
    background: "linear-gradient(145deg, rgb(65, 71, 81), rgb(44, 49, 57) 58%, rgb(60, 66, 74))"
    radius: "0px"
    padding: "28px"
    shadow: "rgb(102, 109, 116) 0px 1px 0px 0px inset, rgb(23, 26, 29) 0px -2px 0px 0px inset, rgba(64, 58, 52, 0.176) 0px 7px 12px 0px, rgba(17, 17, 17, 0.533) 0px 2px 2px 0px"
    border: "1px solid #373A3B"
  card-module-small:
    background: "linear-gradient(145deg, rgb(65, 71, 81), rgb(44, 49, 57) 58%, rgb(60, 66, 74))"
    radius: "0px"
    padding: "24px"
    shadow: "rgb(102, 109, 116) 0px 1px 0px 0px inset, rgb(23, 26, 29) 0px -2px 0px 0px inset, rgba(64, 58, 52, 0.176) 0px 7px 12px 0px, rgba(17, 17, 17, 0.533) 0px 2px 2px 0px"
    border: "1px solid #373A3B"
  status-led:
    background: "#FF5042"
    radius: "50px"
    size: "6px"
---
# Rackmount Oscilloscope Console
Source: https://p.superdesign.dev/draft/4ab5611d-378b-46f1-92ca-ee11f9c07cd2

## Overview
This is instrument-panel skeuomorphism — a dense hardware-rack aesthetic built entirely in monospace type, brushed-steel gradients, and inset/outset shadow pairs that fake beveled metal. It is not a marketing gradient-hero system; it is a simulated modular synthesizer or lab bench, where every content module is a "channel" wearing screws, toggles, and a glowing CRT oscilloscope trace as its hero visual. The type is exclusively DM Mono, in uppercase tracked labels and tight bold headlines, reinforcing the technical-readout identity over any humanist warmth.

## Composition
The page opens on a warm cream chassis background (`#D2C9BD`-family, roughly half the visible pixel field) framing a dark steel header bar — this outer cream margin functions like the enclosure of a physical device, visible as a consistent ~24px gutter around every rack module. Inside it, modules stack in a strict top-to-bottom bus: a global status header, a section label band, then alternating single-column and two-column module rows. Rhythm alternates deliberately — one full-width module (waveform right, text left), one full-width module reversed (waveform left, text right), then a two-up row of half-width modules, then another two-up row — so no two adjacent rows share the same layout, mimicking how physical rack units of different heights are bolted in sequence. The deliberate choice here is skeuomorphic literalism (screws, toggle switches, attenuation knobs, bus/clock readouts) over flat minimalism; the rejected alternative is a clean SaaS card grid with iconography — this system instead insists every module look like a powered piece of test equipment.

## Colors
Background is the cream enclosure tone (`#D2C9BD` family, ~50% of pixels) — this is the dominant field, not a dark theme, despite the modules themselves being dark. Module surfaces run a narrow steel-gradient band (`#333842`/`--steel` to `#252A32`/`--steel2`, measured at ~12% combined coverage) that reads as slate-blue-gray, occupying the two mid-tone pixel clusters (#303048 ~21%, #304848 ~10%). Near-black ink (`#050B0A`, 12.8% area) anchors the CRT screens where waveforms render. The accent green `#32E68A`/`--green` is rationed to status text, one active-channel LED ring, and the teal oscilloscope trace — under 1% of declared color area — while a second accent, alert red/orange (`#FF5042`, `#EF5360`), marks status LEDs and one warning trace. Text ink is off-white `#EEF0E9` on dark modules and near-black on the cream chassis; secondary/meta labels drop to a dim `#272A2D`-on-dark or muted gray (`#A6ADB0`, `#939B98`) tone. Borders are hairline dark (`#373A3B`, `#171A1F`), never colored. Large stretches of the cream chassis and the steel module frames are left deliberately uncolored — flat and matte — so the handful of glowing scope traces (purple, teal, cyan, amber) read as the only "powered" elements.

## Typography
Everything is DM Mono — no sans-serif pairing despite `ui-sans-serif` being present in the stack, it is not visibly used. Headline-md (18px/700, lh 1.56, ls -0.4px) sets each module's title in bold white mono. Display-lg (24px/700, lh 1.33, ls -0.6px) is reserved for the station's top-level identifier. Body copy runs small and dense — measured body-md at 10px/400 lh 2 for module descriptions, with a looser 16px/400 body-mode for any longer-form passage — always in the same face, differentiated only by size, weight, and ink/muted-ink contrast. Uppercase tracked mono labels (module index, bus/clock readouts, "channel active" tags) function as the system's eyebrow/label role throughout.

## Layout
Content is bus-width constrained (max-width 1332px), centered on the cream field. The header and section-label bands are full-width single rows. Below that, modules follow: two full-bleed single-column rows (each internally split into a ~60/40 text/scope arrangement, sides alternating), then two-column module rows at 49%/49% width with a 24px gap (a 2-column, 4-item grid, rows [49/49 | 49/49]), matching the measured card-family composition exactly. A dense 12-column, 4px-gutter micro-grid and a 1-column, 8px-gap list of 10 items appear deeper in the page for finer control clusters (toggles, dials, readouts). Padding inside modules is generous and consistent — 24px for the two-up cards, 28px for full-width modules — keeping density readable despite the small type. The layout does not visibly reflow to a fluid breakpoint system in evidence; it behaves as a fixed engineering console at bus width.

## Components
- **Header bar (navbar role):** full-width dark steel strip spanning the full viewport width (edge-to-edge, not inset, square corners — 0px radius) sitting inside the cream margin. Contains a left-aligned two-line label stack (small tracked eyebrow + large bold station identifier), a center-right status readout with a colored LED dot and label, and a right-side bordered dropdown control (rounded rectangle select, dark fill). No visible primary CTA in the header itself — it is a status/identity bar, not a conversion bar.
- **Section label band:** a thin full-width strip beneath the header carrying an eyebrow ("active modules" role) at left, a bold section title beneath it, and a right-aligned small mono readout (bus/clock/rev figures) — establishes the rack's section rhythm, repeats once per major module group.
- **Module — full-width, scope-right:** appears as the first content row. Steel gradient-fill card, 0px radius, padding 28px, shadow `rgb(102,109,116) 0px 1px 0px 0px inset, rgb(23,26,29) 0px -2px 0px 0px inset, rgba(64,58,52,0.176) 0px 7px 12px 0px, rgba(17,17,17,0.533) 0px 2px 2px 0px`. Anatomy top-to-bottom/left-to-right: small mono module-index label, bold headline, 2-line muted body copy, a toggle switch + status LED + "channel active" label, a rotary attenuation knob with a dB readout — opposite a large black CRT screen (roughly 40% of module width) rendering a glowing sine trace, with a solid steel-gradient launch button at far right.
- **Module — full-width, scope-left (reversed):** same card surface/shadow/padding spec, mirrored: CRT screen (Lissajous-style closed-loop trace) at left, launch button beside it, headline/body/toggle/knob cluster at right. Establishes the alternating-direction rhythm.
- **Module — half-width pair (2-up row):** two modules at 49%/49% width, 24px gap, matching the measured 4-item/2-column grid. Smaller card padding (24px), same gradient fill and shadow. Anatomy: mono index label top-left, a mid-height CRT trace panel (sawtooth or radar-style sweep, colored per-channel), bold headline beneath, a one-line muted caption, and a small bordered launch button bottom-right.
- **Buttons — primary "launch" (module CTA):** rectangular, 0px radius (sharp corners), steel-gradient fill `linear-gradient(rgb(105,112,120), rgb(56,61,67))`, inset-highlight shadow `rgb(238,238,238) 1px 1px 0px 0px inset, rgb(17,17,17) 0px 1px 2px 0px`, off-white mono text, sized to hug its label (~36px tall). This is the system's primary actionable control, repeated once per module.
- **Buttons — secondary/compact "launch →":** same sharp 0px radius, slightly darker flat fill, shorter height (~32px), used on the half-width module pairs where space is tighter — a visually lighter-weight sibling of the primary, not a different hue.
- **Status LED + toggle switch (atom):** a small circular dot (red/alert or green/active, 6px, full pill radius 50px) paired with a physical-style rocker toggle graphic and a mono caption label — repeats inside every module to signal channel state.
- **Rotary knob (atom):** a circular dial graphic with a pointer notch and a dB numeral readout beside it — decorative-functional control repeated in full-width modules only.
- **Dropdown select (navbar utility):** bordered rectangular control, dark fill, sharp corners, right-aligned in the header — a host/platform filter, not a CTA.
- **Footer:** transparent background, minimal single-link structure — kept quiet, consistent with the header/footer being structural bookends rather than content-bearing bands.

## Graphics & Effects
The dominant background texture is a fine dot-grid noise pattern covering 100% of the page: `radial-gradient(rgba(116, 109, 101, 0.094) 0.7px, rgba(0, 0, 0, 0) 0.7px)` — a subtle stippled grain over the cream chassis giving it a brushed/painted-metal feel rather than flat color. Layered on top, a full-page vertical rule pattern — `linear-gradient(90deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 31%, rgba(141,131,119,0.23) 31.2%, rgba(0,0,0,0) 31.5%, rgba(0,0,0,0) 67%, rgba(141,131,119,0.23) 67.2%, rgba(0,0,0,0) 67.5%)` — draws two faint vertical seam lines across the full page width, like panel-join lines on an enclosure. The steel module gradient `linear-gradient(145deg, rgb(65,71,81), rgb(44,49,57) 58%, rgb(60,66,74))` covers roughly 11.7% of the page — this is the module-card fill only, not a page background; do not extend it beyond individual cards. A smaller vertical gradient `linear-gradient(rgb(105,112,120), rgb(56,61,67))` at ~0.2% coverage is reserved for button faces. Each module's CRT screen is a static glowing-trace graphic (sine, Lissajous ellipse, sawtooth, radar sweep) rendered in a saturated single hue against near-black — these stand in for live oscilloscope feeds and should be treated as the system's "media" slot, always framed in a bordered black rectangle occupying 35–45% of a full-width module or the top ~50% of a half-width module. Shadows throughout are dual inset (light-on-top, dark-on-bottom) plus a soft drop shadow — this dual-inset recipe is what sells the beveled-metal read; a rebuild must keep both inset lines, not just an outer shadow.

## Motion
Motion is minimal and utilitarian: `opacity 0.35s ease` for content fades, `all 0.2s ease` as a general-purpose hover/state transition on controls, and a fast `opacity 0.1s ease-in` for near-instant toggle/press feedback. No spring, no stagger, no scroll-linked effects are evidenced — motion here is functional signal-confirmation, matching the instrument-panel metaphor, not decorative choreography.

## Guardrails
- Never round the module or button corners — this system is 0px-radius throughout; any softening breaks the rack-unit read.
- Never let the steel gradient fill the full page background — it is a module/button surface only; the cream dot-grid chassis is the true page background.
- Never substitute a sans-serif for labels or headlines — DM Mono carries the entire type system, uppercase-tracked for labels, bold for headlines.
- Keep the green and red accents rationed to LEDs, one active-channel state, and scope traces — do not spread them into large fills or backgrounds.
- Preserve the dual inset-shadow (light top-edge, dark bottom-edge) on every module and button; a single flat drop shadow loses the beveled-metal effect.
- Keep the CRT screen panels as bordered black rectangles with a single glowing colored trace — never replace them with photography or flat icons.
