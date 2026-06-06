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
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            You're Missing
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              £1,000+ Per Month
            </span>
            in Deals
          </h2>
        </div>

        {/* Story */}
        <div className="mb-12 rounded-lg border border-slate-800 bg-slate-950/50 p-8 backdrop-blur">
          <p className="mb-4 text-lg text-slate-300">
            Right now, someone in the UK just listed a Burberry trench coat for £35 on Vinted. 
            The same coat sells for £110 on eBay.
          </p>
          <p className="mb-4 text-2xl font-bold text-white">
            That's £55 profit sitting there.
          </p>
          <p className="mb-4 text-lg text-slate-300">The problem?</p>
          <p className="text-lg text-slate-300">
            There are 2 million active listings on Vinted UK. 15 million on eBay UK.
          </p>
          <p className="mt-4 text-lg text-slate-300">
            You can't check them all manually.
          </p>
          <p className="mt-4 text-xl font-semibold text-red-400">
            By the time you scroll past that deal, someone with a scanner already bought it.
          </p>
        </div>

        {/* Pain points */}
        <div className="grid gap-4 md:grid-cols-2">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/5 p-4"
            >
              <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
              <p className="text-slate-300">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
