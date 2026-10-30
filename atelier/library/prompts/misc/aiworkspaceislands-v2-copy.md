# AiWorkspaceIslands v2 (Copy)

> Copy of AiWorkspaceIslands from version 2


---

You are given a task to integrate an existing React component in the codebase

~~~/README.md
# AI Workspace - Floating Islands Variant

A split-screen workspace interface featuring a "Floating Islands" layout concept.

## Features

- **Split-Screen Layout**: Detached panels for Chat (Left) and Workspace (Right).
- **Floating Island Aesthetic**: Deep shadows and rounded corners on a soft background.
- **Agent Chat Stream**: Interactive chat history with "Thinking" blocks.
- **Storyboard Canvas**: Grid of vertical video scenes with hover interactions.
- **Motion Light Design**: Uses project fonts (Archivo, Manrope) and soft color palette.

## Usage

```tsx
import { AiWorkspaceIslands } from '@/sd-components/d866d390-878f-492e-be87-60e82682e126';

function App() {
  return <AiWorkspaceIslands />;
}
```
~~~

~~~/src/App.tsx
import AiWorkspaceIslands from './Component';

export default function App() {
  return (
    <div className="w-full h-full bg-[#F8FAFC]">
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
        
        :root {
          --font-archivo: 'Archivo', sans-serif;
          --font-manrope: 'Manrope', sans-serif;
        }

        .font-archivo { font-family: var(--font-archivo); }
        .font-manrope { font-family: var(--font-manrope); }
      `}</style>
      <AiWorkspaceIslands />
    </div>
  );
}
~~~

~~~/package.json
{
  "name": "ai-workspace-islands",
  "version": "1.0.0",
  "description": "Floating Islands layout for AI Video Agent workspace",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.294.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
~~~

~~~/src/Component.tsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Paperclip, 
  Mic, 
  Settings, 
  CheckCircle2, 
  RotateCw, 
  Play, 
  Sparkles,
  Layout,
  Film,
  Image as ImageIcon,
  Clock,
  FileText,
  User,
  MoreHorizontal,
  Music,
  ChevronDown,
  Expand,
  Loader2,
  Share2,
  Download,
  Palette,
  Wind,
  Volume2,
  AlignLeft,
  X,
  Pause,
  Maximize2,
  VolumeX,
  SkipBack,
  SkipForward
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Import reusable components from Motion Light system
import { Button } from '@/sd-components/ea4073da-1d86-4d53-a727-8251a694f49d';
import { Card } from '@/sd-components/e3000fab-cc5b-4d46-87b4-27befb6faec9';
import { Input } from '@/sd-components/6c73260c-764b-4370-8e55-4fdad7f394b7';

// Utility for Tailwind class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
interface Message {
  id: string;
  role: 'user' | 'agent';
  content: string;
  timestamp: string;
}

interface Scene {
  id: string;
  number: string;
  startTime: string;
  endTime: string;
  script: string;
  state: 'concept' | 'generating' | 'ready';
  thumbnailUrl: string;
  specs: {
    visuals: string;
    animation: string;
    sfx: string;
  };
}

// --- Sub-components ---

const ChatBubble = ({ 
  isUser, 
  content, 
  isThinking 
}: { 
  isUser: boolean; 
  content: React.ReactNode; 
  isThinking?: boolean 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={cn(
        "flex w-full mb-6",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div className={cn(
        "max-w-[85%] p-4 rounded-2xl relative",
        isUser 
          ? "bg-blue-600 text-white rounded-br-sm shadow-lg shadow-blue-500/20" 
          : "bg-white text-slate-800 rounded-bl-sm shadow-sm border border-slate-100"
      )}>
        {isThinking && (
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-blue-500">
            <Sparkles size={12} />
            <span>AI Reasoning</span>
          </div>
        )}
        <div className={cn("text-sm leading-relaxed", isUser ? "font-medium" : "font-normal")}>
          {content}
        </div>
      </div>
    </motion.div>
  );
};

const ThinkingStep = ({ text, delay }: { text: string; delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center gap-2 text-xs text-slate-500 mb-1"
  >
    <CheckCircle2 size={14} className="text-emerald-500" />
    <span>{text}</span>
  </motion.div>
);

const TabButton = ({ active, label, onClick, icon: Icon }: { active: boolean; label: string; onClick: () => void; icon: any }) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
      active 
        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10" 
        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
    )}
  >
    <Icon size={16} />
    {label}
  </button>
);

// --- Data ---
const SCENES: Scene[] = [
  {
    id: 's1',
    number: '01',
    startTime: '0:00',
    endTime: '0:05',
    script: "We guarantee quality that lasts a lifetime.",
    state: 'ready',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    specs: {
      visuals: "Icon: 'Warranty Shield' (Gold). Text: '1 Year Guarantee'. Font: Manrope Bold.",
      animation: "Main Icon: Rotates 360°. Text: Slides in from left side (opacity 0% → 100%).",
      sfx: "Subtle 'Pop' sound on icon appearance, soft wind swoosh."
    }
  },
  {
    id: 's2',
    number: '02',
    startTime: '0:05',
    endTime: '0:09',
    script: "Crafted with precision for the modern explorer.",
    state: 'generating',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    specs: {
      visuals: "Close up of sneaker texture. Overlay text: 'Premium Materials'.",
      animation: "Camera: Slow zoom in. Text: Fade in with blur effect.",
      sfx: "Fabric texture sound, low bass hum."
    }
  },
  {
    id: 's3',
    number: '03',
    startTime: '0:09',
    endTime: '0:15',
    script: "Step into the future of comfort today.",
    state: 'concept',
    thumbnailUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    specs: {
      visuals: "Model walking in city setting. Sunlight flare.",
      animation: "Transition: Cross-dissolve from previous scene.",
      sfx: "City ambience, optimistic synth chord."
    }
  }
];

// --- Main Component ---

export default function AiWorkspaceIslands() {
  const [activeTab, setActiveTab] = useState<'script' | 'storyboard' | 'preview'>('storyboard');
  const [activeSceneId, setActiveSceneId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  
  // Preview Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 15; // Total duration in seconds
  const playerInterval = useRef<NodeJS.Timeout | null>(null);

  // Handle Play/Pause logic
  useEffect(() => {
    if (isPlaying) {
      playerInterval.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    } else {
      if (playerInterval.current) clearInterval(playerInterval.current);
    }
    return () => {
      if (playerInterval.current) clearInterval(playerInterval.current);
    };
  }, [isPlaying]);

  // Derive current scene from time
  const getCurrentScene = () => {
    if (currentTime < 5) return SCENES[0];
    if (currentTime < 9) return SCENES[1];
    return SCENES[2];
  };

  const currentScene = getCurrentScene();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-screen w-full bg-slate-50 p-4 md:p-6 overflow-hidden flex flex-col md:flex-row gap-6 font-manrope text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- LEFT ISLAND: Agent Brain --- */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 100 }}
        className="w-full md:w-[35%] lg:w-[30%] flex flex-col h-full rounded-[32px] bg-white shadow-2xl shadow-slate-200/50 relative overflow-hidden ring-1 ring-slate-100/50"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-white/50 backdrop-blur-sm z-10 sticky top-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
              <Sparkles size={20} />
            </div>
            <div>
              <h2 className="font-archivo font-bold text-lg leading-none">Video Agent</h2>
              <span className="text-xs text-emerald-500 font-medium flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active & Thinking
              </span>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50">
            <Settings size={20} />
          </Button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/30 scroll-smooth">
          <ChatBubble 
            isUser={false}
            content="I've analyzed the script. Shall we start with a warranty focus to emphasize durability?" 
          />
          <ChatBubble 
            isUser={true}
            content="Yes, let's make sure the visuals feel premium." 
          />
          <ChatBubble 
            isUser={false} 
            isThinking={true}
            content={
              <div className="space-y-3">
                <p>Great choice. I'm generating scene concepts that highlight material quality and longevity.</p>
                <div className="pl-1 border-l-2 border-slate-100 py-1 space-y-2">
                  <ThinkingStep text="Analyzing tone: Premium & Reliable" delay={0.2} />
                  <ThinkingStep text="Matching stock footage..." delay={0.8} />
                  <ThinkingStep text="Drafting scene sequence..." delay={1.4} />
                </div>
              </div>
            }
          />
          
          <div className="h-4" /> {/* Spacer */}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="relative bg-slate-50 rounded-3xl p-2 pr-2 flex items-center ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-inner">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600 rounded-full hover:bg-white shadow-none">
              <Paperclip size={20} />
            </Button>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe your change..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium placeholder:text-slate-400 px-2 min-w-0"
            />
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 rounded-full hover:bg-white shadow-none">
                <Mic size={20} />
              </Button>
              <Button 
                size="icon" 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/25 h-10 w-10 ml-1"
              >
                <Send size={18} className="ml-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- RIGHT ISLAND: Workspace --- */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
        className="flex-1 flex flex-col h-full rounded-[32px] bg-white shadow-2xl shadow-slate-200/50 relative overflow-hidden ring-1 ring-slate-100/50"
      >
        {/* Workspace Header */}
        <div className="h-20 px-8 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-full border border-slate-100">
            <TabButton 
              active={activeTab === 'script'} 
              label="Script" 
              onClick={() => setActiveTab('script')}
              icon={FileText}
            />
            <TabButton 
              active={activeTab === 'storyboard'} 
              label="Storyboard" 
              onClick={() => setActiveTab('storyboard')}
              icon={Layout}
            />
            <TabButton 
              active={activeTab === 'preview'} 
              label="Preview" 
              onClick={() => setActiveTab('preview')}
              icon={Play}
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 shadow-sm relative z-0 hover:z-10 transition-all cursor-pointer hover:scale-110">
                  <img src={`https://i.pravatar.cc/100?img=${10+i}`} className="w-full h-full rounded-full" alt="Team" />
                </div>
              ))}
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <Button variant="ghost" className="rounded-full text-slate-500 font-medium">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
            <Button className="bg-slate-900 text-white rounded-full px-6 font-medium shadow-lg shadow-slate-900/20 hover:bg-slate-800">
              <Download className="w-4 h-4 mr-2" /> Export
            </Button>
          </div>
        </div>

        {/* Workspace Content */}
        <div className="flex-1 overflow-hidden relative bg-slate-50/30">
          <AnimatePresence mode="wait">
            
            {/* --- SCRIPT TAB --- */}
            {activeTab === 'script' && (
              <motion.div 
                key="script-view"
                className="absolute inset-0 flex flex-col"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-1 overflow-y-auto p-8 flex justify-center">
                  <div className="w-full max-w-3xl bg-slate-900 rounded-[24px] p-10 shadow-2xl relative overflow-hidden text-white my-4">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 space-y-8">
                      <div className="flex items-start gap-4">
                        <span className="text-indigo-400 font-mono text-sm pt-1">0:00</span>
                        <p className="text-2xl font-medium leading-relaxed text-white/90">
                          We guarantee <span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded">quality that lasts</span> a lifetime. 
                          Crafted with precision for the modern explorer.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-indigo-400 font-mono text-sm pt-1">0:05</span>
                        <p className="text-2xl font-medium leading-relaxed text-white/90">
                          Whether you're scaling peaks or navigating city streets, 
                          our gear moves with you. <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1 rounded">Sustainable. Durable. Timeless.</span>
                        </p>
                      </div>
                      <div className="flex items-start gap-4 opacity-50">
                        <span className="text-slate-500 font-mono text-sm pt-1">0:12</span>
                        <p className="text-2xl font-medium leading-relaxed text-white/90">
                          Step into the future of comfort today. 
                          <span className="border-b border-dashed border-slate-600 ml-2 text-slate-400 text-lg">[Visual Cue: Product Reveal]</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-20 bg-white border-t border-slate-100 px-8 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Voice Profile</p>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-800">Brittney</span>
                          <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-500 border border-slate-200">English</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                     <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Word Count</p>
                        <p className="font-bold text-slate-800">359 Words</p>
                      </div>
                    </div>
                     <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Est. Duration</p>
                        <p className="font-bold text-slate-800">2:52</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- STORYBOARD TAB --- */}
            {activeTab === 'storyboard' && (
              <motion.div 
                key="storyboard-view"
                className="absolute inset-0 overflow-y-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 pb-32 max-w-5xl mx-auto space-y-6">
                  {/* Scene List Header */}
                  <div className="flex items-center justify-between mb-2 px-2">
                    <h3 className="text-lg font-bold text-slate-900">Sequence Timeline</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                      <span>Total: 3 Scenes</span>
                      <span className="text-slate-300">|</span>
                      <span>00:15 Duration</span>
                    </div>
                  </div>

                  {/* Scene Cards List */}
                  {SCENES.map((scene) => (
                    <motion.div
                      key={scene.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group relative"
                    >
                      {/* Connecting Line */}
                      <div className="absolute left-[88px] top-full h-6 w-0.5 bg-slate-100 last:hidden z-0" />

                      <div className="flex bg-white rounded-[32px] p-5 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative z-10">
                        
                        {/* Left: Thumbnail (9:16) */}
                        <div className="relative w-[120px] aspect-[9/16] rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 cursor-pointer group/thumb shadow-inner border border-slate-100">
                          <img 
                            src={scene.thumbnailUrl} 
                            alt={`Scene ${scene.number}`}
                            className={cn(
                              "w-full h-full object-cover transition-transform duration-700",
                              scene.state === 'generating' ? "opacity-50 blur-sm scale-110" : "scale-100 group-hover/thumb:scale-110"
                            )}
                          />
                          
                          {/* State Overlays */}
                          {scene.state === 'ready' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/thumb:bg-black/30 transition-colors">
                              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg text-white group-hover/thumb:scale-110 transition-transform">
                                <Play className="w-4 h-4 fill-white" />
                              </div>
                            </div>
                          )}

                          {scene.state === 'generating' && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-900/10 backdrop-blur-[2px]">
                              <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-2" />
                              <span className="text-[10px] font-bold text-indigo-900 bg-white/80 px-2 py-0.5 rounded-full">Rendering...</span>
                            </div>
                          )}

                          {scene.state === 'concept' && (
                            <div className="absolute top-2 right-2 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                              <div className="p-1.5 rounded-full bg-black/50 backdrop-blur-md text-white">
                                <Expand className="w-3 h-3" />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right: Data Container */}
                        <div className="flex-1 ml-8 py-1 flex flex-col">
                          {/* Attractive Header: Production Slate Style */}
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center overflow-hidden rounded-full border border-slate-200 shadow-sm">
                              <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-black tracking-[0.1em] font-archivo">
                                SCENE {scene.number}
                              </span>
                              <div className="flex items-center gap-1.5 px-3 py-1 bg-white text-slate-500 text-[10px] font-bold font-archivo">
                                <Clock className="w-3 h-3 text-slate-400" />
                                <span>{scene.startTime}</span>
                                <span className="text-slate-300">→</span>
                                <span>{scene.endTime}</span>
                              </div>
                            </div>
                            
                            {scene.state === 'generating' && (
                              <div className="flex items-center gap-1.5 ml-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                                <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">Production in progress</span>
                              </div>
                            )}
                          </div>

                          {/* Script */}
                          <h4 className="text-2xl font-bold text-slate-800 leading-snug mb-6 pr-12 font-archivo">
                            "{scene.script}"
                          </h4>

                          {/* Production Specs Box */}
                          <div className="mt-auto bg-slate-50/80 rounded-[20px] p-5 border border-slate-100 grid grid-cols-3 gap-6 group-hover:bg-white group-hover:shadow-sm transition-all">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest font-archivo">
                                <Palette className="w-3.5 h-3.5" /> Visuals
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                {scene.specs.visuals}
                              </p>
                            </div>
                            
                            <div className="space-y-2 border-l border-slate-200/60 pl-6">
                              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest font-archivo">
                                <Wind className="w-3.5 h-3.5" /> Animation
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                {scene.specs.animation}
                              </p>
                            </div>

                            <div className="space-y-2 border-l border-slate-200/60 pl-6">
                              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest font-archivo">
                                <Volume2 className="w-3.5 h-3.5" /> SFX
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                {scene.specs.sfx}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Actions Menu */}
                        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-100">
                            <MoreHorizontal className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Fixed Global Audio Footer */}
                <div className="sticky bottom-6 left-6 right-6 mx-auto max-w-3xl z-30">
                   <div className="bg-slate-900/95 backdrop-blur-xl text-white rounded-full p-2 pl-7 pr-2 shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/5">
                      <div className="flex items-center gap-10">
                        {/* Voice */}
                        <button className="flex items-center gap-3.5 hover:opacity-80 transition-opacity group">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <User className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] text-slate-400 uppercase tracking-[0.15em] font-black font-archivo">Voiceover</p>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold font-archivo tracking-tight">Brittney</span>
                              <div className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-slate-700" />
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">English Soft</span>
                              </div>
                              <ChevronDown className="w-3 h-3 text-slate-600 group-hover:text-white transition-colors" />
                            </div>
                          </div>
                        </button>

                        {/* Divider */}
                        <div className="h-10 w-px bg-white/10" />

                        {/* Music */}
                        <button className="flex items-center gap-3.5 hover:opacity-80 transition-opacity group">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <Music className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] text-slate-400 uppercase tracking-[0.15em] font-black font-archivo">Music</p>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold font-archivo tracking-tight">Morning Adventure</span>
                              <div className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-slate-700" />
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Upbeat</span>
                              </div>
                              <ChevronDown className="w-3 h-3 text-slate-600 group-hover:text-white transition-colors" />
                            </div>
                          </div>
                        </button>
                      </div>

                      <Button className="bg-white text-slate-950 hover:bg-slate-100 rounded-full px-8 h-12 font-black text-xs uppercase tracking-widest font-archivo shadow-xl shadow-white/10 active:scale-95 transition-all">
                        Generate All
                      </Button>
                   </div>
                </div>
              </motion.div>
            )}

            {/* --- PREVIEW TAB --- */}
            {activeTab === 'preview' && (
              <motion.div 
                key="preview-view"
                className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/50"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main Preview Container */}
                <div className="flex-1 w-full max-w-7xl flex flex-col items-center justify-center relative p-8">
                  {/* Vertical Phone Frame / Pedestal */}
                  <motion.div 
                    className="relative w-[360px] h-[640px] bg-white rounded-[32px] shadow-2xl shadow-slate-300 overflow-hidden border border-white ring-1 ring-slate-100 group"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                  >
                    {/* Video Screen */}
                    <div className="absolute inset-0 bg-slate-900">
                      <img 
                        src={currentScene.thumbnailUrl}
                        className="w-full h-full object-cover opacity-80"
                        alt="Scene Preview"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
                    </div>

                    {/* Captions Overlay */}
                    <div className="absolute bottom-20 left-0 right-0 px-6 text-center">
                      <motion.p 
                        key={currentScene.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-white font-archivo font-bold text-xl leading-snug drop-shadow-md"
                      >
                        "{currentScene.script}"
                      </motion.p>
                    </div>

                    {/* Play/Pause Overlay Button */}
                    <AnimatePresence>
                      {!isPlaying && (
                        <motion.button 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.2 }}
                          onClick={() => setIsPlaying(true)}
                          className="absolute inset-0 m-auto w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 shadow-xl hover:scale-110 transition-transform z-10"
                        >
                          <Play className="w-8 h-8 ml-1 fill-white" />
                        </motion.button>
                      )}
                    </AnimatePresence>

                    {/* Progress Bar (Phone internal) */}
                    <div className="absolute top-2 left-2 right-2 flex gap-1 z-20">
                      {SCENES.map((scene, idx) => (
                        <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-white"
                            initial={{ width: "0%" }}
                            animate={{ 
                              width: currentScene.id === scene.id 
                                ? "100%" 
                                : SCENES.indexOf(currentScene) > idx ? "100%" : "0%"
                            }}
                            transition={{ duration: currentScene.id === scene.id && isPlaying ? 5 : 0, ease: "linear" }}
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Interactive Timeline (Editor Style) */}
                <div className="w-full h-40 bg-white border-t border-slate-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] z-20 flex flex-col">
                  {/* Controls & Scrubber */}
                  <div className="h-14 px-8 flex items-center gap-6 border-b border-slate-50">
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 transition-all"
                      >
                        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                      </Button>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Button variant="ghost" size="icon" className="hover:text-slate-900 rounded-full w-8 h-8"><SkipBack size={16} /></Button>
                        <Button variant="ghost" size="icon" className="hover:text-slate-900 rounded-full w-8 h-8"><SkipForward size={16} /></Button>
                      </div>
                      <span className="font-mono text-xs font-medium text-slate-500 min-w-[80px]">
                        {formatTime(currentTime)} <span className="text-slate-300">/</span> {formatTime(duration)}
                      </span>
                    </div>

                    {/* Scrubber */}
                    <div className="flex-1 relative h-8 flex items-center group cursor-pointer" 
                         onClick={(e) => {
                           const rect = e.currentTarget.getBoundingClientRect();
                           const percent = (e.clientX - rect.left) / rect.width;
                           setCurrentTime(Math.min(Math.max(0, percent * duration), duration));
                         }}>
                      <div className="absolute inset-x-0 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-500 rounded-full" 
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                      <motion.div 
                        className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md z-10"
                        style={{ left: `${(currentTime / duration) * 100}%` }}
                        layoutId="scrubber"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                       <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900 rounded-full"><Volume2 size={18} /></Button>
                       <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900 rounded-full"><Maximize2 size={18} /></Button>
                    </div>
                  </div>

                  {/* Filmstrip */}
                  <div className="flex-1 overflow-x-auto px-8 py-3 flex items-center gap-3 no-scrollbar">
                    {SCENES.map((scene, idx) => (
                      <button 
                        key={scene.id}
                        onClick={() => setCurrentTime(parseFloat(scene.startTime.split(':')[1]))}
                        className={cn(
                          "relative h-16 aspect-video rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 border-2",
                          currentScene.id === scene.id 
                            ? "border-blue-500 ring-2 ring-blue-500/20 scale-105" 
                            : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                        )}
                      >
                        <img src={scene.thumbnailUrl} className="w-full h-full object-cover" alt="" />
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between px-1.5 pb-0.5">
                          <span className="text-[8px] font-bold text-white font-archivo">SCENE {scene.number}</span>
                          <span className="text-[8px] font-mono text-white/80">{scene.endTime}s</span>
                        </div>
                        {currentScene.id === scene.id && (
                          <div className="absolute inset-0 bg-blue-500/10 z-10" />
                        )}
                      </button>
                    ))}
                    {/* Add some fake future scenes to fill space */}
                    {[4, 5, 6].map(i => (
                      <div key={i} className="h-16 aspect-video rounded-lg bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-slate-300">SC {i.toString().padStart(2, '0')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design
