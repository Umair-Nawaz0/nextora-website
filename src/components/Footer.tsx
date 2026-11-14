"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Sparkles, ArrowUp, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030612] border-t border-indigo-500/20 text-slate-400 text-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-[1.5px] shadow-lg shadow-indigo-600/30">
                <div className="w-full h-full bg-[#080d22] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </a>

            <p className="text-xs font-semibold text-indigo-300 max-w-sm">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Nextora engineers AI-powered business automation, workflow orchestration,
              and bespoke software systems that reduce manual tasks and drive sustainable operational growth.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-400 transition-colors"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={SITE_CONFIG.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#engineering" className="hover:text-white transition-colors">
                  Proven Systems
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Nextora
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  How We Work
                </a>
              </li>
            </ul>
          </div>

          {/* Solution Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Offerings
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  AI Appointment Assistant
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Autonomous Meeting Engine
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Custom Agentic Systems
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Industries We Serve
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Email:</span>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-slate-200 hover:text-indigo-400 font-semibold transition-colors break-all"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Phone / WhatsApp:</span>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-emerald-400 font-semibold transition-colors"
                >
                  {SITE_CONFIG.contact.whatsappDisplay}
                </a>
              </div>
              <div className="pt-1">
                <span className="text-slate-400 block text-[11px]">Location:</span>
                <span className="text-slate-300 font-medium">{SITE_CONFIG.contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400">
            &copy; 2026 Nextora &bull; Engineered by {SITE_CONFIG.founder.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-indigo-300 font-medium">100% Deterministic AI Systems</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#080d22] border border-indigo-500/30 hover:border-indigo-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
