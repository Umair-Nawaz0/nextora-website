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
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-24 overflow-hidden"
    >
      {/* Radiant Glow Lights (Vibrant Lighting) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[340px] bg-cyan-500/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[360px] h-[300px] bg-violet-600/18 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Dot Mesh */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #818cf8 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/30 bg-gradient-to-r from-indigo-950/80 via-purple-950/70 to-slate-900/80 backdrop-blur-md shadow-lg shadow-indigo-500/10 text-xs sm:text-sm font-semibold text-indigo-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Intelligent Automation &bull; Smarter Businesses</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Automate Your Business.{" "}
              <span className="block mt-2 text-gradient">
                Accelerate Your Growth.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Nextora builds intelligent AI-powered automation solutions that help
              businesses streamline operations, transform customer experiences, and
              focus on what matters most.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-indigo-600/40 hover:shadow-indigo-500/60 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#0d1430]/90 hover:bg-[#121c44] border border-indigo-500/30 hover:border-indigo-400/60 hover:text-white transition-all duration-200 shadow-md"
              >
                <span>Let&apos;s Talk</span>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 transition-all text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>+92 307 8282606</span>
              </a>
            </div>

            {/* Architectural Trust Points */}
            <div className="pt-6 border-t border-indigo-900/40 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Core Engine
                </div>
                <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Gemini &bull; n8n
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Deployment
                </div>
                <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Sub-5s Latency
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Channel Support
                </div>
                <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  WhatsApp &amp; Web
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Animated AI Architecture Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Luminous Glow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl pointer-events-none transform -rotate-1" />

            {/* Visual Panel */}
            <div className="relative w-full max-w-md bg-gradient-to-b from-[#0e1635]/95 to-[#080d22]/95 border border-indigo-500/35 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-indigo-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Nextora Orchestration Core
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-700/50 px-2.5 py-0.5 rounded-full">
                  Autonomous Active
                </span>
              </div>

              {/* Connected Visual Pipeline */}
              <div className="space-y-3.5">
                {/* Node 1: Inbound Multi-Channel Ingestion */}
                <div className="p-3.5 rounded-xl bg-[#0a0f26] border border-cyan-500/30 flex items-center justify-between hover:border-cyan-400 transition-colors shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        Inbound Multi-Channel
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="text-[11px] text-cyan-200/80">
                        WhatsApp &bull; Instagram &bull; Webchat
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-950/80 text-emerald-300 border border-emerald-600/50 px-2 py-0.5 rounded-full font-mono font-bold">
                    Connected
                  </span>
                </div>

                {/* Animated Flow Connector */}
                <div className="flex justify-center -my-1">
                  <div className="w-[2px] h-4 bg-gradient-to-b from-cyan-400 to-indigo-500 animate-pulse" />
                </div>

                {/* Node 2: Central AI Processing Hub */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/60 via-[#10183b] to-purple-950/50 border border-indigo-400/50 shadow-inner relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/30">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-white flex items-center gap-1.5">
                        Intelligent AI Assistant
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      </div>
                      <div className="text-[11px] font-medium text-indigo-200">
                        Function Calling &bull; Context Memory
                      </div>
                    </div>
                  </div>

                  {/* Status Bar inside Node */}
                  <div className="mt-2.5 pt-2.5 border-t border-indigo-500/30 flex items-center justify-between text-[11px]">
                    <span className="text-slate-300 font-mono">Engine: Gemini + n8n</span>
                    <span className="text-emerald-300 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Deterministic Guardrails
                    </span>
                  </div>
                </div>

                {/* Animated Flow Connector */}
                <div className="flex justify-center -my-1">
                  <div className="w-[2px] h-4 bg-gradient-to-b from-indigo-500 to-purple-400 animate-pulse" />
                </div>

                {/* Node 3: Real-Time Automated Actions */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-[#0a0f26] border border-blue-500/30 hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-1.5 mb-1 text-blue-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-bold text-slate-100">
                        Calendar Synced
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      Conflict-free booking &amp; RFC-5545 invite
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0a0f26] border border-purple-500/30 hover:border-purple-400 transition-colors">
                    <div className="flex items-center gap-1.5 mb-1 text-purple-400">
                      <Workflow className="w-4 h-4" />
                      <span className="text-xs font-bold text-slate-100">
                        CRM &amp; Dispatch
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      Lead update &amp; automated notification sent
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-4 pt-3 border-t border-indigo-500/20 flex items-center justify-between text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  Autonomous Real-Time Sync
                </span>
                <span className="text-indigo-300 font-bold">100% Deterministic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
