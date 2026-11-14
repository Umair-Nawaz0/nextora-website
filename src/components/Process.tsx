"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Search, Compass, Cpu, TrendingUp, Sparkles } from "lucide-react";

export default function Process() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-400/30 bg-indigo-950/40 text-xs font-bold uppercase tracking-wider text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Structured Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            From Business Challenges to{" "}
            <span className="text-gradient">Intelligent Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A clear, collaborative four-step process to transform your manual operations
            into high-velocity automated workflows.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-[48px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-blue-500/40 via-indigo-500/50 to-emerald-500/40 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {SITE_CONFIG.processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-400/50 hover:bg-[#0c1432] transition-all group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Step Header with Node Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 p-3 rounded-2xl bg-[#060a1e] border-2 border-indigo-500/40 group-hover:border-indigo-400 flex items-center justify-center shadow-lg transition-colors">
                      {getStepIcon(idx)}
                    </div>
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-indigo-950/80 text-cyan-300 border border-indigo-700/60">
                      {step.step}
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-200 mb-3">
                    {step.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-indigo-500/15 text-[11px] font-mono text-indigo-300 font-bold">
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
