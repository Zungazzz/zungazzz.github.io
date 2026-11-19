"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/content";

export default function Taskbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
      );
    tick();
    const timer = setInterval(tick, 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <nav className="taskbar" aria-label="Site">
      <button
        type="button"
        className="taskbar__start"
        aria-expanded={menuOpen}
        aria-controls="start-menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="taskbar__orb" aria-hidden="true" />
        Menu
      </button>

      {menuOpen && (
        <ul id="start-menu" className="taskbar__menu">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <ul className="taskbar__links">
        {nav.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      <span className="taskbar__clock" suppressHydrationWarning>
        {time}
      </span>
    </nav>
  );
}
