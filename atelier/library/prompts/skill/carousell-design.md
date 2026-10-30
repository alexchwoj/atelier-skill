# Carousell design

> Use this skill whenever the user wants to create, design, plan, or optimize a social media carousel post. Triggers include: any mention of 'carousel', 'LinkedIn carousel', 'Instagram carousel', 'slide post', 'swipe post', 'PDF post', 'multi-image post', 'document post', or requests to create content for social media in a multi-slide format. Also trigger when the user asks to repurpose content (blog, article, thread, video) into a carousel, optimize an existing carousel, generate carousel copy/scripts, or create carousel templates. Covers all major platforms: LinkedIn, Instagram, X/Twitter, TikTok, and Facebook. Do NOT trigger for single-image posts, video editing, or presentation decks intended for live speaking (use pptx skill instead).


---

# Carousel Creation Skill

A comprehensive, data-backed skill for creating high-performing social media carousel posts across LinkedIn, Instagram, X/Twitter, TikTok, and Facebook.

All guidelines in this document are derived from analysis of 70M+ social media posts (Socialinsider 2025-2026 benchmarks), 100+ viral LinkedIn carousels (Contentdrips study), 4M+ posts (Buffer analysis), 44M feed posts (Later study), and 2.96M Instagram carousels (Socialinsider carousel-specific analysis).

---

## Decision Tree: What to Build

Before creating anything, determine the output format:

| User request | Output |
|---|---|
| "Create a carousel" (no format specified) | Ask which platform, then generate slide-by-slide copy + design brief |
| "Create a LinkedIn carousel" | Generate PDF carousel (via pptx or PDF skill) at 1080x1350px |
| "Create an Instagram carousel" | Generate individual slide images or a design brief |
| "Write carousel copy/script" | Generate text content structured as slide-by-slide copy |
| "Plan a carousel" | Generate a content outline with hook, structure, and CTA |
| "Optimize this carousel" | Audit against the rules below and suggest improvements |
| "Repurpose X into a carousel" | Extract key points, restructure into carousel framework |

If creating visual output (PDF, images), also read the `pptx` or `pdf` skill as appropriate for file generation mechanics. This skill governs content strategy, structure, and design specifications.

---

## The Core Data: Why Carousels

Reference these numbers when justifying carousel strategy or when the user asks why carousels matter. Do not recite them unprompted.

| Platform | Carousel engagement | Compared to other formats |
|---|---|---|
| LinkedIn | 6.10-6.60% avg engagement | 278% higher than video, 596% higher than text-only |
| Instagram | 0.55% avg (Socialinsider) / 3.11% (Later) | 114% higher than single image, 12% higher than Reels |
| TikTok | 6.46% engagement | 25%+ higher ratio than video posts |
| Facebook | Albums generate highest engagement | Albums outperform photos, videos, and links |

Carousels are the single highest-engagement organic format on every major platform. This is not marginal - it is decisive.

---

## Mandatory Technical Specifications

Always apply these specs. Never deviate unless the user explicitly overrides with a specific requirement.

### LinkedIn (PDF Upload)

```
Canvas:       1080 x 1350 px (4:5 portrait) — PREFERRED
Alternative:  1080 x 1080 px (1:1 square)
Format:       PDF (single file, one slide per page)
Max size:     100 MB
Max slides:   300 pages
Color mode:   RGB
Export:        High quality PDF, 150+ DPI
```

### Instagram (Individual Images)

```
Canvas:       1080 x 1350 px (4:5 portrait) — PREFERRED
Alternative:  1080 x 1080 px (1:1 square)
Format:       JPG or PNG per slide
Max slides:   20 images
Color mode:   sRGB
Video slides: Up to 60s, MP4, H.264
```

### X/Twitter (Multi-Image)

```
Canvas:       1080 x 1350 px or 1200 x 675 px (landscape)
Max images:   4 per post
Format:       JPG, PNG, GIF
```

### TikTok (Photo Carousel)

```
Canvas:       1080 x 1920 px (9:16 vertical) — PREFERRED
Alternative:  1080 x 1350 px (4:5)
Max slides:   35 images
Format:       JPG, PNG
```

**Universal default:** When platform is unspecified or cross-platform, design at **1080 x 1350 px (4:5 portrait)**. This works on LinkedIn, Instagram, and adapts well to TikTok.

---

## Optimal Slide Count

These ranges are derived from engagement data. Always target the sweet spot unless the user specifies a count.

### LinkedIn
- **Sweet spot: 6-12 slides**
- Under 5 slides: reduces reach by 35% — avoid
- 5-10 slides: increases reach by 15%
- Over 20 slides: decreases reach by 25%
- Default to **8 slides** when the user does not specify

### Instagram
- **Best performer: 10 slides** (exceeds 2% engagement — highest of any count)
- 2 slides are most common (33% share) but 10 slides outperform them significantly
- Default to **10 slides** when the user does not specify

### TikTok
- **Sweet spot: 5-10 slides**
- Vertical format demands snappier pacing

### General Rule
Never create a carousel with fewer than 4 slides. If the content cannot fill at least 4 slides (hook + 2 value + CTA), it is better suited to a single image or text post.

---

## Required Slide Structure (The Framework)

Every carousel MUST follow this structure. This is the most critical section of the entire skill. Deviations should be intentional and justified.

### Slide 1 — THE HOOK

This is the most important slide. It determines whether anyone sees the rest.

**Rules:**
- One bold, provocative, or curiosity-driven headline
- The headline occupies 60-80% of the visible slide area
- Largest text size in the entire carousel
- No logos, no introductions, no preamble, no context
- Just the hook — nothing else competes for attention
- Include a subtle "swipe" indicator (arrow or text) — this alone improves engagement from 1.8% to 2.0%, and only 5% of brands do it

**Hook formulas that work:**
- Contrarian take: "Stop doing X. Here's why."
- Surprising data: "95% of engineers fail this test"
- Promise: "7 tools that saved us 20 hours/week"
- Question: "Why does your deployment take 4 hours?"
- Challenge: "You're using AI wrong. Let me show you."

### Slide 2 — THE RE-HOOK

Instagram shows slide 2 to users who skipped slide 1. On LinkedIn, it is the first swipe. This slide must be independently compelling.

**Rules:**
- Reinforce the promise or add a second angle
- Never use slide 2 for a table of contents, agenda, or "about me"
- It should work as a standalone hook if slide 1 was skipped
- Expand on the tension introduced in slide 1

### Slides 3 to N-1 — VALUE DELIVERY

The meat of the carousel. Each slide delivers on the promise made in slide 1.

**Rules:**
- **One idea per slide.** Never combine multiple concepts on a single slide.
- The reader should absorb each slide's point in 3-5 seconds
- Use consistent formatting across all value slides
- Number or label each point for progression (1/7, Step 1, etc.)
- Vary visual treatment slightly to avoid monotony (alternate icon positions, use different accent colors per slide) while maintaining overall consistency

### Final Slide — THE CTA

Tell the reader what to do next.

**Rules:**
- Must include a specific, actionable CTA
- Include author name/handle for reshare attribution
- Optionally include a summary of key takeaways

**CTA examples by goal:**
- Engagement: "Comment your biggest challenge with X"
- Follows: "Follow [handle] for more posts like this"
- Saves: "Save this for your next project"
- Shares: "Share this with your engineering team"
- Traffic: "Link in bio for the full guide"
- DMs: "DM me 'AI' for the complete framework"

---

## Content Frameworks

Use these proven frameworks when structuring carousel content. Present them to the user as options if they provide raw content without a clear structure. Listed in order of engagement performance.

### 1. Problem - Solution - Result
```
Slide 1:  Pain point hook
Slide 2:  Why current approaches fail (re-hook)
Slide 3-4: The problem in detail / data
Slide 5-7: The solution, step by step
Slide 8-9: The result / transformation / proof
Slide 10:  CTA
```
**Best for:** Case studies, process improvements, tool recommendations, before/after stories.

### 2. Myth vs. Fact (Contrarian Take)
```
Slide 1:  Bold contrarian statement
Slide 2:  "Here's what most people get wrong"
Slides 3-8: Alternating myth → truth pairs
Slide 9:  Summary of the shift in thinking
Slide 10: CTA
```
**Best for:** Thought leadership, challenging assumptions, generating debate and comments.

### 3. Step-by-Step Tutorial
```
Slide 1:  Promise the outcome
Slide 2:  Why this matters / prerequisite context
Slides 3-8: One numbered step per slide with clear action
Slide 9:  Summary / recap
Slide 10: CTA
```
**Best for:** How-to content, technical walkthroughs, processes, recipes.

### 4. Data-Driven Insight
```
Slide 1:  Surprising statistic or finding
Slide 2:  Context — where this data comes from
Slides 3-7: Break down the data with implications
Slide 8-9: What this means for the reader
Slide 10: CTA
```
**Best for:** Research findings, industry trends, benchmark reports, survey results.

### 5. Listicle / Curated Collection
```
Slide 1:  The list promise ("7 tools every CTO needs")
Slides 2-8: One item per slide with brief explanation
Slide 9:  Recap / honorable mentions
Slide 10: CTA
```
**Best for:** Tool recommendations, resource lists, tips, collections, rankings.

### Narrative Principle

Regardless of framework, every carousel must feel like a story with tension and resolution, not a slideshow of disconnected facts. Story-driven carousels outperform purely educational ones (CXL Q3 2025 data, 100K+ posts).

Test: "If I removed the slide numbers, would a reader still want to keep swiping?"

---

## Typography Rules

These rules ensure legibility on mobile devices, where the majority of social media consumption happens.

### Minimum Font Sizes

| Element | Minimum size |
|---|---|
| Slide heading / hook text | 80px equivalent |
| Body text / supporting copy | 45px equivalent |
| Captions / source credits | 32px equivalent |
| Absolute minimum for any text | 28px |

### Text Density

- **Target: 25-50 words per slide.** This is the proven sweet spot.
- **Maximum: 75 words** (only for data-heavy slides).
- **Minimum: 5 words** (hook slides, transition slides).
- If a slide exceeds 50 words, split it into two slides.
- Text-only slides (no visual elements) reduce reach by 15-25%. Always pair text with at least one visual element (icon, background texture, accent shape, data viz).

### Font Selection

- **Headlines:** Bold sans-serif. Recommended: Inter, Plus Jakarta Sans, DM Sans, Manrope, Space Grotesk.
- **Body:** Regular weight of the same family, or complementary sans-serif.
- Maximum 2 font families per carousel.
- Never use script, decorative, or thin-weight fonts — they are illegible on mobile.

### When generating text-only copy (no visuals)

Output each slide's text in this format:

```
---
SLIDE [N] — [SLIDE ROLE]
---
[HEADLINE]

[Body text / supporting point]

[Visual note: brief description of what should accompany this text]
---
```

---

## Visual Design Principles

Apply these when generating visual output or writing design briefs.

### Background Strategy

- **Dark backgrounds** (navy, charcoal, deep blue) with light text perform strongly for tech/B2B content and stand out in white-dominated feeds
- **Solid brand-colored backgrounds** create recognition across a carousel series
- **Gradient backgrounds** are acceptable — keep them subtle (2-tone, same hue family)
- Avoid busy photo backgrounds with text overlay
- Maintain the same background style across ALL slides in a carousel

### Visual Hierarchy

- Every slide needs exactly ONE focal point — the reader's eye must land on the key message within 1 second
- Minimum 15-20% whitespace per slide (padding from edges)
- Safe zone: keep all critical content at least 80px from all edges
- Instagram bottom 120px may be obscured by UI — keep clear
- Use consistent alignment across all slides (left-aligned or center-aligned, not both)
- Color contrast ratio must be at least 4.5:1 between text and background (WCAG AA)

### Visual Elements

- Every slide should include at least one non-text visual element
- Icons: use consistent icon sets (Phosphor, Lucide, Feather) — never mix styles
- Data visualization: simple bar charts, progress indicators, large numbers — avoid complex charts
- If using photography, apply consistent treatment across all slides
- If using illustrations, use a consistent library/style

### Branding

- **Logo:** small, consistent corner placement (bottom-left or bottom-right) on every slide, or slides 1 and final only. Never the focal point.
- **Author info:** name and handle on slide 1 (bottom area) and final slide. Critical for reshare attribution.
- **Slide numbering:** optional but helpful for 8+ slides — subtle indicators like "3/10" in a corner.
- **Visual signature:** a consistent design element across all carousels (colored bar, distinctive shape, pattern) builds series recognition.

---

## Platform-Specific Adaptation Notes

Apply these adjustments when creating for a specific platform.

### LinkedIn
- Upload format is PDF — generate a single PDF file with one slide per page
- Slide 1 appears as post thumbnail — must work at reduced size
- LinkedIn crops preview to roughly square — keep hook text in center-upper portion
- Professional, clean aesthetic outperforms playful/consumer styles
- Dark-background carousels look good in both light and dark mode
- Accompany the PDF with a text caption (the LinkedIn post body) — first 2-3 lines are visible before "see more"

### Instagram
- Each slide is a separate image file, not a PDF
- Slide 2 is shown automatically to users who skip slide 1 — make it independently compelling
- Grid thumbnail shows only slide 1 as a square crop — design accordingly
- Hashtags go in the caption, never on the slides
- Mixing image + video slides in one carousel can boost engagement
- Best posting time: 5 AM Tuesdays in audience's local timezone (Later, 6M posts)

### X/Twitter
- Limited to 4 images — every image must be standalone and high-impact
- Landscape (1200 x 675px) works better for X's card layout
- Text on images must be larger than on other platforms due to smaller previews
- Threads with carousel images at key points outperform pure text threads

### TikTok
- Full vertical (1080 x 1920px, 9:16) is strongly preferred
- Bolder colors, more dynamic layouts, less corporate than LinkedIn
- Music can be added to photo carousels — suggest audio pairing if relevant
- Faster pacing — less text per slide, more visual impact

---

## Content Repurposing Pipeline

When the user provides existing content to turn into a carousel, follow this process:

### From a blog post or article:
1. Identify the single strongest hook (surprising stat, contrarian claim, or bold promise)
2. Extract 5-8 key points that can each stand alone on one slide
3. Remove all filler, transitions, and hedging language
4. Restructure using the best-fit framework from Section "Content Frameworks"
5. Write a specific CTA relevant to the original content
6. Each slide point should be rewritten to be punchy and scannable — not copied verbatim

### From a Twitter/X thread:
1. Use the thread's first tweet as the hook (or improve it)
2. Each tweet becomes approximately one slide
3. Consolidate tweets that split a single idea
4. Add visual direction notes for each slide
5. Strengthen the CTA beyond "follow me"

### From a video or talk:
1. Extract the 3-5 most quotable or insightful moments
2. Lead with the most surprising or contrarian point as the hook
3. Structure as a highlight reel, not a full summary
4. Include "Watch the full talk: [link]" as part of the CTA

### From raw data or research:
1. Find the single most surprising finding — that is slide 1
2. Provide context: what was studied, sample size, timeframe (slide 2)
3. Each subsequent slide presents one finding with a brief "so what" implication
4. End with actionable takeaways + CTA

---

## Carousel Copy: Writing Rules

When generating the text content for carousel slides, follow these writing principles:

### Hook Slide Writing
- Maximum 12 words for the main headline
- Use power words: "stop", "never", "secret", "mistake", "proven", "data shows"
- Create an information gap — promise value without delivering it on slide 1
- Avoid clickbait that the content cannot deliver on

### Value Slide Writing
- Lead each slide with the key takeaway in bold
- Support with 1-2 sentences of context or evidence
- Use concrete numbers over vague claims ("saved 20 hours/week" not "saved time")
- Write in second person ("you") or imperative ("do this") — never third person
- Short sentences. Fragments are fine. Brevity wins.

### CTA Writing
- Be specific: "Comment your top tool" not "Engage below"
- Give a reason: "Save this — you'll need it for your next sprint"
- One primary CTA per carousel (a secondary is acceptable on the same slide)

### Tone Calibration by Platform
- **LinkedIn:** authoritative but approachable. Data-driven. First person is fine. Professional but not corporate.
- **Instagram:** conversational, energetic. Shorter sentences. More emoji acceptable (but not on the slides — only in the caption).
- **X/Twitter:** punchy, direct, sometimes provocative. Compressed language.
- **TikTok:** casual, relatable, trend-aware. Gen Z vocabulary acceptable.

---

## Caption / Post Body Guidelines

The carousel is only half the post. The caption (post body text) that accompanies it matters.

### LinkedIn Caption Structure
```
[Hook line — mirrors or complements slide 1. First 2-3 lines visible before "see more"]

[1-2 sentences of context or personal angle]

[Key takeaway or reason to swipe through]

[CTA — same as or complementary to the carousel's final slide CTA]

[Hashtags — 3-5 relevant hashtags, placed at the end]
```

### Instagram Caption Structure
```
[Hook line — stop the scroll even for people who see caption first]

[Brief context or personal story]

[CTA matching the carousel's final slide]

.
.
.

[Hashtags — up to 30 but 5-15 targeted ones perform better]
```

---

## Pre-Publication Audit Checklist

Run this checklist against every carousel before marking it complete. If creating visual output, verify visually. If creating copy-only output, note which items are for the designer to verify.

### Dimensions & Technical
- [ ] Canvas size matches platform spec (default: 1080 x 1350 px)
- [ ] Exported in correct format (PDF for LinkedIn, individual images for Instagram)
- [ ] All text legible at mobile viewing size (simulate: zoom to 40% on desktop)
- [ ] Safe zones clear: no critical content within 80px of edges
- [ ] File size under platform limits

### Content & Structure
- [ ] Slide 1 has a strong, scroll-stopping hook
- [ ] Slide 2 works independently as a re-hook
- [ ] Each slide delivers exactly one idea
- [ ] Text density is 25-50 words per slide on average
- [ ] Final slide has a clear, specific CTA
- [ ] Total slide count is in the optimal range (6-12 LinkedIn, up to 10 Instagram)
- [ ] Content follows one of the five proven frameworks
- [ ] Narrative thread connects all slides — swiping feels natural

### Visual Design
- [ ] Font sizes meet minimums (80px headings, 45px body)
- [ ] Maximum 2 font families
- [ ] Color contrast at least 4.5:1 for all text
- [ ] Every slide has at least one visual element
- [ ] Consistent alignment, spacing, and visual treatment throughout
- [ ] Background style consistent across all slides

### Branding
- [ ] Logo in consistent position (subtle, not dominant)
- [ ] Author name/handle on slides 1 and final
- [ ] Brand colors used as accents
- [ ] Carousel is recognizable as part of the brand's series

### Caption
- [ ] Post body text written and ready
- [ ] Caption hook complements (not duplicates) slide 1
- [ ] Hashtags selected and placed at end
- [ ] CTA in caption aligns with carousel CTA

---

## Example Output: Slide-by-Slide Copy

When the user asks for carousel content without specifying visual output, deliver in this format:

```
CAROUSEL: [Title]
Platform: [LinkedIn / Instagram / etc.]
Framework: [Problem-Solution-Result / Myth vs Fact / etc.]
Slides: [count]

===========================
SLIDE 1 — HOOK
===========================
[Headline text]

Visual: [Brief design direction]

===========================
SLIDE 2 — RE-HOOK
===========================
[Headline or subheadline]
[1-2 supporting sentences]

Visual: [Brief design direction]

===========================
SLIDE 3 — VALUE
===========================
[Bold key point]
[1-2 supporting sentences]

Visual: [Brief design direction]

[... repeat for each slide ...]

===========================
SLIDE [N] — CTA
===========================
[CTA headline]
[Supporting line]
[Author name / handle]

Visual: [Brief design direction]

===========================
CAPTION
===========================
[Full post body text including hashtags]
```

---

## Common Mistakes to Catch and Fix

When auditing carousels (yours or the user's), watch for these frequent errors:

1. **Weak hook:** Slide 1 is descriptive instead of provocative. Fix: rewrite as a question, contrarian take, or surprising stat.
2. **Wasted slide 2:** Used for "about me", agenda, or table of contents. Fix: make it a second hook angle.
3. **Multiple ideas per slide:** A slide tries to cover 2+ concepts. Fix: split into separate slides.
4. **Text walls:** Over 50 words on a slide. Fix: cut ruthlessly or split.
5. **No visual elements:** Text-only slides with no icons, images, or design elements. Fix: add at least one visual per slide.
6. **Tiny text:** Body text below 45px equivalent. Fix: increase size, reduce word count.
7. **Missing CTA:** Carousel ends without telling the reader what to do. Fix: add a final CTA slide.
8. **Inconsistent design:** Slides look like they came from different carousels. Fix: unify background, fonts, spacing.
9. **Too few slides:** Under 5 slides hurts reach on LinkedIn. Fix: expand content or split one idea into multiple slides.
10. **Corporate jargon hook:** Slide 1 reads like a press release. Fix: rewrite in human language with a specific, concrete claim.

---

Now help me design Carousell by asking some question, and then start designing;

Make sure you use custom DeviceMode and custom width & height based on Carousell you are designing
