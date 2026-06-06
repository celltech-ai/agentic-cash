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
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          What If You Had a Scanner{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            That Never Sleeps?
          </span>
        </h2>

        <div className="mb-10 space-y-3">
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-5">
            <p className="mb-2 text-base font-medium text-white">Imagine this:</p>
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">3:00 AM</span> — You're asleep.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-5">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">3:02 AM</span> — Your scanner finds a Mulberry bag on Vinted for £45.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-5">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">3:03 AM</span> — Gemini AI confirms it's authentic, good condition.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-5">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">3:04 AM</span> — Scanner calculates £68 profit after fees.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-5">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">3:05 AM</span> — Alert hits your phone.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-5">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">7:00 AM</span> — You wake up, buy it in 60 seconds.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-5">
            <p className="text-slate-300">
              <span className="font-mono text-blue-400">7:30 AM</span> — List it on eBay at £135.
            </p>
          </div>

          <div className="rounded-lg border-2 border-green-500/50 bg-green-500/10 p-6">
            <p className="text-xl font-semibold text-green-400">
              That's £68 profit for 2 minutes of work.
            </p>
            <p className="mt-2 text-base text-slate-300">While you were sleeping.</p>
          </div>
        </div>

        <div className="space-y-3">
          {solutionFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-green-500/20 bg-green-500/5 p-4"
            >
              <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" />
              <p className="text-slate-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
