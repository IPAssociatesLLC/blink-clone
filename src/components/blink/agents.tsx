'use client';

import { useState } from 'react';
import { usePageStore } from '@/lib/page-context';
import { Button } from '@/components/ui/button';
import {
  DollarSign,
  Phone,
  TrendingUp,
  Heart,
  Code2,
  Users,
  Briefcase,
  BarChart3,
  Mail,
  Search,
  Zap,
  Shield,
  Share2,
  ArrowRight,
  Star,
  MessageSquare,
  Check,
} from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  initials: string;
  pricing: string;
  capabilities: string[];
}

const agents: Agent[] = [
  {
    id: 'gerald',
    name: 'Gerald',
    role: 'Chief Financial Officer',
    description: 'Manages budgets, forecasts revenue, and provides financial strategy autonomously.',
    longDescription: 'Gerald acts as your AI CFO, analyzing financial data, creating budgets, forecasting revenue trends, and providing strategic financial recommendations. He works 24/7 to keep your finances on track.',
    icon: DollarSign,
    color: '#22C55E',
    initials: 'GE',
    pricing: '$99/mo',
    capabilities: ['Budget planning', 'Revenue forecasting', 'Financial reporting', 'Cash flow analysis', 'Cost optimization'],
  },
  {
    id: 'alex',
    name: 'Alex',
    role: 'Sales Development Rep',
    description: 'Generates and qualifies leads, manages outreach sequences, and books meetings.',
    longDescription: 'Alex is your always-on sales development representative. He researches prospects, crafts personalized outreach, follows up automatically, and books qualified meetings directly on your calendar.',
    icon: Phone,
    color: '#3B82F6',
    initials: 'AL',
    pricing: '$79/mo',
    capabilities: ['Lead generation', 'Email outreach', 'Follow-up sequences', 'Meeting booking', 'CRM integration'],
  },
  {
    id: 'archer',
    name: 'Archer',
    role: 'Investment Researcher',
    description: 'Conducts deep market research, analyzes opportunities, and generates investment reports.',
    longDescription: 'Archer performs comprehensive investment research, analyzing market trends, company financials, and competitive landscapes to deliver actionable investment insights and detailed reports.',
    icon: TrendingUp,
    color: '#8B5CF6',
    initials: 'AR',
    pricing: '$89/mo',
    capabilities: ['Market analysis', 'Company research', 'Financial modeling', 'Risk assessment', 'Investment reports'],
  },
  {
    id: 'casey',
    name: 'Casey',
    role: 'Customer Success Manager',
    description: 'Monitors customer health, manages onboarding, and proactively prevents churn.',
    longDescription: 'Casey ensures your customers stay happy and engaged. She monitors usage patterns, manages the onboarding experience, identifies at-risk accounts, and takes proactive steps to prevent churn.',
    icon: Heart,
    color: '#EC4899',
    initials: 'CA',
    pricing: '$79/mo',
    capabilities: ['Customer onboarding', 'Health scoring', 'Churn prevention', 'Check-in automation', 'Satisfaction surveys'],
  },
  {
    id: 'dev',
    name: 'Dev',
    role: 'Software Engineer',
    description: 'Writes, reviews, and debugs code. Deploys features and maintains codebase quality.',
    longDescription: 'Dev is your AI software engineer who writes production-ready code, reviews pull requests, debugs issues, and deploys features. He maintains code quality standards and follows best practices.',
    icon: Code2,
    color: '#F59E0B',
    initials: 'DV',
    pricing: '$99/mo',
    capabilities: ['Code generation', 'Code review', 'Bug fixing', 'Feature deployment', 'Testing automation'],
  },
  {
    id: 'harper',
    name: 'Harper',
    role: 'Head of Recruiting',
    description: 'Sources candidates, screens resumes, schedules interviews, and manages hiring pipelines.',
    longDescription: 'Harper manages the entire recruiting pipeline from sourcing to offer. She finds top talent, screens resumes, coordinates interviews, and keeps candidates engaged throughout the process.',
    icon: Users,
    color: '#06B6D4',
    initials: 'HA',
    pricing: '$89/mo',
    capabilities: ['Candidate sourcing', 'Resume screening', 'Interview scheduling', 'Pipeline management', 'Candidate communication'],
  },
  {
    id: 'jamie',
    name: 'Jamie',
    role: 'Executive Personal Assistant',
    description: 'Manages calendars, handles correspondence, books travel, and organizes your workday.',
    longDescription: 'Jamie is your executive assistant who manages your calendar, handles email correspondence, books travel, prepares meeting agendas, and ensures your day runs smoothly and efficiently.',
    icon: Briefcase,
    color: '#10B981',
    initials: 'JA',
    pricing: '$69/mo',
    capabilities: ['Calendar management', 'Email triage', 'Travel booking', 'Meeting prep', 'Task prioritization'],
  },
  {
    id: 'jordan',
    name: 'Jordan',
    role: 'Finance & Business Analyst',
    description: 'Analyzes business metrics, creates dashboards, and delivers actionable insights.',
    longDescription: 'Jordan dives deep into your business data to uncover insights, build dashboards, track KPIs, and deliver recommendations that drive growth and operational efficiency.',
    icon: BarChart3,
    color: '#6366F1',
    initials: 'JO',
    pricing: '$89/mo',
    capabilities: ['KPI tracking', 'Dashboard creation', 'Business reporting', 'Trend analysis', 'Data visualization'],
  },
  {
    id: 'maya',
    name: 'Maya',
    role: 'Inbox Manager',
    description: 'Triage, categorize, and respond to emails. Manages your inbox so you focus on what matters.',
    longDescription: 'Maya takes over your inbox, categorizing emails, drafting responses, highlighting urgent messages, and keeping your inbox at zero so you can focus on high-priority work.',
    icon: Mail,
    color: '#EF4444',
    initials: 'MY',
    pricing: '$59/mo',
    capabilities: ['Email triage', 'Auto-categorization', 'Draft responses', 'Priority flagging', 'Inbox zero management'],
  },
  {
    id: 'nova',
    name: 'Nova',
    role: 'Research Analyst',
    description: 'Conducts in-depth research on any topic, synthesizes findings, and creates reports.',
    longDescription: 'Nova is your research powerhouse, conducting thorough investigations on any topic, synthesizing information from multiple sources, and delivering comprehensive, well-structured reports.',
    icon: Search,
    color: '#A855F7',
    initials: 'NO',
    pricing: '$79/mo',
    capabilities: ['Deep research', 'Report generation', 'Data synthesis', 'Competitor analysis', 'Market intelligence'],
  },
  {
    id: 'reece',
    name: 'Reece',
    role: 'Growth & Competitive Intelligence',
    description: 'Tracks competitors, identifies growth opportunities, and provides strategic recommendations.',
    longDescription: 'Reece monitors your competitive landscape, identifies growth opportunities, tracks market shifts, and provides actionable strategic recommendations to keep you ahead of the curve.',
    icon: Zap,
    color: '#F97316',
    initials: 'RE',
    pricing: '$89/mo',
    capabilities: ['Competitor tracking', 'Growth hacking', 'Market monitoring', 'Strategic recommendations', 'Opportunity identification'],
  },
  {
    id: 'rex',
    name: 'Rex',
    role: 'DevOps & Security Monitor',
    description: 'Monitors infrastructure, enforces security policies, and automates deployment pipelines.',
    longDescription: 'Rex watches over your infrastructure 24/7, monitoring system health, enforcing security policies, automating deployments, and alerting you to issues before they become problems.',
    icon: Shield,
    color: '#14B8A6',
    initials: 'RX',
    pricing: '$99/mo',
    capabilities: ['Infrastructure monitoring', 'Security scanning', 'CI/CD automation', 'Incident response', 'Compliance tracking'],
  },
  {
    id: 'sage',
    name: 'Sage',
    role: 'Social Media Manager',
    description: 'Creates content, schedules posts, engages with audiences, and tracks social performance.',
    longDescription: 'Sage manages your entire social media presence — creating engaging content, scheduling posts across platforms, responding to audience interactions, and tracking performance analytics.',
    icon: Share2,
    color: '#E11D48',
    initials: 'SG',
    pricing: '$79/mo',
    capabilities: ['Content creation', 'Post scheduling', 'Audience engagement', 'Analytics tracking', 'Brand monitoring'],
  },
];

export function Agents() {
  const { navigate, setSelectedAgent } = usePageStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  const categories = ['All', 'Finance', 'Sales', 'Engineering', 'Operations', 'Marketing'];

  const categorizedAgents: Record<string, string[]> = {
    Finance: ['gerald', 'archer', 'jordan'],
    Sales: ['alex', 'reece'],
    Engineering: ['dev', 'rex'],
    Operations: ['casey', 'jamie', 'maya', 'harper'],
    Marketing: ['sage', 'nova'],
  };

  const filteredAgents = selectedCategory === 'All'
    ? agents
    : agents.filter((a) => categorizedAgents[selectedCategory]?.includes(a.id));

  const handleHire = (agentId: string) => {
    setSelectedAgent(agentId);
    navigate('builder');
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-[#216BE4]/10 text-[#216BE4] mb-6">
            <Star className="w-4 h-4" />
            AI Employees that work 24/7
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Hire AI Agents for Your Business
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deploy specialist AI employees that handle finance, sales, engineering, and operations autonomously. They work around the clock so you don&apos;t have to.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${
                selectedCategory === cat
                  ? 'border-[#216BE4] text-[#216BE4] bg-[#216BE4]/5'
                  : 'border-border text-muted-foreground hover:border-[#216BE4] hover:text-[#216BE4] hover:bg-[#216BE4]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAgents.map((agent) => {
            const Icon = agent.icon;
            const isHovered = hoveredAgent === agent.id;
            return (
              <div
                key={agent.id}
                onMouseEnter={() => setHoveredAgent(agent.id)}
                onMouseLeave={() => setHoveredAgent(null)}
                className="bg-card border border-border rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[#216BE4]/30 group"
              >
                {/* Avatar & Name */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: agent.color }}
                  >
                    {agent.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold group-hover:text-[#216BE4] transition-colors">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-[#216BE4] font-medium">{agent.role}</p>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground bg-secondary px-2 py-1 rounded-md whitespace-nowrap">
                    {agent.pricing}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {isHovered ? agent.longDescription : agent.description}
                </p>

                {/* Capabilities */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {agent.capabilities.slice(0, 3).map((cap) => (
                    <span
                      key={cap}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                    >
                      {cap}
                    </span>
                  ))}
                  {agent.capabilities.length > 3 && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                      +{agent.capabilities.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => handleHire(agent.id)}
                    className="flex-1 bg-[#216BE4] hover:bg-[#1B5BC7] text-white font-semibold text-sm py-2 rounded-lg"
                  >
                    <Icon className="w-4 h-4 mr-1.5" />
                    Hire {agent.name}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-border bg-secondary hover:bg-border text-foreground px-3 py-2 rounded-lg"
                    onClick={() => handleHire(agent.id)}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '13', label: 'AI Agents' },
            { value: '24/7', label: 'Availability' },
            { value: '10x', label: 'Productivity Boost' },
            { value: '50%', label: 'Cost Reduction' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-extrabold text-[#216BE4] mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-10">How AI Agents Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Choose Your Agent',
                description: 'Browse our 13 specialist agents and pick the ones that fit your business needs.',
                icon: Search,
              },
              {
                step: '2',
                title: 'Configure & Deploy',
                description: 'Set up your agent with your business context, tools, and preferences in minutes.',
                icon: Zap,
              },
              {
                step: '3',
                title: 'Let Them Work',
                description: 'Your AI agent works 24/7, handling tasks autonomously and reporting back to you.',
                icon: Check,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#216BE4]/10 flex items-center justify-center text-[#216BE4] mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground mb-2">STEP {item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-border pt-12">
          <h3 className="text-2xl font-bold mb-3">Ready to hire your first AI agent?</h3>
          <p className="text-muted-foreground mb-6">Deploy an AI employee in under 60 seconds and watch them transform your workflow.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={() => navigate('builder')}
              className="bg-[#216BE4] hover:bg-[#1B5BC7] text-white font-semibold px-7 py-3 rounded-lg text-base"
            >
              Get started for free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={() => navigate('pricing')}
              variant="outline"
              className="font-semibold px-7 py-3 rounded-lg text-base border-border bg-secondary hover:bg-border"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
