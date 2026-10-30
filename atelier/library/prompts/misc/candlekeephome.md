# CandlekeepHome

> [PAGE] Candlekeep homescreen — a RolePlay AI platform home page with split-panel layout (The Scroll Hall). Features: left sidebar with brand mark, navigation, recent sessions, and light/dark theme toggle. Right content area with search bar, Continue Your Tale horizontal scroll section, and Discover Characters grid with overlay gradient character cards. Warm literary fantasy aesthetic inspired by the Forgotten Realms.


---

You are given a task to integrate an existing React component in the codebase

~~~/README.md
# CandlekeepHome

The main homescreen for the **Candlekeep** RolePlay AI platform — a split-panel "Scroll Hall" layout with warm literary fantasy aesthetic.

## Features
- **Sidebar**: Brand mark, 4-tab navigation with animated active indicator, recent sessions, light/dark theme toggle
- **Content area**: Search bar, "Continue Your Tale" horizontal scroll cards, "Discover Characters" 3-column grid
- **Theme**: Full light/dark support with warm amber/gold primary accents
- **Animations**: Staggered entry animations, spring-based layout transitions, hover glow effects

## Dependencies
| Package | Version |
|---------|---------|
| react | ^18.3.1 |
| react-dom | ^18.3.1 |
| lucide-react | ^0.468.0 |
| framer-motion | ^11.15.0 |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultDark` | `boolean` | `undefined` | Override the default dark mode state |

## Usage

```tsx
import { CandlekeepHome } from '@/sd-components/25466ddd-b984-46a1-a112-18fdb5bd8bc4';

function App() {
  return <CandlekeepHome />;
}
```
~~~

~~~/src/App.tsx
/**
 * App.tsx — Demo/preview entry for the Candlekeep homescreen component.
 * Renders the CandlekeepHome directly for canvas preview.
 */

import React from 'react';
import { CandlekeepHome } from './Component';

export default function App() {
  return <CandlekeepHome />;
}
~~~

~~~/package.json
{
  "name": "candlekeep-home",
  "description": "Candlekeep homescreen — RolePlay AI platform with literary fantasy aesthetic",
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.468.0",
    "framer-motion": "^11.15.0"
  }
}
~~~

~~~/src/hooks.ts
/**
 * Custom hooks for the Candlekeep homescreen.
 * - useTheme: manages light/dark mode with localStorage persistence
 */

import { useState, useCallback } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('candlekeep-theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('candlekeep-theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  return { isDark, toggle };
}
~~~

~~~/src/types.ts
/**
 * Core type definitions for the Candlekeep homescreen.
 * Includes character cards, recent sessions, and navigation items.
 */

export interface Character {
  id: string;
  name: string;
  imageUrl: string;
  tags: string[];
  chatCount: number;
  creator: string;
}

export interface RecentSession {
  id: string;
  characterName: string;
  characterAvatar: string;
  lastMessage: string;
  timestamp: string;
}

export interface ContinueSession {
  id: string;
  title: string;
  characterName: string;
  imageUrl: string;
  lastActivity: string;
  messageCount: number;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}
~~~

~~~/STYLE_GUIDE.md
# Candlekeep Design System — Style Guide

## 🎨 Theme

### Light Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#C9922E` | Amber/gold — buttons, active indicators, focus rings |
| `--primary-foreground` | `#FFFFFF` | Text on primary surfaces |
| `--background` | `#FFFFFF` | Page background |
| `--foreground` | `#2C2418` | Primary text |
| `--secondary` | `#FAF7F2` | Sidebar/panel backgrounds |
| `--secondary-foreground` | `#5C4E3C` | Text on secondary |
| `--muted` | `#F5F0E8` | Subtle fills |
| `--muted-foreground` | `#7A6E5D` | Secondary text, timestamps |
| `--accent` | `#E8DFD0` | Hover fills, nav active bg |
| `--border` | `#E8DFD0` | Borders, dividers |
| `--destructive` | `#B84233` | Error/destructive actions |
| `--card` | `#FFFFFF` | Card surfaces |

### Dark Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#D4A544` | Warm gold (boosted in dark) |
| `--background` | `#0F0D0B` | Deep charcoal |
| `--foreground` | `#E8DFD0` | Parchment text |
| `--secondary` | `#1A1614` | Panel backgrounds |
| `--muted` | `#2A2520` | Subtle fills |
| `--border` | `#2A2520` | Borders |
| `--card` | `#1E1B17` | Card surfaces |

## 🔤 Typography

| Role | Font | Weight | Tracking |
|------|------|--------|----------|
| Display/Headings | `Cinzel, Georgia, serif` | 600–700 | `0.02em` |
| Body/UI | `Inter, system-ui, sans-serif` | 400–500 | default |
| Nav labels | `Inter` | 500 | `0.04em` |
| Overline labels | `Inter` | 600 | `widest` (Tailwind) |
| Code | `JetBrains Mono, monospace` | 400 | default |

Font imports:
- Cinzel: `https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap`
- Inter: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

## 📐 Layout Patterns

### Sidebar + Content (Split Panel)
- Sidebar: `w-[320px]`, `border-r border-border`, `bg-secondary`
- Content: `flex-1`, `max-w-[960px] mx-auto px-8 py-8`
- Overall: `flex h-screen overflow-hidden`

### Character Grid
- 3-column: `grid grid-cols-3 gap-4`
- Cards aspect ratio: `aspect-[3/4]`

### Horizontal Scroll Row
- Container: `flex gap-4 overflow-x-auto` with hidden scrollbar
- Card: `flex-shrink-0 w-[280px] h-[160px] rounded-xl`

## 🃏 Card Patterns

### Character Card (Overlay Gradient)
- Full-bleed portrait image (`object-cover`)
- Gradient overlay: `bg-gradient-to-t from-black/85 via-black/20 to-transparent`
- Tags: pill badges with `bg-white/15 backdrop-blur-sm text-white/80`
- Hover: `scale(1.02)` + warm shadow `0 8px 32px hsl(var(--primary) / 0.18)`

### Continue Tale Card (Landscape)
- 280×160px with rounded corners
- Same gradient overlay pattern
- Metadata row with Clock + MessageSquare icons

## 🎬 Animation Patterns

### Staggered Entry
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.06, duration: 0.45, ease: 'easeOut' }}
```

### Navigation Indicator
```tsx
<motion.div layoutId="nav-indicator" />
// Spring: stiffness 400, damping 30
```

### Theme Toggle Switch
```tsx
animate={{ x: isDark ? 16 : 0 }}
// Spring: stiffness 500, damping 30
```

### Hover Glow
- Cards: `ring-2 ring-inset ring-primary/40` with `opacity-0 → opacity-100` transition

## 🧩 Component Inventory

| Component | File | Description |
|-----------|------|-------------|
| Sidebar | `/src/Sidebar.tsx` | Brand, nav, recents, theme toggle |
| SearchBar | `/src/SearchBar.tsx` | Input with warm glow on focus |
| ContinueTaleSection | `/src/ContinueTaleSection.tsx` | Horizontal scroll row |
| CharacterCard | `/src/CharacterCard.tsx` | Overlay gradient portrait card |
| DiscoverSection | `/src/DiscoverSection.tsx` | Category pills + 3-col grid |

## 🧱 Spacing & Rounding

| Token | Value |
|-------|-------|
| Border radius | `0.625rem` (Tailwind `rounded-xl` for cards) |
| Section gap | `space-y-8` (32px) |
| Card gap | `gap-4` (16px) |
| Sidebar padding | `px-3` nav, `px-6` brand |
| Content padding | `px-8 py-8` |

## 🚫 Anti-Patterns
- No cold blues/purples
- No glassmorphism
- No neon/cyberpunk effects
- No generic system fonts (use Cinzel + Inter)
- Avoid flat, lifeless cards — always use gradient overlays on images
~~~

~~~/src/Sidebar.tsx
/**
 * Sidebar component for Candlekeep homescreen.
 * Contains:
 * - Brand mark (Candlekeep logo in Cinzel serif)
 * - Navigation links with animated active indicator
 * - Recent sessions list with avatars
 * - Light/dark theme toggle at bottom
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Compass,
  PenTool,
  MessageCircle,
  Sun,
  Moon,
  Flame,
} from 'lucide-react';
import type { RecentSession } from './types';

interface SidebarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeNav: string;
  onNavChange: (id: string) => void;
  recentSessions: RecentSession[];
}

const NAV_CONFIG = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'discover', label: 'Discover', Icon: Compass },
  { id: 'create', label: 'Create', Icon: PenTool },
  { id: 'chats', label: 'Chats', Icon: MessageCircle },
];

export function Sidebar({
  isDark,
  onToggleTheme,
  activeNav,
  onNavChange,
  recentSessions,
}: SidebarProps) {
  return (
    <aside className="w-[320px] min-w-[320px] h-screen flex flex-col border-r border-border bg-secondary overflow-hidden">
      {/* Brand Mark */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Flame className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1
            className="text-xl tracking-wider text-foreground"
            style={{ fontFamily: 'Cinzel, Georgia, serif', fontWeight: 600 }}
          >
            Candlekeep
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 mt-2">
        <div className="space-y-0.5">
          {NAV_CONFIG.map(({ id, label, Icon }) => {
            const isActive = activeNav === id;
            return (
              <button
                key={id}
                onClick={() => onNavChange(id)}
                className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-foreground bg-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="w-[18px] h-[18px]" />
                <span className="tracking-wide" style={{ letterSpacing: '0.04em' }}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Divider */}
      <div className="mx-5 my-4 h-px bg-border" />

      {/* Recent Sessions */}
      <div className="flex-1 overflow-y-auto px-3">
        <p
          className="px-3 mb-2.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground"
        >
          Recent Tales
        </p>
        <div className="space-y-0.5">
          {recentSessions.map((session, i) => (
            <motion.button
              key={session.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/50 transition-colors text-left group"
            >
              <img
                src={session.characterAvatar}
                alt={session.characterName}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0 ring-1 ring-border"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-foreground truncate">
                    {session.characterName}
                  </p>
                  <span className="text-[10px] text-muted-foreground flex-shrink-0">
                    {session.timestamp}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-relaxed italic">
                  {session.lastMessage}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="px-4 py-4 border-t border-border">
        <button
          onClick={onToggleTheme}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-accent/50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <motion.div
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {isDark ? (
                <Moon className="w-[18px] h-[18px] text-primary" />
              ) : (
                <Sun className="w-[18px] h-[18px] text-primary" />
              )}
            </motion.div>
            <span className="text-sm text-foreground font-medium">
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </span>
          </div>
          {/* Toggle switch */}
          <div
            className={`w-10 h-[22px] rounded-full flex items-center px-[3px] transition-colors duration-300 ${
              isDark ? 'bg-primary' : 'bg-border'
            }`}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-background shadow-sm"
              animate={{ x: isDark ? 16 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </div>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
~~~

~~~/src/constants.ts
/**
 * Mock data and constants for the Candlekeep homescreen.
 * Contains sample characters, sessions, and navigation configuration.
 */

import type { Character, RecentSession, ContinueSession, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'home', active: true },
  { id: 'discover', label: 'Discover', icon: 'compass' },
  { id: 'create', label: 'Create', icon: 'quill' },
  { id: 'chats', label: 'Chats', icon: 'messages' },
];

export const RECENT_SESSIONS: RecentSession[] = [
  {
    id: 'rs1',
    characterName: 'Elara Moonwhisper',
    characterAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
    lastMessage: '"The ancient runes shimmer beneath your touch, revealing a passage that leads deeper into the catacombs..."',
    timestamp: '2m ago',
  },
  {
    id: 'rs2',
    characterName: 'Captain Thorne',
    characterAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    lastMessage: '"Set course for the Shattered Isles. We sail at dawn, and may the winds favor the bold."',
    timestamp: '1h ago',
  },
  {
    id: 'rs3',
    characterName: 'Professor Grimshaw',
    characterAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    lastMessage: '"Fascinating specimen! This alchemical compound could change everything we know about transmutation..."',
    timestamp: '3h ago',
  },
  {
    id: 'rs4',
    characterName: 'Lyra the Bard',
    characterAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    lastMessage: '"Every song holds a secret, traveler. Shall I play you one from the age of forgotten kings?"',
    timestamp: '5h ago',
  },
];

export const CONTINUE_SESSIONS: ContinueSession[] = [
  {
    id: 'cs1',
    title: 'The Sunken Library',
    characterName: 'Elara Moonwhisper',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=340&fit=crop',
    lastActivity: '2 min ago',
    messageCount: 47,
  },
  {
    id: 'cs2',
    title: 'Voyage of the Iron Gale',
    characterName: 'Captain Thorne',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=340&fit=crop',
    lastActivity: '1 hour ago',
    messageCount: 112,
  },
  {
    id: 'cs3',
    title: "The Alchemist's Gambit",
    characterName: 'Professor Grimshaw',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=340&fit=crop',
    lastActivity: '3 hours ago',
    messageCount: 23,
  },
  {
    id: 'cs4',
    title: 'Ballad of the Lost Crown',
    characterName: 'Lyra the Bard',
    imageUrl: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=600&h=340&fit=crop',
    lastActivity: '5 hours ago',
    messageCount: 89,
  },
];

export const DISCOVER_CHARACTERS: Character[] = [
  {
    id: 'c1',
    name: 'Seraphina Vale',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=560&fit=crop&crop=face',
    tags: ['Fantasy', 'Healer', 'Mystical'],
    chatCount: 2340,
    creator: 'TaleWeaver',
  },
  {
    id: 'c2',
    name: 'Kael Stormrider',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=560&fit=crop&crop=face',
    tags: ['Adventure', 'Warrior', 'Epic'],
    chatCount: 5120,
    creator: 'MythForge',
  },
  {
    id: 'c3',
    name: 'Morgana Ashwood',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=560&fit=crop&crop=face',
    tags: ['Dark Fantasy', 'Witch', 'Gothic'],
    chatCount: 3890,
    creator: 'ShadowScribe',
  },
  {
    id: 'c4',
    name: 'Dorian Blackthorn',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=560&fit=crop&crop=face',
    tags: ['Romance', 'Nobility', 'Intrigue'],
    chatCount: 7560,
    creator: 'QuillMaster',
  },
  {
    id: 'c5',
    name: 'Zara Nightbloom',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=560&fit=crop&crop=face',
    tags: ['Sci-Fantasy', 'Rogue', 'Cyberpunk'],
    chatCount: 4210,
    creator: 'NeonTale',
  },
  {
    id: 'c6',
    name: 'Aldric the Sage',
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=560&fit=crop&crop=face',
    tags: ['Wisdom', 'Mentor', 'Ancient'],
    chatCount: 1890,
    creator: 'LoreKeeper',
  },
];
~~~

~~~/src/Component.tsx
/**
 * CandlekeepHome — The main homescreen for the Candlekeep RolePlay AI platform.
 * "The Scroll Hall" layout: a split-panel design with:
 * - Left sidebar (320px): Brand mark, navigation, recent sessions, theme toggle
 * - Right content area: Search bar, Continue Your Tale row, Discover Characters grid
 *
 * Supports full light/dark theming with warm literary fantasy aesthetic.
 */

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { SearchBar } from './SearchBar';
import { ContinueTaleSection } from './ContinueTaleSection';
import { DiscoverSection } from './DiscoverSection';
import { useTheme } from './hooks';
import {
  RECENT_SESSIONS,
  CONTINUE_SESSIONS,
  DISCOVER_CHARACTERS,
} from './constants';

export interface CandlekeepHomeProps {
  /** Override default dark mode state */
  defaultDark?: boolean;
}

export function CandlekeepHome({ defaultDark }: CandlekeepHomeProps) {
  const { isDark, toggle } = useTheme();
  const [activeNav, setActiveNav] = useState('home');

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="flex h-screen bg-background text-foreground overflow-hidden transition-colors duration-400">
        {/* Sidebar */}
        <Sidebar
          isDark={isDark}
          onToggleTheme={toggle}
          activeNav={activeNav}
          onNavChange={setActiveNav}
          recentSessions={RECENT_SESSIONS}
        />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[960px] mx-auto px-8 py-8 space-y-8">
            {/* Greeting */}
            <div>
              <h1
                className="text-2xl font-bold text-foreground tracking-wide mb-1"
                style={{ fontFamily: 'Cinzel, Georgia, serif' }}
              >
                Welcome back, Adventurer
              </h1>
              <p className="text-sm text-muted-foreground">
                Every tale begins with a spark. What story will you tell today?
              </p>
            </div>

            {/* Search */}
            <SearchBar />

            {/* Continue Your Tale */}
            <ContinueTaleSection sessions={CONTINUE_SESSIONS} />

            {/* Discover Characters */}
            <DiscoverSection characters={DISCOVER_CHARACTERS} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CandlekeepHome;
~~~

~~~/src/SearchBar.tsx
/**
 * SearchBar component for the Candlekeep content area.
 * Features a rounded input with quill icon, warm glow on focus,
 * and subtle expand animation.
 */

import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
          focused
            ? 'border-primary bg-background shadow-[0_0_0_3px_hsl(var(--primary)/0.12)]'
            : 'border-border bg-muted/40 hover:border-muted-foreground/30'
        }`}
      >
        <Search
          className={`w-[18px] h-[18px] flex-shrink-0 transition-colors duration-300 ${
            focused ? 'text-primary' : 'text-muted-foreground'
          }`}
        />
        <input
          type="text"
          placeholder="Search the library for tales, characters, worlds..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
~~~

~~~/src/CharacterCard.tsx
/**
 * CharacterCard — overlay gradient style card for character discovery.
 * Full-bleed character portrait with a dark gradient at the bottom
 * displaying character name, genre tags, and chat count.
 * Hover: subtle scale + warm amber shadow bloom.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import type { Character } from './types';

interface CharacterCardProps {
  character: Character;
  index: number;
}

export function CharacterCard({ character, index }: CharacterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: 'easeOut' }}
      className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[3/4]"
      style={{
        boxShadow: '0 2px 12px hsl(var(--foreground) / 0.06)',
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 8px 32px hsl(var(--primary) / 0.18)',
      }}
    >
      {/* Character portrait */}
      <img
        src={character.imageUrl}
        alt={character.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Top badge — chat count */}
      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/80 text-[11px]">
        <MessageCircle className="w-3 h-3" />
        {character.chatCount >= 1000
          ? `${(character.chatCount / 1000).toFixed(1)}k`
          : character.chatCount}
      </div>

      {/* Bottom info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3
          className="text-white font-semibold text-base mb-1.5 drop-shadow-lg"
          style={{ fontFamily: 'Cinzel, Georgia, serif', letterSpacing: '0.02em' }}
        >
          {character.name}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {character.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-white/15 backdrop-blur-sm text-white/80 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-white/50 text-[11px] mt-2">
          by {character.creator}
        </p>
      </div>
    </motion.div>
  );
}

export default CharacterCard;
~~~

~~~/src/DiscoverSection.tsx
/**
 * DiscoverSection — 3-column grid of CharacterCard components.
 * Displays the "Discover Characters" heading with category filter pills.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CharacterCard } from './CharacterCard';
import type { Character } from './types';

interface DiscoverSectionProps {
  characters: Character[];
}

const CATEGORIES = ['All', 'Fantasy', 'Adventure', 'Romance', 'Sci-Fantasy', 'Dark Fantasy'];

export function DiscoverSection({ characters }: DiscoverSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? characters
      : characters.filter((c) =>
          c.tags.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()))
        );

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-lg font-semibold text-foreground tracking-wide"
          style={{ fontFamily: 'Cinzel, Georgia, serif' }}
        >
          Discover Characters
        </h2>
      </div>

      {/* Category pills */}
      <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-colors duration-200 ${
              activeCategory === cat
                ? 'text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground border border-border hover:border-muted-foreground/40'
            }`}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="category-pill"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((character, i) => (
          <CharacterCard key={character.id} character={character} index={i} />
        ))}
      </div>
    </section>
  );
}

export default DiscoverSection;
~~~

~~~/src/ContinueTaleSection.tsx
/**
 * ContinueTaleSection — horizontal scrollable row of landscape cards
 * showing active RP sessions the user can resume. Each card features
 * a background image with a gradient overlay and session metadata.
 */

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, MessageSquare } from 'lucide-react';
import type { ContinueSession } from './types';

interface ContinueTaleSectionProps {
  sessions: ContinueSession[];
}

export function ContinueTaleSection({ sessions }: ContinueTaleSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-lg font-semibold text-foreground tracking-wide"
          style={{ fontFamily: 'Cinzel, Georgia, serif' }}
        >
          Continue Your Tale
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {sessions.map((session, i) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.45, ease: 'easeOut' }}
            className="relative flex-shrink-0 w-[280px] h-[160px] rounded-xl overflow-hidden cursor-pointer group"
          >
            {/* Background image */}
            <img
              src={session.imageUrl}
              alt={session.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-semibold text-sm mb-1 drop-shadow-md">
                {session.title}
              </h3>
              <p className="text-white/70 text-xs mb-2">
                with {session.characterName}
              </p>
              <div className="flex items-center gap-3 text-white/60 text-[11px]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {session.lastActivity}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  {session.messageCount}
                </span>
              </div>
            </div>

            {/* Hover warm glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-inset ring-primary/40 rounded-xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ContinueTaleSection;
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design
