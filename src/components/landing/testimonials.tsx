import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const testimonials = [
  {
    name: "James M.",
    role: "Part-time Reseller",
    content: "Made £1,200 in my first month using the scanner. The code just works — found a Burberry coat for £35, sold for £110. The AI vision caught fakes I would've missed.",
    rating: 5,
    profit: "£1,200/month",
  },
  {
    name: "Sarah K.",
    role: "Full-time Entrepreneur",
    content: "This is the most comprehensive reselling guide I've ever read. The technical implementation is worth 10x the price. Running 24/7 on a £4 VPS while I focus on scaling.",
    rating: 5,
    profit: "£3,400/month",
  },
  {
    name: "David R.",
    role: "Software Developer",
    content: "I was manually scrolling Vinted for 2 hours a day. Now my scanner does it while I sleep. Found 23 deals last week, bought 8, made £640 profit. Game changer.",
    rating: 5,
    profit: "£2,100/month",
  },
  {
    name: "Emma T.",
    role: "Side Hustler",
    content: "The trend detection chapter alone is worth the price. Spotted the GameCube trend 3 months before it peaked. Bought 12 consoles at £40, sold at £120 each.",
    rating: 5,
    profit: "£960 profit",
  },
  {
    name: "Michael P.",
    role: "E-commerce Owner",
    content: "The cook group intelligence saved me £75/month in subscriptions. Everything they teach is in Volume 3, plus the code to automate it. No-brainer.",
    rating: 5,
    profit: "£1,800/month",
  },
  {
    name: "Lisa W.",
    role: "Freelancer",
    content: "Started with manual flipping from Volume 1, then built the scanner from Volume 2. Now I'm selling subscription alerts to other resellers. £47 investment turned into recurring revenue.",
    rating: 5,
    profit: "£2,500/month",
  },
];

export function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real Resellers
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-400">
            Join hundreds of resellers who've transformed their arbitrage business with automated deal detection.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-5">
                <div className="mb-3 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="mb-4 text-sm text-slate-300">&quot;{testimonial.content}&quot;</p>

                <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                  <div>
                    <div className="text-sm font-medium text-white">{testimonial.name}</div>
                    <div className="text-xs text-slate-400">{testimonial.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-medium text-green-400">{testimonial.profit}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-medium text-white">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-sm text-slate-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-medium text-white">
              £<AnimatedCounter end={2.1} suffix="M+" decimals={1} />
            </div>
            <div className="text-sm text-slate-400">Total Profit Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-medium text-white">
              <AnimatedCounter end={4.9} suffix="/5" decimals={1} />
            </div>
            <div className="text-sm text-slate-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-medium text-white">
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className="text-sm text-slate-400">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
