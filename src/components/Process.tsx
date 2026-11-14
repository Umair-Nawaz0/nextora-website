"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Search, Compass, Cpu, TrendingUp } from "lucide-react";

export default function Process() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-indigo-400" />;
      case 1:
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="process" className="py-24 relative bg-[#060911] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/30 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            From Business Challenges to Intelligent Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A clear, collaborative four-step process to transform your manual operations
            into high-velocity automated workflows.
          </p>
        </div>

        {/* Timeline Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-indigo-500/30 via-cyan-500/40 to-emerald-500/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {SITE_CONFIG.processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#0c1222]/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/40 hover:bg-[#0e1629] transition-all group"
              >
                <div>
                  {/* Step Header with Node Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#070b14] border-2 border-indigo-500/40 group-hover:border-indigo-400 flex items-center justify-center shadow-lg transition-colors">
                      {getStepIcon(idx)}
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800/80 text-indigo-300 border border-slate-700/80">
                      {step.step}
                    </span>
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-slate-200 mb-3">
                    {step.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
                  Phase {idx + 1} Delivery
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
