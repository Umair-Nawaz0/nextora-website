"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Mail,
  Phone,
  MessageSquare,
  Copy,
  Check,
  Send,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "AI Appointment Assistant",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Nextora Inquiry: ${formData.service} - ${formData.company || formData.fullName}`
    );
    const body = encodeURIComponent(
      `Hello Nextora Engineering Team,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${
        formData.company || "N/A"
      }\nService of Interest: ${formData.service}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${SITE_CONFIG.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-400/30 bg-indigo-950/40 text-xs font-bold uppercase tracking-wider text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ready to Automate Your{" "}
            <span className="text-gradient">Business Operations?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Let&apos;s discuss how AI and automation can simplify your operations,
            reduce repetitive manual work, and scale your customer communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct verified channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card-glow rounded-3xl p-7 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Contact Engineering Directly</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Connect directly with the Nextora team. We respond within hours for
                  appointment bot inquiries, custom workflow scoping, and systems integration.
                </p>
              </div>

              {/* Channel list */}
              <div className="space-y-4 pt-2">
                {/* Official Email */}
                <div className="p-4 rounded-2xl bg-[#070b1e] border border-indigo-500/25 flex items-center justify-between hover:border-indigo-400/50 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-950/80 text-indigo-400 border border-indigo-800/60 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase text-slate-400">
                        Official Business Email
                      </div>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-xs sm:text-sm font-bold text-white hover:text-indigo-300 transition-colors break-all"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(SITE_CONFIG.contact.email, "email")}
                    className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* WhatsApp Direct */}
                <div className="p-4 rounded-2xl bg-[#070b1e] border border-emerald-500/30 flex items-center justify-between hover:border-emerald-400 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 shadow-sm">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase text-emerald-400">
                        WhatsApp &bull; Instant Chat
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {SITE_CONFIG.contact.whatsappDisplay}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-600/50 hover:bg-emerald-900/60 transition-colors shadow-sm"
                  >
                    <span>Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Direct Phone */}
                <div className="p-4 rounded-2xl bg-[#070b1e] border border-cyan-500/25 flex items-center justify-between hover:border-cyan-400/50 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase text-slate-400">
                        Direct Phone / Call
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {SITE_CONFIG.contact.phone}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(SITE_CONFIG.contact.phone, "phone")}
                    className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Developer Links */}
              <div className="pt-4 border-t border-indigo-500/20 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  Engineering Profiles:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={SITE_CONFIG.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={SITE_CONFIG.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-filled Mailto Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-glow rounded-3xl p-7 sm:p-9 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Send Project Requirements
                </h3>
                <p className="text-xs text-slate-300">
                  Submitting pre-fills your email client with your exact specifications for rapid scoping.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-200">
                      Full Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#060a1e] border border-indigo-500/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-200">
                      Your Email <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@business.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#060a1e] border border-indigo-500/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-200">
                      Company / Practice Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health & Aesthetics"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#060a1e] border border-indigo-500/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors"
                    />
                  </div>

                  {/* Service of Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-200">
                      Solution of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#060a1e] border border-indigo-500/30 text-sm text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors"
                    >
                      <option value="AI Appointment Assistant">AI Appointment Assistant (WhatsApp/Web)</option>
                      <option value="Autonomous Meeting & Workflow Engine">Autonomous Meeting &amp; Workflow Engine</option>
                      <option value="Custom Agentic AI Systems">Custom Agentic AI Systems</option>
                      <option value="Full-Stack Custom Software">Full-Stack Custom Software &amp; APIs</option>
                      <option value="General AI Automation Consultation">General Automation Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-200">
                    Project Details &amp; Current Bottlenecks <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current manual tasks, volume of booking inquiries, or systems you want connected (WhatsApp, Google Calendar, CRM, etc.)..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#060a1e] border border-indigo-500/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-indigo-600/40 hover:shadow-indigo-500/60 transition-all duration-200 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
