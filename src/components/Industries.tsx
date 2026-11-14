"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Stethoscope,
  Sparkle,
  Briefcase,
  Calendar,
  Rocket,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function Industries() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5 text-cyan-400" />;
      case "Sparkle":
        return <Sparkle className="w-5 h-5 text-purple-400" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case "Calendar":
        return <Calendar className="w-5 h-5 text-indigo-400" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="industries" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-400/30 bg-indigo-950/40 text-xs font-bold uppercase tracking-wider text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Target Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every sector faces unique operational friction. Here is how Nextora&apos;s
            AI and automation architectures solve key pain points across industries.
          </p>
        </div>

        {/* 5 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.industries.map((ind, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-indigo-400/50 hover:bg-[#0c1432] transition-all group hover:-translate-y-1 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#060a1e] border border-indigo-500/30 flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-indigo-300 bg-indigo-950/60 border border-indigo-800/50 px-2.5 py-0.5 rounded-full">
                    Application
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3 border-t border-indigo-500/15 flex items-center gap-2 text-xs font-semibold text-cyan-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{ind.useCase}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
