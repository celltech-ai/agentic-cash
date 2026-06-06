import { Shield, Award, RefreshCw } from 'lucide-react';

export function GuaranteeBadge() {
  return (
    <div className="rounded-xl border-2 border-green-500/30 bg-gradient-to-r from-green-500/5 to-emerald-500/5 p-6">
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-500/10">
          <Shield className="h-8 w-8 text-green-400" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="mb-2 text-xl font-bold text-white">
            30-Day Money-Back Guarantee
          </h3>
          <p className="mb-4 text-slate-400">
            Try Agentic Cash Pipelines risk-free. If you don't find at least one profitable deal within 30 days, 
            we'll refund 100% of your purchase price. No questions asked, no hassle.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 md:justify-start">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-green-400" />
              <span>Less than 2% refund rate</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 text-blue-400" />
              <span>48-hour refund processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
