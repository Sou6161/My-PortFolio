import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
} from "lucide-react";
import { SOCIALS, RESUME_URL } from "../constants";

const links = [
  { label: "GitHub", value: "@Sou6161", href: SOCIALS.github, Icon: Github },
  {
    label: "LinkedIn",
    value: "in/sourabhsaini6161",
    href: SOCIALS.linkedin,
    Icon: Linkedin,
  },
  { label: "Résumé", value: "View / Download", href: RESUME_URL, Icon: FileText },
];

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIALS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <section
      id="contact"
      className="relative px-4 py-28 sm:px-6 lg:px-8 content-visibility-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 glass p-8 sm:p-12">
          {/* textured background */}
          <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)] opacity-50" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-electric/15 blur-[110px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: message + email */}
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Let's <span className="gradient-text">work together</span>
              </h2>
              <p className="mt-4 max-w-md font-body text-lg text-slate-400">
                Have a project or a role in mind? My inbox is always open.
              </p>

              {/* Email actions */}
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${SOCIALS.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-electric px-6 py-3.5 font-semibold text-ink-950 shadow-glow transition-transform hover:scale-105"
                >
                  <Mail className="h-5 w-5" />
                  Send me an email
                </a>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy address
                    </>
                  )}
                </button>
              </div>

              {/* Status */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Gurgaon, India
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Usually replies within a day
                </span>
              </div>
            </div>

            {/* Right: link cards */}
            <div className="flex flex-col gap-4">
              {links.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06]"
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-electric/20 text-accent ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-display text-base font-semibold text-white">
                        {label}
                      </span>
                      <span className="text-sm text-slate-400">{value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
