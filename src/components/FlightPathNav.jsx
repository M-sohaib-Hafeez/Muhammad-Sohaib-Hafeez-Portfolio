import { useState } from 'react';
import { sections } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';
import './FlightPathNav.css';

export default function FlightPathNav() {
  const ids = sections.map((s) => s.id);
  const { activeId, progress } = useScrollSpy(ids);
  const [mobileOpen, setMobileOpen] = useState(false);

  function goTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  }

  const activeIndex = Math.max(ids.indexOf(activeId), 0);

  return (
    <>
      {/* Desktop rail */}
      <nav className="flight-rail" aria-label="Section navigation">
        <div className="flight-rail__line">
          <div
            className="flight-rail__probe"
            style={{ top: `${progress * 100}%` }}
            aria-hidden="true"
          />
        </div>
        <ul>
          {sections.map((s, i) => (
            <li key={s.id}>
              <button
                className={`flight-node ${i === activeIndex ? 'is-active' : ''}`}
                onClick={() => goTo(s.id)}
                aria-current={i === activeIndex ? 'true' : undefined}
              >
                <span className="flight-node__dot" />
                <span className="flight-node__label">
                  {s.code}_{s.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile top bar */}
      <div className="flight-topbar">
        <button className="flight-topbar__logo" onClick={() => goTo('home')}>
          SH_<span>PORTFOLIO</span>
        </button>
        <div className="flight-topbar__progress">
          <div
            className="flight-topbar__fill"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <button
          className="flight-topbar__toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="flight-mobile-menu" role="menu">
          {sections.map((s, i) => (
            <button
              key={s.id}
              className={i === activeIndex ? 'is-active' : ''}
              onClick={() => goTo(s.id)}
              role="menuitem"
            >
              {s.code}_{s.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
