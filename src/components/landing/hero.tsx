import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-28">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 texture-paper opacity-30" />
      
      {/* Subtle emerald accent - just a hint */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-8 border-primary/30 bg-primary/5 text-primary">
            <Zap className="mr-2 h-3 w-3" />
            Limited Launch Offer — Save 84%
          </Badge>

          {/* Main headline */}
          <h1 className="mb-8 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Build an AI Scanner That Finds
            <span className="block text-primary">
              £50-£200 Profit Deals
            </span>
            While You Sleep
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            The complete system for finding underpriced items on Vinted, eBay, 
            and 10+ marketplaces — using AI vision to spot deals humans miss.
          </p>

          {/* CTA Buttons */}
          <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary px-8 py-6 text-base font-medium text-primary-foreground hover:bg-primary/90 shadow-editorial-lg">
              Get Instant Access — $97
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-base border-foreground/20 text-foreground hover:bg-foreground/5">
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mb-14 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Instant download</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              <span>Lifetime updates</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="border-l-2 border-primary/20 pl-4">
              <div className="text-3xl font-semibold text-foreground">
                <AnimatedCounter end={54} suffix="K+" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Words of Content</div>
            </div>
            <div className="border-l-2 border-primary/20 pl-4">
              <div className="text-3xl font-semibold text-foreground">
                <AnimatedCounter end={5.5} suffix="K+" decimals={1} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Lines of Code</div>
            </div>
            <div className="border-l-2 border-primary/20 pl-4">
              <div className="text-3xl font-semibold text-foreground">
                <AnimatedCounter end={13} suffix="/13" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Tests Passing</div>
            </div>
            <div className="border-l-2 border-accent/30 pl-4">
              <div className="text-3xl font-semibold text-foreground">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Marketplaces</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
