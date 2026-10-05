import { PageHero } from "../../components/PageHero.jsx";
import { Section } from "../../components/Section.jsx";
import { privacySections, termsSections } from "../../content/legal.js";
export function LegalPage({ type }) {
  const isP = type === "privacy";
  const sections = isP ? privacySections : termsSections;
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={isP ? "Privacy Policy" : "Terms & Conditions"}
        description={
          isP
            ? "How Datenfarmen Centers LLP collects, uses, and protects information"
            : "Governing your use of Datenfarmen Centers LLP's website and services"
        }
      />
      <Section>
        <div className="legal-layout">
          <aside className="legal-toc">
            <strong>On this page</strong>
            {sections.map((s, i) => (
              <a href={"#sec-" + i} key={s.title}>
                {i + 1}. {s.title}
              </a>
            ))}
          </aside>
          <article className="legal-content">
            <p className="legal-meta">
              Effective date: 1 January 2026 · Last updated: 18 July 2026 ·
              Applies to{" "}
              {isP
                ? "www.datenfarmen.com and all Datenfarmen colocation, cloud, and connectivity services"
                : "all colocation, managed services, cloud compute, storage, and connectivity Services provided by Datenfarmen Centers LLP"}
            </p>
            {sections.map((s, i) => (
              <section id={"sec-" + i} key={s.title}>
                <h2>
                  {i + 1}. {s.title}
                </h2>
                {s.body.map((b, j) =>
                  b.type === "list" ? (
                    <ul className="bullet-list" key={j}>
                      {b.items.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j}>{b.text}</p>
                  )
                )}
              </section>
            ))}
          </article>
        </div>
      </Section>
    </>
  );
}
