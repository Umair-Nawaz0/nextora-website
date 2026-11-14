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
} from "lucide-react";

export default function Industries() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5 text-cyan-400" />;
      case "Sparkle":
        return <Sparkle className="w-5 h-5 text-indigo-400" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-violet-400" />;
      case "Calendar":
        return <Calendar className="w-5 h-5 text-blue-400" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="industries" className="py-24 relative bg-[#070b14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/60 bg-slate-800/40 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Tailored Industry Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Industries We Serve
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
              className={`bg-[#0c1222]/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/40 hover:bg-[#0f172a] transition-all group ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
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

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-indigo-300">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{ind.useCase}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
