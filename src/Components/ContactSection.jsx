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
    <section id="contact" className="py-28">
      <div data-reveal className="flex items-center gap-4">
        <span className="rounded-sm bg-tomato px-2 py-0.5 font-mono text-xs font-medium text-paper">
          06
        </span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Get in touch
        </h2>
        <span className="rule h-px flex-1 bg-ink/15" />
      </div>

      <div data-reveal style={{ "--d": "150ms" }} className="mt-14 max-w-2xl">
        <p className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Say <span className="marker italic">hi.</span>
        </p>
        <p className="mt-5 text-base leading-relaxed text-ink-soft">
          I’m currently open to full-stack and React Native roles.
          If you’ve got a project, a role, or just want to chat about
          something you’re building, my inbox is open.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${SOCIALS.email}`}
            className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-tomato"
          >
            <Mail className="h-4 w-4" />
            Send me an email
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-ink/15 px-4 py-3 text-sm text-ink transition-colors hover:border-ink/40 hover:text-ink"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-leaf" /> Copied
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
              className="group inline-flex items-center gap-3 text-ink-soft transition-colors hover:text-ink"
            >
              <Github className="h-4 w-4" />
              github.com/Sou6161
              <ArrowUpRight className="h-3.5 w-3.5 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-tomato" />
            </a>
          </li>
          <li>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-ink-soft transition-colors hover:text-ink"
            >
              <Linkedin className="h-4 w-4" />
              linkedin.com/in/sourabhsaini6161
              <ArrowUpRight className="h-3.5 w-3.5 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-tomato" />
            </a>
          </li>
          <li>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-ink-soft transition-colors hover:text-ink"
            >
              <span className="font-mono text-xs">CV</span>
              View / download
              <ArrowUpRight className="h-3.5 w-3.5 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-tomato" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
