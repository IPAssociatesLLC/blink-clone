'use client';

import { usePageStore } from '@/lib/page-context';
import { Button } from '@/components/ui/button';

export function CTA() {
  const { navigate } = usePageStore();

  return (
    <section className="px-6 py-16 text-center border-t border-border">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
        Don&apos;t just think it,{' '}
        <span
          className="bg-gradient-to-br from-[#216BE4] to-[#6366f1] bg-clip-text"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Blink it.
        </span>
      </h2>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Button
          onClick={() => navigate('builder')}
          className="bg-[#216BE4] hover:bg-[#1B5BC7] text-white font-semibold px-7 py-3 rounded-lg text-base"
        >
          Get started for free
        </Button>
        <Button
          onClick={() => navigate('pricing')}
          variant="outline"
          className="font-semibold px-7 py-3 rounded-lg text-base border-border bg-secondary hover:bg-border"
        >
          View Pricing
        </Button>
      </div>
    </section>
  );
}
