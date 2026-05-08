'use client';

import { useState, useRef } from 'react';
import { usePageStore } from '@/lib/page-context';
import {
  Monitor,
  Smartphone,
  Globe,
  Wrench,
  Paperclip,
  ChevronDown,
  ArrowRight,
  Bot,
  MoreHorizontal,
} from 'lucide-react';

const projectTypes = [
  { id: 'fullstack', label: 'Full Stack App', icon: Monitor },
  { id: 'mobile', label: 'Mobile App', icon: Smartphone },
  { id: 'website', label: 'Website', icon: Globe },
  { id: 'extension', label: 'Chrome Extension', icon: Wrench },
];

const suggestions = [
  'AI Testimonial Wall',
  'AI Product Photo Studio',
  'AI Headshot Generator',
];

export function Hero() {
  const [activeTab, setActiveTab] = useState('fullstack');
  const [inputValue, setInputValue] = useState('');
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Blink 1.0 Lite');
  const [agentEnabled, setAgentEnabled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigate, setProjectPrompt, setProjectType, setProjectModel } = usePageStore();

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    setProjectPrompt(inputValue);
    setProjectType(activeTab);
    setProjectModel(selectedModel);
    navigate('builder');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSubmit();
    }
  };

  const handleSuggestionClick = (text: string) => {
    setInputValue(`Build ${text}`);
    inputRef.current?.focus();
  };

  const models = ['Blink 1.0 Lite', 'Blink 1.0', 'Blink 1.0 Pro', 'GPT-4o', 'Claude 3.5 Sonnet'];

  return (
    <section className="pt-20">
      {/* Banner */}
      <div className="text-center pt-4 pb-2 animate-fade-in-up">
        <button className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#216BE4] text-white leading-none">
            NEW
          </span>
          Meet Blink Claw — AI agents that work 24/7
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Hero Content */}
      <div className="px-6 pt-8 pb-16 text-center">
        <div className="max-w-[720px] mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-10">
            Don&apos;t just think it
            <br />
            <span
              className="bg-gradient-to-br from-[#216BE4] to-[#6366f1] bg-clip-text"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Blink it
            </span>
          </h1>

          {/* Project Type Tabs */}
          <div className="flex items-center justify-center gap-1 mb-4 flex-wrap">
            {projectTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1.5 transition-all ${
                    activeTab === type.id
                      ? 'bg-card text-foreground shadow-sm border border-border'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  {type.label}
                </button>
              );
            })}
          </div>

          {/* Create Project Input */}
          <div className="bg-card border border-border rounded-2xl p-1.5 shadow-lg mb-4 transition-shadow focus-within:shadow-xl focus-within:ring-2 focus-within:ring-[#216BE4]/30">
            <div className="flex items-center gap-2 px-4 py-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Build a SaaS app that..."
                className="flex-1 border-none outline-none text-base bg-transparent text-foreground placeholder:text-muted-foreground"
              />
              <button className="p-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors" title="Attach file">
                <Paperclip className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between px-2 py-1 gap-2">
              <div className="relative">
                <button
                  onClick={() => setShowModelDropdown(!showModelDropdown)}
                  className="text-[13px] font-medium px-3 py-1.5 rounded-md bg-secondary text-muted-foreground hover:bg-border flex items-center gap-1.5 transition-colors"
                >
                  <Bot className="w-4 h-4" />
                  {selectedModel}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {showModelDropdown && (
                  <div className="absolute bottom-full left-0 mb-2 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[180px] z-10">
                    {models.map((model) => (
                      <button
                        key={model}
                        onClick={() => {
                          setSelectedModel(model);
                          setShowModelDropdown(false);
                        }}
                        className={`w-full text-left text-sm px-3 py-2 hover:bg-secondary transition-colors ${
                          selectedModel === model ? 'text-foreground font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setAgentEnabled(!agentEnabled)}
                  className={`text-[13px] font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors ${
                    agentEnabled
                      ? 'bg-[#216BE4]/10 text-[#216BE4]'
                      : 'bg-muted/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <Bot className="w-4 h-4" />
                  Agent
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-lg bg-[#216BE4] text-white flex items-center justify-center transition-all hover:bg-[#1B5BC7] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Suggestion Chips */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {suggestions.map((text) => (
              <button
                key={text}
                onClick={() => handleSuggestionClick(text)}
                className="text-[13px] font-medium px-3.5 py-1.5 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors whitespace-nowrap"
              >
                {text}
              </button>
            ))}
            <button className="p-1.5 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
