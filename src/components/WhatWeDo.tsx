"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Cpu, Workflow, Code2, Check, ArrowRight, Sparkles } from "lucide-react";

export default function WhatWeDo() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case "Workflow":
        return <Workflow className="w-6 h-6 text-cyan-400" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-purple-400" />;
      default:
        return <Cpu className="w-6 h-6 text-indigo-400" />;
    }
  };

  const getBorderColor = (index: number) => {
    switch (index) {
      case 0:
        return "border-t-indigo-500 hover:border-indigo-400";
      case 1:
        return "border-t-cyan-500 hover:border-cyan-400";
      case 2:
        return "border-t-purple-500 hover:border-purple-400";
      default:
        return "border-t-indigo-500";
    }
  };

  return (
    <section id="services" className="py-24 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-400/30 bg-indigo-950/40 text-xs font-bold uppercase tracking-wider text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technology That Moves Your{" "}
            <span className="text-gradient">Business Forward</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We combine AI, automation, and modern software engineering to build solutions
            that simplify business operations.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.services.map((service, index) => (
            <div
              key={service.id}
              className={`glass-card rounded-2xl p-8 flex flex-col justify-between border-t-4 ${getBorderColor(
                index
              )} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/15 group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-gradient-to-tr from-slate-900 to-indigo-950/80 border border-indigo-500/30 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-400 transition-all shadow-md">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-bold font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-800/50 px-2.5 py-1 rounded-full">
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
                <div className="space-y-2.5 pt-5 border-t border-indigo-500/15">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="mt-0.5 rounded-full p-0.5 bg-indigo-600/30 text-indigo-300 border border-indigo-500/40">
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
                  className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 group-hover:text-indigo-300 transition-all"
                >
                  <span>Request for your workflow</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
