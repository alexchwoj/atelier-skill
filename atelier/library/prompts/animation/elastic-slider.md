# Elastic Slider

> A premium, high-end elastic slider component with smooth motion, overflow physics, and haptic-like feedback icons. Perfect for high-end interfaces and luxury settings. Source: ReactBits


---

You are given a task to integrate an existing React component in the codebase

~~~/README.md
# ElasticSlider Component

A premium, physics-based slider with elastic overflow effects and reactive icons. Built with Framer Motion for high-end digital interfaces.

## Dependencies
- `framer-motion`: `^11.0.0`
- `lucide-react`: `latest`
- `clsx`: `^2.1.0`
- `tailwind-merge`: `^2.2.0`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `number` | `50` | Initial value for uncontrolled state. |
| `startingValue` | `number` | `0` | Minimum value of the range. |
| `maxValue` | `number` | `100` | Maximum value of the range. |
| `isStepped` | `boolean` | `false` | Enable discrete step increments. |
| `stepSize` | `number` | `1` | Size of each step. |
| `leftIcon` | `ReactNode` | `<Minus />` | Custom icon for the left/minimum end. |
| `rightIcon` | `ReactNode` | `<Plus />` | Custom icon for the right/maximum end. |
| `onChange` | `(val: number) => void` | `undefined` | Callback fired on value change. |
| `className` | `string` | `""` | Additional CSS classes for the container. |

## Usage
```tsx
import { ElasticSlider } from '@/sd-components/a1037115-94f5-446c-9195-99b8f9f04867';
import { Volume2, VolumeX } from 'lucide-react';

function MyComponent() {
  return (
    <ElasticSlider
      startingValue={0}
      maxValue={100}
      defaultValue={50}
      leftIcon={<VolumeX />}
      rightIcon={<Volume2 />}
      onChange={(v) => console.log(v)}
    />
  );
}
```
~~~

~~~/src/App.tsx
/**
 * App.tsx
 * Demo for the ElasticSlider component showcasing the 'Minimalist Showcase' aesthetic.
 */

import React from 'react';
import ElasticSlider from './Component';
import { Volume2, VolumeX, Sun, Moon, Sparkles, RefreshCw } from 'lucide-react';

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-20 gap-32">
      
      {/* Premium Dark Surface Showcase */}
      <div className="w-full max-w-2xl bg-card rounded-[2.5rem] border border-border p-16 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] flex flex-col items-center gap-12">
        <h2 className="text-foreground text-sm font-medium tracking-[0.2em] uppercase opacity-40">
          Elastic Slider Showcase
        </h2>
        
        <div className="flex flex-col gap-24 w-full items-center">
          {/* Stepped Slider with Custom Icons */}
          <div className="flex flex-col items-center gap-4 w-full">
            <ElasticSlider
              startingValue={100}
              maxValue={1000}
              defaultValue={450}
              isStepped={true}
              stepSize={50}
              leftIcon={<VolumeX className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" />}
              rightIcon={<Volume2 className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" />}
            />
            <span className="text-[10px] text-foreground/20 font-medium tracking-widest uppercase">Stepped Control</span>
          </div>

          {/* Continuous Slider with Theme Icons */}
          <div className="flex flex-col items-center gap-4 w-full">
            <ElasticSlider
              startingValue={0}
              maxValue={100}
              defaultValue={70}
              leftIcon={<Moon className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" />}
              rightIcon={<Sun className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" />}
            />
            <span className="text-[10px] text-foreground/20 font-medium tracking-widest uppercase">Atmospheric Smooth</span>
          </div>
          
          {/* Accent Color Variant */}
          <div className="flex flex-col items-center gap-4 w-full">
            <ElasticSlider
              startingValue={0}
              maxValue={100}
              defaultValue={25}
              leftIcon={<RefreshCw className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" />}
              rightIcon={<Sparkles className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" />}
            />
            <span className="text-[10px] text-foreground/20 font-medium tracking-widest uppercase">Accent Feedback</span>
          </div>
        </div>
      </div>
      
      {/* Return button as requested */}
      <button 
        onClick={() => window.location.reload()}
        className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-xs font-medium tracking-wider uppercase hover:scale-105 transition-transform active:scale-95"
      >
        <RefreshCw className="w-4 h-4" />
        Restart Showcase
      </button>

    </div>
  );
}
~~~

~~~/package.json
{
  "name": "elastic-slider-showcase",
  "description": "A premium elastic slider with physics-based overflow animations",
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "latest",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  }
}
~~~

~~~/src/Component.tsx
/**
 * ElasticSlider Component
 * A premium, physics-based slider with elastic overflow effects and reactive icons.
 * Features smooth motion using framer-motion and a signature 'floating' minimalist aesthetic.
 */

import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

const MAX_OVERFLOW = 40;

export interface ElasticSliderProps {
  /** The current value for controlled components */
  value?: number;
  /** Initial value if uncontrolled */
  defaultValue?: number;
  /** Minimum range value */
  startingValue?: number;
  /** Maximum range value */
  maxValue?: number;
  /** Optional CSS class for container */
  className?: string;
  /** Whether the slider increments in steps */
  isStepped?: boolean;
  /** Step increment size */
  stepSize?: number;
  /** Custom icon/element for the left side */
  leftIcon?: React.ReactNode;
  /** Custom icon/element for the right side */
  rightIcon?: React.ReactNode;
  /** Callback fired when value changes */
  onChange?: (value: number) => void;
}

export const ElasticSlider: React.FC<ElasticSliderProps> = ({
  defaultValue = 50,
  startingValue = 0,
  maxValue = 100,
  className = '',
  isStepped = false,
  stepSize = 1,
  leftIcon = <Minus className="w-4 h-4 text-foreground" />,
  rightIcon = <Plus className="w-4 h-4 text-foreground" />,
  onChange
}) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-6 w-full max-w-md ${className}`}>
      <Slider
        defaultValue={defaultValue}
        startingValue={startingValue}
        maxValue={maxValue}
        isStepped={isStepped}
        stepSize={stepSize}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onChange={onChange}
      />
    </div>
  );
};

interface SliderInternalProps {
  defaultValue: number;
  startingValue: number;
  maxValue: number;
  isStepped: boolean;
  stepSize: number;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderInternalProps> = ({
  defaultValue,
  startingValue,
  maxValue,
  isStepped,
  stepSize,
  leftIcon,
  rightIcon,
  onChange
}) => {
  const [value, setValue] = useState<number>(defaultValue);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [region, setRegion] = useState<'left' | 'middle' | 'right'>('middle');
  
  const clientX = useMotionValue(0);
  const overflow = useMotionValue(0);
  const scale = useMotionValue(1);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useMotionValueEvent(clientX, 'change', (latest: number) => {
    if (sliderRef.current) {
      const { left, right } = sliderRef.current.getBoundingClientRect();
      let newValue: number;
      
      if (latest < left) {
        setRegion('left');
        newValue = left - latest;
      } else if (latest > right) {
        setRegion('right');
        newValue = latest - right;
      } else {
        setRegion('middle');
        newValue = 0;
      }
      
      overflow.jump(decay(newValue, MAX_OVERFLOW));
    }
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons > 0 && sliderRef.current) {
      const { left, width } = sliderRef.current.getBoundingClientRect();
      let newValue = startingValue + ((e.clientX - left) / width) * (maxValue - startingValue);
      
      if (isStepped) {
        newValue = Math.round(newValue / stepSize) * stepSize;
      }
      
      newValue = Math.min(Math.max(newValue, startingValue), maxValue);
      setValue(newValue);
      clientX.jump(e.clientX);
      onChange?.(newValue);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    handlePointerMove(e);
    e.currentTarget.setPointerCapture(e.pointerId);
    animate(scale, 1.1, { duration: 0.2, ease: "easeOut" });
  };

  const handlePointerUp = () => {
    animate(overflow, 0, { type: 'spring', bounce: 0.5, stiffness: 200, damping: 20 });
    animate(scale, 1, { duration: 0.3, ease: "easeOut" });
  };

  const getRangePercentage = (): number => {
    const totalRange = maxValue - startingValue;
    if (totalRange === 0) return 0;
    return ((value - startingValue) / totalRange) * 100;
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      <motion.div
        style={{ scale }}
        className="flex w-full touch-none select-none items-center justify-center gap-6"
      >
        <motion.div
          animate={{
            scale: region === 'left' ? [1, 1.3, 1] : 1,
            transition: { duration: 0.3, ease: "power3.out" }
          }}
          style={{
            x: useTransform(() => (region === 'left' ? -overflow.get() / scale.get() : 0))
          }}
          className="flex-shrink-0"
        >
          {leftIcon}
        </motion.div>

        <div
          ref={sliderRef}
          className="relative flex w-full max-w-xs flex-grow cursor-grab active:cursor-grabbing touch-none select-none items-center py-6"
          onPointerMove={handlePointerMove}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <motion.div
            style={{
              scaleX: useTransform(() => {
                if (sliderRef.current) {
                  const { width } = sliderRef.current.getBoundingClientRect();
                  return 1 + overflow.get() / width;
                }
                return 1;
              }),
              scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.85]),
              transformOrigin: useTransform(() => {
                if (sliderRef.current) {
                  const { left, width } = sliderRef.current.getBoundingClientRect();
                  return clientX.get() < left + width / 2 ? 'right' : 'left';
                }
                return 'center';
              }),
              height: 6
            }}
            className="flex flex-grow"
          >
            <div className="relative h-full flex-grow overflow-hidden rounded-full bg-border/40 backdrop-blur-sm">
              <div 
                className="absolute h-full bg-primary transition-all duration-75 ease-out rounded-full shadow-[0_0_15px_rgba(59,122,246,0.3)]" 
                style={{ width: `${getRangePercentage()}%` }} 
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            scale: region === 'right' ? [1, 1.3, 1] : 1,
            transition: { duration: 0.3, ease: "power3.out" }
          }}
          style={{
            x: useTransform(() => (region === 'right' ? overflow.get() / scale.get() : 0))
          }}
          className="flex-shrink-0"
        >
          {rightIcon}
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-2 text-foreground/60 text-[10px] font-medium tracking-widest uppercase"
        style={{
          opacity: useTransform(scale, [1, 1.1], [0.6, 1])
        }}
      >
        {Math.round(value)}
      </motion.div>
    </div>
  );
};

function decay(value: number, max: number): number {
  if (max === 0) return 0;
  const entry = value / max;
  const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);
  return sigmoid * max;
}

export default ElasticSlider;
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design
