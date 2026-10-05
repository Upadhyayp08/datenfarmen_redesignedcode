import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Globe2,
  Monitor,
  Network,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { CTA } from "../../components/CTA.jsx";
import { IconCard } from "../../components/IconCard.jsx";
import { SafeIcon } from "../../components/SafeIcon.jsx";
import { Section } from "../../components/Section.jsx";
import { DATA_CENTER_IMAGES } from "../../content/site.js";
import { SOLUTIONS } from "../../content/solutions.js";
export function Home({ onChat }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Future-ready infrastructure</span>
            <h1>Future-Proof Data Infrastructure</h1>
            <p className="lead">
              Powering digital transformation and sustainable growth in India's
              fastest-growing regions — from colocation racks to full-stack
              cloud, VPS, dedicated servers and managed security.
            </p>
            <div className="hero-actions">
              <Link
                className="button primary consultation-breathe"
                to="/contact"
              >
                Talk to an Expert
                <ArrowRight size={17} />
              </Link>
              <Link className="button secondary" to="/solutions">
                Explore Cloud Platform
              </Link>
            </div>
            <div className="stat-grid">
              {[
                ["2+", "Data Centers Live & In Development"],
                ["300+", "KW IT Capacity per Facility"],
                ["2N", "Electrical & Mechanical Redundancy"],
                ["24/7", "Monitoring & Support"],
              ].map(([n, l]) => (
                <div key={l} className="stat">
                  <strong>{n}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-media">
            <img
              src="/Smart_Infrastructure_Network_transparent_extended.png"
              alt="Future-proof data infrastructure connecting cloud, industry, healthcare, logistics, education and business"
              decoding="async"
            />
            <div className="media-note">
              <Sparkles size={15} />
              <span>Built for reliability, scale and sustainable growth.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="data-center-showcase">
        <div className="container">
          <div className="showcase-heading">
            <div>
              <span className="eyebrow">Infrastructure in Focus</span>
              <h2>
                Built around resilient, modern data center infrastructure.
              </h2>
            </div>
            <p>
              A visual look at the server environments and high-density
              infrastructure that inspire our enterprise-first approach.
            </p>
          </div>
          <div className="showcase-grid">
            {DATA_CENTER_IMAGES.map((image, index) => (
              <figure
                className={
                  index === 0
                    ? "showcase-image showcase-image-large"
                    : "showcase-image"
                }
                key={image.src}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="eager"
                  decoding="async"
                />
                <figcaption>{image.credit}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Section
        eyebrow="Built for These Customers"
        title="Infrastructure Designed Around the Way You Operate"
        className="customers-section"
      >
        <p className="section-lead">
          From growing local businesses to digital-first enterprises, our
          infrastructure is designed to support the workloads that keep modern
          organisations moving.
        </p>
        <div className="customer-marquee" aria-label="Customer segments">
          <div className="customer-marquee-track">
            {[
              [
                "MSMEs",
                "Flexible infrastructure for growing businesses that need to scale without overbuilding.",
                "https://www.ibef.org/assets/images/MSME-Industry-2.jpg",
              ],
              [
                "Ecommerce",
                "Reliable compute, storage and connectivity for storefronts, payments and peak traffic.",
                "https://cdn.shopify.com/s/files/1/0841/2764/5978/files/inline2_q2_migration.png?v=1782803228",
              ],
              [
                "Web Hosters & ISPs",
                "Regional edge infrastructure for hosting platforms, connectivity and customer workloads.",
                "https://static.wixstatic.com/media/2c4ed2_03003d2956f34c8798234896bf2febeb~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/2c4ed2_03003d2956f34c8798234896bf2febeb~mv2.png",
              ],
              [
                "Retail & Hospitality",
                "Dependable infrastructure for POS, applications, customer systems and connected operations.",
                "https://exovantatech.com/_next/image?q=75&url=%2Fimages%2Fmanage-shops-indian.png&w=3840",
              ],
              [
                "Healthcare & Education",
                "Secure, scalable infrastructure for applications, data, digital services and distributed users.",
                "https://www.matasukhdevischool.com/Content/assets/images/class-room.jpg",
              ],
              [
                "Logistics, SaaS & Digital",
                "Low-latency infrastructure for software platforms, logistics systems, analytics and digital workloads.",
                "https://bechna.app/_astro/courier_warehouse_personnel_packages.BcIG4NAT_Z2nCbE4.webp",
              ],
              [
                "MSMEs",
                "Flexible infrastructure for growing businesses that need to scale without overbuilding.",
                "https://www.ibef.org/assets/images/MSME-Industry-2.jpg",
              ],
              [
                "Ecommerce",
                "Reliable compute, storage and connectivity for storefronts, payments and peak traffic.",
                "https://cdn.shopify.com/s/files/1/0841/2764/5978/files/inline2_q2_migration.png?v=1782803228",
              ],
              [
                "Web Hosters & ISPs",
                "Regional edge infrastructure for hosting platforms, connectivity and customer workloads.",
                "https://static.wixstatic.com/media/2c4ed2_03003d2956f34c8798234896bf2febeb~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/2c4ed2_03003d2956f34c8798234896bf2febeb~mv2.png",
              ],
              [
                "Retail & Hospitality",
                "Dependable infrastructure for POS, applications, customer systems and connected operations.",
                "https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1181729.jpg",
              ],
              [
                "Healthcare & Education",
                "Secure, scalable infrastructure for applications, data, digital services and distributed users.",
                "https://www.kayawell.com/Data/Practice/d8f65584-77da-44dc-8d3f-fdfe005971b3.jpg",
              ],
              [
                "Logistics, SaaS & Digital",
                "Low-latency infrastructure for software platforms, logistics systems, analytics and digital workloads.",
                "https://bechna.app/_astro/courier_warehouse_personnel_packages.BcIG4NAT_Z2nCbE.webp",
              ],
            ].map(([customer, message, image], index) => (
              <article
                className="customer-image-card"
                key={`${customer}-${index}`}
              >
                <img
                  src={image}
                  alt={`${customer} infrastructure`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="customer-image-card-content">
                  <span>{customer}</span>
                  <p>{message}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Why Datenfarmen Centers"
        title="What Makes Us Different"
        className="difference-section"
      >
        <p className="difference-tagline">
          Edge computing infrastructure with sustainability at its core.
        </p>
        <div className="difference-grid">
          {[
            [
              "Optimised Use of Power & Space",
              "We make smarter use of available power capacity and physical space, turning underused resources into productive infrastructure.",
              Monitor,
            ],
            [
              "Modular Infrastructure, Built for You",
              "Flexible, configurable infrastructure can be shaped around your workload today and expanded as your requirements grow.",
              Check,
            ],
            [
              "Flexible & Predictable Cost Plans",
              "Straightforward pricing options give customers flexibility to choose the infrastructure and commercial model that fits their needs.",
              Zap,
            ],
            [
              "Hybrid Renewable + Grid Power",
              "Combining renewable generation with dependable grid power creates a balanced, resilient and more sustainable energy model.",
              Sparkles,
            ],
            [
              "Transparent Pricing — No Surprise Add-ons",
              "We keep the commercial model clear so customers can understand what they are paying for without unexpected infrastructure add-on costs.",
              CircleHelp,
            ],
            [
              "Ultra-Low Latency Connectivity",
              "Strategically positioned infrastructure and strong network connectivity help applications communicate quickly with users, systems and businesses.",
              Network,
            ],
          ].map(([title, text, Icon]) => (
            <div className="difference-card" key={title}>
              <span className="difference-icon">
                <SafeIcon icon={Icon} size={23} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Full-Stack Platform"
        title="One Platform, Every Workload"
        className="products-section"
      >
        <p className="section-lead">
          Beyond colocation, Datenfarmen Centers runs a full cloud services
          platform — provision compute, storage, VPS or dedicated servers, and
          secure them, all from one trusted Indian provider.
        </p>
        <div className="solution-grid">
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
        <div className="center-link">
          <Link className="button secondary" to="/pricing">
            View Full Platform & Pricing
            <ArrowRight size={17} />
          </Link>
        </div>
      </Section>
      <Section
        eyebrow="Why Datenfarmen Centers"
        title="Built for Businesses That Can't Afford Downtime"
        muted
        className="why-section"
      >
        <p className="section-lead">
          Designed to scale with India's next wave of digital growth, from a
          single rack to a full cloud deployment.
        </p>
        <div className="feature-grid">
          {[
            [
              "Strategic Locations",
              "Facilities in Indore and Ankleshwar (GIDC) place us close to major industrial, commercial and logistics hubs across Central and Western India.",
              Globe2,
            ],
            [
              "2N Redundancy",
              "Electrical and mechanical systems are built with 2N redundancy, so planned maintenance and unexpected failures never take you offline.",
              Shield,
            ],
            [
              "Carrier-Neutral Connectivity",
              "Direct access to Airtel, Jio, BSNL and other carriers means you choose your network path instead of being locked to one provider.",
              Network,
            ],
            [
              "Sustainable by Design",
              "Energy-efficient cooling and a modular build approach reduce our environmental footprint as we scale capacity.",
              Zap,
            ],
            [
              "24/7 Expert Support",
              "Our on-site engineering and managed services teams monitor your infrastructure around the clock, every day of the year.",
              Monitor,
            ],
            [
              "Grows With You",
              "Start with a single rack or a VPS instance and scale up to dedicated suites or full cloud deployments without switching providers.",
              ArrowRight,
            ],
          ].map(([t, d, I]) => (
            <IconCard key={t} title={t} text={d} icon={I} />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Built to Global Standards"
        title="Our facilities and operational processes are engineered around internationally recognised data center best practices."
        className="standards-section"
      >
        <div className="standard-row">
          {[
            "2N Redundancy Design",
            "Carrier-Neutral Facility",
            "ISO-Aligned Processes",
            "24/7 NOC Monitoring",
            "Fire Safety Compliant",
          ].map((x) => (
            <div className="standard-pill" key={x}>
              <Check size={15} />
              {x}
            </div>
          ))}
        </div>
        <p className="note">
          Formal certification logos (ISO, SOC 2, etc.) will be added here as
          audits are completed.
        </p>
      </Section>
      <Section
        eyebrow="Client Feedback"
        title="Trusted by Growing Businesses"
        className="feedback-section"
      >
        <p className="section-lead">
          What our clients say about building on Datenfarmen Centers
          infrastructure.
        </p>
        <div className="client-feedback-marquee">
          <div className="quote-grid">
            {[
              [
                `Migrating our colocation racks to Datenfarmen's Indore facility cut our latency to regional customers significantly, and their support team is always reachable.`,
                `R`,
                `Regional IT Manager`,
                `Manufacturing Sector`,
              ],
              [
                `The managed cloud hosting plan let our small team ship features instead of managing servers. Onboarding was fast and transparent.`,
                `S`,
                `Startup Founder`,
                `SaaS Company`,
              ],
              [
                `Being located in the GIDC industrial belt made Ankleshwar the obvious choice for our industrial IoT deployment — low latency, close to our plant.`,
                `P`,
                `Operations Head`,
                `Chemical & Pharma`,
              ],
              [
                `The infrastructure gave our regional operations a scalable foundation without forcing us into a large upfront deployment.`,
                `A`,
                `Technology Lead`,
                `Regional Enterprise`,
              ],
              [
                `We needed reliable infrastructure close to our customers, and the edge model made the deployment easier to plan around our growth.`,
                `M`,
                `Founder`,
                `Digital Business`,
              ],
              [
                `The team understood our connectivity and compute requirements and helped us shape the infrastructure around the workload.`,
                `N`,
                `Infrastructure Manager`,
                `Technology Services`,
              ],
              [
                `Having infrastructure positioned closer to our operating region gives us a practical path to scale applications and services.`,
                `D`,
                `Operations Director`,
                `Logistics & Mobility`,
              ],
              [
                `The pay-as-you-grow approach gives our team flexibility to start with what we need and expand as demand increases.`,
                `K`,
                `Business Head`,
                `Growing MSME`,
              ],
            ].map((q, index) => (
              <div className="quote-card" key={`${q[1]}-${index}`}>
                <div className="quote-mark">“</div>
                <p>"{q[0]}"</p>
                <div className="quote-meta">
                  <span>{q[1]}</span>
                  <div>
                    <strong>{q[2]}</strong>
                    <small>{q[3]}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="note">
          Representative feedback based on client engagements. Case studies
          available on request.
        </p>
      </Section>
      <FAQSection />
      <Section eyebrow="Leadership" title="Led By Industry Experience">
        <div className="leadership">
          <img
            src="https://datenfarmen.com/vishal.png"
            alt="Vishal Patel - CEO"
          />
          <div>
            <span className="eyebrow">CEO & Founder</span>
            <h3>Vishal Patel</h3>
            <p>
              Leading Datenfarmen's strategic expansion across India's
              fastest-growing industrial and commercial hubs, with a focus on
              reliable, sustainable digital infrastructure.
            </p>
            <Link className="button secondary" to="/about">
              Meet the Full Team
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </Section>
      <CTA
        title="Unlock the Power of Datenfarmen Centers For Your Business"
        body="Connect with our experts today to design the right mix of colocation, cloud, VPS or dedicated infrastructure for your workload — and get a tailored quote."
      />
      {/* <button
        className="assistant-trigger"
        onClick={onChat}
        aria-label="Open Datenfarmen Assistant"
      >
        <CircleHelp size={18} />
        <span>Datenfarmen Assistant</span>
      </button> */}
    </>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  // One important question from each of the seven FAQ sections in the supplied FAQ document.
  const faqs = [
    [
      "What is Datenfarmen Centers?",
      "Datenfarmen Centers is building a distributed network of edge data centers designed to bring cloud, compute, storage, connectivity and managed infrastructure closer to businesses and users. Our focus is on Tier-3, Tier-4 and underserved locations in India, enabling businesses to access reliable digital infrastructure without depending entirely on distant metropolitan data centers.",
    ],
    [
      "What services does Datenfarmen Centers provide?",
      "Depending on location and customer requirements, our services include colocation, dedicated infrastructure, virtual machines, compute, cloud storage, backup and disaster recovery, networking, connectivity, security and managed infrastructure services. We also work with technology partners to provide cloud and AI infrastructure closer to regional customers.",
    ],
    [
      "How is Datenfarmen Centers different from a traditional data center?",
      "Traditional large data centers are typically concentrated around major metropolitan locations. Datenfarmen Centers follows a distributed edge model, bringing infrastructure closer to regional businesses and end users. Our model focuses on local accessibility, flexible capacity, lower-latency architecture, pay-as-you-grow deployment and infrastructure suited to regional markets.",
    ],
    [
      "How is the data center powered?",
      "The ANK-1 infrastructure is being designed around a combination of grid power, solar energy and Battery Energy Storage Systems (BESS). The objective is to improve energy resilience while reducing dependence on a single source of power.",
    ],
    [
      "Where will my data be stored?",
      "For workloads deployed at ANK-1, customer data can be hosted locally in Ankleshwar, Gujarat, India, subject to the selected architecture, backup arrangement and contracted services. Customers requiring specific data-residency arrangements can discuss these requirements with our technical team.",
    ],
    [
      "Can I connect Datenfarmen Centers infrastructure to my existing cloud?",
      "Yes. Hybrid architectures can be developed to connect local edge infrastructure with existing public cloud, private cloud or enterprise environments. This can allow selected workloads to operate locally while other applications remain in larger cloud or metropolitan data centers.",
    ],
    [
      "How do I know what infrastructure my business needs?",
      "You do not need to know the exact server or data-center configuration before contacting us. Share your application, number of users, storage requirement, expected traffic, current infrastructure and business objectives. Our team can help determine an appropriate compute, storage, connectivity and backup configuration.",
    ],
  ];

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="faq-heading">
          <span className="faq-kicker">Datenfarmen Centers</span>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-lead">
            Clear answers about our infrastructure, services, operations and how
            Datenfarmen can support your business.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-question-text">{question}</span>
                  <span className="faq-icon">
                    <ChevronDown size={20} />
                  </span>
                </button>
                <div className="faq-answer-wrap">
                  <div className="faq-answer">{answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
