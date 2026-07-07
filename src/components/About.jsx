import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { education, profile, projects, certifications } from '../data/profile';
import SectionHeading from './SectionHeading';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-ghost">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: 'Projects shipped', value: projects.length, suffix: '' },
  { label: 'Semesters completed', value: 4, suffix: '' },
  {
    label: 'AI certifications earned',
    value: certifications.filter((c) => c.status === 'done').length,
    suffix: '',
  },
  { label: 'Core languages known', value: 4, suffix: '' },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1180px] px-6 py-28 sm:px-8 lg:px-12">
      <SectionHeading code="01_ABOUT" title="Building systems, not just demos." />

      <div className="mt-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="max-w-xl text-[15px] leading-relaxed text-slate">
            {profile.summary}
          </p>

          <div className="mt-8 flex items-center gap-2 font-mono text-xs text-slate-dim">
            <MapPin size={14} />
            {profile.location}
          </div>

          <div className="mt-8 rounded-xl border border-line bg-panel/60 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-plasma/10 p-2.5 text-plasma">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="font-display text-lg text-ghost">{education.degree}</p>
                <p className="mt-1 text-sm text-slate">{education.school}</p>
                <div className="mt-3 flex flex-wrap gap-3 font-mono text-xs text-slate-dim">
                  <span className="rounded-full border border-line px-3 py-1">
                    {education.period}
                  </span>
                  <span className="rounded-full border border-signal/30 px-3 py-1 text-signal">
                    {education.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="grid grid-cols-2 gap-4 self-start"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-line bg-panel/40 p-6 transition-colors hover:border-signal/40"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 font-mono text-xs leading-snug text-slate-dim">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
