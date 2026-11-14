"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Target, Sparkles, Network, TrendingUp } from "lucide-react";

export default function WhyNextora() {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "Target":
        return <Target className="w-6 h-6 text-blue-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case "Network":
        return <Network className="w-6 h-6 text-cyan-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-400/30 bg-indigo-950/40 text-xs font-bold uppercase tracking-wider text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Nextora Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Built Around Your{" "}
            <span className="text-gradient">Business Needs</span>
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
              className="glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-indigo-400/50 hover:bg-[#0c1432] transition-all duration-300 group shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="w-13 h-13 p-3 rounded-2xl bg-gradient-to-tr from-[#050818] to-slate-900 border border-indigo-500/30 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-indigo-400 transition-all shadow-md">
                  {getBenefitIcon(benefit.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-200 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-indigo-500/15 flex items-center justify-between text-[11px] font-mono text-indigo-300 font-semibold">
                <span>0{index + 1} &bull; Nextora Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
