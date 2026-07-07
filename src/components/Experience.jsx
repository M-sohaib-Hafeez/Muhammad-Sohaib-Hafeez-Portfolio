import { motion } from 'framer-motion';
import { experience, certifications } from '../data/profile';
import './Experience.css';

const statusLabel = {
  done: 'Complete',
  'in-progress': 'In progress',
  planned: 'Planned',
};

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        04_transmission log
      </motion.p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {experience.map((e, i) => (
          <motion.div
            className="timeline__item"
            key={e.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="timeline__marker" />
            <div>
              <h3 className="timeline__role">{e.role}</h3>
              <p className="timeline__company">{e.company}</p>
              <ul className="timeline__points">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h3
        className="cert-heading"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Certifications &amp; training
      </motion.h3>

      <div className="cert-grid">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            className={`cert-card cert-card--${c.status}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
          >
            <div className="cert-card__top">
              <span className="cert-card__status">{statusLabel[c.status]}</span>
            </div>
            <h4>{c.name}</h4>
            <p className="cert-card__issuer">{c.issuer}</p>
            {c.detail && <p className="cert-card__detail">{c.detail}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
