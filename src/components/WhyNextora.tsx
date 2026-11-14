"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Target, Sparkles, Network, TrendingUp } from "lucide-react";

export default function WhyNextora() {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "Target":
        return <Target className="w-6 h-6 text-indigo-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case "Network":
        return <Network className="w-6 h-6 text-violet-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative bg-[#070b14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/60 bg-slate-800/40 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Why Choose Nextora
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built Around Your Business Needs
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We don&apos;t just install tools; we engineer tailored automation systems that
            fit naturally into how your company already operates.
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#0c1222]/80 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-indigo-500/40 hover:bg-[#0f172a] transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-indigo-500/30 transition-transform">
                  {getBenefitIcon(benefit.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-200 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-[11px] font-mono text-slate-400">
                <span>0{index + 1} &bull; Nextora Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
