export const blogPosts = [
  {
    slug: "how-to-choose-affiliate-offers",
    title: "How to Choose Affiliate Offers That Convert",
    excerpt:
      "Learn a simple 5-step scoring method to evaluate offer quality, payout, and traffic-fit.",
    date: "2026-05-18",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Picking the right affiliate offers is the difference between consistent commissions and wasted traffic. Use a quick scoring framework to evaluate conversion potential.",
      },
      {
        type: "ul",
        items: [
          "Audience-match: does the offer match your visitor intent?",
          "Payout & timeline: what do you earn and how long does it take?",
          "Creative quality: are the ads/landing pages strong?",
          "Tracking reliability: can you measure results accurately?",
          "Compliance: are the claims and targeting policies safe?",
        ],
      },
      {
        type: "p",
        text: "Start with offers that align with your niche, then refine based on actual conversion data.",
      },
    ],
  },
  {
    slug: "build-a-high-converting-landing-page",
    title: "Build a High-Converting Landing Page for Affiliate Traffic",
    excerpt:
      "A practical landing-page checklist: message clarity, above-the-fold proof, and conversion-focused layout.",
    date: "2026-04-02",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "Affiliate traffic works best when your landing page reduces friction and strengthens trust.",
      },
      {
        type: "ul",
        items: [
          "Headline that matches search intent",
          "One primary CTA",
          "Social proof (testimonials, stats, logos)",
          "Benefit-led sections (not feature dumps)",
          "FAQ that addresses objections",
        ],
      },
      {
        type: "p",
        text: "Use clear formatting, short paragraphs, and strong visual hierarchy to keep visitors moving toward the CTA.",
      },
    ],
  },
  {
    slug: "email-sequences-for-affiliate-offers",
    title: "Email Sequences for Affiliate Offers: A Simple Playbook",
    excerpt:
      "Turn one-time clicks into repeat conversions using a 4-email welcome sequence and value-first messaging.",
    date: "2026-03-09",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Instead of sending one promotional email, build a sequence that earns attention first.",
      },
      {
        type: "ul",
        items: [
          "Email 1: deliver the promise",
          "Email 2: show proof",
          "Email 3: explain the process",
          "Email 4: offer + limited-time CTA",
        ],
      },
      {
        type: "p",
        text: "Keep subject lines benefit-focused and segment based on what your audience clicked.",
      },
    ],
  },
];

export const offers = [
  {
    slug: "saas-crm-trial",
    name: "CRM Trial (SaaS)",
    category: "B2B SaaS",
    payout: "$15 / trial",
    commissionType: "CPS",
    cookie: "30 days",
    description:
      "Promote a modern CRM trial with in-app onboarding and clear value messaging.",
    highlights: [
      "Fast signup (2 minutes)",
      "Free trial with instant setup",
      "Tracking dashboard for affiliates",
      "High-intent landing pages",
    ],
    faq: [
      {
        q: "What traffic sources work best?",
        a: "High-intent content, comparison pages, and email traffic generally perform well.",
      },
      {
        q: "Is tracking included?",
        a: "Yes—use your unique affiliate tracking link and monitor clicks/conversions in the dashboard.",
      },
    ],
  },
  {
    slug: "credit-card-benefits",
    name: "Credit Card Benefits Guide",
    category: "Fintech",
    payout: "$20 / application",
    commissionType: "CPA",
    cookie: "45 days",
    description:
      "A comparison offer for credit cards—focus on user goals and clear approval expectations.",
    highlights: [
      "Multiple card options",
      "Helpful eligibility guidance",
      "Compliance-first creatives",
      "Geo-targeting support",
    ],
    faq: [
      {
        q: "Do you provide landing page creatives?",
        a: "Yes, plus recommended messaging for different audience segments.",
      },
    ],
  },
  {
    slug: "web-hosting-speed-test",
    name: "Web Hosting Speed Test",
    category: "Web Services",
    payout: "$12 / lead",
    commissionType: "CPL",
    cookie: "25 days",
    description:
      "Help visitors test website speed and recommend hosting plans based on results.",
    highlights: [
      "Interactive speed test",
      "Clear before/after reporting",
      "Affiliate-friendly terms",
      "Optimized conversion funnels",
    ],
    faq: [
      {
        q: "What audience should I target?",
        a: "Blog readers, dev communities, and website owners searching for performance improvements.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null;
}

export function getOfferBySlug(slug) {
  return offers.find((o) => o.slug === slug) || null;
}

