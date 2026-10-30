# Type: choosing faces

For the Design and Studio routes, or whenever you pick faces yourself. On the Prompt route the prompt's fonts stay. In an existing project its fonts stay unless the user asks for a change.

## The rule

One display face and one body face, or one family for both; an optional outlier with exactly one role (wordmark, code, a headline figure). Free faces unless the user has a licence; variable fonts preferred.

**Beauty first.** The face must look excellent at the headline's size and weight: even colour, good spacing, a full set of weights, real italics if the design uses them. A well-made familiar face set with care beats an unusual face that looks clumsy. Most of the character comes from *how* a face is set (scale, weight, tracking, case, line breaks, italics used as a second voice), not from how rare it is.

**By mode:** Sell and Show surfaces want faces with a point of view. Work and Read surfaces are well served by a workhorse UI face or a system stack; their character comes from scale, weight and spacing.

## 1. Start from proven pairings

The prompt library holds about a hundred pairings that already produced good pages, with examples of how they were sized and spaced:

```bash
node scripts/fonts.mjs --pairings                          # most used first
node scripts/fonts.mjs --pairings --mood editorial          # filter by mood
node scripts/fonts.mjs --pairings --display serif --theme dark
```

Pick the pairing whose examples look closest to the concept, open one example prompt, and copy its type treatment (sizes, weights, tracking, line-height, where the italic is used). A pairing used in the library is a safe, strong default; changing one of the two faces to fit the concept better is a good move; inventing a pairing from nothing is the last resort.

## 2. Then adjust to the concept

When the concept asks for a different voice (a condensed poster face, a slab, a rounded friendly sans), find candidates by shape and keep the library pairing's body face if it still fits.

## Find faces by shape

```bash
node scripts/fonts.mjs --category serif --contrast high --xheight short        # Didone-like display serifs
node scripts/fonts.mjs --category sans --width narrow --weight heavy           # poster grotesks
node scripts/fonts.mjs --category sans --width wide --contrast low             # wide, even sans
node scripts/fonts.mjs --like "Playfair Display"                               # alternatives to an overused face
node scripts/fonts.mjs --like "Söhne"                                          # (only if it is in Google Fonts; otherwise describe the shape)
node scripts/fonts.mjs --info "Gloock"
```

The index measures about 1,800 Google Fonts families (width, x-height, weight, stroke contrast, descender length). Results put faces proven in the library (★) and families with a full range of styles first; one-style novelty faces sink. The plainest system-style defaults and faces built for non-Latin scripts are hidden unless `--all`. A brand file in `library/designs/` that names a proprietary face: describe its shape with the traits and pick the nearest free face.

**Never take a face just because a search returned it.** Look at it set as the real headline, compare two or three, and reject anything with awkward spacing, a thin set of weights, gimmicky details or poor italics.

## Plain defaults

Roboto, Open Sans, Lato, Arial, Helvetica, Montserrat, Raleway, Nunito, Source Sans and Poppins as the display face on a Sell or Show page read as no decision at all. They are fine as body faces when a library prompt uses them, on Work and Read screens, or when the project already has them. Inter and Inter Tight are excellent body and UI faces; as a display face they need confident setting (tight tracking, a real weight contrast) to carry a page.

## Sources

- **Google Fonts**: the default.
- **Fontshare** (Indian Type Foundry): free for commercial use, foundry grade. `<link href="https://api.fontshare.com/v2/css?f[]=<family>@<weights>&display=swap" rel="stylesheet">`.
- **A foundry** (Klim, Pangram Pangram, Production Type, Commercial Type) only with a confirmed licence.

## Display faces

| Class | Faces (source) |
| --- | --- |
| Roman serif | EB Garamond, Cardo, Castoro, Piazzolla, Alegreya, Marcellus (Google); Gambetta, Recia (Fontshare) |
| High-contrast serif | Gloock, Libre Bodoni, Abril Fatface, Rozha One, Besley, Bodoni Moda (Google); Erode, Melodrama (Fontshare) |
| Slab serif | Arvo, Hepta Slab, Domine, Alfa Slab One, Solway (Google); Bespoke Slab (Fontshare) |
| Grotesk sans | Rethink Sans, Reddit Sans, Albert Sans, Schibsted Grotesk, Bricolage Grotesque (Google); Clash Grotesk, Supreme, General Sans (Fontshare) |
| Geometric sans | Lexend, League Spartan, Afacad, Outfit, Urbanist (Google); Satoshi, Technor, Excon (Fontshare) |
| Rounded sans | Inclusive Sans, Varela Round, Nunito Sans at 700 with a reason (Google); Chubbo, Comico (Fontshare) |
| Condensed and heavy | Teko, Tektur, Michroma, Antonio, Anton, Big Shoulders Display (Google); Clash Display, Panchang, Khand, Stardom, Array (Fontshare) |
| Mono as display | Space Mono, Fragment Mono, Red Hat Mono, Spline Sans Mono, Sometype Mono (Google) |
| Pixel | Press Start 2P, VT323, Pixelify Sans, Tiny5, DotGothic16, Silkscreen (Google) |
| Handwritten | Shantell Sans, Caveat, Gochi Hand, Reenie Beanie (Google) |

## Body faces

- **Sans:** Hanken Grotesk, IBM Plex Sans, Figtree, Onest, Sofia Sans, Golos Text, Karla, Chivo, Albert Sans, Public Sans, Archivo, Manrope (Google); Switzer, General Sans, Satoshi (Fontshare).
- **Serif:** Newsreader, Source Serif 4, Literata, Spectral, Crimson Pro, EB Garamond (Google); Sentient (Fontshare).
- **Mono** (code, figures, measurements): Geist Mono, JetBrains Mono, IBM Plex Mono, DM Mono, Fira Code, Azeret Mono (Google).

## More pairings that work

Beyond the library's (`--pairings`), starting points, not a menu:

- Instrument Serif (italic as a second voice) + Inter: cinematic, premium product, the library's most used pairing.
- Fraunces or Newsreader + Inter Tight: warm editorial, food, craft, publishing.
- Playfair Display + Inter: fashion, hospitality, events.
- Anton + Archivo: sport, posters, loud retail.
- Gloock + Hanken Grotesk: editorial, confident.
- Clash Display + Switzer: bold product, agency.
- Bricolage Grotesque + Figtree: friendly, contemporary.
- Newsreader (display cut) + IBM Plex Sans: publishing, research.
- Anton + Onest: sport, loud retail.
- Satoshi throughout, Fragment Mono for figures: quiet software.
- EB Garamond + Public Sans: heritage, institutions.
- Space Mono + Karla: technical, indie tools.

## The wordmark

The wordmark in nav and footer may take a different face from the body, and on tone-rich pages it should; a wordmark set in the body face at 600 is the un-designed default. Collapse to one family only when the body voice is the brand (a letter, a manifesto, a document).

## Loading

- One `<link>` per source with only the weights used and `display=swap`; `<link rel="preconnect">` to the host first. In Next.js prefer `next/font`.
- Self-hosted `@font-face` carries `font-display: swap` and a metric-matched fallback (`size-adjust`, `ascent-override`) so the swap does not shift the fold.
- `font-synthesis: none`; load the italic if a head uses one.
