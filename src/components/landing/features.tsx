import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Brain, Rocket, Target, TrendingUp, Users, Zap } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Volume 1: Strategy",
    description: "19,903 words covering marketplace arbitrage fundamentals, profit math, sourcing playbooks, and authentication guides.",
    color: "text-blue-400",
  },
  {
    icon: Code,
    title: "Volume 2: Technical",
    description: "21,029 words with complete scanner codebase (5,529 lines), Apify integration, Gemini vision, and VPS deployment.",
    color: "text-purple-400",
  },
  {
    icon: Brain,
    title: "Volume 3: Advanced",
    description: "13,800 words on cross-platform matching, trend detection, cook group intelligence, and monetization strategies.",
    color: "text-green-400",
  },
  {
    icon: Rocket,
    title: "Working Scanner Code",
    description: "Production-ready TypeScript scanner with 13 passing tests, real deal detection, and automated alerts.",
    color: "text-orange-400",
  },
  {
    icon: Target,
    title: "Deal Detection AI",
    description: "Gemini 2.0 Flash vision analysis for brand authentication, condition grading, and fake detection.",
    color: "text-pink-400",
  },
  {
    icon: TrendingUp,
    title: "Trend Prediction",
    description: "Spot emerging trends before they peak using Google Trends, TikTok signals, and 25-year nostalgia cycles.",
    color: "text-yellow-400",
  },
  {
    icon: Users,
    title: "Cook Group Intel",
    description: "Replicate £75/month subscription strategies for free. Speed buying, category tactics, and scaling playbooks.",
    color: "text-cyan-400",
  },
  {
    icon: Zap,
    title: "Monetization Blueprints",
    description: "Turn your scanner into a business: subscription alerts ($19-49/mo), SaaS, consulting, and coaching models.",
    color: "text-indigo-400",
  },
];

export function Features() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything You Need to Build a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              £5,000/Month Operation
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-400">
            Three comprehensive volumes, working code, and proven strategies to transform marketplace arbitrage into a systematic business.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-slate-800 bg-slate-900/50">
                <CardHeader>
                  <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 ${feature.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-medium text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Plus: Fee calculator templates, VPS deployment scripts, and lifetime updates.
          </p>
        </div>
      </div>
    </section>
  );
}
