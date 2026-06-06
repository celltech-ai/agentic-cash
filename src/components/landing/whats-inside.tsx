import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, Brain, FileCode2 } from "lucide-react";

const volumes = [
  {
    icon: BookOpen,
    number: "1",
    title: "Strategy & Fundamentals",
    words: "19,903 words",
    chapters: "9 chapters",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    items: [
      "10 marketplaces ranked by opportunity",
      "8 high-margin categories (sneakers, electronics, fashion, cards)",
      "Profit math with real fee breakdowns (eBay 15.15%, Vinted 0%, Depop 10%)",
      "Sourcing playbook (charity shops, car boots, online platforms)",
      "Selling playbook (photography, listings, pricing strategy)",
      "Authentication guides (avoiding fakes in luxury, sneakers, electronics)",
      "30-day action plan with daily tasks",
      "Fee calculator spreadsheet template",
    ],
  },
  {
    icon: Code,
    number: "2",
    title: "Technical Implementation",
    words: "21,029 words",
    chapters: "10 chapters",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    items: [
      "Complete scanner codebase (5,529 lines of TypeScript)",
      "13 passing unit tests",
      "Apify Actors integration (eBay, Vinted, multi-platform)",
      "Gemini 2.0 Flash vision analysis (brand auth, condition grading)",
      "Scoring engine with fee calculations and confidence scoring",
      "Alert systems (Discord webhooks, Telegram bot, WhatsApp)",
      "VPS deployment (24/7 operation on £4/month Hetzner)",
      "Multi-platform scanning (5+ marketplaces)",
      "Optimization and scaling strategies",
    ],
  },
  {
    icon: Brain,
    number: "3",
    title: "Advanced Strategies",
    words: "13,800 words",
    chapters: "5 chapters",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    items: [
      "Cross-platform matching (find same item cheaper elsewhere)",
      "Trend detection (Google Trends, TikTok, nostalgia cycles)",
      "Cook group intelligence (replicate £75/month strategies for free)",
      "Monetising your scanner (subscription, SaaS, consulting models)",
      "Private resource vault (every tool, API, community you need)",
    ],
  },
];

export function WhatsInside() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Three Volumes.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              One Complete System.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-400">
            Everything you need to transform marketplace arbitrage from a manual side hustle 
            into an automated, scalable business.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {volumes.map((volume, index) => {
            const Icon = volume.icon;
            return (
              <Card
                key={index}
                className={`border-slate-800 bg-slate-950/50 ${volume.borderColor}`}
              >
                <CardHeader>
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${volume.bgColor} ${volume.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Volume {volume.number}</div>
                      <CardTitle className="text-lg font-medium text-white">{volume.title}</CardTitle>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-slate-700 text-xs text-slate-400">
                      {volume.words}
                    </Badge>
                    <Badge variant="outline" className="border-slate-700 text-xs text-slate-400">
                      {volume.chapters}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {volume.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${volume.color.replace('text', 'bg')}`} />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 rounded-lg border border-slate-800 bg-slate-950/50 p-6">
          <h3 className="mb-5 text-center text-xl font-medium text-white">
            Plus: Bonus Materials
          </h3>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <div className="mb-1 text-xl font-medium text-white">5,529</div>
              <div className="text-sm text-slate-400">Lines of working code</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <div className="mb-1 text-xl font-medium text-white">13/13</div>
              <div className="text-sm text-slate-400">Tests passing</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <div className="mb-1 text-xl font-medium text-white">VPS</div>
              <div className="text-sm text-slate-400">Deployment script included</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <div className="mb-1 text-xl font-medium text-white">Lifetime</div>
              <div className="text-sm text-slate-400">Updates included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
