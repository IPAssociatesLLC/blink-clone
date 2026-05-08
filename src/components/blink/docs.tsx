'use client';

const docsColumns = [
  {
    title: 'GETTING STARTED',
    links: ['Full documentation', 'Quickstart guide', 'Build guides', 'Extend with features'],
  },
  {
    title: 'FEATURES',
    links: ['AI Gateway', 'Database', 'Authentication', 'Stripe payments', 'File storage', 'Real-time', 'AI agents', 'RAG knowledge base'],
  },
  {
    title: 'DEPLOY',
    links: ['Launch and publish', 'Custom domains', 'Tech stack reference', 'AI models'],
  },
];

export function Docs() {
  return (
    <section className="px-6 py-12 max-w-[1200px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
        Documentation and Learning Resources
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {docsColumns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold tracking-widest text-muted-foreground mb-4">
              {col.title}
            </h4>
            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm text-muted-foreground py-1.5 hover:text-[#216BE4] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
