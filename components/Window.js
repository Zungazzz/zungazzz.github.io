"use client";

import { useId, useState } from "react";

// A desktop-style window. The button in the title bar collapses and restores it.
export default function Window({ id, title, children, className = "" }) {
  const [open, setOpen] = useState(true);
  const bodyId = useId();

  return (
    <section id={id} className={`window ${open ? "" : "is-collapsed"} ${className}`}>
      <header className="window__bar">
        <span className="window__icon" aria-hidden="true" />
        <h2 className="window__title">{title}</h2>
        <button
          type="button"
          className="window__btn"
          aria-expanded={open}
          aria-controls={bodyId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Minimize window" : "Restore window"}</span>
          <span aria-hidden="true">{open ? "–" : "+"}</span>
        </button>
      </header>
      <div id={bodyId} className="window__body" hidden={!open}>
        {children}
      </div>
    </section>
  );
}
