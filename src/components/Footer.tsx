"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Sparkles, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070e] border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#0b0f1a] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </a>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Nextora engineers AI-powered business automation, workflow automation,
              and bespoke software systems that reduce manual tasks and drive sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
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
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
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
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Custom AI Agents
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
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-400 block">Email (Placeholder):</span>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-slate-200 hover:text-indigo-400 transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block">WhatsApp:</span>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-emerald-400 transition-colors"
                >
                  {SITE_CONFIG.contact.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400">
            &copy; 2026 Nextora. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Frontend-Only Architecture</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
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
