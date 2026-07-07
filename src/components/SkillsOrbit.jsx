import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { skillGroups } from '../data/profile';
import SectionHeading from './SectionHeading';

export default function SkillsOrbit() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((g) => g.id === activeId);
  const radius = 40; // percent of container

  return (
    <section id="skills" className="relative mx-auto max-w-[1180px] px-6 py-28 sm:px-8 lg:px-12">
      <SectionHeading
        code="02_SKILLS"
        title="A stack that orbits one core: shipping working software."
        description="Six clusters of tools, always in motion. Select a node to read the signal — then click any skill to open its documentation."
      />

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        {/* Orbit diagram */}
        <div className="relative mx-auto aspect-square w-full max-w-[440px]">
          <div className="absolute inset-0 rounded-full border border-line" />
          <div className="absolute inset-[14%] rounded-full border border-line/60" />
          <div className="absolute inset-[14%] rounded-full bg-nebula-radial" />

          {/* core node */}
          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-signal/40 bg-panel text-center shadow-[0_0_30px_-6px_rgba(70,232,224,0.45)]">
            <span className="font-mono text-[10px] tracking-wider text-signal">
              CORE
            </span>
            <span className="font-display text-xs text-ghost">Full-Stack</span>
          </div>

          {/* rotating carrier ring */}
          <div className="absolute inset-0 animate-spin-slow" aria-hidden={false}>
            {skillGroups.map((group, i) => {
              const angle = (-90 + i * (360 / skillGroups.length)) * (Math.PI / 180);
              const left = 50 + radius * Math.cos(angle);
              const top = 50 + radius * Math.sin(angle);
              const isActive = group.id === activeId;

              return (
                <div
                  key={group.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <div className="animate-spin-slow-reverse">
                    <button
                      onClick={() => setActiveId(group.id)}
                      aria-pressed={isActive}
                      className={`flex h-16 w-16 flex-col items-center justify-center rounded-full border text-center transition-all sm:h-[4.5rem] sm:w-[4.5rem] ${
                        isActive
                          ? 'border-signal bg-signal/10 shadow-[0_0_20px_-4px_rgba(70,232,224,0.6)]'
                          : 'border-line bg-panel/80 hover:border-slate'
                      }`}
                    >
                      <span
                        className={`font-mono text-[9px] ${
                          isActive ? 'text-signal' : 'text-slate-dim'
                        }`}
                      >
                        {group.code}
                      </span>
                      <span
                        className={`px-1 text-[10px] font-medium leading-tight sm:text-[11px] ${
                          isActive ? 'text-ghost' : 'text-slate'
                        }`}
                      >
                        {group.label}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="min-h-[220px] rounded-2xl border border-line bg-panel/50 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <span className="font-mono text-xs text-signal">{active.code}</span>
              <h3 className="mt-2 font-display text-2xl text-ghost">
                {active.label}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.doc}
                    target="_blank"
                    rel="noreferrer"
                    title={`Open ${item.name} documentation`}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-void/40 px-3.5 py-1.5 font-mono text-xs text-slate transition-colors hover:border-signal/50 hover:bg-signal/10 hover:text-signal"
                  >
                    {item.name}
                    <ExternalLink
                      size={11}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
