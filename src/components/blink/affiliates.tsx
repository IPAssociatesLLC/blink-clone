'use client';

import { useState } from 'react';
import { usePageStore } from '@/lib/page-context';
import { Button } from '@/components/ui/button';
import {
  DollarSign,
  Users,
  Link2,
  BarChart3,
  ArrowRight,
  Check,
  ChevronDown,
  Gift,
  TrendingUp,
  Shield,
  Zap,
} from 'lucide-react';

const commissionTiers = [
  {
    tier: 'Starter',
    revenue: '$0 - $1,000',
    commission: '20%',
    description: 'Perfect for getting started with the affiliate program.',
  },
  {
    tier: 'Growth',
    revenue: '$1,001 - $10,000',
    commission: '25%',
    description: 'Higher commission as your referrals grow.',
  },
  {
    tier: 'Elite',
    revenue: '$10,001+',
    commission: '30%',
    description: 'Top-tier commission for our highest-performing affiliates.',
  },
];

const faqItems = [
  {
    question: 'How does the Blink affiliate program work?',
    answer: 'When you sign up, you get a unique referral link. Share it with your audience — when someone signs up for a paid Blink plan through your link, you earn a commission. We track everything automatically so you don\'t have to worry about missing referrals.',
  },
  {
    question: 'How much can I earn?',
    answer: 'Commissions range from 20% to 30% depending on your monthly referral volume. On our Pro plan ($20/mo), that means $4-$6 per referred user per month. With 100 active referrals, you could earn $400-$600/month in recurring commissions.',
  },
  {
    question: 'When do I get paid?',
    answer: 'We process affiliate payouts on the 1st of each month for the previous month\'s earnings. Minimum payout is $50. We support payouts via PayPal and bank transfer.',
  },
  {
    question: 'Is there a minimum number of referrals required?',
    answer: 'No, there\'s no minimum. You can start earning from your very first referral. However, payouts are only processed once you accumulate at least $50 in commissions.',
  },
  {
    question: 'How long do referral cookies last?',
    answer: 'Our referral cookies last 90 days. This means if someone clicks your link but doesn\'t sign up immediately, you\'ll still get credit if they sign up within 90 days.',
  },
  {
    question: 'Can I refer myself or my own company?',
    answer: 'Self-referrals are not eligible for commissions. The program is designed for referring new customers to Blink.',
  },
  {
    question: 'What marketing materials are provided?',
    answer: 'We provide a comprehensive affiliate kit including banners, logos, screenshots, email templates, social media posts, and a brand guidelines document. Everything you need to promote Blink effectively.',
  },
  {
    question: 'Is the commission recurring?',
    answer: 'Yes! You earn commissions for as long as your referred users remain paying customers. This means your earnings can compound over time as you refer more users.',
  },
];

function AffiliateFaqItem({ item }: { item: typeof faqItems[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border border-border rounded-xl overflow-hidden transition-shadow hover:shadow-sm ${open ? 'shadow-sm' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-left text-foreground hover:bg-secondary transition-colors"
      >
        <span>{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export function Affiliates() {
  const { navigate } = usePageStore();

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-[#216BE4]/10 text-[#216BE4] mb-6">
            <Gift className="w-4 h-4" />
            Earn up to 30% recurring commission
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Join the Blink{' '}
            <span
              className="bg-gradient-to-br from-[#216BE4] to-[#6366f1] bg-clip-text"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Affiliate Program
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Earn recurring commissions by referring users to Blink. Share your link, and we handle the rest — tracking, payments, and support.
          </p>
          <Button
            onClick={() => navigate('builder')}
            className="bg-[#216BE4] hover:bg-[#1B5BC7] text-white font-semibold px-7 py-3 rounded-lg text-base"
          >
            Sign Up as Affiliate
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '30%', label: 'Max Commission', icon: DollarSign },
            { value: '90 days', label: 'Cookie Duration', icon: Link2 },
            { value: '$50', label: 'Min Payout', icon: BarChart3 },
            { value: '24/7', label: 'Support', icon: Shield },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-10 h-10 rounded-lg bg-[#216BE4]/10 flex items-center justify-center text-[#216BE4] mx-auto mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-[#216BE4] mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Commission Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Commission Structure</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Our tiered commission structure rewards you more as your referrals grow. All commissions are recurring.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {commissionTiers.map((tier) => (
              <div key={tier.tier} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-xs font-bold text-muted-foreground tracking-widest mb-2">{tier.tier.toUpperCase()}</div>
                <div className="text-4xl font-extrabold text-[#216BE4] mb-1">{tier.commission}</div>
                <div className="text-sm text-muted-foreground mb-3">{tier.revenue}/mo revenue</div>
                <p className="text-xs text-muted-foreground">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                icon: Users,
                title: 'Sign Up',
                description: 'Register for the Blink affiliate program and get your unique referral link instantly.',
              },
              {
                step: '2',
                icon: Link2,
                title: 'Share Your Link',
                description: 'Share your referral link on your blog, social media, newsletter, or anywhere your audience is.',
              },
              {
                step: '3',
                icon: DollarSign,
                title: 'Earn Commissions',
                description: 'When someone signs up through your link and upgrades to a paid plan, you earn a recurring commission.',
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

        {/* Why Join */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Why Join the Blink Affiliate Program</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {[
              { icon: TrendingUp, title: 'Recurring Revenue', desc: 'Earn commissions for as long as your referrals stay customers.' },
              { icon: Zap, title: 'Instant Approval', desc: 'Get your affiliate link immediately after signing up — no waiting.' },
              { icon: BarChart3, title: 'Real-Time Dashboard', desc: 'Track clicks, signups, and earnings in real-time.' },
              { icon: Shield, title: 'Reliable Payments', desc: 'Monthly payouts via PayPal or bank transfer, always on time.' },
              { icon: Gift, title: 'Marketing Kit', desc: 'Get banners, email templates, and social media assets ready to use.' },
              { icon: Users, title: 'Dedicated Support', desc: 'Our affiliate team is here to help you maximize your earnings.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#216BE4]/10 flex items-center justify-center text-[#216BE4] flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-0.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            {faqItems.map((item) => (
              <AffiliateFaqItem key={item.question} item={item} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-border pt-12">
          <h3 className="text-2xl font-bold mb-3">Start earning with Blink today</h3>
          <p className="text-muted-foreground mb-6">Join hundreds of affiliates already earning recurring commissions.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={() => navigate('builder')}
              className="bg-[#216BE4] hover:bg-[#1B5BC7] text-white font-semibold px-7 py-3 rounded-lg text-base"
            >
              Sign Up as Affiliate
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
