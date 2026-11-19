import Window from "@/components/Window";
import Taskbar from "@/components/Taskbar";
import Marquee from "@/components/Marquee";
import HitCounter from "@/components/HitCounter";
import ContactForm from "@/components/ContactForm";
import Sparkline from "@/components/Sparkline";
import { site, about, focus, stats, projects, skills, contact } from "@/data/content";

// Turns the focus slices into one conic-gradient, with a thin dark line between slices.
function donutGradient(slices) {
  let start = 0;
  const stops = slices.map((s) => {
    const end = start + s.value;
    const stop = `${s.color} ${start}% ${end - 0.8}%, #14185a ${end - 0.8}% ${end}%`;
    start = end;
    return stop;
  });
  return `conic-gradient(from 0deg, ${stops.join(", ")})`;
}

export default function Home() {
  return (
    <>
      <main className="desktop">
        <Marquee />

        {/* Hero */}
        <Window id="welcome" title="hello_data.exe" className="hero">
          <div className="hero__grid">
            <div className="hero__text">
              <p className="hero__role">{site.role}</p>
              <h1 className="chrome-text">{site.name}</h1>
              <p className="hero__tagline">{site.tagline}</p>
              <div className="hero__actions">
                <a className="btn btn--blue" href="#projects">
                  See my projects
                </a>
                <a className="btn btn--pink" href="#contact">
                  Say hello
                </a>
              </div>
              <HitCounter />
            </div>

            <figure className="viz">
              <div className="disc" aria-hidden="true">
                <div className="disc__spin" style={{ "--slices": donutGradient(focus.slices) }} />
                <div className="disc__shine" />
                <div className="disc__hole" />
                <span className="sparkle sparkle--a" />
                <span className="sparkle sparkle--b" />
                <span className="sparkle sparkle--c" />
              </div>
              <figcaption className="legend">
                <strong>{focus.title}</strong>
                <ul>
                  {focus.slices.map((s) => (
                    <li key={s.label}>
                      <span className="legend__swatch" style={{ background: s.color }} aria-hidden="true" />
                      {s.label}
                      <span className="legend__value">{s.value}%</span>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          </div>
        </Window>

        {/* About */}
        <Window id="about" title={about.filename} className="about">
          <div className="about__grid">
            <div className="prose">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <dl className="facts">
              {about.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Window>

        {/* Numbers: a spreadsheet */}
        <Window id="numbers" title="numbers.xls" className="numbers">
          <div className="formula" aria-hidden="true">
            <span className="formula__fx">fx</span>
            <code>=COUNT(my_work)</code>
          </div>
          <div className="sheet-wrap">
            <table className="sheet">
              <thead>
                <tr>
                  <th className="sheet__corner" aria-hidden="true" />
                  <th scope="col">Metric</th>
                  <th scope="col">Value</th>
                  <th scope="col">Note</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((row, i) => (
                  <tr key={row.label}>
                    <td className="sheet__row" aria-hidden="true">
                      {i + 1}
                    </td>
                    <th scope="row">{row.label}</th>
                    <td className="sheet__value">{row.value}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Window>

        {/* Projects */}
        <Window id="projects" title="projects.csv" className="projects">
          <ul className="cases">
            {projects.map((p) => (
              <li key={p.title} className="case" style={{ "--hue": p.hue }}>
                <div className="case__top">
                  <div className="case__disc" aria-hidden="true" />
                  <div className="case__metric">
                    <span className="case__number">{p.metric.value}</span>
                    <span className="case__caption">{p.metric.label}</span>
                  </div>
                </div>
                <h3>{p.title}</h3>
                <Sparkline values={p.chart.values} label={p.chart.label} />
                <p>{p.description}</p>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="case__links">
                  <a className="btn btn--small btn--blue" href={p.live}>
                    View
                  </a>
                  <a className="btn btn--small btn--ghost" href={p.code}>
                    Code
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Window>

        {/* Skills */}
        <Window id="skills" title="skills.dll" className="skills">
          <ul className="meters">
            {skills.map((s) => (
              <li key={s.name}>
                <div className="meter__head">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div
                  className="meter"
                  role="progressbar"
                  aria-label={s.name}
                  aria-valuenow={s.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="meter__fill" style={{ width: `${s.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Window>

        {/* Contact */}
        <Window id="contact" title="new_message" className="contact">
          <div className="contact__grid">
            <ContactForm email={contact.email} />
            <div className="contact__side">
              <h3>Prefer a link?</h3>
              <p>
                Email me at <a href={`mailto:${contact.email}`}>{contact.email}</a> or find me
                here:
              </p>
              <ul className="social">
                {contact.links.map((l) => (
                  <li key={l.href}>
                    <a className="btn btn--small btn--ghost" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Window>

        <footer className="footer">
          <p>
            © {site.year} {site.name}.
          </p>
        </footer>
      </main>

      <Taskbar />
    </>
  );
}
