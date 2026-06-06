import { Check } from "lucide-react";

const solutionFeatures = [
  "Scans 10+ marketplaces every 15 minutes",
  "AI vision authenticates items from photos",
  "Calculates profit after real fees (eBay 15.15%, Vinted 0%)",
  "Alerts you via Discord, Telegram, or WhatsApp",
  "Runs 24/7 on a £4/month VPS",
  "Complete source code included (TypeScript, tested)",
];

export function Solution() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            What If You Had a Scanner
            <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              That Never Sleeps?
            </span>
          </h2>
        </div>

        {/* Story */}
        <div className="mb-12 space-y-6">
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <p className="mb-2 text-lg font-semibold text-white">Imagine this:</p>
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">3:00 AM</span> — You're asleep.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">3:02 AM</span> — Your scanner finds a Mulberry bag on Vinted for £45.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">3:03 AM</span> — Gemini AI confirms it's authentic, good condition.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">3:04 AM</span> — Scanner calculates £68 profit after fees.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">3:05 AM</span> — Alert hits your phone.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">7:00 AM</span> — You wake up, buy it in 60 seconds.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">7:30 AM</span> — List it on eBay at £135.
            </p>
          </div>

          <div className="rounded-lg border-2 border-green-500/50 bg-green-500/10 p-8 backdrop-blur">
            <p className="text-2xl font-bold text-green-400">
              That's £68 profit for 2 minutes of work.
            </p>
            <p className="mt-2 text-lg text-slate-300">While you were sleeping.</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-4 md:grid-cols-2">
          {solutionFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-green-500/20 bg-green-500/5 p-4"
            >
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
              <p className="text-slate-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
