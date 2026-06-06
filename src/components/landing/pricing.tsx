import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star } from "lucide-react";
import { GuaranteeBadge } from "@/components/ui/guarantee-badge";
import { PaymentMethods } from "@/components/ui/payment-methods";

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
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-400">
            Choose the package that fits your needs. All packages include instant access and lifetime updates.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-slate-800 bg-slate-950/50 ${
                plan.popular ? "border-blue-500 shadow-lg shadow-blue-500/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 px-3 py-1 text-xs">
                    <Star className="mr-1 h-3 w-3" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-xl font-medium text-white">{plan.name}</CardTitle>
                <p className="text-sm text-slate-400">{plan.subtitle}</p>
                <div className="mt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-medium text-white">${plan.price}</span>
                    <span className="text-base text-slate-500 line-through">${plan.originalPrice}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

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

                <div className="mt-3 text-center">
                  <Badge variant="outline" className="border-green-500/50 bg-green-500/10 text-xs text-green-400">
                    Save {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="mb-3 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
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

        <div className="mt-10">
          <GuaranteeBadge />
        </div>

        <div className="mt-6">
          <PaymentMethods />
        </div>
      </div>
    </section>
  );
}
