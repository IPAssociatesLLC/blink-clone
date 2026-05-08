'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'What is Blink?',
    answer: 'Blink is an AI-powered app builder that lets you create full-stack web applications, mobile apps, websites, and Chrome extensions simply by describing what you want in plain English. It handles everything from database setup to deployment, making it possible for anyone to build production-ready applications without coding experience.',
  },
  {
    question: 'What is an AI app builder?',
    answer: 'An AI app builder is a platform that uses artificial intelligence to generate complete applications from natural language descriptions. Instead of writing code manually, you describe your app\'s features and functionality, and the AI generates the frontend, backend, database schema, and deployment configuration automatically.',
  },
  {
    question: 'What is vibe coding?',
    answer: 'Vibe coding is a new approach to software development where you describe what you want to build in natural language, and AI handles the implementation. You focus on the vision and the "vibe" of your application, while the AI coding agent translates your ideas into working code, iteratively refining based on your feedback.',
  },
  {
    question: 'How does the vibe coding process work?',
    answer: 'You start by describing your app idea in the prompt box. The AI agent analyzes your request, generates a complete application with frontend, backend, and database, then presents it for your review. You can iterate by chatting with the AI to refine features, change designs, or add new functionality until the app matches your vision perfectly.',
  },
  {
    question: 'How are Blink applications deployed?',
    answer: 'Blink applications are deployed instantly on our global CDN infrastructure. Each app gets a unique URL automatically, and you can also connect custom domains. Deployments include SSL certificates, edge caching, and automatic scaling to handle traffic spikes without any configuration needed from you.',
  },
  {
    question: 'Do I need coding experience to use Blink?',
    answer: 'No coding experience is required. Blink is designed for everyone, from complete beginners to experienced developers. You simply describe what you want to build in plain English, and the AI handles all the technical implementation. However, if you do have coding experience, you can customize and extend the generated code as much as you want.',
  },
  {
    question: 'What types of apps can I build with Blink?',
    answer: 'You can build virtually any type of web application, including SaaS products, e-commerce stores, CRMs, dashboards, landing pages, portfolio sites, booking systems, community platforms, AI-powered tools, analytics dashboards, and more. Blink also supports building mobile apps and Chrome extensions, giving you a comprehensive platform for all your app development needs.',
  },
  {
    question: 'What is the difference between Blink and Cursor?',
    answer: 'Cursor is a code editor with AI assistance, meaning you still need to manage the development environment, set up databases, configure deployments, and handle infrastructure. Blink is a complete platform that handles everything from code generation to deployment, including database, authentication, hosting, and AI model integration, all from a single prompt.',
  },
  {
    question: 'What is the difference between Blink and v0?',
    answer: 'v0 by Vercel focuses primarily on generating frontend UI components and layouts. Blink goes much further by building complete full-stack applications with backend logic, database integration, authentication, API routes, and deployment. With Blink, you get a fully functional app, not just the visual layer.',
  },
  {
    question: 'What is the difference between Blink and Bolt.new?',
    answer: 'While Bolt.new offers AI-powered app building, Blink provides a more comprehensive platform with built-in database, authentication, storage, edge functions, and AI model access. Blink also offers AI employee deployment through Blink Claw, team collaboration features, and a more generous free tier with daily AI credits.',
  },
  {
    question: 'Do I own the code Blink generates?',
    answer: 'Yes, you fully own all the code that Blink generates for your applications. You can download it, modify it, deploy it elsewhere, or use it however you see fit. There are no restrictions on the code you create with Blink, and you retain full intellectual property rights to everything built on the platform.',
  },
  {
    question: 'Is Blink free to use?',
    answer: 'Yes, Blink offers a generous free plan that includes daily AI credits, unlimited projects, and access to all core features. The free plan is perfect for getting started and building your first apps. When you need more AI credits or team features, you can upgrade to a paid plan at any time.',
  },
  {
    question: 'Does Blink support custom domains?',
    answer: 'Yes, Blink fully supports custom domains. You can connect your own domain to any Blink application with automatic SSL certificate provisioning. The setup process is simple and typically takes just a few minutes to complete, with full DNS configuration guidance provided in the documentation.',
  },
  {
    question: 'Can I build a SaaS product with Blink?',
    answer: 'Absolutely. Blink is particularly well-suited for building SaaS products. It includes built-in support for Stripe payments, user authentication, subscription management, multi-tenancy, and all the infrastructure you need to launch a SaaS business. Many successful SaaS products have been built and launched entirely on the Blink platform.',
  },
];

function FaqItem({ item }: { item: typeof faqItems[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-border rounded-xl overflow-hidden transition-shadow hover:shadow-sm ${open ? 'shadow-sm' : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-[15px] font-semibold text-left text-foreground hover:bg-secondary transition-colors"
      >
        <span>{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const leftCol = faqItems.slice(0, 7);
  const rightCol = faqItems.slice(7);

  return (
    <section className="px-6 py-12 max-w-[1200px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          {leftCol.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {rightCol.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
