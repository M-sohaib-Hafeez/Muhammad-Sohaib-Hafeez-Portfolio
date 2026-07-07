import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

function TypedRoles({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | pausing | deleting

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1400);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 700);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, roles]);

  return (
    <span className="text-signal">
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-0.5 animate-blink bg-signal align-middle" />
    </span>
  );
}

export default function Hero() {
  function goTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-[1180px] flex-col justify-center overflow-hidden px-6 pb-24 pt-28 sm:px-8 lg:px-12"
    >
      {/* decorative drifting glyphs — purely ambient, aria-hidden */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[8%] top-[18%] h-24 w-24 animate-drift rounded-full border border-plasma/30" />
        <div className="absolute right-[14%] top-[24%] h-2 w-2 animate-drift-slow rounded-full bg-signal shadow-[0_0_16px_4px_rgba(70,232,224,0.5)]" />
        <div className="absolute right-[22%] top-[62%] h-1.5 w-1.5 animate-drift rounded-full bg-plasma shadow-[0_0_14px_4px_rgba(139,124,246,0.5)]" />
        <div className="absolute right-[6%] bottom-[16%] h-36 w-36 rounded-full border border-signal/15 animate-spin-slow">
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-signal" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl"
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[11px] tracking-wide text-slate">
            {profile.availability.toUpperCase()}
          </span>
        </div>

        <p className="mb-3 font-mono text-sm text-signal">Hi, I&apos;m</p>

        {/* Name keeps the sohaib-portfolio gradient word-styling */}
        <h1 className="text-balance bg-[linear-gradient(120deg,#ffffff_20%,#46E8E0_55%,#8B7CF6_85%)] bg-clip-text font-display text-4xl font-semibold leading-[1.08] text-transparent sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-5 font-display text-xl text-slate sm:text-2xl">
          <TypedRoles roles={profile.roles} />
        </p>

        <p className="mt-6 max-w-xl text-balance text-[15px] leading-relaxed text-slate sm:text-base">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <button
            onClick={() => goTo('projects')}
            className="rounded-lg bg-signal px-6 py-3 font-mono text-xs font-medium tracking-wide text-void transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            VIEW_PROJECTS
          </button>
          <button
            onClick={() => goTo('contact')}
            className="rounded-lg border border-line px-6 py-3 font-mono text-xs font-medium tracking-wide text-ghost transition-colors hover:border-signal hover:text-signal"
          >
            GET_IN_TOUCH
          </button>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-line px-6 py-3 font-mono text-xs font-medium tracking-wide text-ghost transition-colors hover:border-plasma hover:text-plasma"
          >
            <Download size={14} />
            RESUME
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-slate transition-colors hover:text-signal"
          >
            <Github size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate transition-colors hover:text-signal"
          >
            <Linkedin size={19} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="text-slate transition-colors hover:text-signal"
          >
            <Mail size={19} />
          </a>
        </div>
      </motion.div>

      <button
        onClick={() => goTo('about')}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-dim transition-colors hover:text-signal"
      >
        <ArrowDown className="animate-bounce" size={20} />
      </button>
    </section>
  );
}
