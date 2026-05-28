import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { SOCIALS, RESUME_URL } from "../constants";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIALS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable, the mailto still works */
    }
  };

  return (
    <section id="contact" className="py-28 content-visibility-auto">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-accent">06.</span>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Get in touch
        </h2>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="mt-14 max-w-2xl">
        <p className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Say hi.
        </p>
        <p className="mt-5 text-base leading-relaxed text-slate-400">
          I&apos;m currently open to full-stack and React Native roles.
          If you&apos;ve got a project, a role, or just want to chat about
          something you&apos;re building, my inbox is open.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${SOCIALS.email}`}
            className="group inline-flex items-center gap-2 rounded-md border border-accent/50 bg-accent/5 px-5 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            <Mail className="h-4 w-4" />
            Send me an email
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm text-slate-300 transition-colors hover:border-white/30 hover:text-white"
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

        <ul className="mt-12 space-y-3 text-sm">
          <li>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
            >
              <Github className="h-4 w-4" />
              github.com/Sou6161
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          </li>
          <li>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              linkedin.com/in/sourabhsaini6161
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          </li>
          <li>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
            >
              <span className="font-mono text-xs">CV</span>
              View / download
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
