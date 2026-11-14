"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import {
  CalendarCheck,
  GitBranch,
  Bot,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Layers,
} from "lucide-react";

export default function Solutions() {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(
    SITE_CONFIG.solutions[0].id
  );

  const activeSolution =
    SITE_CONFIG.solutions.find((s) => s.id === activeSolutionId) ||
    SITE_CONFIG.solutions[0];

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case "CalendarCheck":
        return <CalendarCheck className="w-5 h-5 text-indigo-400" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-cyan-400" />;
      case "Bot":
        return <Bot className="w-5 h-5 text-violet-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="solutions" className="py-24 relative bg-[#060911] border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/30 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Intelligent Solutions for Modern Businesses
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tailored automation offerings built to resolve specific operational challenges,
            eliminate communication lags, and drive real business efficiency.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          {SITE_CONFIG.solutions.map((item) => {
            const isActive = item.id === activeSolutionId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSolutionId(item.id)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 text-left ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500"
                    : "bg-[#0c1222] text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800"
                }`}
              >
                <div className="p-1 rounded-lg bg-black/20">
                  {getSolutionIcon(item.icon)}
                </div>
                <div>
                  <div className="leading-tight">{item.title}</div>
                  <div className={`text-[11px] font-normal ${isActive ? "text-indigo-100" : "text-slate-400"}`}>
                    {item.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Solution Card Panel */}
        <div className="bg-[#0b101f] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left detail column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                  {activeSolution.badge}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {activeSolution.metricsOrHighlight}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {activeSolution.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {activeSolution.fullDesc}
                </p>
              </div>

              {/* Target Audience Callout */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800/50 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Ideal For
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {activeSolution.targetAudience}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all"
                >
                  <span>Inquire About This Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right capabilities checklist column */}
            <div className="lg:col-span-5 bg-[#070b14] border border-slate-800/90 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Capabilities & Features
                </span>
                <span className="text-[11px] font-mono text-indigo-400">
                  {activeSolution.capabilities.length} Key Functions
                </span>
              </div>

              <div className="space-y-3">
                {activeSolution.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 italic">
                * Configured and tailored specifically to your business rules, software tools, and compliance guidelines.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
