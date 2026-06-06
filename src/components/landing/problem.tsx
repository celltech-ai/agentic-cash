import { X } from "lucide-react";

const painPoints = [
  "You spend hours scrolling Vinted and eBay with nothing to show for it",
  "You miss the best deals because they sell in 90 seconds",
  "You can't authenticate luxury items fast enough",
  "You're competing against resellers with automated systems",
  "You don't know which categories are about to peak",
  "You're leaving money on the table every single day",
];

export function Problem() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          You're Missing{" "}
          <span className="text-accent">
            £1,000+ Per Month
          </span>
        </h2>

        <div className="mb-10 space-y-4 text-lg text-muted-foreground">
          <p>
            Right now, someone in the UK just listed a Burberry trench coat for £35 on Vinted. 
            The same coat sells for £110 on eBay.
          </p>
          <p className="text-xl font-medium text-foreground border-l-2 border-primary/30 pl-4">
            That's £55 profit sitting there.
          </p>
          <p>
            There are 2 million active listings on Vinted UK. 15 million on eBay UK.
            You can't check them all manually.
          </p>
          <p className="text-lg font-medium text-accent">
            By the time you scroll past that deal, someone with a scanner already bought it.
          </p>
        </div>

        <div className="space-y-3">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-accent/20 bg-background p-4 shadow-editorial"
            >
              <X className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
              <p className="text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
