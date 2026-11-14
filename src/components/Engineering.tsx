"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Cpu,
  GraduationCap,
  Layers,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Engineering() {
  const { founder, caseStudies } = SITE_CONFIG;

  return (
    <section id="engineering" className="py-24 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-400/30 bg-indigo-950/40 text-xs font-bold uppercase tracking-wider text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Proven Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Leadership &amp;{" "}
            <span className="text-gradient">Battle-Tested Systems</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Nextora is founded on rigorous computer science principles—delivering deterministic
            agent pipelines, asynchronous microservices, and zero-downtime automation.
          </p>
        </div>

        {/* Founder & Lead Engineer Card */}
        <div className="glass-card-glow rounded-3xl p-7 sm:p-9 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Avatar & Badges */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-[2px] shadow-xl shadow-indigo-600/30">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#070b1a] relative">
                    <Image
                      src={founder.avatar}
                      alt={founder.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 rounded-full border-2 border-[#050818]" />
              </div>

              <h3 className="text-xl font-black text-white">{founder.name}</h3>
              <p className="text-xs font-bold text-indigo-400 mt-0.5">{founder.role}</p>

              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-[11px] font-semibold text-blue-300">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{founder.institution}</span>
              </div>

              <div className="flex items-center gap-2.5 mt-4">
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-indigo-400 text-slate-300 hover:text-white transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-indigo-400 text-slate-300 hover:text-white transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>

            {/* Bio & Engineering Pillars */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Deterministic State Machines &bull; High-Throughput APIs</span>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {founder.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#080d22]/90 border border-indigo-500/20">
                  <div className="text-xs font-bold text-indigo-300 flex items-center gap-1.5 mb-1">
                    <Cpu className="w-3.5 h-3.5" />
                    Agentic Architectures
                  </div>
                  <p className="text-xs text-slate-300">
                    Google Gemini, LangChain, n8n, Dynamic Function Calling &amp; Strict Guardrails
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080d22]/90 border border-indigo-500/20">
                  <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 mb-1">
                    <Layers className="w-3.5 h-3.5" />
                    Full-Stack Reliability
                  </div>
                  <p className="text-xs text-slate-300">
                    Next.js, FastAPI, PostgreSQL, Docker Microservices &amp; Multi-Tenant Schema Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Real Production Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                    {cs.category}
                  </span>
                  <a
                    href={cs.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {cs.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {cs.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  {cs.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-4 border-t border-indigo-500/20">
                <div className="flex flex-wrap gap-1.5">
                  {cs.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
