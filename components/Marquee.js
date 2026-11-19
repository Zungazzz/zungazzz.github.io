import { marquee } from "@/data/content";

export default function Marquee() {
  // The list is rendered twice so the scroll loops without a gap.
  const items = [...marquee, ...marquee];
  return (
    <div className="marquee" role="region" aria-label="News ticker">
      <span className="marquee__label" aria-hidden="true">
        NOW
      </span>
      <ul className="marquee__track">
        {items.map((text, i) => (
          <li key={i} aria-hidden={i >= marquee.length ? "true" : undefined}>
            <span className="star" aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
