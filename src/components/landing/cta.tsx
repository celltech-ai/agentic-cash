import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Main headline */}
        <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Stop Missing Deals.
          <span className="block">Start Building Wealth.</span>
        </h2>

        {/* Subheadline */}
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Join 500+ resellers who've transformed marketplace arbitrage into a systematic, 
          automated business. Your first profitable deal is 4 hours away.
        </p>

        {/* CTA button */}
        <div className="mb-12">
          <Button
            size="lg"
            className="bg-white px-12 py-8 text-xl font-bold text-blue-600 hover:bg-white/90"
          >
            Get Instant Access — $47
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <p className="mt-4 text-sm text-white/80">
            One-time payment. Lifetime access. No subscriptions.
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span className="text-sm">30-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="text-sm">Instant download</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            <span className="text-sm">Lifetime updates</span>
          </div>
        </div>

        {/* Urgency message */}
        <div className="mt-12 rounded-lg bg-white/10 p-6 backdrop-blur">
          <p className="text-white">
            <strong>Launch pricing ends soon.</strong> After 100 customers, the price increases to $97. 
            Lock in the $47 price now and get all future updates free.
          </p>
        </div>
      </div>
    </section>
  );
}
