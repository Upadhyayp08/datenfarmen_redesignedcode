import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CTA } from "../../components/CTA.jsx";
import { PageHero } from "../../components/PageHero.jsx";
import { Section } from "../../components/Section.jsx";
import { WhyChooseBand } from "../../components/WhyChooseBand.jsx";
import { serviceData } from "../../content/services.js";
import { ServiceBlock } from "./ServiceBlock.jsx";
export function ServicePage() {
  const { pathname } = useLocation();
  const info = serviceData[pathname] || serviceData["/cloud-services"];
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setTab(0);
  }, [pathname]);

  return (
    <>
      <PageHero
        title={info.title}
        description={info.heroDesc}
        eyebrow="Solutions"
      />
      <Section>
        <p className="section-lead">{info.intro}</p>
        <div className="tabs service-tabs" role="tablist">
          {info.tabs.map((t, i) => (
            <button
              key={t}
              type="button"
              role="tab"
              id={`service-tab-${i}`}
              aria-controls={`service-panel-${i}`}
              aria-selected={i === tab}
              onClick={() => setTab(i)}
              className={i === tab ? "active" : ""}
            >
              {t}
            </button>
          ))}
        </div>
        {info.sections.map((section, i) => (
          <div
            key={section.title}
            className="tab-panel"
            role="tabpanel"
            id={`service-panel-${i}`}
            aria-labelledby={`service-tab-${i}`}
            hidden={i !== tab}
          >
            <ServiceBlock data={section} />
          </div>
        ))}
      </Section>
      <WhyChooseBand />
      <CTA
        title={`Ready to talk through ${info.title}?`}
        body="Get a tailored quote for the options above."
        button="Talk to an Expert"
      />
    </>
  );
}
