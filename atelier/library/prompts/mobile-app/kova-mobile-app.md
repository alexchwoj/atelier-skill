# Kova Mobile App

Design Prompt — "Kova" Dual Mobile Onboarding Screens (pixel-fidelity recreation)

Create a single page presenting two iPhone-style mobile screens side by side, centered in the viewport.

Page canvas: White base (#ffffff) with two soft radial gradient glows: pink rgba(236,72,153,0.14), 1000×700px at 15% 15%, fading out at 62%; and violet rgba(124,58,237,0.18), 1000×700px at 88% 85%, fading at 62%. Layout container: flexbox row, gap: 40px, align-items: center, justify-content: center, padding: 40px, min-height: 100vh — both phones perfectly centered. Typeface: -apple-system / "SF Pro Text" / Helvetica Neue stack throughout. Default link color #ffffff, hover #e9d5ff.

Phone shells (both): 300×650px, border-radius 44px, overflow hidden, background #000000, white text, flex column. Each contains a full-bleed background video, absolutely positioned (inset 0, 100%×100%, object-fit: cover), autoplaying, looping, muted, playsInline, with JS that every 800ms re-mutes and calls .play() on any paused video so autoplay never stalls.

Screen 1 video: https://cdn.sceneai.art/Background%20Videos/1d917612-01e5-49cf-a2f7-4bf518790efd.mp4
Screen 2 video: https://cdn.sceneai.art/Background%20Videos/22ea08d0-2933-4a84-8fb6-f90557a306d8.mp4
Above each video sits a readability scrim (absolute, inset 0): screen 1 — linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.75) 100%); screen 2 — linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.78) 100%). All content is position: relative so it stacks above video and scrim. A flexible spacer pushes everything to the bottom of each screen.

Screen 1 — Welcome. Bottom-anchored content:

Headline "Turn your ideas into cinematic scenes" — 24px, weight 500, line-height 1.3, letter-spacing −0.3px, centered, white, side padding 30px.
CTA container: full width, padding 28px 24px 26px.
Button "Start creating" — full-width, 56px tall, border-radius 16px, no border, background linear-gradient(120deg, #ffffff 0%, #e9d5ff 55%, #c084fc 100%) (white → lavender → light purple), text #2e1065 (deep violet), 13px, weight 600, centered; hover brightens 5%.
Screen 2 — Style picker onboarding. Bottom-anchored column, centered items, gap 14px, padding 0 24px 26px:

Headline "Every scene, styled the way you imagine" — identical type to screen 1 (24px, weight 500, line-height 1.3, letter-spacing −0.3px, centered, white); wraps to two lines at this width.
Subtitle "Pick a style, drop a prompt, and Kova renders the rest." — 14px, line-height 1.45, centered, #f5f5f4, max-width 230px.
Button row (flex, gap 12px, full width, margin-top 8px), both 52px tall, border-radius 16px, no border, 13px weight 600, equal flex widths:
"Explore styles": background linear-gradient(120deg, #ffffff, #d8b4fe), text #2e1065; hover brightness 1.1.
"Join Kova": background linear-gradient(120deg, #8b5cf6, #6d28d9) (violet), white text; hover brightness 1.15.
Link "Already with Kova? Log in" — 12px, weight 500, white, no underline, margin-top 4px, centered.
Hierarchy & behavior: No status bars, no nav. The only motion is the looping background videos — no scroll animation; the page is a static centered composition. Fixed phone dimensions (not responsive); the outer flex container centers them at any viewport size. Corners: phones 44px, all buttons 16px, nothing else rounded. No shadows or borders anywhere; the scrims are the only overlays. Visual hierarchy per screen: video imagery → headline → (subtitle) → gradient CTA(s) → small text link.
