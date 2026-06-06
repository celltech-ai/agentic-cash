import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 border-blue-500/50 bg-blue-500/10 text-blue-400">
            <Zap className="mr-2 h-3 w-3" />
            Limited Launch Offer — Save 84%
          </Badge>

          {/* Main headline */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build an AI Scanner That Finds
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              £50-£200 Profit Deals
            </span>
            While You Sleep
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-300 sm:text-2xl">
            The complete system for finding underpriced items on Vinted, eBay, 
            and 10+ marketplaces — using AI vision to spot deals humans miss.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-blue-600 px-8 py-6 text-lg hover:bg-blue-700">
              Get Instant Access — $47
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-400" />
              <span>Instant download</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-purple-400" />
              <span>Lifetime updates</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter end={54} suffix="K+" />
              </div>
              <div className="text-sm text-slate-400">Words of Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter end={5.5} suffix="K+" decimals={1} />
              </div>
              <div className="text-sm text-slate-400">Lines of Code</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter end={13} suffix="/13" />
              </div>
              <div className="text-sm text-slate-400">Tests Passing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-sm text-slate-400">Marketplaces</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
