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
  Terminal,
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
        return <CalendarCheck className="w-5 h-5 text-blue-400" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-cyan-400" />;
      case "Bot":
        return <Bot className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="solutions" className="py-24 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-400/30 bg-indigo-950/40 text-xs font-bold uppercase tracking-wider text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Intelligent Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Intelligent Solutions for{" "}
            <span className="text-gradient">Modern Businesses</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tailored automation offerings built to resolve specific operational challenges,
            eliminate communication lags, and drive real business efficiency.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-col sm:flex-row justify-center gap-3.5 mb-10">
          {SITE_CONFIG.solutions.map((item) => {
            const isActive = item.id === activeSolutionId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSolutionId(item.id)}
                className={`flex items-center gap-3.5 px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-200 text-left cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-600/40 border border-indigo-400/50 scale-[1.02]"
                    : "glass-card text-slate-300 hover:text-white hover:border-indigo-400/40 hover:bg-[#0c1430]"
                }`}
              >
                <div className="p-2 rounded-xl bg-black/30 border border-white/10">
                  {getSolutionIcon(item.icon)}
                </div>
                <div>
                  <div className="leading-tight font-extrabold">{item.title}</div>
                  <div className={`text-[11px] font-medium mt-0.5 ${isActive ? "text-indigo-100" : "text-slate-400"}`}>
                    {item.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Solution Card Panel */}
        <div className="glass-card-glow rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left detail column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold border ${activeSolution.badgeColor}`}>
                  {activeSolution.badge}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1.5 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {activeSolution.metricsOrHighlight}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  {activeSolution.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {activeSolution.fullDesc}
                </p>
              </div>

              {/* Target Audience Callout */}
              <div className="p-4 rounded-xl bg-[#080d22]/90 border border-indigo-500/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800/60 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Recommended For
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5 font-medium">
                    {activeSolution.targetAudience}
                  </div>
                </div>
              </div>

              {/* Underlying Technology Stack */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Production Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeSolution.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-950/70 text-indigo-200 border border-indigo-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-indigo-600/35 transition-all"
                >
                  <span>Inquire for Deployment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right capabilities checklist column */}
            <div className="lg:col-span-5 bg-[#050818]/90 border border-indigo-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3.5 border-b border-indigo-500/20">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Engineered Capabilities
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {activeSolution.capabilities.length} Core Modules
                </span>
              </div>

              <div className="space-y-3">
                {activeSolution.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-indigo-500/20 text-[11px] text-slate-400 italic">
                * Engineered directly with deterministic state rules and real-time fallbacks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
