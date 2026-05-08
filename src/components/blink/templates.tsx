'use client';

import { usePageStore } from '@/lib/page-context';
import { Button } from '@/components/ui/button';
import {
  ShoppingBag,
  BarChart3,
  MessageSquare,
  Calendar,
  FileText,
  Users,
  Palette,
  Globe,
  Bot,
  Layout,
  Mail,
  CreditCard,
} from 'lucide-react';

const templates = [
  {
    icon: ShoppingBag,
    title: 'E-commerce Store',
    description: 'Full-featured online store with product catalog, cart, and Stripe payments.',
    category: 'E-commerce',
    prompt: 'Build an e-commerce store with product listings, shopping cart, and Stripe checkout',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard with real-time charts, filters, and data visualization.',
    category: 'Dashboard',
    prompt: 'Build an analytics dashboard with real-time charts and data visualization',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot',
    description: 'Smart chatbot powered by AI with customizable responses and knowledge base.',
    category: 'AI Tools',
    prompt: 'Build an AI chatbot with customizable responses and knowledge base integration',
  },
  {
    icon: Calendar,
    title: 'Booking System',
    description: 'Appointment scheduling with calendar integration and email notifications.',
    category: 'Productivity',
    prompt: 'Build a booking system with calendar integration and email notifications',
  },
  {
    icon: FileText,
    title: 'Blog Platform',
    description: 'Content management system with markdown editor, categories, and SEO tools.',
    category: 'Content',
    prompt: 'Build a blog platform with markdown editor, categories, and SEO optimization',
  },
  {
    icon: Users,
    title: 'CRM Application',
    description: 'Customer relationship management with contact tracking and deal pipeline.',
    category: 'Business',
    prompt: 'Build a CRM application with contact tracking and deal pipeline management',
  },
  {
    icon: Palette,
    title: 'Portfolio Website',
    description: 'Beautiful portfolio with project showcase, about section, and contact form.',
    category: 'Personal',
    prompt: 'Build a portfolio website with project showcase and contact form',
  },
  {
    icon: Globe,
    title: 'Landing Page',
    description: 'High-converting landing page with hero, features, pricing, and CTA sections.',
    category: 'Marketing',
    prompt: 'Build a landing page with hero section, features, pricing, and CTA',
  },
  {
    icon: Bot,
    title: 'AI Writing Assistant',
    description: 'AI-powered writing tool with grammar check, tone adjustment, and templates.',
    category: 'AI Tools',
    prompt: 'Build an AI writing assistant with grammar checking and tone adjustment',
  },
  {
    icon: Layout,
    title: 'Project Manager',
    description: 'Task management with boards, sprints, time tracking, and team collaboration.',
    category: 'Productivity',
    prompt: 'Build a project manager with boards, sprints, and team collaboration',
  },
  {
    icon: Mail,
    title: 'Email Marketing Tool',
    description: 'Email campaign builder with templates, scheduling, and analytics.',
    category: 'Marketing',
    prompt: 'Build an email marketing tool with campaign builder and analytics',
  },
  {
    icon: CreditCard,
    title: 'SaaS Starter',
    description: 'Complete SaaS boilerplate with auth, billing, dashboard, and API.',
    category: 'SaaS',
    prompt: 'Build a SaaS starter with authentication, Stripe billing, and dashboard',
  },
];

export function Templates() {
  const { navigate, setProjectPrompt } = usePageStore();

  const handleTemplateClick = (prompt: string) => {
    setProjectPrompt(prompt);
    navigate('builder');
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Start with a Template
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Choose from pre-built templates and customize them with AI. Each template is a starting point — make it yours.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {['All', 'E-commerce', 'Dashboard', 'AI Tools', 'Productivity', 'SaaS', 'Marketing'].map((cat) => (
            <button
              key={cat}
              className="text-sm font-medium px-4 py-1.5 rounded-full border border-border text-muted-foreground hover:border-[#216BE4] hover:text-[#216BE4] hover:bg-[#216BE4]/5 transition-all"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <button
                key={template.title}
                onClick={() => handleTemplateClick(template.prompt)}
                className="bg-card border border-border rounded-xl p-6 text-left transition-all hover:shadow-md hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#216BE4]/10 flex items-center justify-center text-[#216BE4] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold mb-1 group-hover:text-[#216BE4] transition-colors">
                  {template.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {template.description}
                </p>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                  {template.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Can&apos;t find what you&apos;re looking for?</p>
          <Button
            onClick={() => navigate('builder')}
            className="bg-[#216BE4] hover:bg-[#1B5BC7] text-white font-semibold px-7 py-3 rounded-lg"
          >
            Build from scratch with AI
          </Button>
        </div>
      </div>
    </div>
  );
}
