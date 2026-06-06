import { Shield, Award, RefreshCw } from 'lucide-react';

export function GuaranteeBadge() {
  return (
    <div className="rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/5 to-emerald-500/5 p-5">
      <div className="flex flex-col items-center gap-3 md:flex-row md:items-start md:gap-5">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500/10">
          <Shield className="h-6 w-6 text-green-400" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="mb-2 text-lg font-medium text-white">
            30-Day Money-Back Guarantee
          </h3>
          <p className="mb-3 text-sm text-slate-400">
            Try Agentic Cash Pipelines risk-free. If you don't find at least one profitable deal within 30 days, 
            we'll refund 100% of your purchase price. No questions asked, no hassle.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 md:justify-start">
            <div className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-green-400" />
              <span>Less than 2% refund rate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RefreshCw className="h-3.5 w-3.5 text-blue-400" />
              <span>48-hour refund processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
