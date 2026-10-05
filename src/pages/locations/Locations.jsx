import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Network } from "lucide-react";
import { PageHero } from "../../components/PageHero.jsx";
export function Locations() {
  const locations = [
    {
      phase: "Phase 1",
      code: "ANK-1",
      name: "Ankleshwar, Gujarat",
      status: "Phase 1",
      statusClass: "phase",
      image: "/ankleshwar-plant.webp",
      imageAlt:
        "Ankleshwar data center facility layout from the company presentation",
      intro:
        "Ankleshwar GIDC is a central industrial and commercial hub for chemical, pharmaceutical, and manufacturing industries. Its strategic position supports regional digital demand and direct engagement with customers across South Gujarat.",
      site: [
        "Single-storey building with administrative area",
        "Building area: 7,196 sqft",
        "On-site parking for 3 vehicles",
        "Secure fencing options",
        "Total technical area: 600–800 sqft per data hall",
      ],
      connectivity: [
        "Airtel & Jio fibre connectivity",
        "Direct peering with major telecom providers",
        "Low-latency connections to Mumbai, Delhi, Bangalore",
      ],
      specs: [
        ["IT Capacity", "150–300 KW scalable infrastructure"],
        ["Rack Density", "2–2.5 KW per rack"],
        ["Redundancy", "N+1 for critical systems"],
        ["Cooling", "Advanced cooling and rack configuration"],
      ],
      highlights: [
        [
          "Vibrant Ecosystem",
          "Central industrial and commercial hub for chemical, pharmaceutical and manufacturing industries.",
        ],
        [
          "Seamless Interconnection",
          "Road and rail connectivity through NH-48 and Ankleshwar Junction supports key business corridors.",
        ],
        [
          "Proximity to Customers",
          "Strategically positioned for rapid service delivery across South Gujarat.",
        ],
      ],
    },
    {
      phase: "Phase 2",
      code: "IND-1",
      name: "Indore, Madhya Pradesh",
      status: "Live",
      statusClass: "live",
      image: "/indore-facility.webp",
      imageAlt:
        "Indore data center facility concept from the company presentation",
      intro:
        "Indore represents one of Central India’s most dynamic business ecosystems, supported by diversified activity across manufacturing, pharmaceuticals, logistics, IT, and emerging digital enterprises. IND-1 is positioned to support regional demand with reliable connectivity and scalable infrastructure.",
      site: [
        "Single-storey building with administrative area",
        "Building area: 3,196 sqft",
        "On-site parking for 3 vehicles",
        "Secure fencing options",
        "Total technical area: 600–800 sqft per data hall",
      ],
      connectivity: [
        "Airtel, Jio, BSNL, and RailTel fibre connectivity",
        "Direct peering with major telecom providers",
        "Low-latency connections to Mumbai and Delhi",
      ],
      specs: [
        ["IT Capacity", "150–300 KW scalable infrastructure"],
        ["Rack Density", "2–2.5 KW per rack"],
        ["Redundancy", "2N for critical systems"],
        ["Cooling", "Advanced cooling and rack configuration"],
      ],
      highlights: [
        [
          "Vibrant Ecosystem",
          "A dynamic Central Indian business ecosystem spanning manufacturing, pharma, logistics, IT and digital enterprises.",
        ],
        [
          "Seamless Interconnection",
          "National highways, rail infrastructure and airport access support efficient regional interconnection.",
        ],
        [
          "Proximity to Customers",
          "Strategically positioned to support demand across Madhya Pradesh and adjoining markets.",
        ],
      ],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Strategic Locations"
        title="Infrastructure Where Your Business Needs It"
        description="Purpose-positioned edge infrastructure in high-growth industrial and commercial hubs across India, designed around connectivity, capacity and customer proximity."
      />

      <section className="locations-overview">
        <div className="container">
          <div className="locations-intro">
            <div>
              <span className="eyebrow">Our Network</span>
              <h2>Two strategic hubs. One connected infrastructure vision.</h2>
            </div>
            <p>
              Explore the current and planned facilities supporting businesses
              across Western and Central India. Each location combines practical
              site design, scalable IT capacity and regional connectivity.
            </p>
          </div>

          <div className="location-stack">
            {locations.map((location) => (
              <article className="location-modern-card" key={location.code}>
                <div className="location-modern-media">
                  <img
                    src={location.image}
                    alt={location.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="location-photo-overlay">
                    <span>{location.phase}</span>
                    <strong>{location.code}</strong>
                  </div>
                  <div className="location-photo-caption">
                    <span>Strategic location</span>
                    <strong>{location.name}</strong>
                  </div>
                </div>

                <div className="location-modern-content">
                  <div className="location-title-row">
                    <div>
                      <span className="location-kicker">{location.phase}</span>
                      <h2>{location.name}</h2>
                    </div>
                    <span className={`status ${location.statusClass}`}>
                      {location.status}
                    </span>
                  </div>

                  <p className="location-modern-intro">{location.intro}</p>

                  <div className="location-info-grid">
                    <div className="location-info-panel">
                      <div className="location-panel-icon">
                        <Monitor size={18} />
                      </div>
                      <div>
                        <h3>Site Overview</h3>
                        <ul className="compact-list">
                          {location.site.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="location-info-panel">
                      <div className="location-panel-icon">
                        <Network size={18} />
                      </div>
                      <div>
                        <h3>ISP &amp; Connectivity</h3>
                        <ul className="compact-list">
                          {location.connectivity.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="location-spec-strip">
                    {location.specs.map(([label, value]) => (
                      <div key={label}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="location-highlight-grid">
                    {location.highlights.map(([title, text]) => (
                      <div key={title}>
                        <span>{title}</span>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="locations-bottom-banner">
            <div>
              <span className="eyebrow">Strategic Expansion</span>
              <h2>Building a stronger, more connected digital India.</h2>
              <p>
                Our location strategy brings dependable infrastructure closer to
                growing businesses, regional customers and critical workloads.
              </p>
            </div>
            <Link className="button primary consultation-breathe" to="/contact">
              Talk to an Expert <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
