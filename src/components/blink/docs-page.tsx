'use client';

import { usePageStore } from '@/lib/page-context';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Rocket,
  Database,
  Lock,
  Cpu,
  Bot,
  HardDrive,
  Radio,
  CreditCard,
  Globe,
  BookMarked,
  Lightbulb,
} from 'lucide-react';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { icon: Rocket, label: 'Quickstart guide', desc: 'Build your first app in 5 minutes' },
      { icon: BookOpen, label: 'Full documentation', desc: 'Complete reference for all features' },
      { icon: Lightbulb, label: 'Build guides', desc: 'Step-by-step tutorials for common apps' },
      { icon: BookMarked, label: 'Extend with features', desc: 'Add database, auth, and more' },
    ],
  },
  {
    title: 'Features',
    items: [
      { icon: Bot, label: 'AI Gateway', desc: 'Access 200+ AI models' },
      { icon: Database, label: 'Database', desc: 'PostgreSQL with real-time' },
      { icon: Lock, label: 'Authentication', desc: 'Complete auth system' },
      { icon: CreditCard, label: 'Stripe payments', desc: 'Accept payments instantly' },
      { icon: HardDrive, label: 'File storage', desc: 'CDN-backed file storage' },
      { icon: Radio, label: 'Real-time', desc: 'WebSocket subscriptions' },
      { icon: Bot, label: 'AI agents', desc: 'Deploy AI employees' },
      { icon: Cpu, label: 'RAG knowledge base', desc: 'Context-aware AI' },
    ],
  },
  {
    title: 'Deploy',
    items: [
      { icon: Rocket, label: 'Launch and publish', desc: 'Deploy to production' },
      { icon: Globe, label: 'Custom domains', desc: 'Connect your domain' },
      { icon: BookOpen, label: 'Tech stack reference', desc: 'Understand the stack' },
      { icon: Bot, label: 'AI models', desc: 'Available models and pricing' },
    ],
  },
];

export function DocsPage() {
  const { navigate } = usePageStore();

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Documentation
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need to build, deploy, and scale your applications with Blink.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-lg mx-auto mb-12">
          <div className="bg-card border border-border rounded-xl p-1 shadow-sm focus-within:ring-2 focus-within:ring-[#216BE4]/30">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-4 py-2.5 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      className="bg-card border border-border rounded-xl p-4 text-left transition-all hover:shadow-md hover:-translate-y-0.5 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#216BE4]/10 flex items-center justify-center text-[#216BE4] mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold mb-0.5 group-hover:text-[#216BE4] transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 border-t border-border pt-12">
          <h3 className="text-xl font-bold mb-3">Ready to start building?</h3>
          <p className="text-muted-foreground mb-6">Jump right in and build your first app with AI.</p>
          <Button
            onClick={() => navigate('builder')}
            className="bg-[#216BE4] hover:bg-[#1B5BC7] text-white font-semibold px-7 py-3 rounded-lg"
          >
            Start Building Now
          </Button>
        </div>
      </div>
    </div>
  );
}
