# harden

Make an interface survive real inputs, errors, languages and networks. A design that only works with perfect data is not finished.

## Stress it

- **Text:** very long names and titles, one character, empty, emoji, accents, RTL, CJK.
- **Numbers:** zero, negatives, millions, billions, many decimals, different locales.
- **Volume:** no items, one item, 1,000+ items, 50+ options in a select.
- **Network:** offline, slow (throttle), timeouts, partial failures.
- **API:** 400 validation, 401 signed out, 403 no permission, 404 gone, 409 conflict, 429 rate limit, 500.
- **People:** double clicks, back button mid-flow, two tabs, pasting, autofill, keyboard only.

## Fix

**Overflow and wrapping**
```css
.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.wrap { overflow-wrap: break-word; hyphens: auto; }
.flex-child, .grid-child { min-width: 0; }
```
Truncated text exposes the full value (a `title`, a tooltip, or an expand). Containers grow with content; no fixed widths on text.

**Internationalisation**
- Budget 30 to 40% extra length (German, Finnish); test the longest language.
- Logical properties (`margin-inline-start`, `padding-inline`, `inset-inline-end`) and `dir="rtl"` support; mirror directional icons.
- `Intl.NumberFormat`, `Intl.DateTimeFormat`, `Intl.PluralRules` (or the project's i18n library) instead of hand-built strings: `new Intl.NumberFormat(locale, { style: 'currency', currency }).format(v)`.
- UTF-8 everywhere. For Arabic-script languages: keep the zero-width non-joiner, accept both Arabic and Persian forms of yeh and kaf in search, use locale digits and calendars.

**Errors**
- Inline, next to the cause, saying what happened and what to do, keeping the user's input. Network errors offer a retry. Map each status to a human message and a next step (sign in again, ask for access, try later).
- Never blame the user; never show raw error codes alone.

**States**
- Every data region: loading (a skeleton shaped like the content, shown after 150 to 300ms), empty (what goes here and one action that fills it), error (what broke, what to do), full. Search with no results suggests the next search.
- Large data: pagination or virtual scrolling, search and filters; never render 10,000 rows.

**Concurrency**
- Disable or debounce submit while a request runs; idempotent actions; optimistic updates with rollback and a visible undo; handle stale data and conflicts.

**Degrading gracefully**
- Core content readable without JavaScript; images with `alt`; features that need a modern API behind a check with a fallback.

## Check

Run the stress list again on every screen touched. Long and empty content at 375 and 1440, keyboard only, offline, and the slowest network profile.
