import { motion } from 'framer-motion';

export default function SectionHeading({ code, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="h-px w-8 bg-signal/60" />
        <span className="font-mono text-xs tracking-[0.2em] text-signal">
          {code}
        </span>
      </div>
      <h2 className="font-display text-3xl font-semibold text-ghost sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-[15px] leading-relaxed text-slate ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
