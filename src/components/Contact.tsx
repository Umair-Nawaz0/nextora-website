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
  ShieldAlert,
  Sparkles,
} from "lucide-react";

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
      `Hello Nextora Team,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${
        formData.company || "N/A"
      }\nService of Interest: ${formData.service}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${SITE_CONFIG.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#060911] border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/30 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ready to Automate Your Business?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Let&apos;s discuss how AI and automation can simplify your operations and
            help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0c1222]/90 border border-slate-800 rounded-2xl p-7 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Start a Conversation</span>
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Reach out directly via our email or messaging channels. Whether you need
                a 24/7 AI receptionist or cross-app workflow automation, we are ready to assist.
              </p>

              {/* Notice pill explaining placeholders as instructed in brief */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-snug">
                  <span className="font-semibold text-slate-200">Placeholder Notice:</span>{" "}
                  Channels below are initial contact placeholders until the official business accounts are linked.
                </div>
              </div>

              {/* Channel list */}
              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-800/40">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Business Inquiries</div>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(SITE_CONFIG.contact.email, "email")}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">WhatsApp Direct</div>
                      <div className="text-sm font-semibold text-white">
                        {SITE_CONFIG.contact.whatsappDisplay}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 hover:bg-emerald-900/50 transition-colors"
                  >
                    <span>Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Phone</div>
                      <div className="text-sm font-semibold text-white">
                        {SITE_CONFIG.contact.phone}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(SITE_CONFIG.contact.phone, "phone")}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
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
            </div>
          </div>

          {/* Right Column: Frontend-only Contact Form (Mailto trigger) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c1222]/90 border border-slate-800 rounded-2xl p-7 sm:p-9 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your requirements below. Submitting will launch your default email client with your message pre-composed.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Business Email <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@yourcompany.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Clinic / Studio"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Service of Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    >
                      <option value="AI Appointment Assistant">AI Appointment Assistant</option>
                      <option value="Workflow Automation">Business Workflow Automation</option>
                      <option value="Custom AI Agents">Custom AI Agents</option>
                      <option value="Custom Software Solution">Custom Software Solution</option>
                      <option value="Other / General Consultation">Other / General Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Message / Project Goals <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current manual tasks, channels used (WhatsApp/Web), or the problem you are looking to automate..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all duration-200 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
