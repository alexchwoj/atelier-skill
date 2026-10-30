# CodingAgentTraceViewer

> [PAGE] A comprehensive observability dashboard for visualizing coding agent session traces, including thinking processes, tool executions, network calls, and token usage metrics.


---

You are given a task to integrate an existing React component in the codebase

~~~/README.md
# Coding Agent Trace Viewer

A specialized observability dashboard for visualizing coding agent sessions. This component parses and displays trace logs in a high-density, developer-friendly timeline.

## Features

- **Timeline Visualization**: Linear view of agent activities (thoughts, tool calls, messages).
- **Hierarchical Tool Execution**: See nested tool results and errors.
- **Deep Inspection**: Click any event to see full JSON payloads and metadata.
- **Filtering & Search**: Quickly find specific events or filter by type.
- **Metrics Dashboard**: Real-time summary of tokens, cost, and duration.
- **High-Contrast Dark Theme**: Designed for long debugging sessions.

## Usage

```tsx
import { CodingAgentTraceViewer } from '@/sd-components/d470ceb9-954b-4f9d-9a67-6abb1574238c';

function DebugPage() {
  return (
    <div className="h-screen w-full">
      <CodingAgentTraceViewer />
    </div>
  );
}
```

## Props

Currently, the component uses an internal mock data generator (`generateMockData`). In a real implementation, you would pass a `events` prop.

| Prop | Type | Description |
|------|------|-------------|
| `events` | `TraceEvent[]` | (Planned) Array of trace events to visualize |
| `theme` | `'light' | 'dark'` | (Optional) Force a specific theme |

## Event Types supported

- `thought`: Internal reasoning logs
- `tool_call`: External tool execution attempts
- `tool_result`: Returns from tools
- `user_message`: Input from the user
- `assistant_message`: Final response to user
- `system_event`: Errors, warnings, or system logs
~~~

~~~/src/App.tsx
import React from 'react';
import { CodingAgentTraceViewer } from './Component';

export default function App() {
  return (
    <div className="w-full h-screen">
      <CodingAgentTraceViewer />
    </div>
  );
}
~~~

~~~/package.json
{
  "name": "coding-agent-trace-viewer",
  "description": "Observability dashboard for coding agent sessions",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.344.0",
    "framer-motion": "^11.0.8",
    "date-fns": "^3.3.1",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1"
  }
}
~~~

~~~/src/Component.tsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Terminal, 
  MessageSquare, 
  Cpu, 
  Clock, 
  Check, 
  AlertCircle,
  Zap,
  ChevronRight, 
  ChevronDown, 
  Play,
  FileText,
  User,
  Hash,
  Copy,
  DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
type EventType = 'thought' | 'skill_call' | 'bash_command' | 'user_message' | 'assistant_message' | 'system_event' | 'parallel_group';
type Status = 'success' | 'error' | 'pending' | 'warning' | 'running';

interface TraceEvent {
  id: string;
  turnId?: number;
  type: EventType;
  timestamp: string;
  title?: string;
  content?: string | any;
  status?: Status;
  duration?: number; // in seconds
  tokens?: number;
  agentId?: string;
  children?: TraceEvent[];
  meta?: {
    path?: string;
    repo?: string;
    url?: string;
    command?: string;
  };
}

interface SessionMetrics {
  totalDuration: number;
  totalTokens: number;
  totalCost: number;
  toolCount: number;
  agentCount: number;
  fileCount: number;
}

interface TokenUsage {
  type: string;
  tokens: number;
  cost: number | string;
}

interface ToolUsage {
  name: string;
  count: number;
}

// --- Mock Data Generator ---
const generateMockData = (): TraceEvent[] => {
  const now = Date.now();
  
  return [
    // TURN 1
    {
      id: 'evt_1',
      turnId: 1,
      type: 'user_message',
      timestamp: new Date(now - 1000 * 60 * 21).toISOString(),
      content: 'Find the 2 latest critical severity codeql findings in the finn org on github.schibsted.io and triage them',
      agentId: '84a4f03e-a08',
      status: 'success'
    },
    {
      id: 'evt_2',
      turnId: 1,
      type: 'skill_call',
      timestamp: new Date(now - 1000 * 60 * 20.9).toISOString(),
      title: 'codeql-analysis',
      agentId: '22ad5408-94f4',
      status: 'success',
      content: 'Launching skill: codeql-analysis',
      children: []
    },
    {
      id: 'evt_3',
      turnId: 1,
      type: 'thought',
      timestamp: new Date(now - 1000 * 60 * 20.8).toISOString(),
      content: 'The user wants me to find the 2 latest critical severity CodeQL findings in the finn org on github.schibsted.io and triage them. Let me think about what skills might apply here: 1. `codeql-analysis` - This skill fetches CodeQL alerts and code context 2. `/triage-codeql` command - For triaging CodeQL security alerts I should first use the codeql-analysis skill to find the critical severity findings, then triage them. Let me start by invoking the codeql-analysis skill to understand how to fetch the alerts....',
      status: 'success'
    },
    {
      id: 'evt_4',
      turnId: 1,
      type: 'skill_call',
      timestamp: new Date(now - 1000 * 60 * 20.5).toISOString(),
      title: 'codeql-analysis',
      agentId: '3c1fbc49-027e',
      status: 'success',
      content: 'Base directory for this skill: /Users/emil/source/nmp-sec/agent-lab/operatives/.claude/skills/codeql-analysis',
      children: []
    },
    
    // TURN 2 (Implied by context, though grouped under same timeline visuals usually)
    {
      id: 'evt_5',
      turnId: 2,
      type: 'parallel_group',
      timestamp: new Date(now - 1000 * 60 * 18).toISOString(),
      title: 'PARALLEL EXECUTION (2 AGENTS)',
      status: 'running',
      duration: 292.7, // seconds
      tokens: 292000,
      content: [
        { name: 'Triage SSRF alert #117', agent: 'CODEQL-TRIAGE', status: 'running', id: 'a10f4a0' },
        { name: 'Triage XSS alert #104', agent: 'CODEQL-TRIAGE', status: 'success', id: 'b21g5b1' }
      ],
      children: [
        {
          id: 'evt_5_1',
          turnId: 2,
          type: 'bash_command',
          timestamp: new Date(now - 1000 * 60 * 18).toISOString(),
          title: 'Fetch CodeQL alert details',
          content: 'cd /Users/emil/source/nmp-sec/agent-lab/operatives/.claude/skills/codeql-analysis && python -m src.cli alert "https://github.schibsted.io/finn/apps-adinput/security/code-scanning/117"',
          status: 'success',
          duration: 4.3,
          meta: { command: 'bash' },
          children: [
            {
               id: 'evt_5_1_out',
               turnId: 2,
               type: 'system_event', // Output
               timestamp: new Date(now - 1000 * 60 * 17.9).toISOString(),
               content: `## java/ssrf\n\n**Repository**: finn/apps-adinput\n**Alert**: #117\n**Severity**: critical\n**CWE**: CWE-918\n\n**Location**:\n\`src/main/java/no/finntech/apps/adinput/api/services/item/ItemManagementHttpClient.java:95\`\n**Message**: Potential server-side request forgery due to a user-provided value.\nPotential server-side request forgery due to a user-provided value.\n\n**URL**: https://github.schibsted.io/finn/apps-adinput/security/code-scanning/117\n[CODEQL-03E369]`
            }
          ]
        }
      ]
    },
    
    // TURN 3
    {
      id: 'evt_6',
      turnId: 3,
      type: 'bash_command',
      timestamp: new Date(now - 1000 * 60 * 15).toISOString(),
      title: 'Check logs for user 999999 lookup',
      content: `humioctl search --no-progress aurora_view 'nmp_app = "ua-core-api" | @rawstring = *999999*' -s 2m 2>&1`,
      status: 'success',
      meta: { command: 'bash' },
      children: [
        {
           id: 'evt_6_out',
           turnId: 3,
           type: 'system_event',
           timestamp: new Date(now - 1000 * 60 * 14.9).toISOString(),
           content: `2026-01-10T19:13:08.938+01:00 Not found: Login id not found: 999999`
        }
      ]
    },
    {
      id: 'evt_7',
      turnId: 3,
      type: 'thought',
      timestamp: new Date(now - 1000 * 60 * 14.8).toISOString(),
      content: 'Let me check the logs to see what happened....',
      status: 'success'
    },
    {
      id: 'evt_8',
      turnId: 3,
      type: 'assistant_message',
      timestamp: new Date(now - 1000 * 60 * 14).toISOString(),
      title: 'CLAUDE',
      agentId: '2a2bc230-f98',
      content: `The path traversal is confirmed working. The internal ua-core-api service attempted to look up user ID 999999, proving the SSRF/path traversal vulnerability is exploitable. Let me summarize the PoC:\n**Confirmed SSRF via Path Traversal** **PoC URL:** \`\`\` https://www.finn.no/ua-front/creative-preview?classified_id=../../user/schibsted-account/999999 \`\`\` **Evidence from Humio logs:** \`\`\` 2026-01-10T19:13:08.938+01:00 Not found: Login id not found: 999999 \`\`\` This proves: 1. The user-controlled...`,
      status: 'success'
    }
  ];
};

// --- Sub-Components for Timeline View ---

const TurnSeparator = ({ turnId, deltaTokens }: { turnId: number, deltaTokens?: number }) => (
  // 1. IMPROVEMENT: "Make sticky to help orientation in long traces"
  <div className="sticky top-0 z-30 flex items-center gap-4 py-4 select-none bg-[#09090b]/95 backdrop-blur supports-[backdrop-filter]:bg-[#09090b]/80 border-b border-transparent transition-all duration-200">
    <div className="bg-[#1e1e24] px-3 py-1 rounded text-xs font-bold text-blue-300 uppercase tracking-wider shadow-sm ring-1 ring-white/5">
      Turn {turnId}
    </div>
    <div className="h-px bg-white/10 flex-1" />
    {deltaTokens && (
      <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-2 py-0.5 rounded text-[10px] font-mono">
        +{deltaTokens.toLocaleString()} tok
      </div>
    )}
  </div>
);

const UserMessageCard = ({ event }: { event: TraceEvent }) => (
  <div className="mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
    <div className="flex items-center justify-between mb-2 px-1">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono text-gray-500">{format(new Date(event.timestamp), 'HH:mm:ss')}</span>
        <span className="text-xs font-bold text-blue-400 tracking-wide">USER</span>
      </div>
      {event.agentId && <span className="text-[10px] font-mono text-gray-600 bg-white/5 px-1.5 py-0.5 rounded">{event.agentId}</span>}
    </div>
    {/* 2. IMPROVEMENT: "Visual separation is weak. Increase border contrast" */}
    <div className="bg-[#121214] border border-white/20 rounded-lg p-4 text-gray-200 text-sm leading-relaxed shadow-sm">
      {event.content}
    </div>
  </div>
);

const SkillCard = ({ event }: { event: TraceEvent }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    // 2. IMPROVEMENT: Increased border contrast
    <div className="mb-4 rounded-lg border border-white/20 bg-[#0e0e10] overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div 
        className="flex items-center justify-between p-3 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400/20" />
          <span className="text-xs font-bold text-gray-200 tracking-wide uppercase">SKILL</span>
          <span className="text-xs font-mono text-gray-400">{event.title}</span>
        </div>
        <div className="flex items-center gap-3">
           {event.agentId && <span className="text-[10px] font-mono text-gray-600 hidden sm:inline-block">{event.agentId}</span>}
           <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", !isOpen && "-rotate-90")} />
        </div>
      </div>
      
      {isOpen && (
        <div className="p-4 border-t border-white/5 text-sm text-gray-400 font-mono bg-[#09090b]">
           {event.content}
        </div>
      )}
    </div>
  );
};

const BashCard = ({ event }: { event: TraceEvent }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    // 2. IMPROVEMENT: Increased border contrast
    <div className="mb-4 rounded-lg border border-white/20 bg-[#0e0e10] overflow-hidden shadow-sm group animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between p-2 pl-3 bg-[#18181b] border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-gray-500 uppercase">
              {format(new Date(event.timestamp), 'HH:mm:ss')}
            </span>
            <div className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider">
              BASH
            </div>
          </div>
          <span className="text-xs text-gray-400 font-medium truncate max-w-[300px]">{event.title || 'Execute command'}</span>
        </div>
        <div className="flex items-center gap-3">
           {event.status === 'success' && <Check className="w-3.5 h-3.5 text-emerald-500" />}
           {event.duration && <span className="text-[10px] font-mono text-gray-600">{event.duration}s</span>}
           {event.agentId && <span className="text-[10px] font-mono text-gray-700 bg-white/5 px-1 rounded">{event.agentId}</span>}
        </div>
      </div>
      
      <div className="p-3 bg-[#09090b] font-mono text-xs overflow-x-auto custom-scrollbar">
         <div className="flex gap-2 text-gray-300">
            <span className="text-emerald-500 select-none">$</span>
            <span className="whitespace-pre-wrap break-all">{event.content}</span>
         </div>
         
         {event.children?.map(child => (
           <div key={child.id} className="mt-3 pt-3 border-t border-white/10 text-gray-400 whitespace-pre-wrap leading-relaxed">
              {child.content}
           </div>
         ))}
      </div>
    </div>
  );
};

// 3. IMPROVEMENT: "Use collapsible 'Reasoning' component"
const ThoughtCard = ({ event }: { event: TraceEvent }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const preview = typeof event.content === 'string' 
    ? event.content.slice(0, 100) + (event.content.length > 100 ? '...' : '')
    : 'Thinking...';

  return (
    <div className="mb-4 px-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <button 
        className="flex items-center gap-2 mb-2 group select-none focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="p-0.5 rounded bg-white/5 group-hover:bg-white/10 transition-colors">
          <ChevronRight className={cn("w-3 h-3 text-gray-500 transition-transform duration-200", isExpanded && "rotate-90")} />
        </div>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-gray-400 transition-colors">Reasoning</span>
        {!isExpanded && <span className="text-xs text-gray-600 font-serif italic truncate max-w-[300px]">{preview}</span>}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap font-serif opacity-90 italic pl-6 border-l-2 border-white/10 hover:border-white/20 transition-colors py-1">
              {event.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AssistantMessageCard = ({ event }: { event: TraceEvent }) => {
  // Format markdown-like content simply
  const contentSegments = (event.content as string).split(/(\*\*.*?\*\*|`{3}[\s\S]*?`{3})/g);

  return (
    <div className="mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
       <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-gray-500">{format(new Date(event.timestamp), 'HH:mm:ss')}</span>
          <span className="text-xs font-bold text-purple-400 tracking-wide uppercase">{event.title || 'ASSISTANT'}</span>
        </div>
        {event.agentId && <span className="text-[10px] font-mono text-gray-600 bg-white/5 px-1.5 py-0.5 rounded">{event.agentId}</span>}
      </div>
      {/* 2. IMPROVEMENT: Increased border contrast */}
      <div className="bg-[#121214] border border-white/20 rounded-lg p-5 text-gray-300 text-sm shadow-sm">
        {contentSegments.map((segment, i) => {
          if (segment.startsWith('**') && segment.endsWith('**')) {
            return <strong key={i} className="text-white font-bold">{segment.slice(2, -2)}</strong>;
          }
          if (segment.startsWith('```') && segment.endsWith('```')) {
            return (
              <div key={i} className="my-3 bg-black/30 p-3 rounded border border-white/5 font-mono text-xs text-emerald-400 overflow-x-auto">
                {segment.slice(3, -3)}
              </div>
            );
          }
          return <span key={i}>{segment}</span>;
        })}
      </div>
    </div>
  );
};

const ParallelGroupCard = ({ event }: { event: TraceEvent }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const subAgents = event.content as any[];

  return (
    // 2. IMPROVEMENT: Increased border contrast for parallel group
    <div className="mb-6 rounded-lg border border-purple-500/30 bg-[#121214]/50 overflow-hidden ring-1 ring-purple-500/10 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between p-2 pl-3 bg-[#18181b]/80 border-b border-white/10 backdrop-blur-sm">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="p-1 rounded bg-purple-500/20">
             <ChevronDown className={cn("w-3 h-3 text-purple-400 transition-transform", !isExpanded && "-rotate-90")} />
          </div>
          <span className="text-xs font-bold text-gray-200">{event.title}</span>
        </div>
        
        <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500">
          <span>{subAgents.length} ops</span>
          <span>{(event.tokens || 0 / 1000).toFixed(1)}K tok</span>
          <span>{format(new Date(event.duration || 0 * 1000), 'm')}m {format(new Date(event.duration || 0 * 1000), 'ss')}s</span>
          
          <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-emerald-400">{event.id}</span>
             <span className="text-red-400">● {(event.tokens || 0 / 1000).toFixed(1)}K</span>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="bg-[#0c0c0e]/50">
           {/* Sub Agents Status Bar */}
           <div className="flex border-b border-white/5">
             {subAgents.map((agent: any, i: number) => (
                <div key={i} className="flex-1 px-4 py-2 border-r border-white/5 last:border-0 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between mb-1">
                     <span className="text-[10px] font-bold text-gray-400 group-hover:text-white transition-colors">{agent.name}</span>
                     {agent.status === 'success' ? (
                       <Check className="w-3 h-3 text-emerald-500" />
                     ) : (
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                     )}
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-600">
                     <span>{agent.agent}</span>
                     <span>{agent.id}</span>
                  </div>
                </div>
             ))}
           </div>
           
           {/* Child Events Container */}
           <div className="p-4 bg-[#09090b]/30">
              {event.children?.map(child => (
                <div key={child.id}>
                  {child.type === 'bash_command' && <BashCard event={child} />}
                  {child.type === 'thought' && <ThoughtCard event={child} />}
                  {child.type === 'skill_call' && <SkillCard event={child} />}
                </div>
              ))}
           </div>
        </div>
      )}
    </div>
  );
};


// --- New Components for Summary View ---

const SummaryView = () => {
  const tokenUsage: TokenUsage[] = [
    { type: 'Input', tokens: 3566, cost: 0.01 },
    { type: 'Output', tokens: 43124, cost: 0.65 },
    { type: 'Cache read', tokens: 17559648, cost: 'free' },
    { type: 'Cache write', tokens: 2277337, cost: 8.54 },
  ];

  const tools: ToolUsage[] = [
    { name: 'Read', count: 45 },
    { name: 'TodoWrite', count: 15 },
    { name: 'Write', count: 14 },
    { name: 'Edit', count: 9 },
    { name: 'Bash', count: 7 },
    { name: 'Glob', count: 7 },
    { name: 'Skill', count: 1 },
    { name: 'Task', count: 1 },
    { name: 'Grep', count: 1 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Session Header */}
      <div>
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">SESSION</div>
        <h2 className="text-xl font-bold text-gray-100 mb-2">15m 23s session with 1 sub-agents</h2>
        <div className="text-sm text-gray-400">
          <span className="text-gray-200">19,883,675 tokens</span> · ~$39.91 estimated · <span className="text-gray-500">Vertex AI · Opus</span>
        </div>
        <div className="text-sm text-gray-500 mt-1">
          Agents: 1,272,015 tokens
        </div>
      </div>

      {/* Token Usage Table */}
      <div className="rounded-lg border border-white/5 bg-[#121214] overflow-hidden">
        <div className="divide-y divide-white/5">
          {tokenUsage.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-gray-400 font-medium">{item.type}</span>
              <div className="flex items-center gap-12">
                <span className="text-gray-300 font-mono">{item.tokens.toLocaleString()} tokens</span>
                <span className={cn(
                  "font-mono w-16 text-right",
                  item.cost === 'free' ? "text-emerald-500" : "text-gray-300"
                )}>
                  {typeof item.cost === 'number' ? `$${item.cost.toFixed(2)}` : item.cost}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white/[0.02] px-4 py-2 text-[11px] text-gray-500 italic border-t border-white/5">
          Cost is approximate. Actual billing may differ based on provider pricing and caching.
        </div>
      </div>

      {/* Tools Section */}
      <div>
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">TOOLS</div>
        <h3 className="text-lg font-bold text-gray-200 mb-2">100 tool calls</h3>
        <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm font-mono text-gray-400">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className="text-gray-300">{tool.name}</span>
              <span className="text-gray-600">{tool.count}</span>
              {idx < tools.length - 1 && <span className="text-gray-700 mx-1">·</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Agents Section */}
      <div>
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">SUB-AGENTS</div>
        <h3 className="text-lg font-bold text-gray-200 mb-4">1 delegated tasks</h3>
        
        <div className="rounded-lg border border-white/5 bg-[#121214] p-4 flex items-center justify-between hover:bg-white/[0.07] transition-colors cursor-pointer group">
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Review observability plugin</span>
          <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">superpowers:code-reviewer</span>
        </div>
      </div>

       {/* Files Modified Section */}
       <div>
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">FILES MODIFIED</div>
        <div className="rounded-lg border border-white/5 bg-[#121214] p-4">
           <div className="text-sm text-gray-500 italic text-center py-4">
              15 files modified (165 edits)
           </div>
        </div>
      </div>
    </div>
  );
};

// --- New Components for Events (Table) View ---

const EventsView = ({ events }: { events: TraceEvent[] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  
  const flattenedEvents = useMemo(() => {
    const flat: TraceEvent[] = [];
    const traverse = (evts: TraceEvent[], depth = 0) => {
      evts.forEach(e => {
        flat.push({ ...e, _depth: depth } as any);
        if (e.children) traverse(e.children, depth + 1);
      });
    };
    traverse(events);
    return flat;
  }, [events]);

  const filteredEvents = useMemo(() => {
    return flattenedEvents.filter(e => {
      const matchesSearch = 
        (e.content && typeof e.content === 'string' && e.content.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (e.title && e.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (e.type && e.type.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (e.id && e.id.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesType = typeFilter === 'all' || e.type === typeFilter;
      
      return matchesSearch && matchesType;
    });
  }, [flattenedEvents, searchQuery, typeFilter]);

  const eventTypes = ['all', ...Array.from(new Set(flattenedEvents.map(e => e.type)))];

  // Map types to icons
  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'user_message': return <User className="w-4 h-4" />;
      case 'assistant_message': return <MessageSquare className="w-4 h-4" />;
      case 'bash_command': return <Terminal className="w-4 h-4" />;
      case 'skill_call': return <Zap className="w-4 h-4" />;
      case 'thought': return <Cpu className="w-4 h-4" />;
      case 'parallel_group': return <Copy className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
       {/* Left Sidebar Filter */}
       <div className="w-64 flex-none border-r border-white/5 bg-[#0c0c0e] p-4 flex flex-col gap-6">
          
          {/* Search */}
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Search Events</div>
            <div className="relative">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Hash className="h-3.5 w-3.5 text-gray-500" />
               </div>
               <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-[#18181b] text-gray-200 text-sm rounded-md border border-white/10 pl-9 pr-3 py-2 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 placeholder:text-gray-600 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>
          </div>

          {/* Type Filters */}
          <div className="flex-1 overflow-y-auto">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Event Types</div>
            <div className="space-y-1">
              {eventTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-all group",
                    typeFilter === type 
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" 
                      : "text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    {type === 'all' ? <Hash className="w-4 h-4 opacity-70" /> : getTypeIcon(type)}
                    <span className="capitalize">{type.replace('_', ' ')}</span>
                  </div>
                  {typeFilter === type && <Check className="w-3.5 h-3.5" />}
                  {type !== 'all' && typeFilter !== type && (
                    <span className="text-[10px] text-gray-600 bg-white/5 px-1.5 py-0.5 rounded group-hover:bg-white/10">
                      {flattenedEvents.filter(e => e.type === type).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Stats Summary */}
          <div className="pt-4 border-t border-white/5">
             <div className="bg-[#121214] rounded-lg p-3 border border-white/5">
                <div className="text-xs text-gray-500 mb-1">Showing</div>
                <div className="text-xl font-bold text-gray-200">
                  {filteredEvents.length} <span className="text-sm font-normal text-gray-500">/ {flattenedEvents.length} events</span>
                </div>
             </div>
          </div>
       </div>

       {/* Main Data Table Area */}
       <div className="flex-1 overflow-hidden flex flex-col bg-[#09090b]">
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <div className="rounded-lg border border-white/5 bg-[#121214] overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#18181b] text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-white/5">
                            <th className="px-4 py-3 w-[120px]">Time</th>
                            <th className="px-4 py-3 w-[140px]">Type</th>
                            <th className="px-4 py-3">Content / Summary</th>
                            <th className="px-4 py-3 w-[100px] text-right">Dur</th>
                            <th className="px-4 py-3 w-[80px] text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-sm font-mono">
                        {filteredEvents.map((event) => (
                            <tr 
                              key={event.id} 
                              className="hover:bg-white/[0.03] transition-colors group cursor-default"
                            >
                              <td className="px-4 py-2.5 text-gray-500 whitespace-nowrap text-xs">
                                  {format(new Date(event.timestamp), 'HH:mm:ss.SSS')}
                              </td>
                              <td className="px-4 py-2.5">
                                  <div className="flex items-center gap-2">
                                    <div className={cn(
                                        "p-1 rounded bg-opacity-10",
                                        event.type === 'user_message' && "bg-blue-500 text-blue-400",
                                        event.type === 'assistant_message' && "bg-purple-500 text-purple-400",
                                        event.type === 'bash_command' && "bg-pink-500 text-pink-400",
                                        event.type === 'skill_call' && "bg-yellow-500 text-yellow-400",
                                        event.type === 'thought' && "bg-gray-500 text-gray-400",
                                        event.type === 'system_event' && "bg-gray-700 text-gray-400",
                                        event.type === 'parallel_group' && "bg-emerald-500 text-emerald-400",
                                    )}>
                                      {getTypeIcon(event.type)}
                                    </div>
                                    <span className="text-xs text-gray-400 capitalize truncate w-24">
                                      {event.type.replace('_', ' ')}
                                    </span>
                                  </div>
                              </td>
                              <td className="px-4 py-2.5 max-w-lg">
                                  <div className="truncate text-gray-300 flex items-center gap-2">
                                    {(event as any)._depth > 0 && (
                                        <span className="text-gray-700 flex-none" style={{ width: (event as any)._depth * 16 }}>
                                          └
                                        </span>
                                    )}
                                    <span className="truncate">
                                        {event.title || (typeof event.content === 'string' ? event.content : JSON.stringify(event.content))}
                                    </span>
                                  </div>
                              </td>
                              <td className="px-4 py-2.5 text-right text-gray-500 text-xs">
                                  {event.duration ? `${event.duration}s` : '-'}
                              </td>
                              <td className="px-4 py-2.5 text-center">
                                  {event.status === 'success' && <Check className="w-3.5 h-3.5 text-emerald-500 mx-auto" />}
                                  {event.status === 'running' && <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mx-auto" />}
                                  {!event.status && <span className="text-gray-700">-</span>}
                              </td>
                            </tr>
                        ))}
                      </tbody>
                  </table>
                </div>
            </div>
          </div>
       </div>
    </div>
  );
};

// --- Main Component ---

const RawView = ({ events }: { events: TraceEvent[] }) => {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-6">
         <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">RAW EVENT LOG</div>
      </div>

      {events.map((event, idx) => (
         <RawEventCard key={event.id} event={event} index={idx} />
      ))}
    </div>
  );
};

const RawEventCard = ({ event, index }: { event: TraceEvent, index: number }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="rounded-lg border border-white/5 bg-[#121214] overflow-hidden">
         <div 
            className="flex items-center justify-between p-3 cursor-pointer hover:bg-white/[0.03] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
         >
            <div className="flex items-center gap-3">
               <span className="text-[10px] font-mono text-gray-600 uppercase w-16 text-right">raw_{index}</span>
               <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">{event.type}</span>
               <span className="text-xs text-gray-500 truncate max-w-[400px]">{event.id}</span>
            </div>
            <ChevronDown className={cn("w-4 h-4 text-gray-600 transition-transform", isOpen && "rotate-180")} />
         </div>

         {isOpen && (
            <div className="p-4 border-t border-white/5 bg-[#0e0e10]">
               <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 uppercase tracking-wider">
                  <ChevronRight className="w-3 h-3" />
                  Show raw event
               </div>
               <pre className="text-[11px] font-mono text-gray-400 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {JSON.stringify(event, null, 2)}
               </pre>
            </div>
         )}
      </div>
   );
};

// --- Main Component ---

export function CodingAgentTraceViewer() {
  const [events] = useState<TraceEvent[]>(generateMockData());
  const [activeTab, setActiveTab] = useState<'timeline' | 'summary' | 'raw' | 'events'>('timeline');

  // Metrics calculation
  const metrics: SessionMetrics = {
    totalDuration: 1295, // 21m 35s
    totalTokens: 42300,
    totalCost: 4.258499,
    toolCount: 72,
    agentCount: 2,
    fileCount: 1
  };

  // Group events by turn
  const eventsByTurn = useMemo(() => {
    const groups: Record<number, TraceEvent[]> = {};
    events.forEach(e => {
      if (e.turnId) {
        if (!groups[e.turnId]) groups[e.turnId] = [];
        groups[e.turnId].push(e);
      }
    });
    return groups;
  }, [events]);

  const renderContent = () => {
     switch(activeTab) {
        case 'timeline':
           return (
              <div className="max-w-4xl mx-auto px-4 py-8 pb-24">
                 {Object.entries(eventsByTurn).map(([turnId, turnEvents]) => (
                   <div key={turnId}>
                     <TurnSeparator turnId={Number(turnId)} deltaTokens={turnId === '2' ? 5881 : undefined} />
                     {turnEvents.map(event => {
                        switch(event.type) {
                          case 'user_message': return <UserMessageCard key={event.id} event={event} />;
                          case 'bash_command': return <BashCard key={event.id} event={event} />;
                          case 'skill_call': return <SkillCard key={event.id} event={event} />;
                          case 'assistant_message': return <AssistantMessageCard key={event.id} event={event} />;
                          case 'thought': return <ThoughtCard key={event.id} event={event} />;
                          case 'parallel_group': return <ParallelGroupCard key={event.id} event={event} />;
                          default: return null;
                        }
                     })}
                   </div>
                 ))}
              </div>
           );
        case 'summary':
           return (
              <div className="max-w-3xl mx-auto px-4 py-8 pb-24">
                 <SummaryView />
              </div>
           );
        case 'raw':
           return (
              <div className="max-w-4xl mx-auto px-4 py-8 pb-24">
                 <RawView events={events} />
              </div>
           );
        case 'events':
           return <EventsView events={events} />;
        default: return null;
     }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#09090b] text-gray-200 overflow-hidden font-sans selection:bg-purple-500/30">
      
      {/* Top Header */}
      <div className="flex-none bg-[#0c0c0e] border-b border-white/5 pt-4 px-6 pb-0 z-20">
        <div className="flex items-center justify-between mb-4">
           <div>
             <h1 className="text-xl font-bold text-white mb-1">82 Tool Calls - Plugin Marketplace</h1>
             <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
               {/* 1. IMPROVEMENT: "Low Contrast - Boost legibility" */}
               <span className="text-gray-400">bf3b6bad</span>
               <span className="text-gray-600">•</span>
               <span className="text-gray-400">/Users/emil/source/nmp-sec/claude-plugin-marketplace</span>
               <span className="text-gray-600">•</span>
               <span className="text-gray-400">add-safety-hooks-plugin</span>
             </div>
           </div>
        </div>
        
        {/* Tabs */}
        <div className="flex items-center gap-1">
          {['timeline', 'events', 'summary', 'raw'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={cn(
                "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
                activeTab === tab 
                  ? "text-white border-white" 
                  : "text-gray-500 border-transparent hover:text-gray-300 hover:border-gray-700"
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className={cn(
        "flex-1 relative bg-[#09090b]",
        activeTab === 'events' ? "overflow-hidden" : "overflow-y-auto custom-scrollbar"
      )}>
        {renderContent()}
      </div>

      {/* Bottom Status Bar */}
      {/* 4. IMPROVEMENT: "Data overload. Group metrics logically" */}
      <div className="flex-none bg-[#0c0c0e] border-t border-white/5 py-2 px-4 flex items-center justify-between z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        
        <div className="flex items-center gap-6 text-[11px] font-mono text-gray-500 w-full">
           {/* Group 1: Context */}
           <div className="flex items-center gap-3 pr-6 border-r border-white/5">
              <span className="text-xs font-bold text-gray-400 tracking-wider">CONTEXT</span>
              <div className="flex items-center gap-2 w-[180px]">
                <div className="w-full h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[21%]" />
                </div>
                <span className="text-emerald-500 font-medium">47%</span>
              </div>
           </div>

           {/* Group 2: Session */}
           <div className="flex items-center gap-4 pr-6 border-r border-white/5">
              <span className="text-xs font-bold text-gray-400 tracking-wider">SESSION</span>
              <div className="flex items-center gap-1.5">
                 <Clock className="w-3 h-3 text-gray-400" />
                 <span className="text-gray-300">15m 23s</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                 <DollarSign className="w-3 h-3 text-yellow-600" />
                 <span className="text-gray-300">$39.91</span>
              </div>
           </div>

           {/* Group 3: Activity */}
           <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-gray-400 tracking-wider">ACTIVITY</span>
              <div className="flex items-center gap-1.5">
                 <Terminal className="w-3 h-3 text-purple-400" />
                 <span className="text-gray-300">100 tools</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                 <Cpu className="w-3 h-3 text-blue-400" />
                 <span className="text-gray-300">1 agents</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                 <FileText className="w-3 h-3 text-gray-400" />
                 <span className="text-gray-300">15 files</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default CodingAgentTraceViewer;
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design
