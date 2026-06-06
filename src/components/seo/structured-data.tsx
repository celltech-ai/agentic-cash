import Script from 'next/script';

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agentic Systems',
    url: 'https://agenticsystems.cash',
    logo: 'https://agenticsystems.cash/logo.png',
    sameAs: [
      'https://twitter.com/agenticsystems',
      'https://github.com/agenticsystems',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@agenticsystems.cash',
      contactType: 'customer support',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Agentic Cash Pipelines',
    description:
      'Complete AI-powered marketplace arbitrage system with 54K words of content, working TypeScript codebase, and proven strategies for finding £50-£200 profit deals on Vinted, eBay, and 10+ marketplaces.',
    brand: {
      '@type': 'Brand',
      name: 'Agentic Systems',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Volume 1: Strategy & Fundamentals',
        price: '17.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://agenticsystems.cash/#pricing',
      },
      {
        '@type': 'Offer',
        name: 'Volume 2: Technical Implementation',
        price: '27.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://agenticsystems.cash/#pricing',
      },
      {
        '@type': 'Offer',
        name: 'Complete System (All 3 Volumes)',
        price: '47.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://agenticsystems.cash/#pricing',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need coding experience?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Volume 1 requires no coding—it's pure strategy. Volume 2 includes complete source code, but you should be comfortable opening a terminal, running npm install, and editing config files. You don't need to be a developer. The book walks through every step with copy-paste code examples.",
        },
      },
      {
        '@type': 'Question',
        name: 'How much money do I need to start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Volume 1 (manual flipping): £50-100 in starting capital. For Volume 2 (automated system): ~£135/month running costs (Apify scraping ~£120, VPS ~£4, Gemini vision ~£10). Your first profitable deal covers the month.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly will I see results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Volume 1 readers typically find their first profitable deal within the first week if they follow the 30-day action plan. Volume 2 readers can have a working scanner running in 4 hours. First automated deal alert usually arrives within 24-48 hours of going live.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this legal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. We use official APIs where available (eBay Browse API, Etsy Open API, Pinterest API). For platforms without APIs, we use managed scraping services (Apify) that handle compliance. We monitor listings. We never auto-purchase, create fake accounts, or access private data. Every purchase decision is made by a human.",
        },
      },
      {
        '@type': 'Question',
        name: "What if it doesn't work for me?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "30-day money-back guarantee. No questions asked. Email us and we'll refund you within 48 hours. We've had less than 2% refund rate because the system works—but we want you to feel confident trying it risk-free.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
