import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Program - Agentic Cash Pipelines',
  description: 'Join our affiliate program and earn commissions promoting Agentic Cash Pipelines',
};

export default function AffiliatePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Affiliate Program</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-4 text-lg text-slate-300">
          Join our affiliate program and earn commissions by promoting Agentic Cash Pipelines to your audience.
        </p>
        
        <h2 className="mb-4 mt-8 text-2xl font-semibold">Program Details</h2>
        <p className="mb-4 text-slate-300">
          Earn 30% commission on every sale you refer. With our Complete System priced at $97, that's $29.10 per sale. Our conversion rate is strong, making this a profitable opportunity for affiliates.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Commission Structure</h2>
        <ul className="mb-4 list-disc pl-6 text-slate-300">
          <li>Volume 1 ($17): $5.10 commission per sale</li>
          <li>Volume 2 ($27): $8.10 commission per sale</li>
          <li>Complete System ($97): $29.10 commission per sale</li>
        </ul>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">How It Works</h2>
        <ol className="mb-4 list-decimal pl-6 text-slate-300">
          <li>Apply to join our affiliate program</li>
          <li>Receive your unique affiliate link</li>
          <li>Promote Agentic Cash Pipelines to your audience</li>
          <li>Earn 30% commission on every sale</li>
          <li>Get paid monthly via PayPal or bank transfer</li>
        </ol>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Who Should Join</h2>
        <p className="mb-4 text-slate-300">
          Our affiliate program is perfect for content creators, influencers, bloggers, and anyone with an audience interested in making money online, reselling, or AI-powered business automation.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Marketing Materials</h2>
        <p className="mb-4 text-slate-300">
          We provide affiliates with banners, email swipe files, social media graphics, and promotional materials to help you succeed. We also offer dedicated support to help you maximize your earnings.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Apply Now</h2>
        <p className="mb-4 text-slate-300">
          To apply for our affiliate program, email us at{' '}
          <a href="mailto:affiliates@agenticsystems.cash" className="text-blue-400 hover:text-blue-300">
            affiliates@agenticsystems.cash
          </a>{' '}
          with information about your audience and how you plan to promote Agentic Cash Pipelines. We'll review your application and get back to you within 48 hours.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Questions?</h2>
        <p className="mb-4 text-slate-300">
          Have questions about our affiliate program? Contact us at:{' '}
          <a href="mailto:affiliates@agenticsystems.cash" className="text-blue-400 hover:text-blue-300">
            affiliates@agenticsystems.cash
          </a>
        </p>
      </div>
    </div>
  );
}
