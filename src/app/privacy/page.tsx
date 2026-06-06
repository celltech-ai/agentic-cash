import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Agentic Cash Pipelines',
  description: 'Privacy policy for Agentic Cash Pipelines',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-4 text-lg text-slate-300">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <h2 className="mb-4 mt-8 text-2xl font-semibold">1. Information We Collect</h2>
        <p className="mb-4 text-slate-300">
          We collect information you provide directly to us when you purchase our products, including your name, email address, and payment information. We also collect usage data to improve our services.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">2. How We Use Your Information</h2>
        <p className="mb-4 text-slate-300">
          We use the information we collect to process transactions, send product updates, provide customer support, and improve our products and services.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">3. Information Sharing</h2>
        <p className="mb-4 text-slate-300">
          We do not sell your personal information. We may share information with service providers who assist us in operating our business (payment processors, email services).
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">4. Data Security</h2>
        <p className="mb-4 text-slate-300">
          We implement appropriate security measures to protect your personal information. Payment information is processed securely through our payment processor.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">5. Your Rights</h2>
        <p className="mb-4 text-slate-300">
          You have the right to access, update, or delete your personal information. Contact us at support@agenticsystems.cash to exercise these rights.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">6. Contact Us</h2>
        <p className="mb-4 text-slate-300">
          If you have questions about this privacy policy, please contact us at:{' '}
          <a href="mailto:support@agenticsystems.cash" className="text-blue-400 hover:text-blue-300">
            support@agenticsystems.cash
          </a>
        </p>
      </div>
    </div>
  );
}
