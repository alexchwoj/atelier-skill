# Neurolink Hero Section

Build a full-viewport hero section for an online memorial website ("NeuroLink"). Desktop-first, fully responsive on tablet and mobile (fluid clamp() sizing, no fixed width). Use the Inter font (Google Fonts, weights 400/500/600/700) for ALL text.

═══════════════════════════════
1. PAGE / CONTAINER
═══════════════════════════════
- Container: width 100%, min-height 100vh, position relative, overflow hidden, display flex, flex-direction column
- Fallback background (behind the video): linear-gradient(180deg, #0d1017 0%, #141826 45%, #1c2233 100%)
- Base font-family: 'Inter', sans-serif; base text color #f2efe7
- Body reset: margin 0, padding 0, background #0d1017
- Links: default color #e8ddc4, hover #f5edd8, no underline

═══════════════════════════════
2. BACKGROUND VIDEO (autoplays forever — no permission, no controls, never stops)
═══════════════════════════════
- Video URL (use exactly this):
  https://cdn.sceneai.art/Hero%20section%20video%20file%20(2)/1aafa16f-30a9-48c5-8964-78cffbad914e.mp4

- Markup:
  <video autoplay muted loop playsinline preload="none"
    style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;"></video>
  (no controls attribute — the user never sees any play button or permission prompt)

- The combination autoplay + muted + playsinline is what lets browsers start the
  video automatically with zero user interaction. loop makes it repeat endlessly.

- JS (run after page load) to guarantee it always starts and never stops:
  const v = document.querySelector('video');
  v.muted = true;
  v.src = 'https://cdn.sceneai.art/Hero%20section%20video%20file%20(2)/1aafa16f-30a9-48c5-8964-78cffbad914e.mp4';
  v.play().catch(() => {});
  v.addEventListener('pause', () => v.play().catch(() => {}));

- NO blur or darkening on the top of the video — top stays completely clear;
  overlays (section 3) darken the bottom only.

═══════════════════════════════
3. OVERLAYS (bottom only)
═══════════════════════════════
- Overlay 1 (bottom fade): absolute inset 0, pointer-events none,
  background: linear-gradient(180deg, transparent 0%, transparent 42%, oklch(0.05 0.02 265 / 0.97) 100%)
- Overlay 2 (soft edge vignette): absolute inset 0, pointer-events none,
  background: radial-gradient(ellipse 90% 70% at 50% 45%, transparent 45%, oklch(0.06 0.02 265 / 0.55) 100%)
- Bottom glow: absolute, bottom -320px, left 50%, translateX(-50%), 1600×600px,
  background: radial-gradient(ellipse at center, oklch(0.55 0.05 265 / 0.35) 0%, transparent 65%), pointer-events none

═══════════════════════════════
4. FLOATING STAR DOTS (6 tiny dots, cream #e8ddc4, absolute, pointer-events none)
═══════════════════════════════
- top 14%, left 14%: 3×3px, border-radius 50%, opacity 0.5, box-shadow 0 0 6px 1px oklch(0.85 0.08 85 / 0.5)
- top 28%, right 18%: 2×2px, opacity 0.4, box-shadow 0 0 5px 1px oklch(0.85 0.08 85 / 0.4)
- top 49%, left 10%: 2×2px, opacity 0.35, no shadow
- top 60%, right 12%: 3×3px, opacity 0.3, box-shadow 0 0 6px 1px oklch(0.85 0.08 85 / 0.35)
- top 21%, left 33%: 2×2px, opacity 0.3, no shadow
- top 40%, right 33%: 2×2px, opacity 0.45, no shadow

═══════════════════════════════
5. NAVBAR
═══════════════════════════════
- position relative, z-index 2, display flex, flex-wrap wrap, align-items center, justify-content space-between, gap 16px
- padding: clamp(16px, 3vw, 32px) vertical / clamp(20px, 5.5vw, 80px) horizontal
- LEFT — logo (color #f5f2ea, rendered via currentColor), size 129×36:

<svg width="129" height="36" viewBox="0 0 161 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.949 14.4493C36.3622 19.7088 35.7552 27.386 30.7224 31.609C28.6651 33.3352 26.1803 34.2304 23.6536 34.332C22.8012 34.3662 22.1381 35.085 22.1724 35.9373C22.2065 36.7897 22.9253 37.4529 23.7777 37.4186C26.956 37.2909 30.1034 36.1609 32.708 33.9754C39.1103 28.6033 39.7721 18.9667 34.3154 12.4637C28.8588 5.96073 19.2537 4.93901 12.8514 10.3112C10.2468 12.4967 8.58745 15.4 7.90978 18.508C7.72799 19.3414 8.25624 20.1644 9.0898 20.3461C9.92324 20.5279 10.7462 19.9996 10.9279 19.1661C11.4667 16.6954 12.7798 14.4038 14.837 12.6776C19.8698 8.45456 27.5358 9.18983 31.949 14.4493ZM25.3365 25.6158C26.9702 24.245 27.1833 21.8093 25.8125 20.1756C24.4416 18.542 22.006 18.3289 20.3723 19.6997C18.7387 21.0705 18.5256 23.5062 19.8964 25.1398C21.2672 26.7735 23.7028 26.9866 25.3365 25.6158ZM26.6852 27.2503C29.2017 25.3016 29.6692 21.5171 27.5433 18.7718C25.4175 16.0264 21.6364 15.5317 19.1199 17.4803C17.957 18.3809 17.2378 19.6567 17.0014 21.0484C17.0051 21.1214 17.0037 21.1955 16.9969 21.2704C16.9189 22.1198 16.1671 22.7453 15.3177 22.6673C13.8978 22.5371 12.4666 22.9126 11.2925 23.8218C8.77601 25.7704 8.30857 29.5549 10.4344 32.3003C12.5603 35.0456 16.3413 35.5403 18.8578 33.5917C20.0208 32.6912 20.74 31.4153 20.9763 30.0236C20.9726 29.9506 20.974 29.8765 20.9809 29.8017C21.0588 28.9522 21.8106 28.3267 22.66 28.4047C24.0799 28.535 25.5111 28.1594 26.6852 27.2503ZM23.8052 31.4988C25.4883 31.3861 27.1509 30.7967 28.5766 29.6927C32.535 26.6275 33.0827 20.8798 29.9858 16.8804C26.8889 12.8811 21.1871 11.9726 17.2286 15.0378C15.6945 16.2258 14.6685 17.8285 14.1726 19.5733C12.4894 19.6859 10.8268 20.2754 9.40117 21.3793C5.44273 24.4445 4.89505 30.1922 7.99195 34.1916C11.0888 38.1909 16.7907 39.0994 20.7491 36.0342C22.2832 34.8463 23.3093 33.2435 23.8052 31.4988Z" fill="currentColor"></path>
  <path d="M53.4883 31.3584V14.4482H56.207L64.4453 26.2959H64.5156V14.4482H67.5156V31.3584H64.8203L56.5586 19.4639H56.5V31.3584H53.4883ZM75.6719 31.6045C71.9453 31.6045 69.6953 29.1318 69.6953 25.1826V25.1709C69.6953 21.2568 71.9805 18.6787 75.5312 18.6787C79.082 18.6787 81.2852 21.1748 81.2852 24.9248V25.8623H72.5898C72.6367 28.042 73.832 29.3311 75.7305 29.3311C77.1836 29.3311 78.1328 28.5576 78.4141 27.7256L78.4375 27.6436H81.168L81.1328 27.7725C80.7461 29.6826 78.918 31.6045 75.6719 31.6045ZM75.5664 20.9639C74.0195 20.9639 72.8594 22.0068 72.625 23.917H78.4492C78.2383 21.9482 77.1133 20.9639 75.5664 20.9639ZM87.4023 31.6045C84.6719 31.6045 83.1133 29.8467 83.1133 26.9639V18.9365H86.0312V26.3896C86.0312 28.1475 86.8516 29.1436 88.5156 29.1436C90.1914 29.1436 91.2578 27.9365 91.2578 26.1318V18.9365H94.1758V31.3584H91.2578V29.4131H91.1992C90.5547 30.7373 89.2773 31.6045 87.4023 31.6045ZM96.5781 31.3584V18.9365H99.4961V21.0811H99.5547C99.9414 19.5811 100.973 18.6787 102.402 18.6787C102.766 18.6787 103.105 18.7373 103.328 18.7959V21.4326C103.082 21.3389 102.637 21.2686 102.145 21.2686C100.492 21.2686 99.4961 22.3115 99.4961 24.1514V31.3584H96.5781ZM109.855 31.6045C106.199 31.6045 103.844 29.167 103.844 25.1475V25.124C103.844 21.1396 106.234 18.6787 109.844 18.6787C113.465 18.6787 115.867 21.1162 115.867 25.124V25.1475C115.867 29.1787 113.5 31.6045 109.855 31.6045ZM109.867 29.249C111.707 29.249 112.891 27.749 112.891 25.1475V25.124C112.891 22.5342 111.695 21.0459 109.844 21.0459C108.027 21.0459 106.82 22.5459 106.82 25.124V25.1475C106.82 27.7607 108.004 29.249 109.867 29.249ZM118.035 31.3584V14.4482H121.059V28.8154H128.734V31.3584H118.035ZM132.156 17.1553C131.242 17.1553 130.527 16.4287 130.527 15.5615C130.527 14.6709 131.242 13.9561 132.156 13.9561C133.07 13.9561 133.773 14.6709 133.773 15.5615C133.773 16.4287 133.07 17.1553 132.156 17.1553ZM130.691 31.3584V18.9365H133.609V31.3584H130.691ZM136.094 31.3584V18.9365H139.012V20.8818H139.07C139.715 19.5459 140.98 18.6787 142.867 18.6787C145.598 18.6787 147.156 20.4365 147.156 23.3193V31.3584H144.238V23.9053C144.238 22.1357 143.418 21.1396 141.754 21.1396C140.078 21.1396 139.012 22.3584 139.012 24.1514V31.3584H136.094ZM149.629 31.3584V14.4482H152.547V24.0928H152.605L157.246 18.9365H160.621L155.699 24.2803L160.82 31.3584H157.457L153.531 26.0146L152.547 27.0459V31.3584H149.629Z" fill="currentColor"></path>
</svg>

- RIGHT — links row: display flex, flex-wrap wrap, align-items center, gap clamp(16px, 2.8vw, 40px), font-size 13px, font-weight 400 (regular), letter-spacing 0.02em
  - Links (color #ffffff): How It Works · Tributes · Pricing · Support
  - Sign In button (glassy pill): padding 10px 26px, border-radius 999px,
    background rgba(255,255,255,0.12), backdrop-filter blur(12px),
    border 1px solid rgba(255,255,255,0.16), color #ffffff, font-size 13px, font-weight 400 (regular)
    hover: background rgba(255,255,255,0.24), border-color rgba(255,255,255,0.4)

═══════════════════════════════
6. HERO CONTENT (pushed to the BOTTOM of the section)
═══════════════════════════════
- Wrapper: position relative, z-index 2, margin-top auto, display flex, flex-direction column, align-items center, text-align center
- Padding: top clamp(140px, 22vh, 220px), sides clamp(20px, 8vw, 120px), bottom clamp(56px, 9vh, 90px)

6a. Star ornament (above the headline):
- Row: display flex, align-items center, gap 16px, margin-bottom clamp(20px, 3vh, 32px)
- Left line: 48×1px, background linear-gradient(90deg, transparent, #FFB733)
- Star glyph ✦: color #FFB733, font-size 18px
- Right line: 48×1px, background linear-gradient(90deg, #FFB733, transparent)

6b. Main headline (H1):
- Text: "Where Memories Live Forever" — all in one line (white-space: nowrap), "Live Forever" wrapped in a span colored #ffffff (same white as the rest)
- font-family Inter, font-weight 600, font-size 44px, line-height 1.12, letter-spacing -0.02em, color #f7f4ec, margin 0 0 20px

6c. Secondary text (exactly two lines, <br> after "cherished"):
  "Create a beautiful memorial to share their story, photos, cherished
  moments, and celebrate their life together."
- font-size 15px, font-weight 400 (regular), line-height 1.7, color rgba(255,255,255,0.75), margin 0 0 36px, centered

6d. Primary button (single button, centered):
- Text: "Create Memorial" + right arrow icon
- Pill: display flex, align-items center, gap 10px, padding 15px 34px, border-radius 999px
- Background #ffffff (pure white, NO glow/shadow), text color #000000 (pure black)
- font-size 15px, font-weight 400 (regular), letter-spacing 0.01em
- hover: transform translateY(-1px) only
- Arrow icon: inline SVG 18×18, viewBox "0 0 24 24", fill none, stroke currentColor, stroke-width 2, stroke-linecap round, stroke-linejoin round, paths: "M4 12h15" and "M13.5 5.5 20 12l-6.5 6.5"

Nothing else — no trust line, no scroll indicator, no secondary button, no extra content.
