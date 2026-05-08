'use client';

import { usePageStore } from '@/lib/page-context';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started and building your first apps.',
    features: [
      'Daily AI credits',
      'Unlimited projects',
      'Community support',
      'All core features',
      'PostgreSQL database',
      'Authentication',
      'File storage (1GB)',
      'Custom domains',
    ],
    cta: 'Get started for free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$20',
    period: '/month',
    description: 'For serious builders who need more power and flexibility.',
    features: [
      'Everything in Free',
      '10x more AI credits',
      'Priority support',
      'Team collaboration (up to 5)',
      'File storage (50GB)',
      'Advanced AI models',
      'Analytics dashboard',
      'Custom environment variables',
    ],
    cta: 'Start Pro trial',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$50',
    period: '/month',
    description: 'For teams building and shipping production applications.',
    features: [
      'Everything in Pro',
      'Unlimited AI credits',
      'Unlimited team members',
      'SSO / SAML',
      'File storage (500GB)',
      'Priority edge functions',
      'Dedicated support',
      'SLA guarantee',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export function Pricing() {
  const { navigate } = usePageStore();

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start for free, upgrade when you need more. No hidden fees, no surprises.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 flex flex-col ${
                plan.highlighted
                  ? 'border-[#216BE4] shadow-lg shadow-[#216BE4]/10 relative'
                  : 'border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#216BE4] text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-[#216BE4] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => navigate('builder')}
                className={`w-full font-semibold py-2.5 rounded-lg ${
                  plan.highlighted
                    ? 'bg-[#216BE4] hover:bg-[#1B5BC7] text-white'
                    : 'bg-secondary hover:bg-border text-foreground border border-border'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
