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
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What If You Had a Scanner{" "}
          <span className="text-primary">
            That Never Sleeps?
          </span>
        </h2>

        <div className="mb-10 space-y-3">
          <div className="rounded-lg border border-foreground/10 bg-muted/30 p-5 shadow-editorial">
            <p className="mb-2 text-base font-medium text-foreground">Imagine this:</p>
            <p className="text-muted-foreground">
              <span className="font-mono text-primary">3:00 AM</span> — You're asleep.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-muted/30 p-5 shadow-editorial">
            <p className="text-muted-foreground">
              <span className="font-mono text-primary">3:02 AM</span> — Your scanner finds a Mulberry bag on Vinted for £45.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-muted/30 p-5 shadow-editorial">
            <p className="text-muted-foreground">
              <span className="font-mono text-primary">3:03 AM</span> — Gemini AI confirms it's authentic, good condition.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-muted/30 p-5 shadow-editorial">
            <p className="text-muted-foreground">
              <span className="font-mono text-primary">3:04 AM</span> — Scanner calculates £68 profit after fees.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-muted/30 p-5 shadow-editorial">
            <p className="text-muted-foreground">
              <span className="font-mono text-primary">3:05 AM</span> — Alert hits your phone.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-muted/30 p-5 shadow-editorial">
            <p className="text-muted-foreground">
              <span className="font-mono text-primary">7:00 AM</span> — You wake up, buy it in 60 seconds.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-muted/30 p-5 shadow-editorial">
            <p className="text-muted-foreground">
              <span className="font-mono text-primary">7:30 AM</span> — List it on eBay at £135.
            </p>
          </div>

          <div className="rounded-lg border-2 border-primary/40 bg-primary/5 p-6 shadow-editorial-lg">
            <p className="text-xl font-semibold text-primary">
              That's £68 profit for 2 minutes of work.
            </p>
            <p className="mt-2 text-base text-muted-foreground">While you were sleeping.</p>
          </div>
        </div>

        <div className="space-y-3">
          {solutionFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 shadow-editorial"
            >
              <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
              <p className="text-muted-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
