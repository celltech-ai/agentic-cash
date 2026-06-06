import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Agentic Cash Pipelines',
  description: 'Terms of service for Agentic Cash Pipelines',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-4 text-lg text-slate-300">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <h2 className="mb-4 mt-8 text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p className="mb-4 text-slate-300">
          By purchasing and using Agentic Cash Pipelines, you agree to these terms of service. If you do not agree to these terms, please do not use our products.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">2. License Grant</h2>
        <p className="mb-4 text-slate-300">
          We grant you a non-exclusive, non-transferable license to use the purchased products for personal use only. You may not resell, redistribute, or sublicense the products.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">3. Permitted Use</h2>
        <p className="mb-4 text-slate-300">
          You may use the strategies and code to build your own business, subscription service, consulting business, or coaching program. You may not resell the ebooks or code directly.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">4. Refund Policy</h2>
        <p className="mb-4 text-slate-300">
          We offer a 30-day money-back guarantee. If you are not satisfied with your purchase, contact us within 30 days for a full refund.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">5. Disclaimer</h2>
        <p className="mb-4 text-slate-300">
          The products are provided "as is" without warranty of any kind. We do not guarantee specific results or profits. Your results may vary based on your effort, market conditions, and other factors.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">6. Limitation of Liability</h2>
        <p className="mb-4 text-slate-300">
          We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">7. Contact Us</h2>
        <p className="mb-4 text-slate-300">
          For questions about these terms, please contact us at:{' '}
          <a href="mailto:support@agenticsystems.cash" className="text-blue-400 hover:text-blue-300">
            support@agenticsystems.cash
          </a>
        </p>
      </div>
    </div>
  );
}
