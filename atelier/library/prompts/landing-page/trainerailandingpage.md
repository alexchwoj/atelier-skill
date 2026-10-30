# TrainerAILandingPage

> [PAGE] A comprehensive landing page for TrainerAI, a SaaS platform for personal trainers. Includes Hero, Features, Testimonials, Pricing, and Footer sections with high-end dark mode aesthetics.


---

You are given a task to integrate an existing React component in the codebase

~~~/README.md
# TrainerAI Landing Page

A high-performance, dark-themed landing page component for TrainerAI SaaS.

## Features
- **Hero Section**: Immersive hero with gradient effects and simulated dashboard UI.
- **Feature Grid**: Bento-style grid layout for key features.
- **Workflow Section**: Step-by-step interactive explanation.
- **Testimonials**: Social proof with trustworthy design.
- **Responsive**: Fully responsive design for mobile, tablet, and desktop.
- **Animations**: Smooth scroll reveal animations using Framer Motion.

## Tech Stack
- React
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Usage

```tsx
import TrainerAILandingPage from '@/sd-components/d63a7ed7-331f-4ed6-bfd9-6e3712f1622f';

function App() {
  return <TrainerAILandingPage />;
}
```
~~~

~~~/src/App.tsx
import React from 'react';
import TrainerAILandingPage from './Component';

export default function App() {
  return (
    <div>
      <TrainerAILandingPage />
    </div>
  );
}
~~~

~~~/package.json
{
  "name": "trainer-ai-landing-page",
  "description": "A high-performance landing page for TrainerAI SaaS",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.344.0",
    "framer-motion": "^11.0.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1"
  }
}
~~~

~~~/src/Component.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dumbbell, 
  Brain, 
  TrendingUp, 
  MessageSquare, 
  Users, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  BarChart3,
  Calendar,
  Shield,
  Clock,
  ChevronRight,
  Star
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost', size?: 'sm' | 'md' | 'lg' }>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border border-border bg-transparent hover:bg-muted text-foreground',
      ghost: 'hover:bg-muted text-foreground'
    };
    
    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={cn("rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-6 shadow-2xl", className)}>
    {children}
  </div>
);

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary shadow-[0_0_10px_rgba(59,130,246,0.2)]", className)}>
    {children}
  </span>
);

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">TrainerAI</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">How it Works</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Pricing</a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Start Free Trial</Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b border-white/5 bg-background md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              <a href="#features" className="text-sm font-medium text-muted-foreground">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground">How it Works</a>
              <a href="#testimonials" className="text-sm font-medium text-muted-foreground">Testimonials</a>
              <Button className="w-full">Start Free Trial</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroDashboardPreview = () => {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl rounded-xl border border-white/10 bg-card/50 p-2 shadow-2xl backdrop-blur-xl lg:mt-24">
      {/* Glossy Overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Window Controls */}
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-black/40 px-4 py-3 rounded-t-lg">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-12 gap-0 lg:gap-6 p-4 lg:p-6 bg-background/80 rounded-b-lg overflow-hidden">
        {/* Sidebar */}
        <div className="hidden col-span-2 lg:flex flex-col gap-4 border-r border-white/5 pr-4">
          {[
            { icon: Users, label: 'Clients', active: true },
            { icon: Calendar, label: 'Schedule' },
            { icon: Dumbbell, label: 'Workouts' },
            { icon: BarChart3, label: 'Analytics' },
            { icon: MessageSquare, label: 'Messages' },
          ].map((item, i) => (
            <div key={i} className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors", item.active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-white/5")}>
              <item.icon className="h-4 w-4" />
              {item.label}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="col-span-12 lg:col-span-10 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">Dashboard Overview</h3>
              <p className="text-sm text-muted-foreground">Welcome back, Coach Alex</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Export Data</Button>
              <Button size="sm">+ New Client</Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Total Clients', value: '124', change: '+12%', color: 'text-emerald-500' },
              { label: 'Active Programs', value: '86', change: '+5%', color: 'text-primary' },
              { label: 'Revenue (MRR)', value: '$12.4k', change: '+18%', color: 'text-emerald-500' },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl border border-white/5 bg-card p-4">
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="mt-1 flex items-end justify-between">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className={cn("text-xs font-medium", stat.color)}>{stat.change}</div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Activity */}
          <div className="rounded-xl border border-white/5 bg-card p-4 md:p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                <Zap className="h-3 w-3 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Recent AI Actions</h4>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Program Updated for Sarah', time: '2m ago', desc: 'Adjusted volume based on RPE feedback.' },
                { title: 'Check-in Sent to Mike', time: '15m ago', desc: 'Weekly progress request sent via SMS.' },
                { title: 'New Lead Qualified', time: '1h ago', desc: 'Incoming inquiry marked as high-potential.' },
              ].map((action, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-foreground">{action.title}</div>
                      <div className="text-xs text-muted-foreground">{action.time}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{action.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary">New: AI Nutrition Analysis</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          Build Your <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">AI Workforce</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Turn your personal training methodology into automated AI agents. 
          Scale your coaching business without sacrificing the personal touch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="w-full sm:w-auto gap-2">
            Start Building Free <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            Book a Demo
          </Button>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeroDashboardPreview />
        </motion.div>
      </div>
    </section>
  );
};

const Logos = () => (
  <section className="border-y border-white/5 bg-black/40 py-10 backdrop-blur-sm">
    <div className="mx-auto max-w-7xl px-6">
      <p className="mb-8 text-center text-sm font-medium text-muted-foreground">TRUSTED BY ELITE COACHES AT</p>
      <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 md:gap-20">
        {['Equinox', 'Gold\'s Gym', 'Anytime Fitness', 'Crunch', 'Barry\'s'].map((brand) => (
          <span key={brand} className="text-xl font-bold text-foreground">{brand}</span>
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-8 transition-colors hover:border-primary/50"
  >
    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-[50px] transition-all group-hover:bg-primary/20" />
    
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Icon className="h-6 w-6" />
    </div>
    
    <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
    <p className="text-muted-foreground">{desc}</p>
    
    <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
      Learn more <ChevronRight className="ml-1 h-3 w-3" />
    </div>
  </motion.div>
);

const Features = () => (
  <section id="features" className="py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 text-center">
        <Badge className="mb-4">Features</Badge>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">Build Your Powerful<br />Agents. All In One Place.</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">Packed with powerful, easy-to-use features that give you complete control over your AI coaching workforce.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard 
          icon={Brain} 
          title="Intelligent Programming" 
          desc="AI that learns your programming style and automatically builds mesocycles for clients based on their goals and equipment." 
          delay={0.1}
        />
        <FeatureCard 
          icon={MessageSquare} 
          title="24/7 Check-ins" 
          desc="Automated weekly check-ins and daily motivation. Your AI twin handles the routine communication so you focus on coaching." 
          delay={0.2}
        />
        <FeatureCard 
          icon={TrendingUp} 
          title="Progress Tracking" 
          desc="Visual analytics for every lift, body metric, and habit. Automatically flag stalls in progress and suggest adjustments." 
          delay={0.3}
        />
        <FeatureCard 
          icon={Shield} 
          title="Client Knowledge Base" 
          desc="Upload your PDF guides, meal plans, and videos. Your AI agent answers client questions using ONLY your approved content." 
          delay={0.4}
        />
        <FeatureCard 
          icon={Zap} 
          title="Instant Feedback" 
          desc="Clients can upload form videos, and your AI agent can provide preliminary technique cues based on your coaching framework." 
          delay={0.5}
        />
        <FeatureCard 
          icon={Users} 
          title="Team Collaboration" 
          desc="Scale from a solo coach to a full agency. Assign different AI agents to different tiered packages or specialized coaches." 
          delay={0.6}
        />
      </div>
    </div>
  </section>
);

const WorkflowStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="relative flex flex-col gap-4 border-l border-white/10 pl-8 pb-12 last:pb-0">
    <div className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-card text-sm font-bold text-primary shadow-[0_0_15px_rgba(59,130,246,0.3)]">
      {number}
    </div>
    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
    <p className="text-muted-foreground">{desc}</p>
  </div>
);

const Workflow = () => (
  <section id="how-it-works" className="relative py-24 bg-secondary/20">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <Badge className="mb-4">Workflow</Badge>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">Describe your workflow,<br />automate your coaching.</h2>
          <p className="mb-12 text-muted-foreground">Tell Kilo what you want to automate using plain English. No technical knowledge needed. Our NLP engine builds the agent for you.</p>
          
          <div className="space-y-2">
            <WorkflowStep 
              number="1" 
              title="Connect Data Sources" 
              desc="Link your Stripe, Calendar, and Google Sheets. Kilo pulls in your client data instantly." 
            />
            <WorkflowStep 
              number="2" 
              title="Train Your Twin" 
              desc="Upload your past programs and chat history. Kilo learns your tone and coaching philosophy." 
            />
            <WorkflowStep 
              number="3" 
              title="Deploy Agents" 
              desc="Activate your Onboarding Agent, Check-in Agent, and Renewal Agent. Watch your business run on autopilot." 
            />
          </div>
        </div>

        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl opacity-50" />
          
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-card p-6 shadow-2xl">
            {/* Mock Chat UI */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary">AI</div>
                <div className="rounded-2xl rounded-tl-none bg-muted p-3 text-sm text-foreground">
                  How can I help you automate your coaching today?
                </div>
              </div>
              
              <div className="flex items-start gap-3 flex-row-reverse">
                 <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs border border-white/10">Me</div>
                <div className="rounded-2xl rounded-tr-none bg-primary p-3 text-sm text-white">
                  Create an automation that sends a "Great job!" text when a client hits a PR, and schedule a call if they miss 3 workouts in a row.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary">AI</div>
                <div className="rounded-2xl rounded-tl-none bg-muted p-3 text-sm text-foreground space-y-2">
                  <div className="flex items-center gap-2 text-emerald-500 font-medium">
                    <CheckCircle2 className="h-4 w-4" /> Workflow Created
                  </div>
                  <p>I've set up two triggers:</p>
                  <ul className="list-disc pl-4 space-y-1 opacity-80">
                    <li>Trigger: "PR Logged" → Action: Send SMS (Celebration Template)</li>
                    <li>Trigger: "3 Missed Sessions" → Action: Create Task "Call Client"</li>
                  </ul>
                  <Button size="sm" variant="outline" className="mt-2 w-full">View Workflow Diagram</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, author, role, image }: { quote: string, author: string, role: string, image: string }) => (
  <Card className="flex flex-col justify-between h-full bg-muted/30">
    <div className="mb-6 flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
      ))}
    </div>
    <p className="mb-6 text-lg font-medium leading-relaxed text-foreground">"{quote}"</p>
    <div className="flex items-center gap-4">
      <img src={image} alt={author} className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20" />
      <div>
        <div className="font-semibold text-foreground">{author}</div>
        <div className="text-xs text-muted-foreground">{role}</div>
      </div>
    </div>
  </Card>
);

const Testimonials = () => (
  <section id="testimonials" className="py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-5xl">Trusted by Innovative<br />Teams Worldwide</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <TestimonialCard 
          quote="We went from drowning in support tickets to having happy customers and a happy team. Setup took one afternoon."
          author="Carlos Alvarez"
          role="VP Support, Mix Bar"
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100"
        />
        <TestimonialCard 
          quote="We auto-resolve most tier-1 questions with a Kilo agent. Customers get instant answers and my team finally breathes."
          author="Fanny Damlan"
          role="Head of CX, Snap"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100"
        />
        <TestimonialCard 
          quote="As a non-technical founder, I was able to build a lead qualification agent that integrates with our CRM in a single afternoon."
          author="Wei Chen"
          role="Senior Developer, Briar"
          image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100"
        />
      </div>
      
      {/* Stats Row */}
      <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/5 pt-12 md:grid-cols-4">
        {[
          { label: 'Teams Assisted', value: '50M+' },
          { label: 'Active Teams', value: '10,000+' },
          { label: 'Average Rating', value: '4.9/5' },
          { label: 'Average Setup Time', value: '2 min' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold text-primary">{stat.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="relative overflow-hidden py-32">
    <div className="absolute inset-0 bg-primary/5" />
    <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
    <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-[100px]" />
    
    <div className="relative mx-auto max-w-4xl px-6 text-center">
      <h2 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">Ready to automate your<br />fitness business?</h2>
      <p className="mb-10 text-xl text-muted-foreground">Join 10,000+ trainers who are scaling their impact with TrainerAI.</p>
      
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-lg">Start Free Trial</Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-14 text-lg bg-background/50 backdrop-blur-md">Talk to Sales</Button>
      </div>
      
      <p className="mt-6 text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 bg-black py-12 text-sm">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
              <Zap className="h-4 w-4 fill-current" />
            </div>
            <span className="text-lg font-bold text-foreground">TrainerAI</span>
          </div>
          <p className="text-muted-foreground">The AI-powered operating system for modern fitness professionals.</p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a>
          </div>
        </div>
        
        {[
          { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Docs'] },
          { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact', 'Partners'] },
          { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'DPA'] },
        ].map((column) => (
          <div key={column.title}>
            <h4 className="mb-4 font-semibold text-foreground">{column.title}</h4>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-primary">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/5 pt-8 text-muted-foreground md:flex-row">
        <div>&copy; 2024 TrainerAI Inc. All rights reserved.</div>
        <div className="flex gap-8">
           <span>Designed for Coaches</span>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Page Component ---

export default function TrainerAILandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Workflow />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
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
