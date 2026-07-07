import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile } from '../data/profile';
import './Contact.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const isConfigured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isConfigured) {
      // Fall back to opening the user's mail client if EmailJS isn't set up yet.
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio message from ${form.name || 'a visitor'}`
      )}&body=${encodeURIComponent(form.message)}`;
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  const channels = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Github, label: 'GitHub', href: profile.github },
  ];

  return (
    <section id="contact" className="section contact">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        05_open channel
      </motion.p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Let's talk
      </motion.h2>
      <motion.p
        style={{ marginTop: 16, maxWidth: 560 }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        Internships, collaborations, or just talking through an idea — the
        form below reaches my inbox directly.
      </motion.p>

      <div className="contact__grid">
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
            />
          </label>

          <button className="btn btn--primary contact-form__submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send transmission'}
            <Send size={15} />
          </button>

          {status === 'sent' && (
            <p className="contact-form__status contact-form__status--ok">
              <CheckCircle2 size={16} /> Message sent — thanks for reaching out.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-form__status contact-form__status--error">
              <AlertCircle size={16} /> Something went wrong. Try the email link instead.
            </p>
          )}
          {!isConfigured && (
            <p className="contact-form__hint">
            </p>
          )}
        </motion.form>

        <motion.div
          className="contact-channels"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <c.icon size={18} />
              <span>{c.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
