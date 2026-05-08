'use client';

import { usePageStore } from '@/lib/page-context';
import { Navbar } from '@/components/blink/navbar';
import { Hero } from '@/components/blink/hero';
import { Features } from '@/components/blink/features';
import { Alternatives } from '@/components/blink/alternatives';
import { Docs } from '@/components/blink/docs';
import { FAQ } from '@/components/blink/faq';
import { CTA } from '@/components/blink/cta';
import { Footer } from '@/components/blink/footer';
import { Builder } from '@/components/blink/builder';
import { Pricing } from '@/components/blink/pricing';
import { Templates } from '@/components/blink/templates';
import { DocsPage } from '@/components/blink/docs-page';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Alternatives />
      <Docs />
      <FAQ />
      <CTA />
    </>
  );
}

export default function Home() {
  const { currentPage } = usePageStore();

  // Builder page has its own full-screen layout without navbar/footer
  if (currentPage === 'builder') {
    return <Builder />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'pricing' && <Pricing />}
        {currentPage === 'templates' && <Templates />}
        {currentPage === 'docs' && <DocsPage />}
      </main>
      <Footer />
    </div>
  );
}
