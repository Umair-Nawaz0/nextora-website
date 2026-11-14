"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Cpu, Workflow, Code2, Check, ArrowRight } from "lucide-react";

export default function WhatWeDo() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case "Workflow":
        return <Workflow className="w-6 h-6 text-cyan-400" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-violet-400" />;
      default:
        return <Cpu className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#070b14] border-t border-slate-900">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/60 bg-slate-800/40 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technology That Moves Your Business Forward
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We combine AI, automation, and modern software engineering to build solutions
            that simplify business operations.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#0c1222]/80 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-indigo-500/50 hover:bg-[#0e1629] transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/40"
            >
              {/* Card top badge & icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="mt-0.5 rounded-full p-0.5 bg-indigo-950 text-indigo-400 border border-indigo-800/40">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom action link */}
              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 group-hover:gap-2.5 transition-all"
                >
                  <span>Inquire for your business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
