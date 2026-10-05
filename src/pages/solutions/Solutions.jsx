import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { PageHero } from "../../components/PageHero.jsx";
import { SafeIcon } from "../../components/SafeIcon.jsx";
import { Section } from "../../components/Section.jsx";
import { SOLUTIONS } from "../../content/solutions.js";
export function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Our Solutions"
        description="Comprehensive services designed for high-density computing and mission-critical applications."
      />
      <Section>
        <div className="solution-grid nine">
          {SOLUTIONS.map((s) => (
            <Link to={s.path} key={s.path} className="solution-card">
              <span className="icon-chip large">
                <SafeIcon icon={s.icon} size={21} />
              </span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <span className="text-link">
                Learn more <ChevronRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
