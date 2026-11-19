"use client";

import { useEffect, useState } from "react";

const NAMESPACE = "y2k-portfolio";
const KEY = "visits";

export default function HitCounter() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let cancelled = false;

    async function fetchCount() {
      try {
        const res = await fetch(
          `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("CountAPI failed");
        const data = await res.json();
        if (!cancelled) setCount(data.value);
      } catch {
        if (!cancelled) setCount(0);
      }
    }

    fetchCount();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!mounted) {
    return (
      <p className="counter" suppressHydrationWarning>
        <span className="counter__label">You are visitor</span>
        <span className="counter__digits" aria-label="0">
          <span aria-hidden="true">0</span>
          <span aria-hidden="true">0</span>
          <span aria-hidden="true">0</span>
          <span aria-hidden="true">0</span>
          <span aria-hidden="true">0</span>
          <span aria-hidden="true">0</span>
        </span>
      </p>
    );
  }

  const digits = String(count).padStart(6, "0").split("");
  return (
    <p className="counter" suppressHydrationWarning>
      <span className="counter__label">You are visitor</span>
      <span className="counter__digits" aria-label={String(count)}>
        {digits.map((d, i) => (
          <span key={i} aria-hidden="true">
            {d}
          </span>
        ))}
      </span>
    </p>
  );
}