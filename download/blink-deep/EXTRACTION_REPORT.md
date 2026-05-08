# Blink.new Deep Extraction Report
## Generated: 2026-05-08

---

## 1. SITE OVERVIEW

- **URL**: https://blink.new
- **Title**: Blink - AI App Builder | Build Apps in Minutes with AI
- **Description**: Build websites, SaaS, and mobile apps in minutes by chatting with AI. Includes database, hosting, authentication, and AI models. No coding skills required.
- **Founded**: 2023
- **Twitter**: @blinkdotnew
- **Support Email**: support@blink.new
- **CLI**: npm install -g @blinkdotnew/cli@latest
- **MCP**: npx @blinkdotnew/mcp
- **API Base**: https://core.blink.new/api/v1

---

## 2. TECH STACK

### Frontend
- **Framework**: Next.js (App Router, Turbopack)
- **UI Library**: Radix UI (headless components)
- **Styling**: Tailwind CSS + CSS Variables (light/dark theme)
- **Icons**: Lucide React
- **Toast**: Sonner
- **Fonts**: Geist (Geist Sans + Geist Mono)
- **Font Loading**: Next.js @next/font with woff2 preload

### Backend
- **Runtime**: Node.js (Next.js API routes)
- **Database**: PostgreSQL (Supabase)
- **Auth**: Clerk (with magic link, session management)
- **Payments**: Stripe (pk_live_51RDaIqIChkSeVZoQ...)
- **Storage**: Supabase Storage + CDN (cdn.blink.new)
- **Realtime**: Supabase Realtime + WebSocket (wss://api.elevenlabs.io)
- **AI Gateway**: Custom (api/v1/ai/chat/completions, api/v1/ai/image, api/v1/ai/speech, api/v1/ai/video)
- **Sandbox**: Cloudflare Workers (wss://sandbox-ws.kai-96c.workers.dev)

### Infrastructure
- **Hosting**: Vercel
- **CDN**: cdn.blink.new (Cloudflare)
- **Security**: Cloudflare Turnstile (CAPTCHA alternative)
- **Analytics**: PostHog (phc_lBPskCcqnfGKtW2jkxJMkvoI52aOA0iY4ej8j4nDBns)
- **Mobile**: Firebase (App Check, Realtime DB) + RevenueCat
- **Email**: Custom /api/send-email
- **Speech**: ElevenLabs API

### Monitoring
- **Analytics**: PostHog (feature flags, session replay, surveys)
- **Ads**: Google Ads (AW-17138100360), Facebook Pixel (1272333185035771), LinkedIn Insight, Twitter UWT
- **Error Handling**: Custom chunk error handler with PostHog tracking

---

## 3. AI MODELS AVAILABLE (58+ models)

### OpenAI
- gpt-4.1, gpt-4.1-mini, gpt-4.1-nano
- gpt-5-mini, gpt-5-nano
- gpt-5.1, gpt-5.1-codex, gpt-5.1-codex-mini
- gpt-5.2, gpt-5.3-Codex, gpt-5.4, gpt-5.5

### Anthropic
- claude-3-7-sonnet, claude-haiku-4-5
- claude-opus-4-5, claude-opus-4-6, claude-opus-4-7
- claude-sonnet-4-5, claude-sonnet-4-6

### Google
- gemini-2.0-flash, gemini-2.5-flash, gemini-2.5-flash-lite, gemini-2.5-pro
- gemini-3-flash, gemini-3-pro-preview, gemini-3.1-pro-preview

### xAI
- grok-4-1-fast, grok-4-latest

---

## 4. API ROUTES (139 endpoints)

### Authentication
- /api/auth/ - Main auth
- /api/auth/delete-account
- /api/auth/main-app/magic-link
- /api/auth/session
- /api/auth/session-data
- /api/auth/token

### AI Services
- /api/v1/ai/chat/completions - Chat completion
- /api/v1/ai/image - Image generation
- /api/v1/ai/models - List available models
- /api/v1/ai/speech - Text-to-speech
- /api/v1/ai/video - Video generation

### Projects
- /api/projects - List projects
- /api/projects/create - Create new project
- /api/projects/public - Public projects
- /api/projects/remix - Remix a project
- /api/project/ - Get single project
- /api/project/publish-domain - Custom domain
- /api/project/supabase/status - DB status

### Claw (AI Agents)
- /api/claw/agents - List agents
- /api/claw/agents/ - Get agent
- /api/claw/agents/extract-info - Agent info
- /api/claw/models - Available models

### Credits & Billing
- /api/credits/check - Check balance
- /api/credits/migrate - Credit migration
- /api/credits/reset - Reset credits
- /api/credits/topup/checkout - Buy credits
- /api/stripe/checkout - Stripe checkout
- /api/stripe/cancel-subscription
- /api/stripe/customer-portal
- /api/stripe-webhook

### Connections
- /api/connect/github/* - GitHub integration
- /api/connect/supabase/* - Supabase integration
- /api/connect/revenuecat/* - RevenueCat integration

### Workspace & Teams
- /api/workspaces - List workspaces
- /api/workspace/active-services
- /api/workspace/services/start-grace-bulk
- /api/inbox/invites - Team invites

### Support
- /api/support/tickets - Support tickets
- /api/support/email - Email support
- /api/support/agent-status - Agent status

### Other
- /api/sandbox/* - Code sandbox
- /api/announcements/* - Announcements
- /api/templates/featured - Featured templates
- /api/scrape - Web scraper
- /api/screenshot - Screenshot service
- /api/versions - Version history
- /api/notifications/push/subscribe - Push notifications
- /api/send-email - Email service
- /api/referral/* - Referral system
- /api/retention/* - Retention offers

---

## 5. AI AGENTS (13 specialists)

| Agent | Role |
|-------|------|
| Gerald | Chief Financial Officer |
| Alex | Sales Development Rep |
| Archer | Investment Researcher |
| Casey | Customer Success Manager |
| Dev | Software Engineer |
| Harper | Head of Recruiting |
| Jamie | Executive Personal Assistant |
| Jordan | Finance & Business Analyst |
| Maya | Inbox Manager |
| Nova | Research Analyst |
| Reece | Growth & Competitive Intelligence |
| Rex | DevOps & Security Monitor |
| Sage | Social Media Manager |

---

## 6. SUBPAGES CRAWLED

| Page | Title | Content Size |
|------|-------|-------------|
| / | Blink - AI App Builder | 898 KB |
| /pricing | Pricing - Affordable AI App Builder | 5 KB |
| /templates | Website & App Templates | 7 KB |
| /claw | Managed OpenClaw Hosting | 9 KB |
| /alternatives | Build Your Own Alternatives | 9 KB |
| /docs | Welcome | Blink Documentation | 6 KB |
| /blog | The Blink Blog | 6 KB |
| /prompts | AI Prompts to Build Any App | 6 KB |
| /affiliates | Affiliate Program | 8 KB |
| /case-studies | Success Stories | 2 KB |

---

## 7. EXTRACTED FILES

### Source Code
- pages/index_clean.html - Full rendered HTML (898 KB)
- pages/index_full.html - Raw extracted HTML (948 KB)
- js_chunks/ - 72 Next.js JS chunks
- css/ - 2 CSS files + 4 inline style blocks
- js_chunks/inline_script_*.js - 86 inline scripts

### Assets
- fonts/ - 2 Geist font files (woff2)
- images/ - Logo SVGs, OG image, CDN images, screenshots
- assets/ - Favicons (16, 32, 192, 512), apple-touch-icon, favicon.ico, site.webmanifest

### Configuration
- config/robots.txt - Full robots.txt with AI training policies
- config/sitemap-index.xml - Sitemap index
- config/sitemap-images.xml - Image sitemap
- config/llms.txt - Machine-readable content index (14 KB)
- config/llms-full.txt - Full content dump for LLMs (518 KB)
- config/site.webmanifest - PWA manifest
- config/extraction_manifest.json - Extraction summary

### API & Technical
- api/api_routes_full.txt - 139 API endpoints
- api/ai_models.txt - 58+ AI models
- api/endpoints.txt - External API references
- api/database_refs.txt - Supabase references
- api/env_vars.txt - Environment variables
- api/auth_refs.txt - Authentication references
- api/analytics_refs.txt - PostHog/analytics refs
- api/payment_refs.txt - Stripe/payment refs
- api/infra_refs.txt - Infrastructure references
- api/realtime_refs.txt - WebSocket/realtime refs
- api/cdn_urls.txt - CDN URLs

### SEO
- seo/ld_json_0.json to ld_json_3.json - JSON-LD structured data (Organization, WebSite, FAQPage schemas)

---

## 8. KEY FINDINGS

### Security Observations
- PostHog analytics key exposed: phc_lBPskCcqnfGKtW2jkxJMkvoI52aOA0iY4ej8j4nDBns
- Stripe publishable key: pk_live_51RDaIqIChkSeVZoQE7Oi6uiYykvgw0e7WIBvLxl7a5WmeCpE5MT9VrPXVZqnrBWg4fs6y3Za4ejUUhX5vWWHkuiY00UQzcU8Df
- Cloudflare Turnstile for bot protection
- All API routes behind /api/ (disallowed in robots.txt)

### Architecture Insights
- Full Next.js App Router with Turbopack
- Supabase for database + auth + storage + realtime
- Clerk for user authentication
- Stripe for payments + subscriptions
- Firebase for mobile (App Check, push notifications)
- RevenueCat for in-app purchases
- ElevenLabs for speech-to-text
- Custom AI gateway at core.blink.new/api/v1
- Cloudflare Workers for sandbox execution
- Vercel for hosting

### Content Strategy
- 84 internal page links on homepage
- 27 SaaS alternative pages (SEO-driven)
- 13 AI agent pages
- Full llms.txt and llms-full.txt for AI discoverability
- Explicit AI training consent in robots.txt
- JSON-LD structured data for Organization, WebSite, FAQPage

---

*Deep extraction by Super Z* ⚡
