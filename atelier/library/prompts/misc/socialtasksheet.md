# SocialTaskSheet

> [COMPONENT] A semi-modal (bottom sheet) task list component for a social app. Features a progress tracker, gamified task list with status states, and a modern mobile-first design.


---

You are given a task to integrate an existing React component in the codebase

~~~/README.md
# Social Notification & Redemption

An official notification feed component with integrated reward redemption functionality.

## Features
- **Notification Feed**: Displays text and card-based official announcements with timestamps.
- **Reward Redemption**: Interactive modal to claim rewards by User ID.
- **User Lookup**: Simulates fetching user nickname based on ID input.
- **Responsive Design**: Mobile-first layout matching official app styles.

## Usage

```tsx
import SocialTaskSheet from '@/sd-components/46299775-1f23-4920-bb6d-d9610c07fa1a';

function App() {
  return <SocialTaskSheet />;
}
```

## Props
This component is self-contained and does not currently accept external props.
~~~

~~~/src/App.tsx
import React from 'react';
import SocialTaskSheet from './Component';

export default function App() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="w-[390px] h-[844px] bg-white overflow-hidden shadow-2xl rounded-[40px] border-[8px] border-gray-900 relative">
        <SocialTaskSheet />
      </div>
    </div>
  );
}
~~~

~~~/package.json
{
  "name": "social-task-sheet",
  "version": "1.0.0",
  "description": "A semi-modal task sheet component for social apps",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.292.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
~~~

~~~/src/Component.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Volume2, RefreshCw, X, Check, Loader2, User } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Types
interface Message {
  id: string;
  type: 'text' | 'card';
  content?: string;
  cardData?: {
    title: string;
    imageUrl: string;
    description: string;
  };
  timestamp?: string;
  showTime?: boolean;
}

interface UserInfo {
  id: string;
  nickname: string;
  avatar: string;
}

export default function SocialTaskSheet() {
  const [isRedeemOpen, setIsRedeemOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  
  // Mock Messages Data
  const messages: Message[] = [
    {
      id: '1',
      type: 'card',
      cardData: {
        title: '2025 Annual Ceremony',
        imageUrl: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800',
        description: '2025 Annual Ceremony is coming!'
      },
      timestamp: '2025-12-15 12:35:52',
      showTime: true
    },
    {
      id: '2',
      type: 'text',
      content: 'The 2025 Annual Ceremony has ignited! Multiple honors and benefits are in place! Come and join us to unlock your annual highlight moment!',
      timestamp: '2025-12-18 14:05:35',
      showTime: true
    },
    {
      id: '3',
      type: 'text',
      content: '@Everyone APP Version 5.1.46, this update includes:\n1. Public chat experience optimization;\n2. Live room experience optimization;\n3. Voice room announcement optimization;\n4. Withdrawal instruction update;\n5. Live room icon UI update;\n\n[PC Client]\n1. Public chat experience optimization;\n\n[Bug Fixes]\n1. Official website Android APK download issue (Fixed)',
      timestamp: '2025-12-18 14:05:35',
      showTime: true
    }
  ];

  // Mock User Lookup
  useEffect(() => {
    const lookupUser = async () => {
      if (userId.length >= 4) {
        setIsLoadingUser(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        setUserInfo({
          id: userId,
          nickname: `User_${userId}_Star`,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`
        });
        setIsLoadingUser(false);
      } else {
        setUserInfo(null);
      }
    };

    const timer = setTimeout(lookupUser, 500);
    return () => clearTimeout(timer);
  }, [userId]);

  return (
    <div className="w-full h-full min-h-screen bg-[#F5F7FA] flex flex-col font-sans text-slate-800">
      
      {/* Header */}
      <header className="bg-white sticky top-0 z-30 px-4 py-3 flex items-center justify-between shadow-sm">
        <button className="p-2 -ml-2 hover:bg-slate-50 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-slate-800" />
        </button>
        <h1 className="text-lg font-bold text-slate-900">Official Notification</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </header>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-4 pb-20 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col gap-4">
            
            {/* Time Stamp */}
            {msg.showTime && msg.timestamp && (
              <div className="flex justify-center">
                <span className="text-xs text-slate-400 bg-transparent px-2 py-0.5 rounded">
                  {msg.timestamp}
                </span>
              </div>
            )}

            <div className="flex gap-3 items-start">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-sm">
                <Volume2 className="w-5 h-5 text-white" />
              </div>

              {/* Message Content */}
              <div className="flex-1 max-w-[85%]">
                {msg.type === 'card' && msg.cardData && (
                  <div 
                    onClick={() => setIsRedeemOpen(true)}
                    className="bg-white rounded-2xl p-3 shadow-sm active:scale-95 transition-transform cursor-pointer overflow-hidden border border-slate-100/50"
                  >
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
                      <img 
                        src={msg.cardData.imageUrl} 
                        alt={msg.cardData.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                         <span className="text-white font-bold text-lg">{msg.cardData.title}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm px-1 mb-1">{msg.cardData.description}</p>
                    <div className="px-1 py-2 flex items-center justify-between border-t border-slate-50 mt-2">
                       <span className="text-xs text-slate-400">Tap to view details</span>
                       <span className="text-xs font-bold text-indigo-500">View &gt;</span>
                    </div>
                  </div>
                )}

                {msg.type === 'text' && (
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-slate-100/50 text-sm leading-relaxed text-slate-700 whitespace-pre-wrap">
                    {msg.content}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex justify-center py-4 text-xs text-slate-400 flex items-center gap-2">
           <span>Pull to refresh</span>
        </div>
      </div>

      {/* Redemption Modal */}
      <AnimatePresence>
        {isRedeemOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRedeemOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-xs bg-white rounded-3xl shadow-2xl relative overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <h3 className="text-xl font-bold text-white relative z-10">Claim Reward</h3>
                <p className="text-indigo-100 text-xs mt-1 relative z-10">Enter User ID to distribute</p>
                <button 
                  onClick={() => setIsRedeemOpen(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                
                {/* ID Input */}
                <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">User ID</label>
                   <div className="relative">
                     <input
                       type="text"
                       value={userId}
                       onChange={(e) => setUserId(e.target.value.replace(/\D/g, ''))} // Only numbers
                       placeholder="Enter User ID"
                       className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-mono text-lg transition-all"
                       maxLength={8}
                     />
                     {isLoadingUser && (
                       <div className="absolute right-3 top-1/2 -translate-y-1/2">
                         <Loader2 className="w-5 h-5 text-indigo-500 animate-spin" />
                       </div>
                     )}
                   </div>
                </div>

                {/* Nickname Display */}
                <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">User Nickname</label>
                   <motion.div 
                     layout
                     className={cn(
                       "w-full rounded-xl p-3 flex items-center gap-3 transition-colors border",
                       userInfo ? "bg-indigo-50 border-indigo-100" : "bg-slate-50 border-slate-100"
                     )}
                   >
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                        userInfo ? "bg-white shadow-sm" : "bg-slate-200"
                      )}>
                        {userInfo ? (
                          <img src={userInfo.avatar} alt="avatar" className="w-full h-full rounded-full" />
                        ) : (
                          <User className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                         {userInfo ? (
                           <div className="flex flex-col">
                             <span className="font-bold text-slate-800 truncate">{userInfo.nickname}</span>
                             <span className="text-[10px] text-indigo-500 font-medium">Verified User</span>
                           </div>
                         ) : (
                           <span className="text-slate-400 text-sm">Waiting for ID...</span>
                         )}
                      </div>
                   </motion.div>
                </div>

                {/* Action Button */}
                <button 
                  disabled={!userInfo}
                  className={cn(
                    "w-full h-12 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2",
                    userInfo 
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-indigo-500/30 active:scale-95" 
                      : "bg-slate-300 shadow-none cursor-not-allowed"
                  )}
                >
                  <Check className="w-5 h-5" />
                  <span>Confirm Redemption</span>
                </button>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
