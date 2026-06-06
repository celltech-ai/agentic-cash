import { Badge } from "@/components/ui/badge";

export function AboutAuthor() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-8 backdrop-blur md:p-12">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-4 border-blue-500/50 bg-blue-500/10 text-blue-400">
              About the Author
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Built by a Developer Who
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Actually Uses This System
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-slate-300">
            <p>
              I'm <span className="font-semibold text-white">[Your Name]</span>, and I built this system 
              because I was tired of missing deals.
            </p>

            <p>
              I spent 6 months researching the reselling market, analysing cook groups, and building 
              an automated scanner that actually works. I tested every strategy, refined every algorithm, 
              and documented every lesson learned.
            </p>

            <p>
              <span className="font-semibold text-white">This isn't theory. I use this scanner every day.</span>
            </p>

            <p>
              The code is tested. The strategies are proven. The numbers are real.
            </p>

            <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-6">
              <p className="mb-4 text-xl font-semibold text-white">
                Why I'm selling this:
              </p>
              <p>
                I believe everyone should have access to the tools that print money.
              </p>
              <p className="mt-4">
                Not just the people in <span className="font-semibold text-red-400">£75/month cook groups</span>.
              </p>
              <p className="mt-4 text-2xl font-bold text-blue-400">
                Everyone.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-4 text-center">
                <div className="text-3xl font-bold text-white">6+</div>
                <div className="text-sm text-slate-400">Months of research</div>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-4 text-center">
                <div className="text-3xl font-bold text-white">54K+</div>
                <div className="text-sm text-slate-400">Words written</div>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-4 text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">Active users</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-2 text-slate-300 hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Follow on X</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-2 text-slate-300 hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
