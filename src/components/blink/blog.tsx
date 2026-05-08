'use client';

import { useState } from 'react';
import { usePageStore } from '@/lib/page-context';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  BookOpen,
  Code2,
  Bot,
  Sparkles,
  TrendingUp,
  Zap,
  Search,
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'What Is Vibe Coding? The Complete Guide for 2025',
    description: 'Learn how vibe coding is transforming software development by letting you describe apps in natural language while AI handles implementation.',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    category: 'Guides',
    icon: Sparkles,
    featured: true,
  },
  {
    id: '2',
    title: 'How to Build an AI App Builder: Behind the Scenes',
    description: 'A deep dive into the architecture and technology behind AI app builders like Blink, and how they generate production-ready code.',
    date: 'Jan 12, 2025',
    readTime: '12 min read',
    category: 'Engineering',
    icon: Code2,
  },
  {
    id: '3',
    title: 'Top 10 AI Models for App Development in 2025',
    description: 'Compare GPT-5, Claude 4, Gemini 3, and more to find the best AI model for building applications.',
    date: 'Jan 10, 2025',
    readTime: '10 min read',
    category: 'AI Models',
    icon: Bot,
  },
  {
    id: '4',
    title: 'Building a SaaS Product with AI: From Idea to Launch',
    description: 'Step-by-step guide to building and launching a SaaS product using AI app builders, including authentication, payments, and deployment.',
    date: 'Jan 8, 2025',
    readTime: '15 min read',
    category: 'Tutorials',
    icon: TrendingUp,
  },
  {
    id: '5',
    title: 'AI Agents vs Traditional Automation: What You Need to Know',
    description: 'Understand the key differences between AI agents and rule-based automation, and when to use each approach.',
    date: 'Jan 5, 2025',
    readTime: '7 min read',
    category: 'AI Agents',
    icon: Bot,
  },
  {
    id: '6',
    title: 'The Future of No-Code: AI-Powered App Building',
    description: 'Explore how AI is pushing the boundaries of no-code development, making it possible to build complex apps from simple descriptions.',
    date: 'Jan 3, 2025',
    readTime: '6 min read',
    category: 'Industry',
    icon: Zap,
  },
  {
    id: '7',
    title: 'Deploying AI Agents at Scale with Blink Claw',
    description: 'Learn best practices for deploying, monitoring, and scaling AI agents using Blink Claw\'s managed infrastructure.',
    date: 'Dec 28, 2024',
    readTime: '9 min read',
    category: 'Guides',
    icon: Sparkles,
  },
  {
    id: '8',
    title: 'GPT-5 vs Claude 4 vs Gemini 3: The Ultimate Comparison',
    description: 'An in-depth comparison of the latest AI models across coding, reasoning, and creative tasks to help you choose the right one.',
    date: 'Dec 25, 2024',
    readTime: '14 min read',
    category: 'AI Models',
    icon: Bot,
  },
  {
    id: '9',
    title: 'How to Build a Real-Time Dashboard with AI',
    description: 'Tutorial on building a real-time analytics dashboard with live data, charts, and AI-powered insights in under 10 minutes.',
    date: 'Dec 22, 2024',
    readTime: '8 min read',
    category: 'Tutorials',
    icon: Code2,
  },
];

const categories = ['All', 'Guides', 'Engineering', 'AI Models', 'Tutorials', 'AI Agents', 'Industry'];

export function Blog() {
  const { navigate } = usePageStore();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Blink Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Insights, tutorials, and guides on AI app building, vibe coding, and the future of software development.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="bg-card border border-border rounded-xl p-1 shadow-sm focus-within:ring-2 focus-within:ring-[#216BE4]/30">
            <div className="flex items-center gap-2 px-3">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 py-2 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
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

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && searchQuery === '' && (
          <div className="mb-10">
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="bg-gradient-to-br from-[#216BE4]/10 to-[#6366f1]/10 p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#216BE4] text-white">FEATURED</span>
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#216BE4] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post) => {
            const Icon = post.icon;
            return (
              <article
                key={post.id}
                className="bg-card border border-border rounded-xl p-6 transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#216BE4]/10 flex items-center justify-center text-[#216BE4]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-[#216BE4] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No articles found</h3>
            <p className="text-sm text-muted-foreground">Try adjusting your search or category filter.</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold mb-3">Want to build what you read about?</h3>
          <p className="text-muted-foreground mb-6">Try Blink for free and bring these ideas to life in minutes.</p>
          <Button
            onClick={() => navigate('builder')}
            className="bg-[#216BE4] hover:bg-[#1B5BC7] text-white font-semibold px-7 py-3 rounded-lg text-base"
          >
            Start Building
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
