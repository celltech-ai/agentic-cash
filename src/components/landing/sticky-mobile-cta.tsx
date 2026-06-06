"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950/95 p-4 backdrop-blur-lg md:hidden">
      <Button
        size="lg"
        className="w-full bg-blue-600 py-6 text-lg hover:bg-blue-700"
      >
        Get Instant Access — $97
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="mt-2 text-center text-xs text-slate-400">
        One-time payment • 30-day guarantee • Instant download
      </p>
    </div>
  );
}
