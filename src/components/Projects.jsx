import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects, projectFilters } from '../data/profile';
import SectionHeading from './SectionHeading';

function SignalMeter({ value }) {
  return (
    <div className="flex items-center gap-2" aria-label={`Build signal ${value} percent`}>
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-signal"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="font-mono text-[10px] text-slate-dim">{value}%</span>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative mx-auto max-w-[1180px] px-6 py-28 sm:px-8 lg:px-12">
      <SectionHeading
        code="03_PROJECTS"
        title="Seven systems, shipped and running."
        description="Team projects and solo builds — filter by what each one is built for."
      />

      <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide transition-colors ${
              filter === f
                ? 'border-signal bg-signal/10 text-signal'
                : 'border-line text-slate hover:border-slate'
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((project, i) => (
          <motion.article
            key={project.id}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: 'easeOut' }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-panel/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_20px_40px_-22px_rgba(139,124,246,0.4)]"
          >
            {/* diagonal sheen hover effect, carried over from sohaib-portfolio */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-signal/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] text-plasma">
                  {project.category.toUpperCase()}
                </span>
                <h3 className="mt-1.5 font-display text-xl text-ghost">
                  {project.name}
                </h3>
              </div>
              <SignalMeter value={project.signal} />
            </div>

            <p className="relative mt-3 text-sm font-medium text-signal">{project.tagline}</p>
            <p className="relative mt-3 text-[14px] leading-relaxed text-slate">
              {project.description}
            </p>

            <ul className="relative mt-4 space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-[13px] text-slate">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-signal" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-dim"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="relative mt-6 flex items-center gap-4 border-t border-line pt-5">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-ghost transition-colors hover:text-signal"
              >
                <Github size={15} />
                VIEW_CODE
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-ghost transition-colors hover:text-plasma"
                >
                  <ExternalLink size={15} />
                  LIVE_DEMO
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
