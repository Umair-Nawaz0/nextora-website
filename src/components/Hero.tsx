"use client";

import React from "react";
import {
  ArrowRight,
  Sparkles,
  Bot,
  MessageSquare,
  Workflow,
  Calendar,
  Zap,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#060911] via-[#090e1c] to-[#060911]"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[250px] bg-cyan-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 backdrop-blur-md shadow-inner text-xs sm:text-sm font-medium text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Intelligent Automation &bull; Smarter Businesses</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Automate Your Business.{" "}
              <span className="block mt-1 bg-gradient-to-r from-indigo-300 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                Accelerate Your Growth.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Nextora builds intelligent AI-powered automation solutions that help
              businesses streamline operations, transform customer experiences, and
              focus on what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200"
              >
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Value Indicators */}
            <div className="pt-4 border-t border-slate-800/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="space-y-1">
                <div className="text-xs text-slate-400">Architecture</div>
                <div className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  AI Native
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400">Operation</div>
                <div className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  24/7 Autonomy
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400">Integration</div>
                <div className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  Multi-Channel
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Custom SVG/CSS Visual (No stock photos) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-md bg-[#0c1222]/90 border border-slate-800/90 rounded-2xl p-5 shadow-2xl backdrop-blur-xl glow-border">
              {/* Header Bar of System Visual */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Nextora Orchestration Core
                  </span>
                </div>
                <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/40 px-2 py-0.5 rounded-full">
                  v2.4 Active
                </span>
              </div>

              {/* Connected Visual Nodes Flow */}
              <div className="space-y-3.5">
                {/* Node 1: Multi-Channel Ingestion */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Customer Inbound Channel
                      </div>
                      <div className="text-[11px] text-slate-400">
                        WhatsApp &bull; Instagram &bull; Webchat
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-950/50 text-emerald-400 border border-emerald-800/40 px-2 py-0.5 rounded-full font-mono">
                    Live
                  </span>
                </div>

                {/* Connecting Arrow */}
                <div className="flex justify-center -my-1">
                  <div className="w-[2px] h-4 bg-gradient-to-b from-indigo-500 to-indigo-400/20" />
                </div>

                {/* Node 2: Central AI Processing */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-slate-900/90 border border-indigo-500/40 shadow-inner relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        Intelligent AI Assistant
                        <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      </div>
                      <div className="text-[11px] text-indigo-300">
                        Natural Language & Context Understanding
                      </div>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2.5 border-t border-indigo-500/20 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono">Latency: 120ms</span>
                    <span className="text-indigo-300 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Zero Hallucination Guard
                    </span>
                  </div>
                </div>

                {/* Connecting Arrow */}
                <div className="flex justify-center -my-1">
                  <div className="w-[2px] h-4 bg-gradient-to-b from-indigo-500/40 to-slate-700" />
                </div>

                {/* Node 3: Automated Dispatch & Sync */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-xs font-semibold text-slate-200">
                        Booking Synced
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Calendar updated & client reminder dispatched
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                    <div className="flex items-center gap-2 mb-1">
                      <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-xs font-semibold text-slate-200">
                        Workflow Task
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      CRM updated, invoice draft & staff alert sent
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Autonomous Execution
                </span>
                <span className="text-slate-300 font-medium">100% Reliable Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
