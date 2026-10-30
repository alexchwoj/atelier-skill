# BroLabFanbase

> [PAGE] The main BroLab Fanbase application container including landing page, dashboards, and app shell.


---

You are given a task to integrate an existing React component in the codebase

~~~/README.md
# BroLab Fanbase

A minimal MVP platform for artists and fans.

## Features
- **Landing Page**: Editorial style, conversion focused.
- **Fan Dashboard**: Follow artists, view purchases.
- **Artist Dashboard**: Manage profile, links, events.
- **Public Hub**: Artist public page.

## Usage

```tsx
import BroLabFanbase from '@/sd-components/717d7811-1df6-403a-8a33-21a315b8c315';

export default function App() {
  return <BroLabFanbase />;
}
```
~~~

~~~/src/App.tsx
import BroLabFanbase from './Component';

export default function App() {
  return <BroLabFanbase />;
}
~~~

~~~/package.json
{
  "name": "brolab-fanbase",
  "description": "BroLab Fanbase MVP - Artist & Fan Platform",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.28.0",
    "lucide-react": "^0.300.0",
    "framer-motion": "^10.16.4",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "date-fns": "^3.0.0",
    "zod": "^3.22.4"
  }
}
~~~

~~~/src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
~~~

~~~/src/Component.tsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FanDashboard from './pages/dashboard/FanDashboard';
import ArtistDashboard from './pages/dashboard/ArtistDashboard';
import ArtistProfile from './pages/dashboard/ArtistProfile';
import PublicArtistHub from './pages/PublicArtistHub';

// Re-export specific pages for easy access if needed
export { LandingPage, FanDashboard, ArtistDashboard, PublicArtistHub };

// Main Component that includes Routing
export function BroLabFanbase() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Fan Routes */}
        <Route path="/me" element={<FanDashboard />} />
        
        {/* Artist Routes */}
        <Route path="/dashboard" element={<ArtistDashboard />} />
        <Route path="/dashboard/profile" element={<ArtistProfile />} />
        
        {/* Public Routes */}
        <Route path="/:slug" element={<PublicArtistHub />} />
      </Routes>
    </HashRouter>
  );
}

// Default export for the component system
export default BroLabFanbase;
~~~

~~~/src/i18n/getLocale.ts
/**
 * Minimal i18n scaffolding
 * Detects locale from browser or defaults to EN.
 */
export function getLocale(): string {
  if (typeof navigator === 'undefined') return 'en';
  
  const languages = navigator.languages || [navigator.language];
  const preferred = languages[0].split('-')[0].toLowerCase();
  
  return ['en', 'fr'].includes(preferred) ? preferred : 'en';
}
~~~

~~~/src/i18n/strings/en.ts
export const strings = {
  landing: {
    hero: {
      title: "Your career isn't an algorithm.",
      subtitle: "Own your fanbase. Build a mobile-first artist hub.",
      cta_primary: "Join the beta",
      cta_secondary: "Watch 30s demo"
    },
    waitlist: {
      placeholder: "Enter your email",
      submit: "Join Waitlist",
      success: "You're on the list!"
    }
  },
  common: {
    signIn: "Sign In",
    signOut: "Sign Out",
    loading: "Loading..."
  }
};
~~~

~~~/src/pages/LandingPage.tsx
/**
 * Landing Page
 * Phase 1: High conversion, editorial style, mobile-first.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Check } from 'lucide-react';
import { cn } from '../lib/utils';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Convex waitlist.submit
    alert('Added to waitlist: ' + email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
        <div className="font-serif font-bold text-2xl tracking-tight">BroLab Fanbase</div>
        <div className="flex items-center gap-4">
          <Link to="/sign-in" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Sign In
          </Link>
          <Link 
            to="/dashboard" 
            className="hidden sm:flex bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Join Beta
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.1]">
            Your career isn’t <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              an algorithm.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Own your fanbase. Build a mobile-first artist hub where fans follow your drops, never miss shows, and support you — all from one link.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <form onSubmit={handleWaitlistSubmit} className="flex w-full sm:w-auto gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary/50 border border-border px-4 py-3 rounded-full w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <button 
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                Join Beta <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="pt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <button className="flex items-center gap-2 hover:text-foreground transition-colors group">
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                <Play className="w-3 h-3 fill-current" />
              </div>
              Watch 30s demo
            </button>
            <span className="w-1 h-1 bg-border rounded-full mx-2" />
            <span>No credit card required</span>
          </div>
        </motion.div>
      </section>

      {/* Feature Grid (Minimal) */}
      <section className="py-24 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Direct to Fan",
              desc: "No algorithms hiding your posts. When you drop, your fans know immediately via their dashboard."
            },
            {
              title: "Global Commerce",
              desc: "Sell tickets, merch, and digital downloads directly. Keep more of what you earn."
            },
            {
              title: "Own Your Data",
              desc: "Get real emails and phone numbers. Build a portable asset that lasts your entire career."
            }
          ].map((feature, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-1 bg-accent mb-6" />
              <h3 className="text-2xl font-serif font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-6 mb-8">
          <Link to="#" className="hover:text-foreground">Terms</Link>
          <Link to="#" className="hover:text-foreground">Privacy</Link>
          <Link to="#" className="hover:text-foreground">Contact</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} BroLab Entertainment. All rights reserved.</p>
      </footer>
    </div>
  );
}
~~~

~~~/src/components/AppShell.tsx
/**
 * AppShell Component
 * Responsive layout shell with Desktop Sidebar and Mobile Top/Drawer navigation.
 */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Music, 
  Calendar, 
  CreditCard, 
  Settings, 
  LogOut,
  LayoutDashboard,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

interface AppShellProps {
  children: React.ReactNode;
  userType: 'fan' | 'artist';
}

export function AppShell({ children, userType }: AppShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const artistNav: NavItem[] = [
    { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Profile & Bio', href: '/dashboard/profile', icon: User },
    { label: 'Links', href: '/dashboard/links', icon: Music },
    { label: 'Events', href: '/dashboard/events', icon: Calendar },
    { label: 'Billing', href: '/dashboard/billing', icon: CreditCard },
  ];

  const fanNav: NavItem[] = [
    { label: 'My Following', href: '/me', icon: Heart },
    { label: 'Purchases', href: '/me/purchases', icon: Music },
    { label: 'Billing', href: '/me/billing', icon: CreditCard },
  ];

  const navItems = userType === 'artist' ? artistNav : fanNav;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row">
      {/* Mobile Top Nav */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="font-serif font-bold text-xl tracking-tight">
          BroLab Fanbase
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-accent rounded-full transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-[65px] bg-background z-40 p-6 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg text-lg font-medium transition-colors",
                    location.pathname === item.href 
                      ? "bg-accent text-accent-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto pt-6 border-t border-border">
              <div className="flex items-center gap-3 p-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">User Name</p>
                  <p className="text-sm text-muted-foreground capitalize">{userType}</p>
                </div>
              </div>
              <button className="flex items-center gap-3 p-3 w-full text-left text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border min-h-screen sticky top-0 bg-card">
        <div className="p-6">
          <Link to="/" className="font-serif font-bold text-xl tracking-tight block mb-8">
            BroLab Fanbase
          </Link>
          
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.href 
                    ? "bg-accent text-accent-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t border-border">
          <div className="flex items-center gap-3 px-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <p className="font-medium text-sm truncate">User Name</p>
              <p className="text-xs text-muted-foreground capitalize">{userType}</p>
            </div>
          </div>
          <button className="flex items-center gap-3 px-2 py-1.5 w-full text-left text-xs text-muted-foreground hover:text-destructive transition-colors">
            <LogOut className="w-3 h-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
~~~

~~~/src/pages/PublicArtistHub.tsx
/**
 * Public Artist Hub
 * The main public page for an artist.
 * Route: /[artistSlug]
 */
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Calendar, 
  ShoppingBag, 
  Share2, 
  Instagram, 
  Youtube, 
  Twitter, 
  Music, 
  Heart 
} from 'lucide-react';
import { cn } from '../lib/utils';

// Mock Data
const ARTIST_DATA = {
  name: "The Midnight",
  slug: "themidnight",
  bio: "We are a synthwave band from Los Angeles. Our new album Heroes is out now.",
  avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  coverUrl: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  socials: [
    { icon: Instagram, url: "#" },
    { icon: Youtube, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Music, url: "#" },
  ],
  links: [
    { id: 1, title: "Listen to 'Heroes' on Spotify", url: "#", type: "music" },
    { id: 2, title: "Official Merch Store", url: "#", type: "shop" },
    { id: 3, title: "Watch 'Change Your Heart' Video", url: "#", type: "video" },
  ],
  events: [
    { id: 1, date: "2024-06-15", city: "Los Angeles, CA", venue: "The Greek Theatre", ticketUrl: "#" },
    { id: 2, date: "2024-06-20", city: "New York, NY", venue: "Terminal 5", ticketUrl: "#" },
    { id: 3, date: "2024-07-05", city: "London, UK", venue: "Brixton Academy", ticketUrl: "#" },
  ]
};

export default function PublicArtistHub() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState<'links' | 'events'>('links');
  const [isFollowing, setIsFollowing] = useState(false);

  // In a real app, fetch data based on slug. 
  // For demo, we just use the mock data regardless of slug.
  const artist = ARTIST_DATA;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        <img 
          src={artist.coverUrl} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        
        {/* Navbar Overlay */}
        <div className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
          <Link to="/" className="text-white/80 hover:text-white font-serif font-bold text-xl drop-shadow-md">
            BroLab Fanbase
          </Link>
          <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Artist Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-6 md:p-12 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-background overflow-hidden mb-4 shadow-xl"
          >
            <img src={artist.avatarUrl} alt={artist.name} className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 drop-shadow-lg"
          >
            {artist.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-lg mb-6 drop-shadow-md"
          >
            {artist.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <button 
              onClick={() => setIsFollowing(!isFollowing)}
              className={cn(
                "px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2",
                isFollowing 
                  ? "bg-transparent border border-white/50 text-white hover:bg-white/10" 
                  : "bg-white text-black hover:bg-white/90"
              )}
            >
              {isFollowing ? (
                <>Following</>
              ) : (
                <>Follow <Heart className="w-4 h-4 fill-current" /></>
              )}
            </button>
            
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md rounded-full px-4 py-2">
              {artist.socials.map((social, i) => (
                <a key={i} href={social.url} className="p-2 text-white/80 hover:text-white transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <div className="flex border-b border-border mb-8">
          <button 
            onClick={() => setActiveTab('links')}
            className={cn(
              "flex-1 pb-4 text-center font-medium transition-colors relative",
              activeTab === 'links' ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Latest Drops
            {activeTab === 'links' && (
              <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('events')}
            className={cn(
              "flex-1 pb-4 text-center font-medium transition-colors relative",
              activeTab === 'events' ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Tour Dates
            {activeTab === 'events' && (
              <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
        </div>

        <div className="space-y-4">
          {activeTab === 'links' ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {artist.links.map((link) => (
                <a 
                  key={link.id}
                  href={link.url}
                  className="block group bg-card border border-border hover:border-accent p-4 rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">{link.title}</span>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      {link.type === 'shop' ? <ShoppingBag className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {artist.events.map((event) => (
                <div 
                  key={event.id}
                  className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl"
                >
                  <div className="bg-secondary px-4 py-2 rounded-lg text-center min-w-[70px]">
                    <span className="block text-xs text-muted-foreground uppercase font-bold">Jun</span>
                    <span className="block text-xl font-bold">{event.date.split('-')[2]}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{event.city}</h3>
                    <p className="text-muted-foreground text-sm">{event.venue}</p>
                  </div>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                    Tickets
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
~~~

~~~/src/pages/dashboard/FanDashboard.tsx
import React from 'react';
import { AppShell } from '../../components/AppShell';
import { 
  Heart, 
  Music, 
  Calendar, 
  Share2, 
  MessageCircle, 
  Play, 
  MoreHorizontal,
  Ticket,
  ShoppingBag,
  ExternalLink,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Mock Data ---

type FeedItemType = 'release' | 'concert' | 'merch' | 'update';

interface FeedItem {
  id: string;
  type: FeedItemType;
  artist: {
    name: string;
    avatar: string;
    slug: string;
  };
  timestamp: string;
  content: {
    title: string;
    description: string;
    image?: string;
    meta?: string; // e.g., "Single", "Album", "Tour"
    link?: string;
  };
  stats: {
    likes: number;
    comments: number;
  };
}

const FEED_ITEMS: FeedItem[] = [
  {
    id: '1',
    type: 'release',
    artist: {
      name: 'The Midnight',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop',
      slug: 'the-midnight'
    },
    timestamp: '2 hours ago',
    content: {
      title: 'Heroes (Instrumental) - Out Now',
      description: 'The instrumental version of our latest album is finally here. Experience the synthwave journey without words.',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80',
      meta: 'New Album',
      link: '#'
    },
    stats: { likes: 1240, comments: 85 }
  },
  {
    id: '2',
    type: 'concert',
    artist: {
      name: 'Gunship',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      slug: 'gunship'
    },
    timestamp: '5 hours ago',
    content: {
      title: 'World Tour 2024 Announced',
      description: 'We are hitting the road this summer! Check out the dates and grab your tickets before they are gone.',
      image: 'https://images.unsplash.com/photo-1459749411177-0473ef71607b?w=800&q=80',
      meta: 'Tour Announcement',
      link: '#'
    },
    stats: { likes: 3500, comments: 420 }
  },
  {
    id: '3',
    type: 'merch',
    artist: {
      name: 'FM-84',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
      slug: 'fm-84'
    },
    timestamp: '1 day ago',
    content: {
      title: 'Limited Edition Vinyl Restock',
      description: 'Atlas is back in stock. 180g colored vinyl. Limited to 500 copies worldwide.',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&q=80',
      meta: 'Merch Drop',
      link: '#'
    },
    stats: { likes: 890, comments: 120 }
  }
];

const SUGGESTED_ARTISTS = [
  { id: 1, name: 'Timecop1983', genre: 'Synthwave', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop' },
  { id: 2, name: 'Carpenter Brut', genre: 'Darksynth', image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=100&h=100&fit=crop' },
  { id: 3, name: 'Perturbator', genre: 'Cyberpunk', image: 'https://images.unsplash.com/photo-1514525253440-b393452e2729?w=100&h=100&fit=crop' },
];

// --- Sub-Components ---

function FeedCard({ item }: { item: FeedItem }) {
  return (
    <div className="bg-card border border-border/50 rounded-2xl overflow-hidden mb-6 transition-all hover:border-border hover:shadow-lg group">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to={`/${item.artist.slug}`} className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-background group-hover:ring-accent transition-all">
              <img src={item.artist.avatar} alt={item.artist.name} className="w-full h-full object-cover" />
            </div>
            {/* Online/New Indicator could go here */}
          </Link>
          <div>
            <Link to={`/${item.artist.slug}`} className="font-bold hover:underline decoration-accent underline-offset-4">
              {item.artist.name}
            </Link>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{item.timestamp}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                {item.type === 'release' && <Music className="w-3 h-3" />}
                {item.type === 'concert' && <Ticket className="w-3 h-3" />}
                {item.type === 'merch' && <ShoppingBag className="w-3 h-3" />}
                {item.type === 'update' && <MessageCircle className="w-3 h-3" />}
                <span className="uppercase font-medium tracking-wider">{item.content.meta || item.type}</span>
              </span>
            </div>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Media Content */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        {item.content.image ? (
          <img 
            src={item.content.image} 
            alt={item.content.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <Music className="w-12 h-12 text-muted-foreground opacity-50" />
          </div>
        )}
        
        {/* Overlay Action Button (Play/View) */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          {item.type === 'release' && (
            <button className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-all hover:bg-primary">
              <Play className="w-8 h-8 ml-1" />
            </button>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5">
        <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent transition-colors">
          {item.content.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {item.content.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-2">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span>{item.stats.likes}</span>
            </button>
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-blue-400 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>{item.stats.comments}</span>
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            
            {/* Primary Action */}
            {item.type === 'concert' ? (
              <button className="bg-foreground text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-foreground/90 transition-colors flex items-center gap-2">
                <Ticket className="w-3 h-3" />
                Get Tickets
              </button>
            ) : item.type === 'merch' ? (
              <button className="bg-foreground text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-foreground/90 transition-colors flex items-center gap-2">
                <ShoppingBag className="w-3 h-3" />
                Shop Now
              </button>
            ) : (
               <button className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-accent/90 transition-colors flex items-center gap-2">
                <Play className="w-3 h-3" />
                Listen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SuggestedArtistCard({ artist }: { artist: typeof SUGGESTED_ARTISTS[0] }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-accent/5 transition-colors group">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden">
          <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-sm group-hover:text-accent transition-colors">{artist.name}</h4>
          <p className="text-xs text-muted-foreground">{artist.genre}</p>
        </div>
      </div>
      <button className="text-xs font-bold text-accent hover:text-accent-foreground border border-accent hover:bg-accent px-3 py-1 rounded-full transition-all">
        Follow
      </button>
    </div>
  );
}

// --- Main Page Component ---

export default function FanDashboard() {
  return (
    <AppShell userType="fan">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Main Feed (8 cols) */}
        <div className="lg:col-span-8 space-y-2">
          {/* Feed Header */}
          <div className="flex items-end justify-between mb-6">
            <div>
              <h1 className="text-3xl font-serif font-bold">Your Feed</h1>
              <p className="text-muted-foreground text-sm">Latest updates from your artists</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="px-3 py-1 text-xs font-medium bg-foreground text-background rounded-full">All</button>
              <button className="px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-secondary rounded-full">Music</button>
              <button className="px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-secondary rounded-full">Events</button>
            </div>
          </div>

          {/* Feed Items */}
          <div className="space-y-6">
            {FEED_ITEMS.map((item) => (
              <FeedCard key={item.id} item={item} />
            ))}
            
            {/* End of Feed */}
            <div className="py-8 text-center">
              <div className="inline-block p-3 rounded-full bg-secondary text-muted-foreground mb-3 animate-pulse">
                <MoreHorizontal className="w-6 h-6" />
              </div>
              <p className="text-sm text-muted-foreground">You are all caught up!</p>
              <button className="mt-4 text-accent text-sm font-medium hover:underline">Find more artists</button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* My Stats Widget */}
          <div className="bg-card border border-border/50 rounded-2xl p-5 sticky top-24">
            <h2 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              My Community
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-secondary/30 p-4 rounded-xl text-center">
                <span className="block text-2xl font-bold font-mono">12</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Following</span>
              </div>
              <div className="bg-secondary/30 p-4 rounded-xl text-center">
                <span className="block text-2xl font-bold font-mono">5</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Events</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-sm py-2 border-b border-border/50">
                <span className="text-muted-foreground">Next Event</span>
                <span className="font-medium text-right">Gunship, London<br/><span className="text-xs text-muted-foreground">Aug 14, 2024</span></span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span className="text-muted-foreground">Membership</span>
                <span className="font-medium text-accent">Pro Fan</span>
              </div>
            </div>
          </div>

          {/* Suggested Artists Widget */}
          <div className="bg-card border border-border/50 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif font-bold text-lg">Suggested Artists</h2>
              <button className="text-xs text-accent hover:underline">View All</button>
            </div>
            <div className="space-y-2">
              {SUGGESTED_ARTISTS.map(artist => (
                <SuggestedArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          </div>

          {/* Mini Player / Featured Track (Optional decoration) */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 to-purple-900 p-6 text-white">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Music className="w-24 h-24" />
            </div>
            <p className="text-xs font-medium text-indigo-200 mb-1 uppercase tracking-widest">Featured Track</p>
            <h3 className="text-xl font-serif font-bold mb-1">Endless Summer</h3>
            <p className="text-sm text-indigo-200 mb-4">The Midnight</p>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white text-indigo-900 flex items-center justify-center hover:scale-105 transition-transform">
                <Play className="w-5 h-5 ml-1" />
              </button>
              <div className="h-1 flex-1 bg-indigo-950/50 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-indigo-400 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AppShell>
  );
}
~~~

~~~/src/pages/dashboard/ArtistProfile.tsx
import React, { useState } from 'react';
import { AppShell } from '../../components/AppShell';
import { Camera, Save, Globe, Instagram, Youtube, Twitter, Music } from 'lucide-react';

export default function ArtistProfile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <AppShell userType="artist">
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-border pb-6">
          <div>
            <h1 className="text-2xl font-serif font-bold">Profile & Bio</h1>
            <p className="text-muted-foreground text-sm">Customize how you appear on your public hub.</p>
          </div>
          <button 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Avatar & Basic Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border p-6 rounded-xl space-y-4">
              <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Profile Image</h3>
              
              <div className="relative group">
                <div className="aspect-square rounded-xl overflow-hidden bg-secondary">
                  <img 
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Image URL</label>
                <input 
                  type="text" 
                  defaultValue="https://images.unsplash.com/..." 
                  className="w-full bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <p className="text-xs text-muted-foreground">For MVP, paste a direct image link.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Public Data & Socials */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border p-6 rounded-xl space-y-6">
              <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Public Data</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Display Name</label>
                  <input 
                    type="text" 
                    defaultValue="The Midnight" 
                    className="w-full bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Unique Slug</label>
                  <div className="flex items-center">
                    <span className="bg-secondary border border-r-0 border-border rounded-l-md px-3 py-2 text-sm text-muted-foreground">fan.brolab/</span>
                    <input 
                      type="text" 
                      defaultValue="themidnight" 
                      className="flex-1 bg-secondary/50 border border-border rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium">Bio</label>
                  <textarea 
                    rows={4}
                    defaultValue="We are a synthwave band from Los Angeles. Our new album Heroes is out now."
                    className="w-full bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-xl space-y-6">
              <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Social Links</h3>
              <div className="space-y-4">
                {[
                  { icon: Instagram, label: "Instagram", placeholder: "instagram.com/..." },
                  { icon: Youtube, label: "YouTube", placeholder: "youtube.com/..." },
                  { icon: Twitter, label: "X (Twitter)", placeholder: "x.com/..." },
                  { icon: Music, label: "Spotify", placeholder: "open.spotify.com/..." },
                  { icon: Globe, label: "Website", placeholder: "yourwebsite.com" },
                ].map((social, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-secondary/20 rounded-lg border border-transparent hover:border-border transition-colors">
                    <social.icon className="w-5 h-5 text-muted-foreground" />
                    <div className="flex-1 space-y-1">
                      <label className="text-xs font-medium block">{social.label}</label>
                      <input 
                        type="text" 
                        placeholder={social.placeholder}
                        className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary border border-border cursor-pointer">
                      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-green-500 transition"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
~~~

~~~/src/pages/dashboard/ArtistDashboard.tsx
import React from 'react';
import { AppShell } from '../../components/AppShell';
import { Share2, Users, DollarSign, Calendar, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArtistDashboard() {
  return (
    <AppShell userType="artist">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2">Artist Dashboard</h1>
            <p className="text-muted-foreground">Manage your hub and connect with your fanbase.</p>
          </div>
          <Link 
            to="/artist-name" 
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            View Public Hub <Share2 className="w-4 h-4" />
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground text-sm">Total Followers</span>
              <Users className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-3xl font-bold">1,234</span>
            <span className="text-xs text-green-500 ml-2">+12% this month</span>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground text-sm">Revenue (30d)</span>
              <DollarSign className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-3xl font-bold">$4,500</span>
            <span className="text-xs text-green-500 ml-2">+5% this month</span>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground text-sm">Upcoming Events</span>
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-3xl font-bold">3</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold mb-4">Setup Checklist</h3>
            <div className="space-y-3">
              {[
                { label: 'Complete your profile', done: true },
                { label: 'Add your first event', done: true },
                { label: 'Connect Stripe for payouts', done: false },
                { label: 'Post your first update', done: false },
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${task.done ? 'bg-green-500 border-green-500 text-white' : 'border-border'}`}>
                    {task.done && <Users className="w-3 h-3" />} 
                    {/* Using Users as checkmark placeholder since Check icon wasn't imported */}
                  </div>
                  <span className={task.done ? 'text-muted-foreground line-through' : ''}>{task.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <Plus className="w-6 h-6" />
            </div>
            <h3 className="font-bold">Create New Content</h3>
            <p className="text-sm text-muted-foreground">Add a new event, product, or link to your hub.</p>
            <div className="flex gap-2">
              <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md text-sm font-medium">Add Link</button>
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md text-sm font-medium">Add Event</button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design
