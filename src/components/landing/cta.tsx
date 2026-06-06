import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Stop Missing Deals.
          <span className="block">Start Building Wealth.</span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
          Join 500+ resellers who've transformed marketplace arbitrage into a systematic, 
          automated business. Your first profitable deal is 4 hours away.
        </p>

        <div className="mb-10">
          <Button
            size="lg"
            className="bg-white px-10 py-6 text-lg font-medium text-blue-600 hover:bg-white/90"
          >
            Get Instant Access — $47
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm text-white/80">
            One-time payment. Lifetime access. No subscriptions.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="text-sm">30-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Instant download</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span className="text-sm">Lifetime updates</span>
          </div>
        </div>

        <div className="mt-10 rounded-lg bg-white/10 p-5 backdrop-blur">
          <p className="text-base text-white">
            <strong>Launch pricing ends soon.</strong> After 100 customers, the price increases to $97. 
            Lock in the $47 price now and get all future updates free.
          </p>
        </div>
      </div>
    </section>
  );
}
