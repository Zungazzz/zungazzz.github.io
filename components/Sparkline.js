// A tiny line chart drawn as SVG. Pass any list of numbers.
export default function Sparkline({ values, label }) {
  const w = 160;
  const h = 48;
  const pad = 5;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;

  const points = values.map((v, i) => [
    pad + (i * (w - pad * 2)) / (values.length - 1),
    h - pad - ((v - min) / span) * (h - pad * 2),
  ]);
  const line = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${pad},${h - pad} ${line} ${w - pad},${h - pad}`;
  const [lx, ly] = points[points.length - 1];

  return (
    <svg className="spark" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label}>
      <polygon points={area} className="spark__area" />
      <polyline points={line} className="spark__line" />
      <circle cx={lx} cy={ly} r="4" className="spark__dot" />
    </svg>
  );
}
