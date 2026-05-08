'use client';

const alternatives = [
  'Salesforce', 'HubSpot', 'Pipedrive', 'Notion', 'Airtable',
  'Monday.com', 'Asana', 'ClickUp', 'Trello', 'Calendly',
  'Typeform', 'JotForm', 'Zendesk', 'Intercom', 'Mixpanel',
  'Amplitude', 'PostHog', 'Mailchimp', 'ConvertKit', 'Shopify',
  'Gumroad', 'Webflow', 'Framer', 'Discord', 'Slack',
  'FreshBooks', 'QuickBooks',
];

const categories = [
  'CRM apps', 'Dashboard apps', 'SaaS products', 'E-commerce stores',
  'Landing pages', 'Portfolio sites', 'Analytics tools', 'Productivity apps',
  'Help desk tools', 'Scheduling apps', 'Form builders', 'Community platforms',
];

const tutorials = [
  'Build an AI CRM', 'Build an E-commerce Store', 'Build an Analytics Dashboard',
  'Build a Project Manager', 'Build a Course Platform', 'Build an AI Support Chatbot',
  'Build an AI Writing Assistant', 'Build an AI Image Studio', 'Build a Social Scheduler',
  'Build an AI To-Do App',
];

const prompts = [
  'CRM prompts', 'Dashboard prompts', 'SaaS prompts', 'E-commerce prompts',
  'Landing page prompts', 'Portfolio prompts', 'Blog prompts', 'Admin panel prompts',
  'Booking system prompts', 'Marketplace prompts', 'AI chatbot prompts',
];

function TagSection({ title, linkText, items }: { title: string; linkText: string; items: string[] }) {
  return (
    <section className="px-6 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{title}</h2>
      <a className="inline-block text-[15px] font-medium text-[#216BE4] mb-8 hover:underline cursor-pointer">
        {linkText} →
      </a>
      <div className="flex flex-wrap justify-center gap-2 max-w-[1200px] mx-auto">
        {items.map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-full border border-border text-muted-foreground hover:border-[#216BE4] hover:text-[#216BE4] hover:bg-[#216BE4]/5 transition-all"
          >
            {item} alternative
          </a>
        ))}
      </div>
    </section>
  );
}

function TagSectionSimple({ title, linkText, items }: { title: string; linkText: string; items: string[] }) {
  return (
    <section className="px-6 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{title}</h2>
      <a className="inline-block text-[15px] font-medium text-[#216BE4] mb-8 hover:underline cursor-pointer">
        {linkText} →
      </a>
      <div className="flex flex-wrap justify-center gap-2 max-w-[1200px] mx-auto">
        {items.map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-full border border-border text-muted-foreground hover:border-[#216BE4] hover:text-[#216BE4] hover:bg-[#216BE4]/5 transition-all"
          >
            {item}
          </a>
        ))}
      </div>
    </section>
  );
}

export function Alternatives() {
  return (
    <>
      <TagSection
        title="Build Your Own Alternative to Any SaaS Tool"
        linkText="Explore all alternatives"
        items={alternatives}
      />
      <TagSectionSimple
        title="Explore Apps by Category"
        linkText="Browse all categories"
        items={categories}
      />
      <TagSectionSimple
        title="Step-by-Step App Building Tutorials"
        linkText="View all tutorials"
        items={tutorials}
      />
      <TagSectionSimple
        title="AI Prompt Templates for Every App Type"
        linkText="Browse all prompts"
        items={prompts}
      />
    </>
  );
}
