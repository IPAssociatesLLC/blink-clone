'use client';

import {
  Database,
  Lock,
  Code2,
  FileText,
  Bot,
  BarChart3,
  Activity,
} from 'lucide-react';
import { usePageStore } from '@/lib/page-context';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Database,
    title: 'Database',
    description: 'PostgreSQL database with real-time subscriptions, row-level security, and instant APIs.',
  },
  {
    icon: Lock,
    title: 'Authentication',
    description: 'Complete auth system with social login, MFA, and user management built-in.',
    hasAuthDemo: true,
  },
  {
    icon: Code2,
    title: 'Edge Functions',
    description: 'Serverless functions that run at the edge, auto-scaling with your traffic.',
  },
  {
    icon: FileText,
    title: 'Storage',
    description: 'File storage with CDN, image transformations, and fine-grained access control.',
  },
  {
    icon: Bot,
    title: 'AI Models',
    description: 'Access 200+ AI models including GPT-4o, Claude, Gemini, and open-source models.',
  },
  {
    icon: BarChart3,
    title: 'Data APIs',
    description: 'Auto-generated RESTful and GraphQL APIs for your data, instantly available.',
  },
  {
    icon: Activity,
    title: 'Hosting',
    description: 'Global CDN hosting with custom domains, SSL, and zero-config deployments.',
  },
];

const animationClasses = [
  'animate-fade-in-up-delay-1',
  'animate-fade-in-up-delay-2',
  'animate-fade-in-up-delay-3',
  'animate-fade-in-up-delay-4',
  'animate-fade-in-up-delay-5',
  'animate-fade-in-up-delay-6',
  'animate-fade-in-up-delay-7',
];

export function Features() {
  const { navigate } = usePageStore();

  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Everything You Need, Built-In
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto mb-12">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className={`bg-card border border-border rounded-xl p-6 text-left transition-all hover:shadow-md hover:-translate-y-0.5 ${animationClasses[i]}`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#216BE4]/10 flex items-center justify-center text-[#216BE4] mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
              {feature.hasAuthDemo && (
                <div className="flex gap-2 mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    disabled
                    className="flex-1 px-3 py-2 border border-border rounded-md text-[13px] bg-secondary text-muted-foreground"
                  />
                  <button className="px-4 py-2 rounded-md bg-foreground text-background text-[13px] font-semibold hover:opacity-85 transition-opacity">
                    Sign In
                  </button>
                </div>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => navigate('builder')}
        className="bg-[#216BE4] hover:bg-[#1B5BC7] text-white font-semibold px-7 py-3 rounded-lg text-base"
      >
        Start Building Now
      </Button>
    </section>
  );
}
