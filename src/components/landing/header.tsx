"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              Agentic<span className="text-blue-400">Cash</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm text-slate-300 hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-slate-300 hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-slate-300 hover:text-white"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-sm text-slate-300 hover:text-white"
            >
              FAQ
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
              Login
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Get Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="border-t border-slate-800 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm text-slate-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-slate-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-sm text-slate-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="text-sm text-slate-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  Login
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Get Access
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
