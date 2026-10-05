import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CTA } from "../../components/CTA.jsx";
import { PageHero } from "../../components/PageHero.jsx";
import { Section } from "../../components/Section.jsx";
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
        <div className="tabs service-tabs">
          {info.tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={i === tab ? "active" : ""}
            >
              {t}
            </button>
          ))}
        </div>
        <ServiceBlock data={info.sections[tab]} />
      </Section>
      <CTA
        title={`Ready to talk through ${info.title}?`}
        body="Get a tailored quote or see live pricing for the options above."
        button="View Pricing"
      />
    </>
  );
}
