import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy - Agentic Cash Pipelines',
  description: 'Refund policy for Agentic Cash Pipelines',
};

export default function RefundPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Refund Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-4 text-lg text-slate-300">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <h2 className="mb-4 mt-8 text-2xl font-semibold">30-Day Money-Back Guarantee</h2>
        <p className="mb-4 text-slate-300">
          We stand behind our products with a 30-day money-back guarantee. If you're not completely satisfied with your purchase, we'll refund 100% of your purchase price within 48 hours.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">How to Request a Refund</h2>
        <p className="mb-4 text-slate-300">
          To request a refund, simply email us at{' '}
          <a href="mailto:support@agenticsystems.cash" className="text-blue-400 hover:text-blue-300">
            support@agenticsystems.cash
          </a>{' '}
          within 30 days of your purchase. Include your order details and we'll process your refund within 48 hours.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">No Questions Asked</h2>
        <p className="mb-4 text-slate-300">
          We believe in our products and want you to feel confident trying them risk-free. If you're not satisfied for any reason, we'll refund your purchase. No questions asked, no hassle.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Our Refund Rate</h2>
        <p className="mb-4 text-slate-300">
          We're proud to have less than a 2% refund rate because our system works. But we understand that our products may not be right for everyone, which is why we offer this guarantee.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Refund Processing</h2>
        <p className="mb-4 text-slate-300">
          Refunds are processed within 48 hours of your request. Depending on your payment method, it may take 3-5 business days for the refund to appear in your account.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Contact Us</h2>
        <p className="mb-4 text-slate-300">
          If you have questions about our refund policy or need to request a refund, please contact us at:{' '}
          <a href="mailto:support@agenticsystems.cash" className="text-blue-400 hover:text-blue-300">
            support@agenticsystems.cash
          </a>
        </p>
      </div>
    </div>
  );
}
