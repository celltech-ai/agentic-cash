"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Mail } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email && email.includes('@')) {
      setStatus('success');
      setMessage('Thanks for subscribing! Check your email for confirmation.');
      setEmail('');
    } else {
      setStatus('error');
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 md:p-10">
          <div className="mb-5 text-center">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <Mail className="h-5 w-5 text-blue-400" />
            </div>
            <h2 className="mb-2 text-2xl font-medium tracking-tight text-white">
              Get Free Reselling Tips
            </h2>
            <p className="text-base text-slate-400">
              Join 2,000+ resellers getting weekly deal alerts, market insights, and exclusive strategies.
            </p>
          </div>

          {status === 'success' ? (
            <div className="flex items-center justify-center gap-2 rounded-lg border border-green-500/50 bg-green-500/10 p-4">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <p className="text-sm text-green-400">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="flex-1 border-slate-700 bg-slate-800 text-base text-white placeholder:text-slate-500"
                required
                aria-label="Email address"
              />
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
              </Button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-2 text-center text-xs text-red-400">{message}</p>
          )}

          <p className="mt-3 text-center text-xs text-slate-500">
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
