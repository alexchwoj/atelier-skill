# InsidePOV 3D Video Carousel Code

> Create a complete Next.js React TypeScript component called "InsidePOV 3D Video Carousel" with the following specifications: CORE DESIGN: - Inside perspective 3D video carousel where user stands at center looking outward at videos arranged on a large outer circle - NOT a typical ring carousel with cards overlapping in center - completely different POV - PC display: exactly 7 visible cards (center 1 + left 3 + right 3) - Central card appears farthest/smallest/deepest - Left/right outer cards appear closer/larger/in foreground - Cinematic tunnel-like perspective with converging depth TECHNICAL REQUIREMENTS: - Next.js App Router with "use client" directive - React + TypeScript with CSS Modules - No external animation libraries (no framer-motion, GSAP, jQuery) - CSS 3D transforms with preserve-3d CSS STRUCTURE (InsidePovCarousel.module.css): .carousel with CSS variables:   --pov-perspective: 1200px (PC)   --pov-radius: 640px   --pov-card-w: 220px   --pov-card-h: 390px   --pov-step: 25.714285deg (360/14)   --pov-rotation: 0deg   --pov-tilt-x: 0deg   --pov-card-radius: 18px .stage with perspective and preserve-3d .world with rotateY and rotateX transforms .card positioned absolute at center, using:   transform: translate(-50%, -50%) rotateY(calc(var(--i) * var(--pov-step))) translateZ(calc(var(--pov-radius) * -1))    Key: translateZ is NEGATIVE (-radius) to place cards outside/behind viewpoint CARD STYLING: - Rounded corners (18px) - Subtle shadows and inner light effects - Backface-visibility hidden - Glass-like overlays with gradients - Video fills card with object-fit: cover INTERACTIVITY: - requestAnimationFrame-based auto-rotation (0.04 deg/frame) - Pointer drag interaction (0.28 sensitivity) - Inertia momentum (0.94 friction) - Hover pauses auto-rotation - Touch/swipe support with touch-action: none - Keyboard: Arrow keys for manual rotation, Space to toggle autoRotate VISIBILITY: - Video cards ONLY displayed - NO UI buttons, controls, or labels - NO Previous/Next buttons - NO Play/Pause button - NO center marker dot - NO field-of-view guide lines - NO outer circle guides - NO drag/swipe instruction text - NO hint text of any kind - Clean minimalist display COMPONENT PROPS: type VideoItem = { src: string; poster?: string; alt?: string } type InsidePovCarouselProps = {   videos: VideoItem[];   autoRotate?: boolean (default true);   interactive?: boolean (default true);   className?: string; } HTML STRUCTURE: <section className={carouselClassName} ref={rootRef} tabIndex={interactive ? 0 : -1}>   <div className={styles.stage}>     <div className={styles.world}>       {videos.map((video, index) => (         <figure className={styles.card} style={{ "--i": index } as React.CSSProperties}>           <video src={video.src} poster={video.poster} muted loop playsInline />         </figure>       ))}     </div>   </div> </section> DEPTH PERCEPTION: - Center card: smallest scale, most faded brightness, feels deepest - Adjacent cards: medium scale, normal opacity - Outer visible cards: largest scale, brightest - All connected naturally via 3D perspective math - No jarring pop-in effects BACKGROUND: - Subtle radial gradient from light center to slightly darker edges - Soft directional lighting effect - Overall warm neutral tone (beige/cream) - Inset and drop shadows for subtle dimension RESPONSIVE: - Mobile (max-width: 760px):   --pov-perspective: 760px   --pov-radius: 420px   --pov-card-w: 156px   --pov-card-h: 278px   --pov-step: 25.714285deg (same, 14 cards) ANIMATION: - No CSS animation - use requestAnimationFrame - Manual drag: update rotation on pointermove - Momentum: apply velocity decay after pointerup - Auto-rotate: continuous +0.04 per frame when enabled - Smooth variable updates via CSS custom properties BROWSER COMPAT: - Modern browsers with CSS 3D support - Graceful fallback for reduced-motion - Touch event handling with pointerEvents API - Backface-visibility for performance EXAMPLE USAGE (app/page.tsx): import InsidePovCarousel from "@/components/InsidePovCarousel"; const videos = Array.from({ length: 14 }, (_, i) => ({   src: `/videos/demo-${i + 1}.mp4`,   poster: `/videos/poster-${i + 1}.jpg`,   alt: `Video ${i + 1}` })); export default function Page() {   return (     <main>       <InsidePovCarousel videos={videos} autoRotate interactive />     </main>   ); } DELIVERABLES: 1. Complete InsidePovCarousel.tsx with all hooks and state management 2. Complete InsidePovCarousel.module.css with all selectors and responsive rules 3. Usage example showing proper integration 4. Commentary on key implementation details OUTPUT FORMAT: Return complete, production-ready code with proper TypeScript types, error handling, cleanup, and performance optimization. Code must be ready to integrate into Next.js project immediately.

- Source: https://superdesign.dev/library/insidepov-3d-video-carousel-code
- Category: carousel
- Tags: -
- Preview: https://p.superdesign.dev/draft/2fd47bc9-efa7-4f03-bc39-97b9522cf0e4
- Thumbnail: https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/2fd47bc9-efa7-4f03-bc39-97b9522cf0e4/1783488273215.png
- Author: オッシーKUN

---

Create a complete Next.js React TypeScript component called "InsidePOV 3D Video Carousel" with the following specifications:

CORE DESIGN:

- Inside perspective 3D video carousel where user stands at center looking outward at videos arranged on a large outer circle
- NOT a typical ring carousel with cards overlapping in center - completely different POV
- PC display: exactly 7 visible cards (center 1 + left 3 + right 3)
- Central card appears farthest/smallest/deepest
- Left/right outer cards appear closer/larger/in foreground
- Cinematic tunnel-like perspective with converging depth

TECHNICAL REQUIREMENTS:

- Next.js App Router with "use client" directive
- React + TypeScript with CSS Modules
- No external animation libraries (no framer-motion, GSAP, jQuery)
- CSS 3D transforms with preserve-3d

CSS STRUCTURE (InsidePovCarousel.module.css):\
.carousel with CSS variables:\
--pov-perspective: 1200px (PC)\
--pov-radius: 640px\
--pov-card-w: 220px\
--pov-card-h: 390px\
--pov-step: 25.714285deg (360/14)\
--pov-rotation: 0deg\
--pov-tilt-x: 0deg\
--pov-card-radius: 18px

.stage with perspective and preserve-3d\
.world with rotateY and rotateX transforms\
.card positioned absolute at center, using:\
transform: translate(-50%, -50%) rotateY(calc(var(--i) * var(--pov-step))) translateZ(calc(var(--pov-radius) * -1))

Key: translateZ is NEGATIVE (-radius) to place cards outside/behind viewpoint

CARD STYLING:

- Rounded corners (18px)
- Subtle shadows and inner light effects
- Backface-visibility hidden
- Glass-like overlays with gradients
- Video fills card with object-fit: cover

INTERACTIVITY:

- requestAnimationFrame-based auto-rotation (0.04 deg/frame)
- Pointer drag interaction (0.28 sensitivity)
- Inertia momentum (0.94 friction)
- Hover pauses auto-rotation
- Touch/swipe support with touch-action: none
- Keyboard: Arrow keys for manual rotation, Space to toggle autoRotate

VISIBILITY:

- Video cards ONLY displayed
- NO UI buttons, controls, or labels
- NO Previous/Next buttons
- NO Play/Pause button
- NO center marker dot
- NO field-of-view guide lines
- NO outer circle guides
- NO drag/swipe instruction text
- NO hint text of any kind
- Clean minimalist display

COMPONENT PROPS:\
type VideoItem = { src: string; poster?: string; alt?: string }\
type InsidePovCarouselProps = {\
videos: VideoItem[];\
autoRotate?: boolean (default true);\
interactive?: boolean (default true);\
className?: string;\
}

HTML STRUCTURE:\
<section className={carouselClassName} ref={rootRef} tabIndex={interactive ? 0 : -1}>\
<div className={styles.stage}>\
<div className={styles.world}>\
{videos.map((video, index) => (\
<figure className={styles.card} style={{ "--i": index } as React.CSSProperties}>\
<video src={video.src} poster={video.poster} muted loop playsInline />\
</figure>\
))}\
</div>\
</div>\
</section>

DEPTH PERCEPTION:

- Center card: smallest scale, most faded brightness, feels deepest
- Adjacent cards: medium scale, normal opacity
- Outer visible cards: largest scale, brightest
- All connected naturally via 3D perspective math
- No jarring pop-in effects

BACKGROUND:

- Subtle radial gradient from light center to slightly darker edges
- Soft directional lighting effect
- Overall warm neutral tone (beige/cream)
- Inset and drop shadows for subtle dimension

RESPONSIVE:

- Mobile (max-width: 760px):\
  --pov-perspective: 760px\
  --pov-radius: 420px\
  --pov-card-w: 156px\
  --pov-card-h: 278px\
  --pov-step: 25.714285deg (same, 14 cards)

ANIMATION:

- No CSS animation - use requestAnimationFrame
- Manual drag: update rotation on pointermove
- Momentum: apply velocity decay after pointerup
- Auto-rotate: continuous +0.04 per frame when enabled
- Smooth variable updates via CSS custom properties

BROWSER COMPAT:

- Modern browsers with CSS 3D support
- Graceful fallback for reduced-motion
- Touch event handling with pointerEvents API
- Backface-visibility for performance

EXAMPLE USAGE (app/page.tsx):\
import InsidePovCarousel from "@/components/InsidePovCarousel";

const videos = Array.from({ length: 14 }, (_, i) => ({\
src: `/videos/demo-${i + 1}.mp4`,\
poster: `/videos/poster-${i + 1}.jpg`,\
alt: `Video ${i + 1}`\
}));

export default function Page() {\
return (\
<main>\
<InsidePovCarousel videos={videos} autoRotate interactive />\
</main>\
);\
}

DELIVERABLES:

1. Complete InsidePovCarousel.tsx with all hooks and state management
2. Complete InsidePovCarousel.module.css with all selectors and responsive rules
3. Usage example showing proper integration
4. Commentary on key implementation details

OUTPUT FORMAT:\
Return complete, production-ready code with proper TypeScript types, error handling, cleanup, and performance optimization. Code must be ready to integrate into Next.js project immediately.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>InsidePOV 3D Video Carousel</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <link rel="preconnect" href="https://api.fontshare.com" />
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=cabinet-grotesk@600,700&display=swap" rel="stylesheet" />
</head>
<body>
  <div class="min-h-screen bg-stone-950 text-stone-100 font-[Satoshi]">
    <main class="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <section class="mb-10 rounded-[2rem] border border-stone-800 bg-stone-900 p-6 shadow-2xl shadow-black/30 lg:p-8">
        <div class="mb-7 flex flex-col gap-4 border-b border-stone-800 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p class="mb-2 inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">Next.js / React / TypeScript</p>
            <h1 class="font-[Cabinet_Grotesk] text-3xl font-bold tracking-tight text-white lg:text-5xl">InsidePOV 3D Video Carousel</h1>
            <p class="mt-3 max-w-3xl text-sm leading-6 text-stone-400 lg:text-base">Complete production-ready implementation. It renders only the 3D video cards: no controls, no labels, no guide lines, no center marker.</p>
          </div>
          <div class="flex items-center gap-2 text-sm text-stone-400">
            <iconify-icon icon="lucide:box" class="text-lg text-orange-400"></iconify-icon>
            <span>CSS Modules + requestAnimationFrame</span>
          </div>
        </div>

        <div class="overflow-hidden rounded-[2rem] border border-stone-200 bg-[#f3efea] p-4 shadow-inner lg:p-6">
          <div class="relative grid h-[520px] place-items-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,255,255,.86),rgba(255,255,255,.28)_42%,rgba(255,255,255,0)_72%),linear-gradient(180deg,#f6f4f1_0%,#ece7e0_100%)]">
            <div class="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(80,60,40,.12)_1px,transparent_0)] [background-size:18px_18px]"></div>
            <div class="relative h-0 w-0 [perspective:1200px]">
              <div class="relative h-0 w-0 [transform-style:preserve-3d]">
                <div class="absolute left-1/2 top-1/2 h-[390px] w-[220px] overflow-hidden rounded-[18px] bg-stone-300 shadow-[0_28px_70px_rgba(30,22,16,.22),0_8px_18px_rgba(30,22,16,.14)] [transform:translate(-50%,-50%)_rotateY(-77.142855deg)_translateZ(-640px)]"><img class="h-full w-full object-cover brightness-110" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=900&auto=format&fit=crop" alt="" /></div>
                <div class="absolute left-1/2 top-1/2 h-[390px] w-[220px] overflow-hidden rounded-[18px] bg-stone-300 shadow-[0_28px_70px_rgba(30,22,16,.22),0_8px_18px_rgba(30,22,16,.14)] [transform:translate(-50%,-50%)_rotateY(-51.42857deg)_translateZ(-640px)]"><img class="h-full w-full object-cover brightness-105" src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=900&auto=format&fit=crop" alt="" /></div>
                <div class="absolute left-1/2 top-1/2 h-[390px] w-[220px] overflow-hidden rounded-[18px] bg-stone-300 shadow-[0_28px_70px_rgba(30,22,16,.22),0_8px_18px_rgba(30,22,16,.14)] [transform:translate(-50%,-50%)_rotateY(-25.714285deg)_translateZ(-640px)]"><img class="h-full w-full object-cover brightness-95" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop" alt="" /></div>
                <div class="absolute left-1/2 top-1/2 h-[390px] w-[220px] overflow-hidden rounded-[18px] bg-stone-300 shadow-[0_28px_70px_rgba(30,22,16,.22),0_8px_18px_rgba(30,22,16,.14)] [transform:translate(-50%,-50%)_rotateY(0deg)_translateZ(-640px)]"><img class="h-full w-full object-cover brightness-90" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop" alt="" /></div>
                <div class="absolute left-1/2 top-1/2 h-[390px] w-[220px] overflow-hidden rounded-[18px] bg-stone-300 shadow-[0_28px_70px_rgba(30,22,16,.22),0_8px_18px_rgba(30,22,16,.14)] [transform:translate(-50%,-50%)_rotateY(25.714285deg)_translateZ(-640px)]"><img class="h-full w-full object-cover brightness-95" src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=900&auto=format&fit=crop" alt="" /></div>
                <div class="absolute left-1/2 top-1/2 h-[390px] w-[220px] overflow-hidden rounded-[18px] bg-stone-300 shadow-[0_28px_70px_rgba(30,22,16,.22),0_8px_18px_rgba(30,22,16,.14)] [transform:translate(-50%,-50%)_rotateY(51.42857deg)_translateZ(-640px)]"><img class="h-full w-full object-cover brightness-105" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop" alt="" /></div>
                <div class="absolute left-1/2 top-1/2 h-[390px] w-[220px] overflow-hidden rounded-[18px] bg-stone-300 shadow-[0_28px_70px_rgba(30,22,16,.22),0_8px_18px_rgba(30,22,16,.14)] [transform:translate(-50%,-50%)_rotateY(77.142855deg)_translateZ(-640px)]"><img class="h-full w-full object-cover brightness-110" src="https://images.unsplash.com/photo-1551817958-d9d86fb29431?q=80&w=900&auto=format&fit=crop" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <article class="rounded-[1.5rem] border border-stone-800 bg-stone-900 p-6 lg:p-8">
          <h2 class="mb-4 font-[Cabinet_Grotesk] text-2xl font-bold tracking-tight text-white">1. components/InsidePovCarousel.tsx</h2>
          <pre class="overflow-x-auto rounded-2xl bg-black p-5 text-sm leading-6 text-stone-200"><code>&quot;use client&quot;;

import React, {
  KeyboardEvent,
  PointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from &quot;react&quot;;
import styles from &quot;./InsidePovCarousel.module.css&quot;;

type VideoItem = {
  src: string;
  poster?: string;
  alt?: string;
};

type InsidePovCarouselProps = {
  videos: VideoItem[];
  autoRotate?: boolean;
  interactive?: boolean;
  className?: string;
};

const AUTO_ROTATE_SPEED = 0.04;
const DRAG_SENSITIVITY = 0.28;
const INERTIA_FRICTION = 0.94;
const MIN_VELOCITY = 0.01;
const KEYBOARD_STEP = 8;

export default function InsidePovCarousel({
  videos,
  autoRotate = true,
  interactive = true,
  className,
}: InsidePovCarouselProps) {
  const rootRef = useRef&lt;HTMLElement | null&gt;(null);
  const videoRefs = useRef&lt;HTMLVideoElement[]&gt;([]);
  const rafRef = useRef&lt;number | null&gt;(null);

  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);
  const mountedRef = useRef(false);

  const [isAutoEnabled, setIsAutoEnabled] = useState(autoRotate);
  const safeVideos = useMemo(() =&gt; videos.filter((video) =&gt; video.src), [videos]);
  const step = safeVideos.length &gt; 0 ? 360 / safeVideos.length : 25.714285;

  const setRotation = useCallback((nextRotation: number) =&gt; {
    rotationRef.current = nextRotation;
    rootRef.current?.style.setProperty(&quot;--pov-rotation&quot;, `${nextRotation}deg`);
  }, []);

  const playVideos = useCallback(() =&gt; {
    videoRefs.current.forEach((video) =&gt; {
      if (!video) return;
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() =&gt; {
          // Autoplay can be blocked by the browser. Ignore safely.
        });
      }
    });
  }, []);

  const pauseVideos = useCallback(() =&gt; {
    videoRefs.current.forEach((video) =&gt; {
      if (!video) return;
      video.pause();
    });
  }, []);

  useEffect(() =&gt; {
    mountedRef.current = true;
    const root = rootRef.current;
    if (!root) return;

    root.style.setProperty(&quot;--pov-step&quot;, `${step}deg`);
    root.style.setProperty(&quot;--pov-rotation&quot;, `${rotationRef.current}deg`);

    const mediaQuery = window.matchMedia(&quot;(prefers-reduced-motion: reduce)&quot;);
    prefersReducedMotionRef.current = mediaQuery.matches;

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) =&gt; {
      prefersReducedMotionRef.current = event.matches;
    };

    mediaQuery.addEventListener(&quot;change&quot;, handleMotionPreferenceChange);

    return () =&gt; {
      mountedRef.current = false;
      mediaQuery.removeEventListener(&quot;change&quot;, handleMotionPreferenceChange);
    };
  }, [step]);

  useEffect(() =&gt; {
    setIsAutoEnabled(autoRotate);
  }, [autoRotate]);

  useEffect(() =&gt; {
    if (safeVideos.length === 0) return;

    const tick = () =&gt; {
      const shouldAutoRotate =
        isAutoEnabled &&
        !prefersReducedMotionRef.current &&
        !isDraggingRef.current &&
        !isHoveredRef.current;

      let nextRotation = rotationRef.current;

      if (shouldAutoRotate) {
        nextRotation += AUTO_ROTATE_SPEED;
      }

      if (!isDraggingRef.current && Math.abs(velocityRef.current) &gt; MIN_VELOCITY) {
        nextRotation += velocityRef.current;
        velocityRef.current *= INERTIA_FRICTION;
      }

      setRotation(nextRotation);
      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () =&gt; {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isAutoEnabled, safeVideos.length, setRotation]);

  useEffect(() =&gt; {
    if (safeVideos.length === 0) return;

    playVideos();

    const handleVisibilityChange = () =&gt; {
      if (document.hidden) {
        pauseVideos();
      } else {
        playVideos();
      }
    };

    document.addEventListener(&quot;visibilitychange&quot;, handleVisibilityChange);

    return () =&gt; {
      document.removeEventListener(&quot;visibilitychange&quot;, handleVisibilityChange);
      pauseVideos();
    };
  }, [pauseVideos, playVideos, safeVideos.length]);

  const handlePointerDown = (event: PointerEvent&lt;HTMLElement&gt;) =&gt; {
    if (!interactive) return;

    isDraggingRef.current = true;
    lastXRef.current = event.clientX;
    velocityRef.current = 0;
    rootRef.current?.classList.add(styles.dragging);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent&lt;HTMLElement&gt;) =&gt; {
    if (!interactive || !isDraggingRef.current) return;

    const dx = event.clientX - lastXRef.current;
    const deltaDeg = dx * DRAG_SENSITIVITY;
    const nextRotation = rotationRef.current + deltaDeg;

    velocityRef.current = deltaDeg;
    lastXRef.current = event.clientX;
    setRotation(nextRotation);
  };

  const endDrag = (event: PointerEvent&lt;HTMLElement&gt;) =&gt; {
    if (!interactive) return;

    isDraggingRef.current = false;
    rootRef.current?.classList.remove(styles.dragging);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleMouseEnter = () =&gt; {
    isHoveredRef.current = true;
    rootRef.current?.classList.add(styles.paused);
  };

  const handleMouseLeave = () =&gt; {
    isHoveredRef.current = false;
    rootRef.current?.classList.remove(styles.paused);
  };

  const handleKeyDown = (event: KeyboardEvent&lt;HTMLElement&gt;) =&gt; {
    if (!interactive) return;

    if (event.key === &quot;ArrowLeft&quot;) {
      event.preventDefault();
      velocityRef.current = 0;
      setRotation(rotationRef.current - KEYBOARD_STEP);
    }

    if (event.key === &quot;ArrowRight&quot;) {
      event.preventDefault();
      velocityRef.current = 0;
      setRotation(rotationRef.current + KEYBOARD_STEP);
    }

    if (event.key === &quot; &quot; || event.key === &quot;Spacebar&quot;) {
      event.preventDefault();
      setIsAutoEnabled((current) =&gt; !current);
    }
  };

  const carouselClassName = [
    styles.carousel,
    !interactive ? styles.paused : &quot;&quot;,
    className ?? &quot;&quot;,
  ]
    .filter(Boolean)
    .join(&quot; &quot;);

  if (safeVideos.length === 0) {
    return null;
  }

  return (
    &lt;section
      ref={rootRef}
      className={carouselClassName}
      tabIndex={interactive ? 0 : -1}
      aria-roledescription=&quot;3D video carousel&quot;
      onPointerDown={interactive ? handlePointerDown : undefined}
      onPointerMove={interactive ? handlePointerMove : undefined}
      onPointerUp={interactive ? endDrag : undefined}
      onPointerCancel={interactive ? endDrag : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    &gt;
      &lt;div className={styles.stage}&gt;
        &lt;div className={styles.world}&gt;
          {safeVideos.map((video, index) =&gt; (
            &lt;figure
              key={`${video.src}-${index}`}
              className={styles.card}
              style={{ &quot;--i&quot;: index } as React.CSSProperties}
            &gt;
              &lt;video
                ref={(node) =&gt; {
                  if (node) videoRefs.current[index] = node;
                }}
                className={styles.video}
                src={video.src}
                poster={video.poster}
                muted
                loop
                playsInline
                preload=&quot;metadata&quot;
                aria-label={video.alt}
              /&gt;
            &lt;/figure&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
}

export type { InsidePovCarouselProps, VideoItem };</code></pre>
        </article>

        <article class="rounded-[1.5rem] border border-stone-800 bg-stone-900 p-6 lg:p-8">
          <h2 class="mb-4 font-[Cabinet_Grotesk] text-2xl font-bold tracking-tight text-white">2. components/InsidePovCarousel.module.css</h2>
          <pre class="overflow-x-auto rounded-2xl bg-black p-5 text-sm leading-6 text-stone-200"><code>.carousel {
  position: relative;
  width: min(100%, 1400px);
  height: min(78vh, 760px);
  min-height: 560px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 34px;
  isolation: isolate;
  user-select: none;
  touch-action: none;
  cursor: grab;

  --pov-perspective: 1200px;
  --pov-radius: 640px;
  --pov-card-w: 220px;
  --pov-card-h: 390px;
  --pov-step: 25.714285deg;
  --pov-rotation: 0deg;
  --pov-tilt-x: 0deg;
  --pov-card-radius: 18px;

  background:
    radial-gradient(
      ellipse at 50% 45%,
      rgba(255, 255, 255, 0.72),
      rgba(255, 255, 255, 0.18) 42%,
      rgba(255, 255, 255, 0) 72%
    ),
    linear-gradient(180deg, #f6f4f1 0%, #ece7e0 100%);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.55),
    0 30px 80px rgba(59, 42, 28, 0.1);
}

.carousel::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(circle at 18% 50%, rgba(156, 112, 72, 0.1), transparent 30%),
    radial-gradient(circle at 82% 48%, rgba(98, 75, 52, 0.1), transparent 32%);
  pointer-events: none;
}

.carousel::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 5;
  background:
    linear-gradient(90deg, rgba(236, 231, 224, 0.8), transparent 12% 88%, rgba(236, 231, 224, 0.8)),
    radial-gradient(ellipse at 50% 50%, transparent 42%, rgba(102, 78, 55, 0.08) 100%);
  pointer-events: none;
}

.stage {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  perspective: var(--pov-perspective);
  perspective-origin: 50% 50%;
  overflow: hidden;
  transform-style: preserve-3d;
}

.world {
  position: relative;
  width: 0;
  height: 0;
  transform-style: preserve-3d;
  transform: rotateX(var(--pov-tilt-x)) rotateY(var(--pov-rotation));
  will-change: transform;
}

.card {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--pov-card-w);
  height: var(--pov-card-h);
  margin: 0;
  overflow: hidden;
  border-radius: var(--pov-card-radius);
  background: rgba(255, 255, 255, 0.2);
  transform-style: preserve-3d;
  transform:
    translate(-50%, -50%)
    rotateY(calc(var(--i) * var(--pov-step)))
    translateZ(calc(var(--pov-radius) * -1));
  box-shadow:
    0 28px 70px rgba(30, 22, 16, 0.22),
    0 8px 18px rgba(30, 22, 16, 0.14);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: transform;
  contain: layout paint style;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 3;
  border-radius: inherit;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.36),
    inset 0 22px 36px rgba(255, 255, 255, 0.14),
    inset 0 -38px 58px rgba(0, 0, 0, 0.22);
  pointer-events: none;
}

.card::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 4;
  border-radius: inherit;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.18), transparent 18% 78%, rgba(0, 0, 0, 0.18)),
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 35%, rgba(0, 0, 0, 0.14));
  opacity: 0.72;
  pointer-events: none;
}

.video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: inherit;
  background: #ddd;
}

.dragging {
  cursor: grabbing;
}

.paused {
  cursor: default;
}

.carousel:focus-visible {
  outline: 2px solid rgba(180, 116, 62, 0.55);
  outline-offset: 4px;
}

@media (max-width: 760px) {
  .carousel {
    width: min(100%, 100%);
    min-height: 460px;
    height: 70vh;
    border-radius: 24px;

    --pov-perspective: 760px;
    --pov-radius: 420px;
    --pov-card-w: 156px;
    --pov-card-h: 278px;
  }
}

@media (max-width: 430px) {
  .carousel {
    min-height: 420px;
    height: 66vh;

    --pov-perspective: 700px;
    --pov-radius: 390px;
    --pov-card-w: 142px;
    --pov-card-h: 252px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel {
    cursor: default;
  }

  .world,
  .card {
    will-change: auto;
  }
}</code></pre>
        </article>

        <article class="rounded-[1.5rem] border border-stone-800 bg-stone-900 p-6 lg:p-8">
          <h2 class="mb-4 font-[Cabinet_Grotesk] text-2xl font-bold tracking-tight text-white">3. app/page.tsx</h2>
          <pre class="overflow-x-auto rounded-2xl bg-black p-5 text-sm leading-6 text-stone-200"><code>import InsidePovCarousel from &quot;@/components/InsidePovCarousel&quot;;

const videos = Array.from({ length: 14 }, (_, i) =&gt; ({
  src: `/videos/demo-${i + 1}.mp4`,
  poster: `/videos/poster-${i + 1}.jpg`,
  alt: `Video ${i + 1}`,
}));

export default function Page() {
  return (
    &lt;main
      style={{
        minHeight: &quot;100vh&quot;,
        display: &quot;grid&quot;,
        placeItems: &quot;center&quot;,
        padding: &quot;clamp(16px, 4vw, 48px)&quot;,
        background: &quot;#f3efea&quot;,
      }}
    &gt;
      &lt;InsidePovCarousel videos={videos} autoRotate interactive /&gt;
    &lt;/main&gt;
  );
}</code></pre>
        </article>

        <article class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-[1.5rem] border border-stone-800 bg-stone-900 p-6">
            <h3 class="mb-3 font-[Cabinet_Grotesk] text-xl font-bold text-white">Key implementation details</h3>
            <ul class="space-y-2 text-sm leading-6 text-stone-400">
              <li>Cards use negative <code class="rounded bg-black px-1.5 py-0.5 text-orange-300">translateZ</code>, so they sit on the outer/back side of the viewpoint.</li>
              <li>Rotation is driven by <code class="rounded bg-black px-1.5 py-0.5 text-orange-300">requestAnimationFrame</code>, not CSS animation.</li>
              <li>Hover pause, pointer drag, inertia, touch swipe, and keyboard control are internal only.</li>
              <li>No visible UI controls, guide lines, labels, hints, or markers are rendered.</li>
            </ul>
          </div>
          <div class="rounded-[1.5rem] border border-stone-800 bg-stone-900 p-6">
            <h3 class="mb-3 font-[Cabinet_Grotesk] text-xl font-bold text-white">CSS variable tuning</h3>
            <ul class="space-y-2 text-sm leading-6 text-stone-400">
              <li><code class="rounded bg-black px-1.5 py-0.5 text-orange-300">--pov-radius</code>: larger radius spreads cards and deepens the tunnel.</li>
              <li><code class="rounded bg-black px-1.5 py-0.5 text-orange-300">--pov-perspective</code>: lower values exaggerate depth; higher values flatten it.</li>
              <li><code class="rounded bg-black px-1.5 py-0.5 text-orange-300">--pov-card-w</code>: increase only with radius/perspective balancing.</li>
              <li><code class="rounded bg-black px-1.5 py-0.5 text-orange-300">--pov-step</code> is set automatically from <code class="rounded bg-black px-1.5 py-0.5 text-orange-300">360 / videos.length</code>.</li>
            </ul>
          </div>
          <div class="rounded-[1.5rem] border border-stone-800 bg-stone-900 p-6">
            <h3 class="mb-3 font-[Cabinet_Grotesk] text-xl font-bold text-white">Production notes</h3>
            <ul class="space-y-2 text-sm leading-6 text-stone-400">
              <li>Use local or first-party CDN videos; do not hotlink third-party Framer/CDN assets.</li>
              <li>Compress videos aggressively and provide posters for fast first paint.</li>
              <li>Keep default count at 14 for the intended 25.714285° spacing.</li>
              <li>Use muted, loop, playsInline for reliable autoplay behavior.</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  </div>
</body>
</html>
~~~
