import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Volume 1",
    subtitle: "Strategy & Fundamentals",
    price: 17,
    originalPrice: 27,
    description: "Perfect for beginners who want to learn marketplace arbitrage fundamentals.",
    features: [
      "19,903 words of strategy content",
      "10 marketplaces ranked by opportunity",
      "8 high-margin categories (sneakers, electronics, fashion, cards)",
      "Profit math with real fee breakdowns",
      "Sourcing playbook (charity shops, car boots, online)",
      "Selling playbook (photography, listings, pricing)",
      "Authentication guides (avoiding fakes)",
      "30-day action plan",
      "Fee calculator template",
    ],
    cta: "Get Volume 1",
    popular: false,
  },
  {
    name: "Complete System",
    subtitle: "Everything You Need",
    price: 47,
    originalPrice: 297,
    description: "The full stack: strategy, code, advanced tactics, and monetization blueprints.",
    features: [
      "All 3 volumes (54,732 words)",
      "Complete scanner codebase (5,529 lines)",
      "13 passing unit tests",
      "Apify integration for eBay/Vinted",
      "Gemini 2.0 Flash vision analysis",
      "VPS deployment script",
      "Cross-platform matching algorithms",
      "Trend detection system",
      "Cook group intelligence",
      "Monetization blueprints",
      "Lifetime updates",
    ],
    cta: "Get Complete System",
    popular: true,
    badge: "Best Value",
  },
  {
    name: "Volume 2",
    subtitle: "Technical Implementation",
    price: 27,
    originalPrice: 47,
    description: "For technical users who want to build their own automated scanner.",
    features: [
      "21,029 words of technical content",
      "Complete scanner codebase (5,529 lines)",
      "13 passing unit tests",
      "Apify Actors integration",
      "Gemini Vision AI setup",
      "Scoring engine implementation",
      "Alert systems (Discord, Telegram)",
      "VPS deployment guide",
      "Multi-platform scanning",
    ],
    cta: "Get Volume 2",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Choose the package that fits your needs. All packages include instant access and lifetime updates.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-slate-800 bg-slate-950/50 backdrop-blur ${
                plan.popular ? "border-blue-500 shadow-lg shadow-blue-500/20" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 px-4 py-1 text-sm">
                    <Star className="mr-1 h-3 w-3" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <p className="text-sm text-slate-400">{plan.subtitle}</p>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-lg text-slate-500 line-through">${plan.originalPrice}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                </div>
              </CardHeader>

              <CardContent>
                {/* Features list */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-slate-800 hover:bg-slate-700"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {/* Savings badge */}
                <div className="mt-4 text-center">
                  <Badge variant="outline" className="border-green-500/50 bg-green-500/10 text-green-400">
                    Save {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom trust indicators */}
        <div className="mt-16 text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>Instant download</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>Lifetime updates included</span>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            All prices in USD. VAT handled automatically for EU customers.
          </p>
        </div>
      </div>
    </section>
  );
}
