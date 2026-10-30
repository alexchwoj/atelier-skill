# GhostScrollText

> [COMPONENT] A text component that creates a ghost trail effect when scrolling rapidly. The ghost layers lag behind the main text based on scroll velocity and disappear when scrolling stops.


---

You are given a task to integrate an existing React component in the codebase

~~~/README.md
# GhostScrollText

A high-performance text component that creates a "ghost trail" effect based on scroll velocity. The faster you scroll, the more the text separates into ethereal layers.

## Features
- Velocity-based animation using GSAP ScrollTrigger
- GPU-accelerated transforms for smooth performance
- Skew deformation for added impact
- Customizable intensity and styling
- Fully responsive

## Usage

```tsx
import { GhostScrollText } from '@/sd-components/9cf280db-a03d-4f01-8ed9-b82fd37b91ac';

function MyPage() {
  return (
    <div className="h-[200vh]">
      <GhostScrollText 
        text="VELOCITY" 
        size="text-9xl" 
        intensity={1.5} 
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | The text content to display |
| `size` | `string` | `"text-[12vw]"` | Tailwind font size class |
| `weight` | `string` | `"font-black"` | Tailwind font weight class |
| `intensity` | `number` | `1` | Multiplier for the ghost trail distance |
| `className` | `string` | - | Additional CSS classes |
~~~

~~~/src/App.tsx
import React from 'react';
import { GhostScrollText } from './Component';

export default function App() {
  return (
    <div className="min-h-[400vh] bg-background w-full relative">
      <div className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference pointer-events-none">
        <p className="text-sm font-mono text-white opacity-50 uppercase tracking-widest">
          Scroll Rapidly
        </p>
      </div>

      <div className="flex flex-col items-center justify-center pt-[80vh] pb-[100vh] gap-[40vh]">
        <GhostScrollText text="VELOCITY" />
        <GhostScrollText text="MOMENTUM" intensity={1.5} className="text-primary" />
        <GhostScrollText text="KINETIC" size="text-[15vw]" intensity={2} />
        <GhostScrollText text="GHOST" weight="font-thin" />
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground animate-bounce">
        ↓ SCROLL FAST ↓
      </div>
    </div>
  );
}
~~~

~~~/package.json
{
  "name": "ghost-scroll-text",
  "description": "A text component that creates a ghost trail effect when scrolling rapidly",
  "dependencies": {
    "gsap": "^3.12.5",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.344.0"
  }
}
~~~

~~~/src/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
~~~

~~~/src/Component.tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from './utils';

gsap.registerPlugin(ScrollTrigger);

interface GhostScrollTextProps {
  /**
   * The text content to display
   */
  text: string;
  /**
   * Font size class
   * @default "text-9xl"
   */
  size?: string;
  /**
   * Font weight class
   * @default "font-black"
   */
  weight?: string;
  /**
   * Multiplier for the ghost trail distance
   * @default 1
   */
  intensity?: number;
  /**
   * Color of the text
   * @default "text-foreground"
   */
  className?: string;
}

export function GhostScrollText({
  text,
  size = "text-[12vw]",
  weight = "font-black",
  intensity = 1,
  className
}: GhostScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainTextRef = useRef<HTMLHeadingElement>(null);
  const ghost1Ref = useRef<HTMLHeadingElement>(null);
  const ghost2Ref = useRef<HTMLHeadingElement>(null);
  const ghost3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // cleanup previous triggers
    ScrollTrigger.getAll().forEach(t => t.kill());

    const ghosts = [ghost1Ref.current, ghost2Ref.current, ghost3Ref.current];
    
    // Create scroll trigger to monitor velocity
    ScrollTrigger.create({
      trigger: document.body, // monitor whole page scroll
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        // Normalize velocity somewhat (it can be large, e.g. -2000 to 2000)
        // We want a subtle effect that maxes out
        
        // Direction multiplier: if scrolling DOWN (positive velocity), text moves UP visually.
        // We want ghosts to trail BEHIND.
        // If content moves UP, "behind" is DOWN (positive Y).
        // So Positive Velocity -> Positive Y offset for ghosts.
        
        // Calculate dynamic offset based on velocity
        const baseOffset = velocity * 0.15 * intensity;
        
        // Animate ghosts
        // Ghost 1: close, high opacity
        gsap.to(ghost1Ref.current, {
          y: -baseOffset * 0.5, // Slightly lag behind
          opacity: Math.min(Math.abs(velocity) / 500, 0.4),
          skewX: -velocity * 0.005,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto"
        });

        // Ghost 2: medium distance, medium opacity
        gsap.to(ghost2Ref.current, {
          y: -baseOffset * 1.0,
          opacity: Math.min(Math.abs(velocity) / 800, 0.2),
          skewX: -velocity * 0.01,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto"
        });

        // Ghost 3: far distance, low opacity
        gsap.to(ghost3Ref.current, {
          y: -baseOffset * 1.8,
          opacity: Math.min(Math.abs(velocity) / 1000, 0.1),
          skewX: -velocity * 0.02,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto"
        });
        
        // Optional: Slight skew on main text for impact
        gsap.to(mainTextRef.current, {
          skewX: -velocity * 0.002,
          duration: 0.2,
          ease: "power1.out",
          overwrite: "auto"
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [intensity]);

  const textClasses = cn(
    "leading-none tracking-tighter select-none will-change-transform transition-colors duration-300",
    size,
    weight,
    className
  );

  return (
    <div ref={containerRef} className="relative flex justify-center items-center py-20 overflow-visible">
      {/* Ghost Layers - Absolute positioned behind */}
      <h2 
        ref={ghost3Ref}
        className={cn(textClasses, "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/30 blur-sm z-0 pointer-events-none")}
        aria-hidden="true"
      >
        {text}
      </h2>
      <h2 
        ref={ghost2Ref}
        className={cn(textClasses, "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/50 blur-[1px] z-0 pointer-events-none")}
        aria-hidden="true"
      >
        {text}
      </h2>
      <h2 
        ref={ghost1Ref}
        className={cn(textClasses, "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/70 z-0 pointer-events-none")}
        aria-hidden="true"
      >
        {text}
      </h2>

      {/* Main Text - Relative positioned */}
      <h2 
        ref={mainTextRef}
        className={cn(textClasses, "relative z-10 text-foreground")}
      >
        {text}
      </h2>
    </div>
  );
}

export default GhostScrollText;
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design
