import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Cloud,
  Database,
  ExternalLink,
  FileText,
  Globe2,
  Menu,
  Monitor,
  Network,
  Send,
  Server,
  Shield,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import "./styles2.css";

const NAV = [
  ["Home", "/"],
  ["About", "/about"],
  ["Solutions", "/solutions"],
  ["Locations", "/locations"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
  ["Console", "/console"],
];
const SOLUTIONS = [
  {
    name: "Cloud Services",
    path: "/cloud-services",
    icon: Cloud,
    desc: "Single-tenant & multi-tenant solutions, bare-metal servers, and cloud management.",
  },
  {
    name: "VPS Hosting",
    path: "/vps-hosting",
    icon: Server,
    desc: "Dedicated-resource virtual private servers on Linux or Windows, live in minutes.",
  },
  {
    name: "Dedicated Servers",
    path: "/dedicated-servers",
    icon: Database,
    desc: "Single-tenant physical hardware for peak, predictable performance.",
  },
  {
    name: "Email Hosting",
    path: "/email-hosting",
    icon: Send,
    desc: "Enterprise-grade business email — from custom-domain mail to hosted Exchange.",
  },
  {
    name: "Networking & Security",
    path: "/network-security",
    icon: Shield,
    desc: "Firewalls, DDoS protection, VPN, VPC and private connectivity.",
  },
  {
    name: "Managed Services",
    path: "/managed-services",
    icon: Monitor,
    desc: "24/7 monitoring and support for OS, database, network, and security management.",
  },
  {
    name: "Data Protection",
    path: "/data-protection",
    icon: Database,
    desc: "Disaster Recovery, Backup & Recovery, and Object Storage with high security.",
  },
  {
    name: "Interconnection",
    path: "/interconnection",
    icon: Network,
    desc: "Carrier connectivity, cross-connects, and Cloud-On-Ramp solutions.",
  },
  {
    name: "Edge Colocation",
    path: "/edge-colocation",
    icon: Zap,
    desc: "Ultra-low latency infrastructure supporting AI, IoT, and critical applications.",
  },
];
const DATA_CENTER_IMAGES = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Datacenter_Server_Racks_(22370909788).jpg",
    alt: "Rows of server racks inside a modern data center",
    credit: "Server racks · Wikimedia Commons · CC BY 2.0",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/CSIRO_ScienceImage_2042_A_row_of_computer_servers_in_a_server_rack.jpg",
    alt: "Computer servers installed in data center racks",
    credit: "Server infrastructure · CSIRO / Wikimedia Commons · CC BY 3.0",
  },
];

const commonFooter = {
  tagline:
    "Building the foundation for India's digital future with reliable, scalable, and sustainable data ecosystems.",
  address: "Ankleshwar, Gujarat, India",
  email: "info@datenfarmen.com",
};

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <SiteShell />
    </BrowserRouter>
  );
}
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}
function SiteShell() {
  const [mobile, setMobile] = useState(false);
  const [chat, setChat] = useState(false);
  return (
    <div className="app">
      <Header mobile={mobile} setMobile={setMobile} />
      <Routes>
        <Route path="/" element={<Home onChat={() => setChat(true)} />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/console" element={<Console />} />
        {SOLUTIONS.map((s) => (
          <Route key={s.path} path={s.path} element={<ServicePage />} />
        ))}
        <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
        <Route path="/terms-conditions" element={<LegalPage type="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ChatBubble open={chat} setOpen={setChat} />
    </div>
  );
}

function Header({ mobile, setMobile }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const loc = useLocation();
  const solutionsRef = useRef(null);

  useEffect(() => setMobile(false), [loc.pathname]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSolutionsOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Datenfarmen Centers home">
          <img className="brand-logo" src="/logo-mark.png" alt="Datenfarmen Centers LLP logo" />
          <span className="brand-text">
            <strong>DATENFARMEN</strong>
            <em>CENTERS LLP</em>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV.map(([label, path]) => (
            <div
              key={path}
              className={label === "Solutions" ? "nav-parent" : ""}
              ref={label === "Solutions" ? solutionsRef : undefined}
              onMouseEnter={label === "Solutions" ? () => setSolutionsOpen(true) : undefined}
              onMouseLeave={label === "Solutions" ? () => setSolutionsOpen(false) : undefined}
            >
              {label === "Solutions" ? (
                <button
                  className={
                    "nav-link " +
                    (loc.pathname.startsWith("/solutions") ||
                    SOLUTIONS.some((s) => loc.pathname === s.path)
                      ? "active"
                      : "")
                  }
                  onClick={() => setSolutionsOpen((v) => !v)}
                  aria-expanded={solutionsOpen}
                >
                  Solutions <ChevronDown size={15} />
                </button>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    "nav-link " + (isActive ? "active" : "")
                  }
                >
                  {label}
                </NavLink>
              )}
              {label === "Solutions" && (
                <div className={"mega-menu " + (solutionsOpen ? "open" : "")} aria-hidden={!solutionsOpen}>
                  {SOLUTIONS.map((s) => {
                    const I = s.icon;
                    return (
                      <Link key={s.path} to={s.path} className="mega-item">
                        <span className="icon-chip">
                          <I size={16} />
                        </span>
                        <span>
                          <strong>{s.name}</strong>
                          <small>{s.desc}</small>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="button small secondary" to="/contact">
            Get a Consultation
          </Link>
          <button
            className="icon-button mobile-toggle"
            aria-label="Open navigation"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobile && (
        <div className="mobile-menu">
          <div className="container mobile-menu-inner">
            {NAV.filter(([l]) => l !== "Solutions").map(([label, path]) => (
              <NavLink key={path} to={path} className="mobile-link">
                {label}
              </NavLink>
            ))}
            <div className="mobile-solutions-title">Solutions</div>
            {SOLUTIONS.map((s) => (
              <Link key={s.path} to={s.path} className="mobile-link nested">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const quickLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Solutions", "/solutions"],
    ["Locations", "/locations"],
    ["Pricing", "/pricing"],
    ["Contact", "/contact"],
  ];

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand-col">
          <Link to="/" className="brand footer-brand">
            <img className="brand-logo" src="/logo-mark.png" alt="Datenfarmen Centers LLP logo" />
            <span className="brand-text">
              <strong>DATENFARMEN</strong>
              <em>CENTERS LLP</em>
            </span>
          </Link>
          <p>{commonFooter.tagline}</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <div className="footer-link-list">
            {quickLinks.map(([label, path]) => (
              <Link key={path} to={path}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>Our Solutions</h4>
          <div className="footer-link-list">
            {SOLUTIONS.map((s) => (
              <Link key={s.path} to={s.path}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>{commonFooter.address}</p>
          <a href="mailto:info@datenfarmen.com">{commonFooter.email}</a>
          <Newsletter />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Datenfarmen Centers LLP. All Rights Reserved.</span>
        <span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </span>
      </div>
    </footer>
  );
}
function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  function submit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("Thanks — your email is ready to be submitted.");
    setEmail("");
  }
  return (
    <form className="newsletter" onSubmit={submit}>
      <label htmlFor="newsletter">Newsletter</label>
      <div>
        <input
          id="newsletter"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          type="email"
          required
        />
        <button aria-label="Subscribe">
          <Send size={15} />
        </button>
      </div>
      {status && <small>{status}</small>}
    </form>
  );
}

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

function Section({ eyebrow, title, children, muted = false, className = "" }) {
  return (
    <section
      className={"section " + (muted ? "section-muted " : "") + className}
    >
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

function IconCard({ icon: Icon, title, text }) {
  return (
    <div className="card icon-card">
      <span className="icon-chip large">
        <Icon size={20} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function CTA({ title, body, button = "Talk to an Expert" }) {
  return (
    <section className="cta-wrap">
      <div className="container">
        <div className="cta">
          <div>
            <span className="eyebrow">Datenfarmen</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <Link className="button primary" to="/contact">
            {button}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Home({ onChat }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Future-ready infrastructure</span>
            <h1>Future-Proof Data Infrastructure</h1>
            <p className="lead">
              Powering digital transformation and sustainable growth in India's
              fastest-growing regions — from colocation racks to full-stack
              cloud, VPS, dedicated servers and managed security.
            </p>
            <div className="hero-actions">
              <Link className="button primary" to="/contact">
                Get a Consultation
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
              src="/hero-future-proof.png"
              alt="Future-proof data infrastructure connecting cloud, industry, healthcare, logistics, education and business"
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
              <h2>Built around resilient, modern data center infrastructure.</h2>
            </div>
            <p>
              A visual look at the server environments and high-density infrastructure that inspire our enterprise-first approach.
            </p>
          </div>
          <div className="showcase-grid">
            {DATA_CENTER_IMAGES.map((image, index) => (
              <figure
                className={index === 0 ? "showcase-image showcase-image-large" : "showcase-image"}
                key={image.src}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  referrerPolicy="no-referrer"
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
          From growing local businesses to digital-first enterprises, our infrastructure is designed to support the workloads that keep modern organisations moving.
        </p>
        <div className="customer-pill-grid">
          {[
            "MSMEs", "Web hosters", "ISPs", "Retail", "Restaurants", "Hotels",
            "Clinics", "Schools", "Logistics", "Ecommerce", "Developers & SaaS",
            "FinTech", "EdTech", "Local enterprises",
          ].map((customer) => (
            <span className="customer-pill" key={customer}>{customer}</span>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Why Datenfarmen"
        title="What Makes Us Different"
        className="difference-section"
      >
        <p className="difference-tagline">Edge computing infrastructure with sustainability at its core.</p>
        <div className="difference-grid">
          {[
            ["Optimised Use of Power & Space", "We make smarter use of available power capacity and physical space, turning underused resources into productive infrastructure.", Monitor],
            ["Modular Infrastructure, Built for You", "Flexible, configurable infrastructure can be shaped around your workload today and expanded as your requirements grow.", Check],
            ["Flexible & Predictable Cost Plans", "Straightforward pricing options give customers flexibility to choose the infrastructure and commercial model that fits their needs.", Zap],
            ["Hybrid Renewable + Grid Power", "Combining renewable generation with dependable grid power creates a balanced, resilient and more sustainable energy model.", Sparkles],
            ["Transparent Pricing — No Surprise Add-ons", "We keep the commercial model clear so customers can understand what they are paying for without unexpected infrastructure add-on costs.", CircleHelp],
            ["Ultra-Low Latency Connectivity", "Strategically positioned infrastructure and strong network connectivity help applications communicate quickly with users, systems and businesses.", Network],
          ].map(([title, text, Icon]) => (
            <div className="difference-card" key={title}>
              <span className="difference-icon"><Icon size={23} /></span>
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
          Beyond colocation, Datenfarmen runs a full cloud services platform —
          provision compute, storage, VPS or dedicated servers, and secure them,
          all from one trusted Indian provider.
        </p>
        <div className="solution-grid">
          {SOLUTIONS.map((s) => (
            <Link to={s.path} key={s.path} className="solution-card">
              <span className="icon-chip large">
                <s.icon size={21} />
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
        eyebrow="Why Datenfarmen"
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
      <Section eyebrow="Client Feedback" title="Trusted by Growing Businesses">
        <p className="section-lead">
          What our clients say about building on Datenfarmen infrastructure.
        </p>
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
          ].map((q) => (
            <div className="quote-card" key={q[1]}>
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
        <p className="note">
          Representative feedback based on client engagements. Case studies
          available on request.
        </p>
      </Section>
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
        title="Unlock the Power of Datenfarmen For Your Business"
        body="Connect with our experts today to design the right mix of colocation, cloud, VPS or dedicated infrastructure for your workload — and get a tailored quote."
      />
      <button
        className="assistant-trigger"
        onClick={onChat}
        aria-label="Open Datenfarmen Assistant"
      >
        <CircleHelp size={18} />
        <span>Datenfarmen Assistant</span>
      </button>
    </>
  );
}

function About() {
  const [activeTab, setActiveTab] = useState("Company");
  const [job, setJob] = useState(null);

  const tabs = ["Company", "Leadership", "Innovation", "Careers"];

  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About Datenfarmen"
        description="Building the foundation for India's digital future."
      />

      <Section>
        <div
          className="tabs static-tabs"
          role="tablist"
          aria-label="About Datenfarmen sections"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="about-tab-content">
          {activeTab === "Company" && (
            <div role="tabpanel">
              <p className="company-sustainability">
                Combining solar energy with grid power in a hybrid system enhances long-term <strong>sustainability</strong> by seamlessly balancing renewable generation with reliable utility backup.
              </p>
              <div className="feature-grid four">
                {[
                  [
                    "Innovation Leadership",
                    "Pioneering data management with cutting-edge R&D, staying ahead of digital landscape demands.",
                    Sparkles,
                  ],
                  [
                    "Security & Compliance",
                    "Multilayered physical and cyber security protocols meeting highest international standards.",
                    Shield,
                  ],
                  [
                    "Sustainability Commitment",
                    "Energy-efficient technologies and renewable power sources minimize environmental impact.",
                    Zap,
                  ],
                  [
                    "Scalable Solutions",
                    "Flexible infrastructure from individual racks to dedicated suites, growing with your business.",
                    ArrowRight,
                  ],
                ].map(([t, d, I]) => (
                  <IconCard key={t} title={t} text={d} icon={I} />
                ))}
              </div>
            </div>
          )}

          {activeTab === "Leadership" && (
            <div role="tabpanel">
              <div className="leadership">
                <img
                  src="https://datenfarmen.com/vishal.png"
                  alt="Vishal Patel - CEO"
                />
                <div>
                  <h3>Vishal Patel</h3>
                  <span className="eyebrow">CEO & Founder</span>
                  <p>
                    "Leading the strategic expansion in India's growth hubs."
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Innovation" && (
            <div role="tabpanel">
              <Section eyebrow="Future-Ready Infrastructure" title="">
                <p className="section-lead">
                  At Datenfarmen, innovation isn't just a buzzword; it's our
                  architectural philosophy. We utilize a modular data center
                  design where equipment failure has minimal impact due to quick
                  failover capabilities.
                </p>
                <div className="bullet-columns">
                  <ul>
                    <li>
                      Edge Colocation: Ultra-low latency infrastructure
                      supporting AI & IoT.
                    </li>
                    <li>
                      Standardized Concept: All data centers use the same proven
                      design for reliability.
                    </li>
                    <li>
                      High Density Ready: Racks designed for 2-2.5 KW density to
                      support modern computing.
                    </li>
                  </ul>
                </div>
              </Section>
            </div>
          )}

          {activeTab === "Careers" && (
            <div role="tabpanel">
              <Section muted>
                <h2>Join Our Mission</h2>
                <p className="section-lead">
                  We are always looking for talented individuals to help us
                  build the future of data infrastructure.
                </p>
                <div className="jobs-grid">
                  {[
                    ["Network Engineer", "Indore, India (On-site)"],
                    ["Facility Manager", "Ankleshwar, India (On-site)"],
                    ["Sales Executive (B2B)", "Remote / Hybrid"],
                  ].map(([t, l]) => (
                    <div className="job-card" key={t}>
                      <div>
                        <h3>{t}</h3>
                        <p>{l}</p>
                      </div>
                      <div className="job-actions">
                        <button
                          className="button ghost"
                          onClick={() => setJob({ t, l, apply: false })}
                        >
                          View Details
                        </button>
                        <button
                          className="button secondary"
                          onClick={() => setJob({ t, l, apply: true })}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          )}
        </div>
      </Section>

      {job && (
        <Modal
          onClose={() => setJob(null)}
          title={job.apply ? "Apply for Position" : job.t}
        >
          {job.apply ? (
            <CareerForm
              title={job.t}
              location={job.l}
              onDone={() => setJob(null)}
            />
          ) : (
            <>
              <p>
                <strong>Job Title</strong> {job.t}
              </p>
              <p>
                <strong>Location</strong> {job.l}
              </p>
              <button
                className="button primary"
                onClick={() => setJob({ ...job, apply: true })}
              >
                Apply for this Position
              </button>
            </>
          )}
        </Modal>
      )}
    </>
  );
}

function CareerForm({ title, location, onDone }) {
  const [done, setDone] = useState(false);
  function submit(e) {
    e.preventDefault();
    setDone(true);
  }
  if (done)
    return (
      <div className="success">
        <Check size={22} />
        <h3>Application ready</h3>
        <p>
          Your details have been captured in this frontend flow. Connect the
          current production form endpoint through{" "}
          <code>VITE_CAREERS_FORM_ENDPOINT</code> to submit it to the live
          backend.
        </p>
        <button className="button primary" onClick={onDone}>
          Close
        </button>
      </div>
    );
  return (
    <form className="form-grid" onSubmit={submit}>
      <p className="form-intro">Submit your details below to join our team.</p>
      <Field label="Full Name *" placeholder="John Doe" required />
      <Field
        label="Email Address *"
        placeholder="john@example.com"
        type="email"
        required
      />
      <Field label="Phone Number *" placeholder="+91 98765 43210" required />
      <Field label="Resume/CV * (PDF/DOC)" type="file" required />
      <Field label="Cover Letter (Optional)" type="file" />
      <Field label="Message (Optional)" area />
      <button className="button primary" type="submit">
        Submit Application
        <Send size={17} />
      </button>
    </form>
  );
}
function Field({
  label,
  placeholder,
  type = "text",
  required = false,
  area = false,
  value,
  onChange,
}) {
  return (
    <label className="field">
      <span>{label}</span>
      {area ? (
        <textarea placeholder={placeholder} value={value} onChange={onChange} />
      ) : (
        <input
          placeholder={placeholder}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </label>
  );
}

function Solutions() {
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
                <s.icon size={21} />
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

function Locations() {
  const locations = [
    {
      phase: "Phase 1",
      code: "ANK-1",
      name: "Ankleshwar, Gujarat",
      status: "Phase 1",
      statusClass: "phase",
      image: "/ankleshwar-plant.jpg",
      imageAlt: "Ankleshwar data center facility layout from the company presentation",
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
        ["Power", "230V single phase, 50Hz"],
        ["Redundancy", "N+1 for critical systems"],
        ["Cooling", "Advanced cooling and rack configuration"],
      ],
      highlights: [
        ["Vibrant Ecosystem", "Central industrial and commercial hub for chemical, pharmaceutical and manufacturing industries."],
        ["Seamless Interconnection", "Road and rail connectivity through NH-48 and Ankleshwar Junction supports key business corridors."],
        ["Proximity to Customers", "Strategically positioned for rapid service delivery across South Gujarat."],
      ],
    },
    {
      phase: "Phase 2",
      code: "IND-1",
      name: "Indore, Madhya Pradesh",
      status: "Live",
      statusClass: "live",
      image: "/indore-facility.png",
      imageAlt: "Indore data center facility concept from the company presentation",
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
        ["Power", "230V single phase, 50Hz"],
        ["Redundancy", "2N for critical systems"],
        ["Cooling", "Advanced cooling and rack configuration"],
      ],
      highlights: [
        ["Vibrant Ecosystem", "A dynamic Central Indian business ecosystem spanning manufacturing, pharma, logistics, IT and digital enterprises."],
        ["Seamless Interconnection", "National highways, rail infrastructure and airport access support efficient regional interconnection."],
        ["Proximity to Customers", "Strategically positioned to support demand across Madhya Pradesh and adjoining markets."],
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
              Explore the current and planned facilities supporting businesses across Western and Central India. Each location combines practical site design, scalable IT capacity and regional connectivity.
            </p>
          </div>

          <div className="location-stack">
            {locations.map((location) => (
              <article className="location-modern-card" key={location.code}>
                <div className="location-modern-media">
                  <img src={location.image} alt={location.imageAlt} loading="lazy" />
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
                    <span className={`status ${location.statusClass}`}>{location.status}</span>
                  </div>

                  <p className="location-modern-intro">{location.intro}</p>

                  <div className="location-info-grid">
                    <div className="location-info-panel">
                      <div className="location-panel-icon"><Monitor size={18} /></div>
                      <div>
                        <h3>Site Overview</h3>
                        <ul className="compact-list">
                          {location.site.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="location-info-panel">
                      <div className="location-panel-icon"><Network size={18} /></div>
                      <div>
                        <h3>ISP &amp; Connectivity</h3>
                        <ul className="compact-list">
                          {location.connectivity.map((item) => <li key={item}>{item}</li>)}
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
              <p>Our location strategy brings dependable infrastructure closer to growing businesses, regional customers and critical workloads.</p>
            </div>
            <Link className="button primary" to="/contact">
              Discuss Your Location Needs <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SpecTable({ rows }) {
  return (
    <table className="spec-table">
      <tbody>
        {rows.map((r) => (
          <tr key={r[0]}>
            <th>{r[0]}</th>
            <td>{r[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const PRICING_TABS = [
  { id: "cloud", label: "Cloud Compute", icon: Cloud },
  { id: "vps", label: "VPS, Dedicated & Email", icon: Server },
  { id: "data", label: "Data & Connectivity", icon: Network },
  { id: "storage", label: "Cloud Storage", icon: Database },
  { id: "colo", label: "Colocation Plans", icon: Monitor },
  { id: "addons", label: "Add-ons & Utilities", icon: Sparkles },
  { id: "solar", label: "Solar Advantage", icon: Zap },
];

const EDGE_PLANS = [
  {
    name: "Edge Micro",
    desc: "Small sites, dev & staging workloads",
    price: "₹899",
    transfer: "250 GB",
    featured: true,
  },
  {
    name: "Edge Starter",
    desc: "Growing apps and small business sites",
    price: "₹1,499",
    transfer: "500 GB",
  },
  {
    name: "Edge Business",
    desc: "Production workloads for SMEs",
    price: "₹2,999",
    transfer: "1 TB",
  },
  {
    name: "Edge Professional",
    desc: "High-traffic apps & multi-service stacks",
    price: "₹5,999",
    transfer: "2 TB",
  },
  {
    name: "Edge Scale",
    desc: "Compute, agencies & platforms",
    price: "₹10,999",
    transfer: "4 TB",
  },
];

const VPS_GROUPS = [
  {
    title: "VPS Hosting",
    subtitle:
      "Guaranteed-resource virtual private servers on Linux or Windows.",
    plans: [
      {
        name: "Linux VPS – Starter",
        desc: "2 vCPU · 4 GB RAM · 80 GB NVMe",
        price: "₹999",
        features: [
          "2 dedicated vCPU cores",
          "4 GB guaranteed RAM",
          "80 GB NVMe SSD storage",
          "Full root/SSH access",
        ],
      },
      {
        name: "Linux VPS – Business",
        desc: "4 vCPU · 8 GB RAM · 160 GB NVMe",
        price: "₹1,999",
        featured: true,
        features: [
          "4 dedicated vCPU cores",
          "8 GB guaranteed RAM",
          "160 GB NVMe SSD storage",
          "Full root/SSH access",
        ],
      },
      {
        name: "Windows VPS – Starter",
        desc: "2 vCPU · 4 GB RAM · 80 GB SSD+",
        price: "₹1,799",
        features: [
          "2 dedicated vCPU cores",
          "4 GB guaranteed RAM",
          "Licensed Windows Server included",
          "RDP administrator access",
        ],
      },
      {
        name: "Managed VPS Add-on",
        desc: "Add to any VPS plan above",
        price: "₹999",
        features: [
          "OS hardening & patch management",
          "24x7 monitoring & alerting",
          "Named support contact",
        ],
      },
    ],
  },
  {
    title: "Dedicated Servers",
    subtitle: "Single-tenant physical hardware, single or dual processor.",
    plans: [
      {
        name: "Single Processor",
        desc: "1x CPU · up to 128 GB RAM · RAID storage",
        price: "₹8,999",
        features: [
          "Single-socket dedicated CPU",
          "Configurable RAM & RAID storage",
          "Full root/admin access",
          "Out-of-band remote management",
        ],
      },
      {
        name: "Dual Processor",
        desc: "2x CPU · up to 512 GB RAM · RAID storage",
        price: "₹17,999",
        featured: true,
        features: [
          "Dual-socket high core count",
          "High-throughput RAID storage",
          "Dedicated high-bandwidth NIC",
          "Priority remote-hands support",
        ],
      },
      {
        name: "Managed Dedicated Add-on",
        desc: "Add to any dedicated server above",
        price: "₹2,499",
        features: [
          "Full OS hardening & patching",
          "24x7 infrastructure monitoring",
          "Named support contact",
        ],
      },
    ],
  },
  {
    title: "Email Hosting",
    subtitle:
      "Custom-domain business email up to fully hosted Exchange & Office 365.",
    plans: [
      {
        name: "Business Email (cPanel)",
        desc: "Per mailbox, custom domain",
        price: "₹99",
        unit: "/mailbox/month",
        features: [
          "Custom-domain mailbox",
          "Webmail, IMAP/SMTP access",
          "Spam & malware filtering",
        ],
      },
      {
        name: "Zimbra Business Email",
        desc: "Per mailbox, per-seat license fee",
        price: "₹79",
        unit: "/mailbox/month",
        featured: true,
        features: [
          "Open-source, no license fees",
          "Calendar & contacts sync",
          "Mobile device support",
        ],
      },
      {
        name: "Hosted Exchange",
        desc: "Per mailbox, enterprise-grade",
        price: "₹249",
        unit: "/mailbox/month",
        features: [
          "Full Microsoft Exchange feature set",
          "Calendar & contact sync",
          "Mobile device support",
        ],
      },
      {
        name: "Office 365 Mail Hosting",
        desc: "Per mailbox, incl. admin & setup",
        price: "₹299",
        unit: "/mailbox/month",
        features: [
          "Office 365 integration",
          "Migration & setup assistance",
          "Ongoing admin & license management",
        ],
      },
    ],
  },
];

const STORAGE_PLANS = [
  {
    name: "Business Drive 500",
    desc: "500 GB storage for up to 5 users",
    price: "₹1,499",
    features: [
      "500 GB allocated storage",
      "Up to 5 user seats",
      "Expandable in 100 GB / 1 TB increments",
    ],
  },
  {
    name: "Business Drive 1TB",
    desc: "1 TB storage for up to 10 users",
    price: "₹2,499",
    features: [
      "1 TB allocated storage",
      "Up to 10 user seats",
      "Expandable in 100 GB / 1 TB increments",
    ],
  },
  {
    name: "Business Drive 2TB",
    desc: "2 TB storage for up to 20 users",
    price: "₹4,499",
    featured: true,
    features: [
      "2 TB allocated storage",
      "Up to 20 user seats",
      "Expandable in 100 GB / 1 TB increments",
    ],
  },
  {
    name: "Business Drive 5TB",
    desc: "5 TB storage for up to 30 users",
    price: "₹9,999",
    features: [
      "5 TB allocated storage",
      "Up to 30 user seats",
      "Expandable in 100 GB / 1 TB increments",
    ],
  },
  {
    name: "Business Drive 10TB",
    desc: "10 TB storage for up to 50 users",
    price: "₹17,999",
    features: [
      "10 TB allocated storage",
      "Up to 50 user seats",
      "Expandable in 100 GB / 1 TB increments",
    ],
  },
];

const COLO_PLANS = [
  {
    name: "Plan A: Wholesale / Anchor Tenant",
    desc: "Hyperscalers, ISPs & large enterprises taking full facility capacity (150 kW)",
    price: "₹8,000",
    suffix: "/ kW",
    sub: "+ ₹3.5 / Unit variable power",
    features: [
      "Full infrastructure control",
      "High physical customization",
      "Fully usage-based power allocation",
    ],
  },
  {
    name: "Plan B: Retail Co-Location",
    desc: "Local SMEs, web hosters & growing digital agencies",
    price: "₹3,500",
    suffix: "/ kW",
    sub: "+ ₹12.0 / Unit variable power",
    featured: true,
    badge: "POPULAR ENTRY POINT",
    features: [
      "Pay-per-rack format",
      "Minimal upfront commitment",
      "Low entry cost for rapid deployment",
    ],
  },
  {
    name: "Plan C: Managed Premium",
    desc: "Corporate & government clients seeking fixed operational envelopes",
    price: "₹14,000",
    suffix: "/ kW",
    sub: "+ ₹0 / Unit (all-inclusive) variable power",
    features: [
      "Maximum budget predictability",
      "Fully managed premium services",
      "Zero operational risk",
    ],
  },
];

const ADDON_ROWS = [
  [
    "Rack Space & Colocation",
    "Standard commercial baseline tariff",
    "₹15,000 / kW / month",
  ],
  [
    "Server & Network Infrastructure",
    "Phased blocks, up to 5 blocks per site",
    "₹80,000 / 10 kW block / month",
  ],
  [
    "Physical Security Services",
    "Remote monitoring, biometric logging, on-site security",
    "₹10,000 / month (flat)",
  ],
  ["Additional IPv4 Address", "Per address", "₹250 / month"],
  [
    "Online Data Migration",
    "Network-based transfer into our nodes",
    "₹2,500 / TB",
  ],
  [
    "Physical Data Ingestion",
    "Bulk transfer via physical drive arrays",
    "₹1,000 / TB",
  ],
  ["Cloud Firewall", "Managed, rule-based edge firewall", "₹1,500 / month"],
  ["DDoS Protection", "Always-on volumetric & L7 mitigation", "₹2,500 / month"],
  [
    "Load Balancer",
    "L4/L7 traffic distribution, health checks",
    "₹1,999 / month",
  ],
  [
    "Site-to-Site / Remote-Access VPN",
    "Encrypted IPSEC/SSL connectivity",
    "₹1,200 / month",
  ],
  [
    "VPC (Virtual Private Cloud)",
    "Isolated network with custom subnetting",
    "₹999 / month",
  ],
  ["Reserve IP (IPv4/IPv6)", "Static, dedicated IP address", "₹250 / month"],
  ["DNS Manager", "Managed DNS with fast global propagation", "₹499 / month"],
];

const DATA_ROWS = {
  dedicated: [
    ["DF 100", "100 Mbps", "130 Mbps", "₹12,500", "₹1,25,000"],
    ["DF 200", "200 Mbps", "260 Mbps", "₹25,000", "₹2,50,000"],
    ["DF 300", "300 Mbps", "390 Mbps", "₹37,500", "₹3,75,000"],
    ["DF 400", "400 Mbps", "520 Mbps", "₹50,000", "₹5,00,000"],
    ["DF 500", "500 Mbps", "650 Mbps", "₹62,500", "₹6,25,000"],
    ["DF 600", "600 Mbps", "780 Mbps", "₹75,000", "₹7,50,000"],
    ["DF 700", "700 Mbps", "910 Mbps", "₹87,500", "₹8,75,000"],
    ["DF 800", "800 Mbps", "1,040 Mbps", "₹1,00,000", "₹10,00,000"],
    ["DF 900", "900 Mbps", "1,170 Mbps", "₹1,12,500", "₹11,25,000"],
    [
      "DF 1000",
      "1 Gbps (1000 Mbps)",
      "1.3 Gbps (1300 Mbps)",
      "₹1,25,000",
      "₹12,50,000",
    ],
  ],
  shared: [
    ["SF 100", "100 Mbps", "130 Mbps", "₹4,990", "₹49,900"],
    ["SF 200", "200 Mbps", "260 Mbps", "₹9,990", "₹99,900"],
    ["SF 300", "300 Mbps", "390 Mbps", "₹14,990", "₹1,49,900"],
    ["SF 400", "400 Mbps", "520 Mbps", "₹19,990", "₹1,99,900"],
    ["SF 500", "500 Mbps", "650 Mbps", "₹24,990", "₹2,49,900"],
    ["SF 600", "600 Mbps", "780 Mbps", "₹29,990", "₹2,99,900"],
    ["SF 700", "700 Mbps", "910 Mbps", "₹34,990", "₹3,49,900"],
    ["SF 800", "800 Mbps", "1,040 Mbps", "₹39,990", "₹3,99,900"],
    ["SF 900", "900 Mbps", "1,170 Mbps", "₹44,990", "₹4,49,900"],
    [
      "SF 1000",
      "1 Gbps (1000 Mbps)",
      "1.3 Gbps (1300 Mbps)",
      "₹49,990",
      "₹4,99,900",
    ],
  ],
  pure: [
    ["PD 100", "100 Mbps", "130 Mbps", "₹2,990", "₹20,900"],
    ["PD 200", "200 Mbps", "260 Mbps", "₹5,990", "₹59,900"],
    ["PD 300", "300 Mbps", "390 Mbps", "₹8,990", "₹89,900"],
    ["PD 400", "400 Mbps", "520 Mbps", "₹11,990", "₹1,19,900"],
    ["PD 500", "500 Mbps", "650 Mbps", "₹14,990", "₹1,49,900"],
    ["PD 600", "600 Mbps", "780 Mbps", "₹17,990", "₹1,79,900"],
    ["PD 700", "700 Mbps", "910 Mbps", "₹20,990", "₹2,09,900"],
    ["PD 800", "800 Mbps", "1,040 Mbps", "₹23,990", "₹2,39,900"],
    ["PD 900", "900 Mbps", "1,170 Mbps", "₹26,990", "₹2,69,900"],
    [
      "PD 1000",
      "1 Gbps (1000 Mbps)",
      "1.3 Gbps (1300 Mbps)",
      "₹29,990",
      "₹2,99,900",
    ],
  ],
};

function PricingPlanCard({ plan }) {
  return (
    <article
      className={`pricing-plan-card ${plan.featured ? "is-featured" : ""}`}
    >
      {plan.featured && (
        <span className="plan-badge">{plan.badge || "MOST CHOSEN"}</span>
      )}
      <div className="plan-card-top">
        <div>
          <h3>{plan.name}</h3>
          <p>{plan.desc}</p>
        </div>
        {plan.featured && (
          <span className="plan-check">
            <Check size={14} />
          </span>
        )}
      </div>
      <div className="plan-price">
        {plan.price}
        <small>{plan.unit || "/month"}</small>
      </div>
      {plan.suffix && <div className="plan-suffix">{plan.suffix}</div>}
      {plan.sub && <p className="plan-sub">{plan.sub}</p>}
      {plan.features && (
        <ul className="plan-features">
          {plan.features.map((feature) => (
            <li key={feature}>
              <Check size={14} />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <button
        className={`button ${plan.featured ? "primary" : "ghost"}`}
        data-open-request="true"
      >
        Request This Plan
      </button>
    </article>
  );
}

function PricingSectionHeading({ eyebrow, title, description }) {
  return (
    <div className="pricing-section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <span className="heading-rule" />
      <p>{description}</p>
    </div>
  );
}

function DataPricingTable({ title, note, rows }) {
  return (
    <div className="data-table-card">
      <div className="data-table-head">
        <div>
          <strong>{title}</strong>
          <span>{note}</span>
        </div>
      </div>
      <div className="table-scroll">
        <table className="price-table modern-price-table">
          <thead>
            <tr>
              <th>PLAN</th>
              <th>COMMITTED SPEED</th>
              <th>BURSTABLE SPEED (30% EXTRA)</th>
              <th>MONTHLY RENTAL (INR)</th>
              <th>ANNUAL RENTAL (INR)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PricingCloud() {
  const [selected, setSelected] = useState(0);
  const plan = EDGE_PLANS[selected];
  return (
    <div className="pricing-content">
      <PricingSectionHeading
        eyebrow="Cloud Compute"
        title="Edge Compute — deploy in minutes"
        description="Pick a tier below to build your server. This is our self-service Platform-as-a-Service module — select, review, and request deployment straight from the browser."
      />
      <div className="edge-layout">
        <div className="edge-plans-grid">
          {EDGE_PLANS.map((item, i) => (
            <button
              key={item.name}
              className={`edge-plan ${selected === i ? "selected" : ""}`}
              onClick={() => setSelected(i)}
            >
              <span className="edge-select">
                {selected === i ? <Check size={13} /> : ""}
              </span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <strong>
                {item.price}
                <small>/mo</small>
              </strong>
              <span className="edge-transfer">
                <ArrowRight size={13} /> {item.transfer} data transfer included
              </span>
            </button>
          ))}
        </div>
        <aside className="configuration-card">
          <span className="eyebrow">Your Configuration</span>
          <h3>{plan.name}</h3>
          <div className="config-price">
            {plan.price}
            <small>/month</small>
          </div>
          <div className="config-list">
            <div>
              <span>Data Transfer</span>
              <strong>{plan.transfer}</strong>
            </div>
            <div>
              <span>Billing</span>
              <strong>Monthly, no lock-in</strong>
            </div>
            <div>
              <span>Deployment</span>
              <strong>~24 hrs after order</strong>
            </div>
          </div>
          <button className="button primary" data-open-request="true">
            Deploy This Server <ArrowRight size={17} />
          </button>
          <p>
            Need custom vCPU, RAM, or OS specs? Our team will confirm the full
            build sheet with you before deployment.
          </p>
        </aside>
      </div>
      <div className="pricing-note">
        <strong>ⓘ Additional IPv4 addresses: ₹250/month each</strong> · Need
        dedicated bandwidth alongside your server? See the full Data &
        Connectivity tab for our complete range of ILL, shared, and pure
        data-transfer plans.
      </div>
    </div>
  );
}

function PricingVps() {
  return (
    <div className="pricing-content">
      {VPS_GROUPS.map((group) => (
        <section className="pricing-group" key={group.title}>
          <PricingSectionHeading
            eyebrow="Datenfarmen"
            title={group.title}
            description={group.subtitle}
          />
          <div className="plans-grid">
            {group.plans.map((plan) => (
              <PricingPlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </section>
      ))}
      <div className="pricing-note">
        <strong>
          ⓘ Need Cloud Firewall, DDoS Protection, VPN or VPC network isolation
          alongside your server?
        </strong>{" "}
        See the Add-ons & Utilities tab, or click Talk to Sales on our
        Networking & Security page for a tailored quote.
      </div>
    </div>
  );
}

function PricingData() {
  return (
    <div className="pricing-content">
      <PricingSectionHeading
        eyebrow="Data & Connectivity"
        title="Data Plan Options"
        description="Business-grade connectivity, high performance, reliable and secure — every plan includes 30% burstable speed at no extra cost."
      />
      <div className="benefit-grid">
        {[
          ["30% Burstable", "Extra speed when you need it"],
          ["99.5% SLA", "High availability & reliable uptime"],
          ["24x7 Support", "Enterprise-grade support"],
          ["Simple Pricing", "Transparent & pre-defined billing"],
        ].map(([a, b]) => (
          <div key={a}>
            <strong>{a}</strong>
            <span>{b}</span>
          </div>
        ))}
      </div>
      <DataPricingTable
        title="1:1 Dedicated Data (ILL)"
        note="Dedicated bandwidth with no contention"
        rows={DATA_ROWS.dedicated}
      />
      <div className="table-best">
        Best for: Mission critical applications, ERP, Cloud, VoIP, Video
        Conferencing
      </div>
      <DataPricingTable
        title="1:10 Shared Data"
        note="Shared bandwidth with 1:10 contention ratio"
        rows={DATA_ROWS.shared}
      />
      <div className="table-best">
        Best for: General business use, browsing, email, non-critical
        applications
      </div>
      <DataPricingTable
        title="Pure Data Transfer"
        note="High volume data transfer with no SLA"
        rows={DATA_ROWS.pure}
      />
      <div className="table-best">
        Best for: Bulk data, backups, downloads, CDN, non-time-sensitive
        transfer
      </div>
      <div className="pricing-note">
        <strong>ⓘ All prices are exclusive of applicable taxes.</strong>{" "}
        Flexible locking period applicable.
      </div>
      <div className="data-info-grid">
        <div>
          <h3>Plan Inclusions (All Plans)</h3>
          <ul className="bullet-list">
            <li>30% burstable speed over committed bandwidth</li>
            <li>Unlimited data (Fair Usage Policy applicable)</li>
            <li>Static IPs (as per plan)</li>
            <li>24x7 NOC monitoring</li>
            <li>99.5% Network SLA (1:1 Dedicated plans only)</li>
            <li>Taxes extra as applicable</li>
          </ul>
        </div>
        <div>
          <h3>Speed Ratio Explained</h3>
          <ul className="bullet-list">
            <li>
              1:1 Dedicated (ILL): Full committed speed at all times — no
              sharing, no contention.
            </li>
            <li>
              1:10 Shared: Bandwidth shared across multiple users at a 1:10
              ratio — actual speed may vary.
            </li>
            <li>
              Pure Data Transfer: High-volume transfer service with no SLA,
              best-effort basis.
            </li>
          </ul>
        </div>
        <div>
          <h3>Notes</h3>
          <ul className="bullet-list">
            <li>SLA applies to 1:1 Dedicated (ILL) plans only</li>
            <li>Flexible locking period applicable</li>
            <li>Taxes as per government norms</li>
            <li>Terms & conditions apply</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function PricingStorage() {
  return (
    <div className="pricing-content">
      <PricingSectionHeading
        eyebrow="Cloud Storage"
        title="Business Cloud Storage"
        description="Object and file storage for teams — scoped by capacity and seats, with linear expansion pricing when you outgrow a tier."
      />
      <div className="plans-grid storage-grid">
        {STORAGE_PLANS.map((plan) => (
          <PricingPlanCard key={plan.name} plan={plan} />
        ))}
      </div>
      <div className="pricing-note">
        <strong>
          ⓘ Expand any tier independently: ₹200/month per additional 100 GB
        </strong>
        , or scale linearly at ₹1,500/month per additional 1 TB.
      </div>
    </div>
  );
}

function PricingColocation() {
  return (
    <div className="pricing-content">
      <PricingSectionHeading
        eyebrow="Colocation Plans"
        title="Colocation & Facility Plans"
        description="Three commercial models — from usage-based wholesale racks to a fully managed, fixed-fee premium suite."
      />
      <div className="plans-grid colo-grid">
        {COLO_PLANS.map((plan) => (
          <PricingPlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
}

function PricingAddons() {
  return (
    <div className="pricing-content">
      <PricingSectionHeading
        eyebrow="Add-ons & Utilities"
        title="Add-ons & Standard Utilities"
        description="Itemized components for standalone deployments or custom project builds."
      />
      <div className="addon-table-wrap">
        <PriceTable rows={ADDON_ROWS} />
      </div>
      <div className="pricing-note">
        <strong>ⓘ Looking for internet and bandwidth plans?</strong> See the
        full Data & Connectivity tab for Dedicated (ILL), Shared, and Pure Data
        Transfer pricing.
      </div>
    </div>
  );
}

function PricingSolar() {
  return (
    <div className="pricing-content">
      <PricingSectionHeading
        eyebrow="Solar Advantage"
        title="The Solar Hybrid Advantage"
        description="A proprietary Green Data Center model that insulates your bill from rising grid tariffs."
      />
      <div className="solar-modern">
        <div className="solar-copy">
          <h3>Why your power bill stays predictable</h3>
          <p>
            Grid-only facilities are fully exposed to volatile tariffs. Our
            on-site solar plant supplies a meaningful share of daily load at
            near-zero marginal cost — savings we pass straight through to
            long-term tenants.
          </p>
          <div className="solar-stats">
            <div>
              <strong>₹8.5</strong>
              <span>
                Grid cost per unit,
                <br />
                +3% annual hikes
              </span>
            </div>
            <div>
              <strong>250 kW</strong>
              <span>
                On-site solar
                <br />
                plant capacity
              </span>
            </div>
            <div>
              <strong>~1,000</strong>
              <span>
                Units generated
                <br />
                per day
              </span>
            </div>
          </div>
        </div>
        <div className="power-mix">
          <div className="mix-title">
            <span>FACILITY POWER MIX</span>
            <strong>40%</strong>
          </div>
          <div className="mix-bar">
            <span />
          </div>
          <div className="mix-legend">
            <span>■ Solar (near-zero cost)</span>
            <span>■ Grid</span>
          </div>
          <p>
            Up to 40% of facility operations run on near-zero-cost solar power,
            protecting your margins against grid inflation.
          </p>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = (e) => {
      if (e.target?.closest?.("[data-open-request]")) setOpen(true);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  const renderTab = () =>
    ({
      cloud: <PricingCloud />,
      vps: <PricingVps />,
      data: <PricingData />,
      storage: <PricingStorage />,
      colo: <PricingColocation />,
      addons: <PricingAddons />,
      solar: <PricingSolar />,
    }[PRICING_TABS[tab].id]);
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="pricing-hero-grid">
          <span className="eyebrow">// Transparent by design</span>
          <h1>Pricing built for every stage of scale</h1>
          <p>
            From a single edge server to a full wholesale suite — configure your
            infrastructure, see the number instantly, and deploy with
            confidence.
          </p>
        </div>
      </section>
      <div className="pricing-tabs-shell">
        <div className="pricing-tabs-modern" role="tablist">
          {PRICING_TABS.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={i === tab ? "active" : ""}
                onClick={() => setTab(i)}
                role="tab"
                aria-selected={i === tab}
              >
                <Icon size={15} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <main className="pricing-main">{renderTab()}</main>
      {open && (
        <Modal onClose={() => setOpen(false)} title="Request Edge Micro">
          <RequestForm onDone={() => setOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

function PriceTable({ rows }) {
  return (
    <div className="table-scroll">
      <table className="price-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Detail</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function RequestForm({ onDone }) {
  const [done, setDone] = useState(false);
  if (done)
    return (
      <div className="success">
        <Check size={22} />
        <h3>Request captured</h3>
        <p>
          Connect the current production submission endpoint through{" "}
          <code>VITE_CONTACT_FORM_ENDPOINT</code> to deliver this request to the
          same backend.
        </p>
        <button className="button primary" onClick={onDone}>
          Close
        </button>
      </div>
    );
  return (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <p className="form-intro">
        Tell us a little about your project — our team will confirm specs and
        get you deployed.
      </p>
      <Field label="Full Name *" placeholder="John Doe" required />
      <Field
        label="Work Email *"
        placeholder="john@company.com"
        type="email"
        required
      />
      <Field label="Phone Number *" placeholder="+91 98765 43210" required />
      <Field label="Company / Project" placeholder="Acme Pvt Ltd" />
      <Field label="Message (Optional)" area />
      <button className="button primary" type="submit">
        Submit Request
        <Send size={17} />
      </button>
    </form>
  );
}

function Contact() {
  const [done, setDone] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="Ready to scale your infrastructure? Get in touch with our experts."
      />
      <Section>
        <div className="contact-grid">
          <div className="contact-intro">
            <p>
              Requesting pricing for — fill in the form below and we'll send you
              a tailored quote.
            </p>
            <div className="contact-block">
              <span>General Inquiries</span>
              <a href="mailto:info@datenfarmen.com">info@datenfarmen.com</a>
            </div>
            <div className="contact-block">
              <span>CEO / Leadership</span>
              <a href="mailto:Vishal.patel@datenfarmen.in">
                Vishal.patel@datenfarmen.in
              </a>
            </div>
            <div className="contact-block">
              <span>Headquarters</span>
              <p>Ankleshwar, Gujarat, India</p>
            </div>
          </div>
          <div className="card form-card">
            {done ? (
              <div className="success">
                <Check size={22} />
                <h3>Message prepared</h3>
                <p>
                  Connect the current production form endpoint through{" "}
                  <code>VITE_CONTACT_FORM_ENDPOINT</code> to deliver the message
                  to the live backend.
                </p>
              </div>
            ) : (
              <form
                className="form-grid"
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
              >
                <Field label="Full Name" placeholder="John Doe" required />
                <Field
                  label="Email Address"
                  placeholder="john@company.com"
                  type="email"
                  required
                />
                <Field label="Interest" placeholder="Colocation, Cloud, etc." />
                <Field label="Message" area required />
                <button className="button primary" type="submit">
                  Send Message
                  <Send size={17} />
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function ServicePage() {
  const { pathname } = useLocation();
  const info = serviceData[pathname] || serviceData["/cloud-services"];
  const [tab, setTab] = useState(0);
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
function ServiceBlock({ data }) {
  return (
    <div className="service-block">
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
      <h3>How It Works</h3>
      <div className="steps">
        {data.steps.map((s, i) => (
          <div key={i} className="step">
            <span>STEP {i + 1}</span>
            <p>{s}</p>
          </div>
        ))}
      </div>
      <div className="responsibility">
        <div>
          <h3>Managed by Datenfarmen</h3>
          <ul className="bullet-list">
            {data.managed.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Managed by You</h3>
          <ul className="bullet-list">
            {data.you.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      {data.specs && (
        <>
          <h3>Specifications</h3>
          <SpecTable rows={data.specs} />
        </>
      )}
      <h3>Best For</h3>
      <div className="bestfor">
        {data.best.map((x) => (
          <span key={x}>{x}</span>
        ))}
      </div>
    </div>
  );
}

const base = {
  managed: [
    "Infrastructure provisioning and facility operations",
    "Monitoring and platform-level maintenance",
    "Security controls and service uptime",
  ],
  you: ["Application code and business logic", "Customer data and user access"],
  best: [
    "Modern production workloads",
    "Teams scaling infrastructure",
    "Compliance-sensitive deployments",
  ],
};
const serviceData = {
  "/cloud-services": {
    title: "Cloud Services",
    heroDesc:
      "Single-tenant, multi-tenant, and bare-metal compute — built on our Ankleshwar and Indore facilities.",
    intro:
      "Datenfarmen's Cloud Services give you a spectrum of compute options, from fully dedicated single-tenant environments to elastic multi-tenant virtual machines and raw bare-metal servers. Every option is built on the same modular, high-density infrastructure across our ANK-1 and IND-1 facilities, so you can mix compute types under one account, one network, and one SLA framework.",
    tabs: ["Single-Tenant Cloud", "Multi-Tenant Cloud", "Bare Metal Servers"],
    sections: [
      {
        title: "Single-Tenant Cloud",
        desc: "A dedicated compute, storage, and network stack reserved exclusively for your organization — no resource sharing with other tenants.",
        steps: [
          "We provision a dedicated physical host (or host cluster) exclusively for your workloads — sized to your CPU, RAM, and storage requirements.",
          "Your environment sits on an isolated network segment (dedicated VLAN/VRF) with its own firewall policy, separate from any other customer.",
          "You choose the hypervisor (VMware, KVM, or Hyper-V) and OS images; we handle the physical layer and platform uptime.",
          "Scale by adding dedicated capacity as needed — no noisy-neighbor contention, ever.",
        ],
        managed: [
          "Physical hardware, power, and cooling",
          "Hypervisor platform and host-level patching",
          "Network uplink, isolation, and DDoS filtering",
          "Hardware failure detection and replacement",
          "24x7 facility and infrastructure monitoring",
        ],
        you: [
          "Guest OS configuration and patching (or add our Managed OS service)",
          "Applications, databases, and data",
          "User access control within your environment",
          "Application-level security configuration",
        ],
        specs: [
          ["Isolation", "Dedicated physical host(s), no shared tenancy"],
          ["Hypervisor", "VMware / KVM / Hyper-V — your choice"],
          ["Network", "Dedicated VLAN/VRF, isolated firewall policy"],
          ["Scaling", "Add dedicated nodes on demand"],
          [
            "Typical fit",
            "BFSI, healthcare, government, compliance-bound workloads",
          ],
        ],
        best: [
          "Regulated workloads requiring physical data isolation",
          "Latency-sensitive applications needing predictable performance",
          "Organizations with strict data-residency or audit requirements",
        ],
      },
      {
        title: "Multi-Tenant Cloud",
        desc: "Elastic virtual machines drawn from a shared, high-availability compute pool — logically isolated and billed by the resources you actually use.",
        steps: [
          "Deploy a virtual machine from our Edge Compute tiers (Edge Micro through Edge Scale) via request or self-service configurator.",
          "Your VM draws guaranteed CPU/RAM/storage allocations from a shared compute cluster, isolated from other tenants at the hypervisor and network layer (VXLAN segmentation).",
          "Resize up or down as demand changes; snapshots and backup add-ons are available per instance.",
          "Access your instance via console, SSH, or our Cloud Console for day-to-day management.",
        ],
        managed: [
          "Underlying cluster hardware and hypervisor",
          "Shared storage pool performance and redundancy",
          "Network fabric, routing, and capacity planning",
          "Platform-layer patching and security updates",
          "Elastic capacity headroom for scaling",
        ],
        you: [
          "Guest OS and installed software",
          "Application code, data, and backups (unless purchased)",
          "Firewall rules and access credentials for your instance",
        ],
        specs: [
          ["Isolation", "Hypervisor + network-level logical isolation (VXLAN)"],
          ["Tiers", "Edge Micro to Edge Scale — see Pricing"],
          ["Billing", "Pay for the tier you choose, resize anytime"],
          ["Access", "Self-service via Cloud Console, SSH/RDP"],
          ["Typical fit", "Web apps, dev/test, startups, elastic workloads"],
        ],
        best: [
          "Websites and APIs with variable traffic",
          "Development and staging environments",
          "Small-to-mid businesses that don’t need dedicated hardware",
        ],
      },
      {
        title: "Bare Metal Servers",
        desc: "Dedicated physical servers with full root access and no hypervisor overhead — for workloads that demand raw, predictable performance.",
        steps: [
          "We rack and provision a dedicated physical server to your CPU/RAM/storage/NIC specification.",
          "You receive full root/administrator access with no virtualization layer between your OS and the hardware.",
          "Remote management (IPMI/iDRAC/iLO-class out-of-band access) lets you power-cycle and reimage without a site visit.",
          "Dedicated network port and bandwidth allocation keep performance predictable and isolated from other tenants.",
        ],
        managed: [
          "Physical hardware provisioning, power, and cooling",
          "Remote-hands support for physical interventions",
          "Dedicated network port and uplink",
          "Hardware monitoring and failure remediation",
        ],
        you: [
          "Full OS installation, configuration, and patching",
          "Application stack, licensing, and data",
          "Server-level security hardening and firewall rules",
        ],
        specs: [
          ["Virtualization", "None — direct hardware access"],
          ["Access", "Full root/admin, out-of-band remote management"],
          ["Storage", "SSD/NVMe/HDD configurations available"],
          ["Network", "Dedicated NIC and bandwidth allocation"],
          ["Typical fit", "Databases, licensed software, high-I/O workloads"],
        ],
        best: [
          "High-performance databases needing raw I/O",
          "Software with per-physical-core licensing",
          "Workloads with strict performance SLAs",
        ],
      },
    ],
  },
  "/vps-hosting": {
    title: "VPS Hosting",
    heroDesc:
      "Dedicated-resource virtual private servers on Linux or Windows, provisioned in minutes from our Indore and Ankleshwar facilities.",
    intro:
      "Datenfarmen VPS Hosting gives you a resizable slice of guaranteed CPU, RAM and NVMe storage on a private virtual server — a cost-effective middle ground between shared hosting and dedicated hardware. Choose Linux or Windows, manage it yourself or let our team run it for you, and scale up as your workload grows without migrating servers.",
    tabs: ["Linux VPS", "Windows VPS", "Managed VPS"],
    sections: [
      {
        title: "Linux VPS",
        desc: "Guaranteed vCPU, RAM and NVMe storage on a private virtual server running your Linux distribution of choice, with full root access from day one.",
        steps: [
          "Choose a resource tier and Linux distribution (Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux).",
          "Your VPS is provisioned on dedicated vCPU/RAM/NVMe allocations, isolated from other tenants at the hypervisor level.",
          "Access via SSH with full root privileges, or through our Cloud Console for one-click management.",
          "Resize CPU, RAM or storage as your workload grows, with minimal downtime.",
        ],
        managed: [
          "Underlying hypervisor and physical hardware",
          "Guaranteed resource allocation (no overselling)",
          "Network uplink and DDoS filtering",
          "Platform-layer patching and hardware monitoring",
        ],
        you: [
          "OS installation, patching, and configuration",
          "Applications, data, and backups (unless purchased)",
          "Firewall rules and SSH key management",
        ],
        specs: [
          ["Isolation", "Dedicated vCPU/RAM/storage allocation per instance"],
          ["Distributions", "Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux"],
          ["Storage", "NVMe SSD-backed"],
          ["Access", "Full root/SSH, Cloud Console, API"],
          ["Typical fit", "Web apps, APIs, dev/test, CI/CD runners"],
        ],
        best: [
          "Developers who need full root control",
          "Small-to-mid applications outgrowing shared hosting",
          "Containerised workloads and CI/CD pipelines",
        ],
      },
      {
        title: "Windows VPS",
        desc: "A licensed Windows Server environment on private, dedicated resources — ideal for applications, remote desktops, and software that needs a Windows environment without shared-hosting limitations.",
        steps: [
          "Select a resource tier and your preferred licensed Windows Server edition.",
          "We provision your VPS with dedicated vCPU, RAM and storage, isolated from other tenants.",
          "Connect via RDP with administrator access from the moment your instance is live.",
          "Snapshot, back up, or resize your instance at any time through the Cloud Console.",
        ],
        managed: [
          "Windows Server licensing and activation",
          "Underlying hypervisor and hardware",
          "Network uplink and DDoS filtering",
          "Platform-layer patching",
        ],
        you: [
          "Guest OS updates and application installs",
          "RDP access control and user accounts",
          "Application-level security and data",
        ],
        specs: [
          ["Licensing", "Fully licensed Windows Server, included"],
          ["Access", "RDP with administrator rights"],
          ["Storage", "SSD/NVMe-backed"],
          ["Backups", "Snapshot and scheduled backup add-ons available"],
          ["Typical fit", ".NET apps, MSSQL, remote desktop workstations"],
        ],
        best: [
          ".NET and MSSQL-based applications",
          "Remote desktop / RDS workstation environments",
          "Windows-only line-of-business software",
        ],
      },
      {
        title: "Managed VPS",
        desc: "Get the control of a private server with the peace of mind of a managed service — we handle setup, hardening, patching and monitoring on either Linux or Windows VPS.",
        steps: [
          "We provision and harden your VPS to a security baseline (firewall, fail2ban/RDP lockdown, updates).",
          "Our team applies ongoing OS and security patches on a defined maintenance window.",
          "24x7 monitoring alerts our NOC to resource, uptime or security anomalies.",
          "You get a named support contact for changes, troubleshooting, and scaling requests.",
        ],
        managed: [
          "OS hardening, patching, and updates",
          "24x7 monitoring and alerting",
          "Security baseline and firewall configuration",
          "Named support contact",
        ],
        you: [
          "Application code and business logic",
          "Data and application-level backups",
        ],
        specs: [
          ["Base OS", "Linux or Windows VPS, your choice"],
          [
            "Patch cadence",
            "Defined maintenance window, or emergency patching",
          ],
          ["Monitoring", "24x7 uptime, resource, and security alerting"],
          ["Support", "Named contact, priority response SLA"],
          ["Typical fit", "Teams without in-house sysadmin resources"],
        ],
        best: [
          "Small teams without dedicated ops staff",
          "Production workloads needing predictable patching",
          "Businesses that want to focus on the application, not the server",
        ],
      },
    ],
  },
  "/dedicated-servers": {
    title: "Dedicated Servers",
    heroDesc:
      "Single-tenant physical hardware for workloads that demand maximum performance and full control.",
    intro:
      "Datenfarmen Dedicated Servers give you exclusive access to physical hardware — no hypervisor, no shared tenancy, no noisy neighbours. Choose single or dual-processor configurations sized to your workload, manage it yourself with full root access, or add our Managed Dedicated service and let our team run day-to-day operations for you.",
    tabs: ["Single Processor", "Dual Processor", "Managed Dedicated"],
    sections: [
      {
        title: "Single Processor Dedicated Server",
        desc: "An entry-level, single-CPU physical server entirely dedicated to you — no noisy neighbours, no shared resources. A solid starting point for production workloads that have outgrown VPS.",
        steps: [
          "Specify your CPU, RAM, storage and network requirements.",
          "We rack and provision your dedicated physical server with no hypervisor overhead.",
          "You receive full root/administrator access with out-of-band remote management for power-cycling and reimaging.",
          "A dedicated network port and bandwidth allocation keep performance predictable.",
        ],
        managed: [
          "Physical hardware, power, and cooling",
          "Remote-hands support for physical interventions",
          "Dedicated network port and uplink",
          "Hardware monitoring and failure remediation",
        ],
        you: [
          "Full OS installation, configuration, and patching",
          "Application stack, licensing, and data",
          "Server-level security hardening",
        ],
        specs: [
          ["Virtualization", "None — direct hardware access"],
          ["Access", "Full root/admin, out-of-band remote management"],
          ["Storage", "SSD/NVMe/HDD configurations available"],
          ["Network", "Dedicated NIC and bandwidth allocation"],
          ["Typical fit", "Growing production workloads, small databases"],
        ],
        best: [
          "Production apps that have outgrown VPS",
          "Single-instance databases",
          "Businesses that want predictable, dedicated hardware",
        ],
      },
      {
        title: "Dual Processor Dedicated Server",
        desc: "Dual-CPU configurations for workloads that need serious horsepower — large databases, high-traffic applications, virtualization hosts, and big-data processing.",
        steps: [
          "We size a dual-CPU configuration to your core count, RAM, and storage throughput needs.",
          "Your server is racked with RAID-configured storage and dedicated high-bandwidth networking.",
          "Full root access and out-of-band management are enabled from day one.",
          "Priority remote-hands support is included for time-sensitive interventions.",
        ],
        managed: [
          "High-density dual-CPU hardware provisioning",
          "RAID storage configuration",
          "Priority remote-hands support",
          "Hardware monitoring and failure remediation",
        ],
        you: [
          "OS, database, and application management",
          "Licensing for per-core-licensed software",
          "Server-level security hardening",
        ],
        specs: [
          ["CPU", "Dual-socket, high core/thread count"],
          ["Storage", "Configurable RAID arrays (SSD/NVMe/HDD)"],
          ["Network", "High-bandwidth dedicated NIC"],
          ["Support", "Priority remote-hands SLA"],
          ["Typical fit", "Large databases, virtualization hosts, big-data"],
        ],
        best: [
          "High-traffic applications and large databases",
          "Virtualization or container hosts",
          "Big-data processing and analytics pipelines",
        ],
      },
      {
        title: "Managed Dedicated Server",
        desc: "Get the raw performance of dedicated hardware with none of the operational burden — our team handles OS management, patching, security and 24x7 monitoring.",
        steps: [
          "We provision your dedicated server (single or dual CPU) and install/harden the OS to a security baseline.",
          "Ongoing patching, firewall management, and security updates run on a defined maintenance window.",
          "24x7 monitoring watches uptime, resource usage, and security signals.",
          "A named support contact handles changes, incidents, and scaling requests.",
        ],
        managed: [
          "Full OS installation, hardening, and patching",
          "24x7 infrastructure and security monitoring",
          "Firewall and access control management",
          "Named support contact",
        ],
        you: [
          "Application code and business logic",
          "Data and application-level backups",
        ],
        specs: [
          ["Base hardware", "Single or dual-CPU dedicated server"],
          [
            "Patch cadence",
            "Defined maintenance window, or emergency patching",
          ],
          ["Monitoring", "24x7 uptime, resource, and security alerting"],
          ["Support", "Named contact, priority response SLA"],
          [
            "Typical fit",
            "Teams that want dedicated hardware without ops overhead",
          ],
        ],
        best: [
          "Businesses without in-house sysadmin resources",
          "Mission-critical apps needing 24x7 monitoring",
          "Regulated workloads needing documented operations",
        ],
      },
    ],
  },
  "/email-hosting": {
    title: "Email Hosting",
    heroDesc:
      "Enterprise-grade, secure business email — from cost-effective custom-domain mail to fully hosted Exchange and Office 365.",
    intro:
      "Datenfarmen Email Hosting gives your team a professional, secure mailbox on your own domain. Choose cost-effective cPanel or Zimbra-based business email, or step up to fully hosted Microsoft Exchange or Office 365 with assisted migration and ongoing administration — all backed by spam and malware filtering at the gateway.",
    tabs: ["Business Email", "Exchange & Office 365"],
    sections: [
      {
        title: "Business Email (cPanel / Zimbra)",
        desc: "Custom-domain business email with webmail, calendaring and spam filtering, delivered on cPanel or open-source Zimbra — a cost-effective option with no per-seat licensing.",
        steps: [
          "We configure mail hosting on your domain, with SPF, DKIM and DMARC records set up correctly from day one.",
          "Mailboxes are provisioned with configurable storage quotas per user or department.",
          "Spam and malware filtering runs at the gateway before mail reaches your inbox.",
          "Access via webmail, IMAP/SMTP, or your preferred mail client, with mobile sync support.",
        ],
        managed: [
          "Mail server infrastructure and uptime",
          "Spam, malware and phishing filtering",
          "DNS record configuration (SPF/DKIM/DMARC)",
          "Platform patching and security updates",
        ],
        you: [
          "User account and mailbox management",
          "Mail client / device configuration",
          "Data retention and archiving policy",
        ],
        specs: [
          ["Platform", "cPanel-based or open-source Zimbra"],
          ["Access", "Webmail, IMAP/SMTP, mobile sync"],
          ["Filtering", "Spam and malware gateway filtering included"],
          ["Licensing", "No per-seat license fees on Zimbra"],
          [
            "Typical fit",
            "SMEs and teams wanting custom-domain mail without enterprise licensing",
          ],
        ],
        best: [
          "SMEs wanting professional email on their own domain",
          "Teams that don’t need full Exchange/Office 365 features",
          "Cost-conscious deployments at scale",
        ],
      },
      {
        title: "Hosted Exchange & Office 365",
        desc: "Enterprise-grade Microsoft Exchange or fully integrated Office 365 mail, with calendar and contact sync, mobile device support and migration handled for you.",
        steps: [
          "We assess your current mail environment and plan a migration path to Hosted Exchange or Office 365.",
          "Mailboxes, calendars and contacts are migrated with minimal downtime and a rollback plan.",
          "Devices and clients (Outlook, mobile) are configured for seamless sync.",
          "Ongoing license and administration management keeps your environment current.",
        ],
        managed: [
          "Migration planning and execution",
          "License and tenant administration",
          "Mailbox, calendar, and contact configuration",
          "Ongoing support for admin changes",
        ],
        you: [
          "Day-to-day user and mailbox management",
          "Data classification and retention decisions",
        ],
        specs: [
          ["Platform", "Microsoft Exchange (hosted) or Office 365"],
          ["Sync", "Calendar, contacts, and mobile device sync"],
          ["Migration", "Assisted migration from legacy mail systems"],
          ["Admin", "License and tenant administration included"],
          [
            "Typical fit",
            "Enterprises standardised on the Microsoft ecosystem",
          ],
        ],
        best: [
          "Enterprises needing full Exchange/Office 365 feature parity",
          "Teams already using Microsoft 365 apps",
          "Organisations migrating off legacy on-prem Exchange",
        ],
      },
    ],
  },
  "/network-security": {
    title: "Networking & Security",
    heroDesc:
      "Firewalls, DDoS protection, VPN, VPC and private connectivity to protect, route, and connect your cloud environment.",
    intro:
      "Datenfarmen's networking and security building blocks let you control exactly how traffic reaches, moves through, and leaves your environment. From managed firewalls and always-on DDoS protection to VPC network isolation, VPN and IPSEC connectivity, load balancing and DNS management — all delivered from our carrier-neutral facilities.",
    tabs: ["Firewall & DDoS Protection", "VPN & Private Connectivity"],
    sections: [
      {
        title: "Cloud Firewall & DDoS Protection",
        desc: "A managed, rule-based firewall at the edge of your environment plus always-on DDoS detection and mitigation, so malicious and volumetric traffic never reaches your workloads.",
        steps: [
          "We define firewall rule sets scoped to your application ports, IP ranges, and traffic patterns.",
          "Traffic is filtered in real time at the network edge, before it reaches your servers.",
          "Always-on detection identifies volumetric and application-layer DDoS attacks automatically.",
          "Traffic scrubbing kicks in during an attack; you receive a post-incident report.",
        ],
        managed: [
          "Firewall rule deployment and edge filtering",
          "24x7 DDoS detection and mitigation",
          "Traffic scrubbing during active attacks",
          "Logging, alerting, and post-incident reporting",
        ],
        you: [
          "Defining which ports/services should be exposed",
          "Application-level security (input validation, auth)",
        ],
        specs: [
          ["Firewall", "Customisable, rule-based, managed by our team"],
          ["DDoS coverage", "Volumetric and application-layer (L3/L4/L7)"],
          ["Detection", "Always-on, automatic mitigation"],
          ["Reporting", "Post-incident traffic and mitigation reports"],
          [
            "Typical fit",
            "Public-facing websites, APIs, e-commerce, trading platforms",
          ],
        ],
        best: [
          "Public-facing websites and APIs",
          "E-commerce and payment platforms",
          "Businesses that have experienced attacks before",
        ],
      },
      {
        title: "VPN & Private Connectivity",
        desc: "Encrypted site-to-site or remote-access VPN, Virtual Private Cloud (VPC) network isolation, and IPSEC tunnels — so your team and offices can securely reach your cloud environment from anywhere.",
        steps: [
          "We design your network topology — VPC subnets, route tables, and connectivity requirements.",
          "Site-to-site or remote-access VPN endpoints are configured with industry-standard IPSEC/SSL encryption.",
          "Your offices and remote staff connect securely to private resources without public exposure.",
          "NAT gateways and virtual routers manage outbound access without exposing private subnets inbound.",
        ],
        managed: [
          "VPC, subnet, and routing configuration",
          "VPN and IPSEC tunnel setup and uptime",
          "NAT gateway and virtual router management",
          "DNS management for private and public zones",
        ],
        you: [
          "VPN client credentials and user access",
          "Application-level access policies",
        ],
        specs: [
          ["VPN types", "Site-to-site and remote-access"],
          ["Encryption", "Industry-standard IPSEC/SSL"],
          ["Network isolation", "Dedicated VPC with custom subnetting"],
          ["IP options", "IPv4, IPv6, and Reserve IP available"],
          [
            "Typical fit",
            "Hybrid-cloud setups, distributed teams, regulated workloads",
          ],
        ],
        best: [
          "Hybrid-cloud environments connecting on-prem and cloud",
          "Distributed or remote teams needing secure access",
          "Workloads requiring network-level isolation for compliance",
        ],
      },
    ],
  },
  "/managed-services": {
    title: "Managed Services",
    heroDesc:
      "24x7 monitoring and hands-on operations for OS, database, network, and security — so your team can focus upward, not on infrastructure.",
    intro:
      "Managed Services extend our infrastructure team into your operations. Instead of hiring and staffing round-the-clock coverage, you get a Network Operations Center (NOC) and skilled engineers who monitor, patch, and respond to your environment under a defined scope and SLA — across compute, storage, database, and network layers.",
    tabs: [
      "Managed OS & Patch Management",
      "Managed Database Services",
      "Managed Network & Security Operations",
    ],
    sections: [
      {
        title: "Managed OS & Patch Management",
        desc: "We keep the operating system layer current, secure, and monitored — across Linux and Windows environments.",
        steps: [
          "We baseline your OS configuration and agree on a patch and maintenance-window schedule with you.",
          "Security patches are tested in a staging pass where applicable, then applied during your approved window.",
          "Our monitoring agents track CPU, memory, disk, and service-level health, alerting our NOC on anomalies.",
          "Monthly reporting shows patch compliance, incidents, and open action items.",
        ],
        managed: [
          "OS-level patching and version upgrades",
          "Service/daemon health monitoring",
          "Log review for OS-level anomalies",
          "Scheduled maintenance windows and change records",
        ],
        you: [
          "Application-layer code and configuration",
          "Business logic and data within the OS",
        ],
        specs: [
          [
            "Coverage",
            "Linux (Ubuntu, Debian, CentOS/RHEL) and Windows Server",
          ],
          ["Monitoring", "24x7 agent-based monitoring with NOC escalation"],
          ["Patch cadence", "Scheduled windows, agreed with customer"],
          ["Reporting", "Monthly compliance and incident reports"],
        ],
        best: [
          "Teams without dedicated in-house sysadmins",
          "Compliance programs requiring documented patch cadence",
          "Businesses wanting predictable OS maintenance",
        ],
      },
      {
        title: "Managed Database Services",
        desc: "Operational management of your database layer — availability, backups, tuning, and incident response.",
        steps: [
          "We deploy and configure your database engine (MySQL, PostgreSQL, MS SQL, MongoDB, and others on request) to your specification.",
          "Automated backup schedules are configured with retention aligned to your recovery objectives.",
          "We monitor query performance, connections, and replication lag, tuning configuration as workloads evolve.",
          "On-call engineers respond to database incidents under your agreed SLA.",
        ],
        managed: [
          "Database installation, configuration, and upgrades",
          "Backup scheduling, verification, and retention",
          "Performance monitoring and tuning",
          "High-availability/replication setup where applicable",
        ],
        you: [
          "Schema design and application queries",
          "Data governance and access policy",
        ],
        specs: [
          [
            "Engines",
            "MySQL, PostgreSQL, MS SQL Server, MongoDB (others on request)",
          ],
          ["Backups", "Automated, scheduled, with defined retention"],
          ["HA options", "Replication/clustering available on request"],
          ["Support", "On-call incident response under SLA"],
        ],
        best: [
          "Businesses running production databases without a DBA on staff",
          "Applications needing consistent backup and recovery discipline",
        ],
      },
      {
        title: "Managed Network & Security Operations",
        desc: "Round-the-clock Network Operations Center coverage for network health, firewall management, and security event response.",
        steps: [
          "Your network devices, links, and firewall policies are enrolled into our 24x7 NOC monitoring platform.",
          "Threshold-based alerting flags latency, packet loss, link-down events, and abnormal traffic patterns in real time.",
          "Firewall rule changes are handled through a documented change-request process with audit trail.",
          "Security events are triaged by our team, with escalation to you for anything requiring a business decision.",
        ],
        managed: [
          "24x7 network and link monitoring",
          "Firewall rule management and change control",
          "Security event triage and escalation",
          "Incident response coordination",
        ],
        you: [
          "Application-level security policy decisions",
          "Business approval for major network changes",
        ],
        specs: [
          ["Coverage", "24x7x365 NOC monitoring"],
          ["Alerting", "Real-time threshold and anomaly alerts"],
          ["Change control", "Documented request/approval workflow"],
          ["Escalation", "Defined SLA response tiers"],
        ],
        best: [
          "Businesses needing continuous network oversight without a 24x7 in-house team",
          "Multi-site operations requiring centralized network visibility",
        ],
      },
    ],
  },
  "/data-protection": {
    title: "Data Protection",
    heroDesc:
      "Backup, disaster recovery, and object storage — engineered so a bad day doesn't become a bad year.",
    intro:
      "Data Protection covers the layer that matters most when something goes wrong: getting your systems and data back. We combine scheduled backups, replicated disaster recovery, and resilient object storage so you can choose a recovery posture that matches your risk tolerance and budget.",
    tabs: [
      "Backup & Recovery",
      "Disaster Recovery (DR)",
      "Object Storage & Ransomware Protection",
    ],
    sections: [
      {
        title: "Backup & Recovery",
        desc: "Scheduled, verified backups of your servers and data, with defined retention and tested restore procedures.",
        steps: [
          "We agree on a backup schedule and retention policy aligned to your Recovery Point Objective (RPO).",
          "Backups run automatically — full and incremental — to storage isolated from your production environment.",
          "Backup integrity is periodically verified through test restores.",
          "When you need a restore, our team executes it under your agreed Recovery Time Objective (RTO).",
        ],
        managed: [
          "Backup scheduling, execution, and monitoring",
          "Retention policy enforcement",
          "Backup integrity verification",
          "Restore execution on request",
        ],
        you: [
          "Defining RPO/RTO requirements for your workloads",
          "Identifying which systems/data need backup coverage",
        ],
        specs: [
          ["Backup types", "Full and incremental, scheduled"],
          ["Retention", "Configurable per customer requirement"],
          ["Storage isolation", "Backups stored separately from production"],
          ["Restore support", "Assisted restore under agreed RTO"],
        ],
        best: [
          "Any production workload needing a recovery safety net",
          "Compliance programs requiring documented backup evidence",
        ],
      },
      {
        title: "Disaster Recovery (DR)",
        desc: "Replicated standby infrastructure across our Ankleshwar and Indore facilities so operations can fail over if a primary site is impacted.",
        steps: [
          "We assess your critical systems and design a DR architecture (active-passive or active-active) across our two facilities.",
          "Data is replicated to the standby site on a schedule matched to your RPO.",
          "DR runbooks are documented and periodically tested via scheduled failover drills.",
          "In an actual event, failover is executed following the tested runbook to bring systems online at the standby site.",
        ],
        managed: [
          "Cross-site replication infrastructure",
          "DR architecture design and documentation",
          "Scheduled failover testing",
          "Failover execution during a declared incident",
        ],
        you: [
          "Business continuity planning beyond IT infrastructure",
          "Defining which systems are DR-critical",
        ],
        specs: [
          ["Sites", "Ankleshwar (ANK-1) ↔ Indore (IND-1)"],
          ["Replication", "Scheduled or continuous, per RPO requirement"],
          ["Testing", "Periodic failover drills with documented results"],
          ["Model", "Active-passive or active-active, by design"],
        ],
        best: [
          "Businesses with regulatory continuity requirements",
          "Revenue-critical applications that cannot tolerate extended downtime",
        ],
      },
      {
        title: "Object Storage & Ransomware Protection",
        desc: "Resilient, S3-compatible object storage with optional immutability to protect backups from deletion, corruption, or ransomware.",
        steps: [
          "We provision an object storage bucket sized to your capacity needs, accessible via S3-compatible APIs.",
          "Data is stored with redundancy across storage nodes to protect against hardware failure.",
          "Optional write-once-read-many (immutable/locked) retention prevents backups from being altered or deleted — including by a compromised admin account.",
          "Access is controlled via key-based authentication and, where needed, IP allow-listing.",
        ],
        managed: [
          "Storage cluster redundancy and health",
          "Capacity planning and expansion",
          "Immutability/retention-lock enforcement",
        ],
        you: [
          "Bucket access key management",
          "What data is written to storage and its lifecycle policy",
        ],
        specs: [
          ["API", "S3-compatible object storage"],
          ["Redundancy", "Distributed across storage nodes"],
          [
            "Immutability",
            "Optional WORM/retention-lock for ransomware resilience",
          ],
          ["Access control", "Key-based auth, optional IP allow-listing"],
        ],
        best: [
          "Backup targets that must survive a ransomware event",
          "Archival and compliance data retention",
          "Application data requiring durable object storage",
        ],
      },
    ],
  },
  "/interconnection": {
    title: "Interconnection",
    heroDesc:
      "Carrier-neutral connectivity, cross-connects, and direct cloud on-ramps — your network, meeting everyone else's.",
    intro:
      "Interconnection is what turns a data center into a hub. Our facilities are carrier-neutral, meaning you're never locked into a single ISP, and we provide the physical and logical connectivity — cross-connects, carrier access, and cloud on-ramps — to link your infrastructure with the rest of the internet and the major public clouds.",
    tabs: ["Carrier Connectivity", "Cross-Connects", "Cloud On-Ramp"],
    sections: [
      {
        title: "Carrier Connectivity",
        desc: "Multiple carrier options inside a carrier-neutral facility, so you choose your upstream provider rather than being locked to one.",
        steps: [
          "Our facilities host multiple carriers (including Airtel, Jio, and BSNL at IND-1), giving you a choice of upstream providers.",
          "You select a primary and, optionally, a secondary carrier for redundancy.",
          "Carrier circuits terminate in our meet-me room and connect to your rack via structured cabling.",
          "Bandwidth can be scaled or a carrier changed without relocating your equipment.",
        ],
        managed: [
          "Meet-me room infrastructure and structured cabling",
          "Carrier relationship coordination on-site",
          "Physical circuit termination",
        ],
        you: [
          "Carrier contract and service selection",
          "Your own routing/BGP configuration, where applicable",
        ],
        specs: [
          ["Facility type", "Carrier-neutral"],
          ["Carriers available", "Airtel, Jio, BSNL, others on request"],
          ["Redundancy", "Primary + secondary carrier options"],
          ["Termination", "Meet-me room to your rack via structured cabling"],
        ],
        best: [
          "ISPs and network operators needing carrier choice",
          "Businesses wanting redundant upstream connectivity",
        ],
      },
      {
        title: "Cross-Connects",
        desc: "Direct, private physical connections between your rack and another tenant, carrier, or cloud on-ramp inside the same facility.",
        steps: [
          "You request a cross-connect to a specific carrier, partner, or cloud on-ramp present in the facility.",
          "Our facilities team runs a dedicated fiber or copper cross-connect through the structured cabling plant.",
          "The connection is tested end-to-end before handover.",
          "Cross-connects can be added or reconfigured as your interconnection needs change.",
        ],
        managed: [
          "Physical cross-connect installation and testing",
          "Cable plant management within the facility",
        ],
        you: ["Configuration of the equipment on either end of the connection"],
        specs: [
          ["Medium", "Fiber or copper, per requirement"],
          ["Provisioning", "On request, subject to facility cabling"],
          ["Testing", "End-to-end verification before handover"],
          ["Use", "Private, low-latency links within the facility"],
        ],
        best: [
          "Connecting to a carrier or partner co-located in the same facility",
          "Private links to a cloud on-ramp without traversing the public internet",
        ],
      },
      {
        title: "Cloud On-Ramp",
        desc: "Direct, private connectivity from your colocated infrastructure into major public cloud platforms — bypassing the public internet.",
        steps: [
          "We help you provision a direct connection service (equivalent to AWS Direct Connect / Azure ExpressRoute-style connectivity) from our facility to your chosen public cloud region.",
          "Traffic between your colocated systems and your cloud environment travels over a private, dedicated path instead of the public internet.",
          "This typically improves latency consistency and can reduce public-internet data-transfer costs on the cloud side.",
          "Bandwidth tiers can be scaled as your hybrid-cloud traffic grows.",
        ],
        managed: [
          "Physical connectivity to the cloud on-ramp partner",
          "Cross-connect provisioning to the on-ramp",
        ],
        you: [
          "Cloud-side configuration (virtual interfaces, routing) with your cloud provider",
          "Cloud provider contract and billing for the direct-connect service",
        ],
        specs: [
          [
            "Model",
            "Private connectivity to public cloud, bypassing public internet",
          ],
          [
            "Typical partners",
            "Major public cloud on-ramp providers present in-region",
          ],
          ["Benefit", "More consistent latency, potential egress savings"],
          ["Use", "Hybrid-cloud and multi-cloud architectures"],
        ],
        best: [
          "Hybrid-cloud deployments splitting workloads between colocation and public cloud",
          "Businesses needing predictable, private connectivity to cloud platforms",
        ],
      },
    ],
  },
  "/edge-colocation": {
    title: "Edge Colocation",
    heroDesc:
      "Ultra-low-latency infrastructure positioned close to where your data is generated — built for AI, IoT, and real-time applications.",
    intro:
      "Edge Colocation places compute and storage physically closer to the source of your data — factory floors, retail sites, and regional user bases — cutting the round-trip time that centralized cloud regions can't avoid. Our Ankleshwar and Indore facilities are designed as regional edge points for Gujarat and Central India's industrial and commercial corridors.",
    tabs: [
      "Micro Edge Nodes",
      "Low-Latency Compute for AI & IoT",
      "5G & Multi-Access Edge Computing (MEC)",
    ],
    sections: [
      {
        title: "Micro Edge Nodes",
        desc: "Compact colocation footprints — from partial racks to a few kW — for regional deployments that don't need a full suite.",
        steps: [
          "We allocate a small, right-sized footprint (partial rack up to a few kW) rather than requiring a minimum full-rack commitment.",
          "Your equipment is installed within our standard modular design, benefiting from the same power, cooling, and security as our larger tenants.",
          "Connectivity and monitoring are provisioned to match a smaller-scale deployment.",
          "You can expand the footprint incrementally as regional demand grows.",
        ],
        managed: [
          "Power, cooling, and physical security for the footprint",
          "Facility-level monitoring and remote-hands support",
        ],
        you: ["Your edge hardware configuration and workloads"],
        specs: [
          ["Footprint", "Partial rack to a few kW"],
          ["Scaling", "Incremental expansion as needed"],
          ["Facilities", "Ankleshwar (ANK-1), Indore (IND-1)"],
          ["Fit", "Regional deployments, branch/retail infrastructure"],
        ],
        best: [
          "Regional retail or branch infrastructure",
          "Localized content caching or processing nodes",
        ],
      },
      {
        title: "Low-Latency Compute for AI & IoT",
        desc: "Edge compute positioned to minimize round-trip time for AI inference, industrial IoT, and sensor-driven workloads.",
        steps: [
          "Compute is deployed at our edge facilities, physically closer to your industrial sites or regional user base than a centralized cloud region.",
          "This reduces network round-trip time for latency-sensitive AI inference and IoT telemetry processing.",
          "High-density rack configurations (2–2.5 kW per rack) support GPU or accelerator-equipped hardware where needed.",
          "Data can be pre-processed at the edge before selectively syncing to central cloud or on-premise systems.",
        ],
        managed: [
          "High-density power and cooling for compute-intensive hardware",
          "Network path optimization within the facility",
        ],
        you: [
          "AI/ML models and inference pipelines",
          "IoT device fleet and data pipeline configuration",
        ],
        specs: [
          ["Rack density", "2–2.5 kW per rack (higher on request)"],
          [
            "Latency benefit",
            "Reduced round-trip vs. centralized cloud regions",
          ],
          [
            "Hardware support",
            "GPU/accelerator-ready configurations available",
          ],
          ["Fit", "AI inference, industrial IoT, sensor networks"],
        ],
        best: [
          "Manufacturing sites in Gujarat's GIDC industrial belt needing local processing",
          "Real-time video analytics and quality-control inference",
        ],
      },
      {
        title: "5G & Multi-Access Edge Computing (MEC)",
        desc: "Edge infrastructure positioned to support 5G-adjacent and multi-access edge computing use cases as regional networks mature.",
        steps: [
          "We provide colocation footprint and connectivity suited to hosting MEC application servers close to regional network infrastructure.",
          "Carrier-neutral connectivity (Section: Interconnection) allows integration with multiple telecom partners.",
          "Low-latency positioning supports use cases like real-time analytics, AR/VR back-end processing, and connected-vehicle applications as they develop regionally.",
          "Capacity can be reserved ahead of rollout and scaled as adoption grows.",
        ],
        managed: [
          "Facility readiness (power, cooling, connectivity) for MEC-class hardware",
          "Carrier-neutral interconnection to telecom partners",
        ],
        you: ["MEC application development and telecom partner integration"],
        specs: [
          [
            "Positioning",
            "Regional edge, close to Gujarat/Central India network infrastructure",
          ],
          ["Connectivity", "Carrier-neutral, multi-telecom capable"],
          ["Fit", "MEC applications, connected-vehicle, AR/VR backends"],
          ["Scaling", "Reserved capacity, incremental rollout"],
        ],
        best: [
          "Telecom and system-integrator partners piloting MEC applications",
          "Applications anticipating regional 5G-adjacent low-latency demand",
        ],
      },
    ],
  },
};

function Console() {
  const [section, setSection] = useState("Dashboard");
  const [modal, setModal] = useState(null);
  const [cmd, setCmd] = useState("");
  const [servers, setServers] = useState([]);
  const nav = [
    "Dashboard",
    "Compute",
    "Storage",
    "Networking",
    "Connectivity",
    "Billing",
    "Settings",
  ];
  return (
    <div className="console-wrap">
      <div className="console-shell">
        <aside className="console-side">
          <Link to="/" className="console-brand">
            <span className="brand-mark">
              <span />
            </span>
            <b>DATENFARMEN</b>
            <small>Cloud Console</small>
          </Link>
          <div className="console-nav">
            {nav.map((x) => (
              <button
                key={x}
                className={section === x ? "active" : ""}
                onClick={() => setSection(x)}
              >
                {x}
              </button>
            ))}
          </div>
          <Link to="/" className="console-back">
            ← Back to Website
          </Link>
        </aside>
        <main className="console-main">
          <div className="console-topbar">
            <input placeholder="Search servers, volumes, invoices..." />
            <div className="admin">
              AD <span>Admin</span>
            </div>
          </div>
          <div className="console-content">
            <div className="console-head">
              <div>
                <span className="eyebrow">Cloud Console</span>
                <h1>{section}</h1>
                <p>
                  Here's what's happening across your Datenfarmen
                  infrastructure.
                </p>
              </div>
              {section === "Dashboard" || section === "Compute" ? (
                <button
                  className="button primary"
                  onClick={() => setModal("create")}
                >
                  Create Server
                  <ArrowRight size={17} />
                </button>
              ) : null}
            </div>
            <ConsoleSection
              section={section}
              servers={servers}
              setModal={setModal}
              setServers={setServers}
            />
          </div>
        </main>
      </div>
      {modal && (
        <Modal
          onClose={() => setModal(null)}
          title={
            modal === "create"
              ? "Create a New Server"
              : modal === "delete"
              ? "Delete Server"
              : "Console — instance"
          }
        >
          {modal === "create" ? (
            <CreateServer
              onDone={(s) => {
                if (s) setServers((v) => [...v, s]);
                setModal(null);
              }}
            />
          ) : modal === "delete" ? (
            <DeleteServer
              onCancel={() => setModal(null)}
              onDone={() => {
                setServers([]);
                setModal(null);
              }}
            />
          ) : (
            <Terminal cmd={cmd} setCmd={setCmd} />
          )}
        </Modal>
      )}
    </div>
  );
}
function ConsoleSection({ section, servers, setModal }) {
  if (section === "Dashboard")
    return (
      <>
        <div className="console-metrics">
          {[
            ["Active Instances", servers.length, "of 0 total"],
            ["Est. Monthly Spend", "₹0", "Across all running services"],
            ["Data Transfer Used", "184 GB", "of 1 TB pooled allowance"],
            ["Network SLA", "99.5%", "Uptime commitment (Dedicated ILL)"],
          ].map((m) => (
            <div key={m[0]}>
              <span>{m[0]}</span>
              <strong>{m[1]}</strong>
              <small>{m[2]}</small>
            </div>
          ))}
        </div>
        <div className="console-card">
          <h3>Compute usage — last 7 days</h3>
          <div className="fake-chart">
            <span>Aggregate CPU %, all instances</span>
            <div className="chart-bars">
              {[35, 52, 42, 60, 46, 71, 55].map((h, i) => (
                <i style={{ height: h + "%" }} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="console-card">
          <div className="card-head">
            <h3>Your servers</h3>
            <button className="text-link" onClick={() => setModal("create")}>
              Create Server
            </button>
          </div>
          {servers.length ? (
            servers.map((s, i) => (
              <div className="server-row" key={i}>
                <span>
                  <Server size={17} />
                  <b>{s.hostname}</b>
                </span>
                <em>{s.plan}</em>
                <span>{s.region}</span>
              </div>
            ))
          ) : (
            <div className="empty">No servers yet.</div>
          )}
        </div>
      </>
    );
  if (section === "Compute")
    return (
      <div className="console-card">
        <h3>Compute</h3>
        <p>Manage your Edge Compute servers across Ankleshwar and Indore.</p>
        {servers.length ? (
          servers.map((s, i) => (
            <div className="server-row" key={i}>
              <span>
                <Server size={17} />
                <b>{s.hostname}</b>
              </span>
              <em>{s.plan}</em>
              <span>{s.region}</span>
              <button
                className="button danger small"
                onClick={() => setModal("delete")}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="empty">No active instances.</div>
        )}
      </div>
    );
  if (section === "Storage")
    return (
      <div className="console-card">
        <div className="card-head">
          <h3>Storage</h3>
          <button
            className="button secondary"
            onClick={() => alert("Attach Volume flow")}
          >
            Attach Volume
          </button>
        </div>
        <p>Business Cloud Storage volumes attached to your account.</p>
        <div className="empty">No attached volumes.</div>
      </div>
    );
  if (section === "Networking")
    return (
      <div className="console-card">
        <h3>Networking</h3>
        <p>IP addresses and firewall rules for your environment.</p>
        <div className="mini-panels">
          <div>
            <span>IP Addresses</span>
            <strong>Add IPv4 (₹250/mo)</strong>
          </div>
          <div>
            <span>Firewall Rules</span>
            <strong>No rules configured.</strong>
          </div>
        </div>
      </div>
    );
  if (section === "Connectivity")
    return (
      <div className="console-card">
        <h3>Connectivity</h3>
        <p>Your active data & bandwidth plans.</p>
        <div className="connectivity-grid">
          <div>
            <span>Active Plan</span>
            <strong>SF 300</strong>
            <small>1:10 Shared · 300 Mbps committed</small>
          </div>
          <div>
            <span>Burstable Speed</span>
            <strong>390 Mbps</strong>
            <small>30% extra, included</small>
          </div>
          <div>
            <span>Monthly Rate</span>
            <strong>₹14,990</strong>
            <small>Billed monthly</small>
          </div>
        </div>
        <div className="notice">
          Need dedicated bandwidth, or a pure data-transfer plan for backups and
          CDN? Compare the full range — Dedicated (ILL), Shared, and Pure Data
          Transfer — on the Pricing page.
        </div>
        <Link className="button secondary" to="/pricing">
          View Data & Connectivity Plans
        </Link>
      </div>
    );
  if (section === "Billing")
    return (
      <div className="console-card">
        <div className="connectivity-grid">
          <div>
            <span>This Month's Estimate</span>
            <strong>₹0</strong>
            <small>Compute + Storage + Connectivity</small>
          </div>
          <div>
            <span>Payment Method</span>
            <strong>•••• 4471</strong>
            <small>Visa, expires 08/28</small>
          </div>
          <div>
            <span>Next Invoice</span>
            <strong>1 Aug 2026</strong>
            <small>Auto-billed monthly</small>
          </div>
        </div>
        <h3>Invoice History</h3>
        <PriceTable
          rows={[
            [
              "INV-2026-0619",
              "1 Jul 2026",
              "Compute + Connectivity",
              "₹24,480 · Paid",
            ],
            [
              "INV-2026-0518",
              "1 Jun 2026",
              "Compute + Connectivity",
              "₹22,980 · Paid",
            ],
            [
              "INV-2026-0417",
              "1 May 2026",
              "Compute + Connectivity",
              "₹22,980 · Paid",
            ],
          ]}
        />
      </div>
    );
  return (
    <div className="console-card">
      <h3>Settings</h3>
      <p>Account details and API access.</p>
      <div className="form-grid two">
        <Field label="Full Name" />
        <Field label="Email" />
        <Field label="Company" />
        <Field label="Phone" />
      </div>
      <div className="settings-actions">
        <button className="button primary">Save Changes</button>
        <h4>API Access</h4>
        <Field label="API Key" />
        <button className="button secondary">Regenerate Key</button>
        <h4>Danger Zone</h4>
        <p>
          Closing your account will schedule deletion of all instances, volumes,
          and data after the notice period in your service agreement.
        </p>
        <button className="button danger">Close Account</button>
      </div>
    </div>
  );
}
function CreateServer({ onDone }) {
  const [s, setS] = useState({
    hostname: "",
    plan: "Edge Micro",
    region: "Indore",
    os: "Ubuntu",
  });
  return (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();
        onDone(s);
      }}
    >
      <Field
        label="Hostname"
        placeholder="e.g. app-server-01"
        required
        value={s.hostname}
        onChange={(e) => setS({ ...s, hostname: e.target.value })}
      />
      <label className="field">
        <span>Plan</span>
        <select
          value={s.plan}
          onChange={(e) => setS({ ...s, plan: e.target.value })}
        >
          <option>Edge Micro</option>
          <option>Edge Small</option>
          <option>Edge Medium</option>
          <option>Edge Large</option>
          <option>Edge Scale</option>
        </select>
      </label>
      <label className="field">
        <span>Region</span>
        <select
          value={s.region}
          onChange={(e) => setS({ ...s, region: e.target.value })}
        >
          <option>Indore</option>
          <option>Ankleshwar</option>
        </select>
      </label>
      <label className="field">
        <span>Operating System</span>
        <select
          value={s.os}
          onChange={(e) => setS({ ...s, os: e.target.value })}
        >
          <option>Ubuntu</option>
          <option>Debian</option>
          <option>CentOS</option>
          <option>Windows Server</option>
        </select>
      </label>
      <label className="check-field">
        <input type="checkbox" /> Enable daily backups (+10% of plan price)
      </label>
      <div className="modal-actions">
        <button
          className="button secondary"
          type="button"
          onClick={() => onDone(null)}
        >
          Cancel
        </button>
        <button className="button primary">Deploy Server</button>
      </div>
    </form>
  );
}
function DeleteServer({ onCancel, onDone }) {
  return (
    <div>
      <p>
        Are you sure you want to delete ? This will permanently remove the
        instance, any unattached local storage. This action cannot be undone.
      </p>
      <div className="modal-actions">
        <button className="button secondary" onClick={onCancel}>
          Cancel
        </button>
        <button className="button danger" onClick={onDone}>
          Delete Permanently
        </button>
      </div>
    </div>
  );
}
function Terminal({ cmd, setCmd }) {
  return (
    <div className="terminal">
      <div className="terminal-output">
        $ {cmd || "help"}
        <br />
        <span>status · uptime · ls</span>
      </div>
      <div className="terminal-input">
        <span>$</span>
        <input
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          placeholder="Type a command (try: help, status, uptime, ls)"
        />
      </div>
    </div>
  );
}

function LegalPage({ type }) {
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
const privacySections = [
  {
    title: "Introduction & Scope",
    body: [
      {
        text: 'Datenfarmen Centers LLP ("Datenfarmen", "we", "us", "our") operates data center facilities at Ankleshwar and Indore, Gujarat, India, and provides colocation, managed services, cloud compute, storage, and connectivity services (together, the "Services"). This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, request a quote, or use our Services.',
      },
      {
        text: "This policy is drafted in line with India's Digital Personal Data Protection Act, 2023 (DPDP Act), the Information Technology Act, 2000 and its associated rules, and, where applicable to visitors from the European Economic Area, the principles of the General Data Protection Regulation (GDPR).",
      },
    ],
  },
  {
    title: "Information We Collect",
    body: [
      { text: "2.1 Information you provide to us" },
      {
        type: "list",
        items: [
          "Contact details submitted via our website forms, chatbot, or email (name, company, email, phone number, message content).",
          "Account and billing information for customers (billing address, GSTIN/PAN where applicable, payment details processed by our payment partners).",
          "Job application materials submitted through our Careers page (resume, cover letter, contact details).",
          "Correspondence you send us, including support tickets and service requests.",
        ],
      },
      { text: "2.2 Information collected automatically" },
      {
        type: "list",
        items: [
          "Standard web log data (IP address, browser type, device type, pages visited, referring URL, timestamps).",
          "Cookies and similar technologies as described in Section 4.",
          "Physical access logs at our facilities for registered visitors and authorized personnel (CCTV, biometric or badge access records) where you visit a Datenfarmen site.",
        ],
      },
    ],
  },
  {
    title: "How We Use Information",
    body: [
      {
        type: "list",
        items: [
          "To respond to inquiries, prepare quotations, and provision requested Services.",
          "To manage customer accounts, billing, invoicing, and contract administration.",
          "To operate, maintain, and improve our website, network, and facility security.",
          "To send service notices, maintenance windows, and — where you have opted in — newsletters or marketing communications.",
          "To comply with legal, regulatory, tax, and law-enforcement obligations.",
          "To evaluate job applications submitted through our Careers page.",
        ],
      },
    ],
  },
  {
    title: "Cookies & Tracking Technologies",
    body: [
      {
        text: "Our website uses strictly necessary cookies (for example, to remember your cookie preference and maintain form sessions) and, where enabled, analytics cookies to understand site usage. You can control or disable cookies through your browser settings; disabling non-essential cookies will not affect your ability to browse the site, though some interactive features may be limited.",
      },
    ],
  },
  {
    title: "Sharing & Disclosure",
    body: [
      {
        text: "We do not sell personal information. We may share information with:",
      },
      {
        type: "list",
        items: [
          "Service providers who support our operations (payment processors, email/CRM platforms, form-handling providers such as Formspree, cloud hosting for our website), bound by confidentiality obligations.",
          "Professional advisors such as auditors, insurers, and legal counsel, as needed.",
          "Regulators and law enforcement, where required by applicable law, court order, or government request.",
          "A successor entity in the event of a merger, acquisition, or sale of assets, subject to equivalent privacy protections.",
        ],
      },
    ],
  },
  {
    title: "Data & Facility Security",
    body: [
      {
        text: "We maintain layered technical and physical security controls appropriate to a Tier-style data center operator, including:",
      },
      {
        type: "list",
        items: [
          "Perimeter security, biometric and card access control, and continuous CCTV monitoring at our Ankleshwar (ANK-1) and Indore (IND-1) facilities.",
          "Network segmentation, firewalling, and access logging for administrative systems.",
          "Encryption in transit for data submitted through our website (HTTPS/TLS).",
          "Role-based access to customer account and billing information, limited to personnel who need it to perform their duties.",
        ],
      },
      {
        text: "No method of transmission or storage is 100% secure. While we work to protect information using commercially reasonable safeguards, we cannot guarantee absolute security.",
      },
    ],
  },
  {
    title: "Data Retention",
    body: [
      {
        text: "We retain personal information for as long as necessary to fulfil the purposes described in this policy, including satisfying legal, accounting, contractual, or reporting requirements. Billing and contract records are typically retained for the periods required under Indian tax and corporate law. Website inquiry data not converted to a customer relationship is retained for a limited period and then deleted or anonymized.",
      },
    ],
  },
  {
    title: "Hosted Customer Data",
    body: [
      {
        text: 'Where a customer hosts its own applications, servers, or content within our colocation, cloud, or edge compute environments ("Customer Data"), Datenfarmen acts as an infrastructure and hosting provider, not as the data controller of that Customer Data. The customer remains solely responsible for the legality, security configuration, backup, and compliance of the Customer Data it hosts with us, unless a specific Managed Services agreement states otherwise.',
      },
      {
        text: "Datenfarmen does not access, inspect, or use Customer Data except as necessary to deliver the Service, to respond to a technical support request from the customer, or as required by law.",
      },
    ],
  },
  {
    title: "Your Rights",
    body: [
      { text: "Subject to applicable law, you may have the right to:" },
      {
        type: "list",
        items: [
          "Request access to, or a copy of, personal information we hold about you.",
          "Request correction of inaccurate or incomplete information.",
          "Request erasure of personal information, where applicable, or withdraw consent for marketing communications at any time.",
          "Object to or restrict certain processing activities.",
          "Lodge a grievance with our Grievance Officer (Section 14) or the relevant data protection authority.",
        ],
      },
      {
        text: "To exercise any of these rights, contact us using the details in Section 14. We may need to verify your identity before processing a request.",
      },
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      {
        text: "Our website and Services are directed at businesses and professionals and are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
      },
    ],
  },
  {
    title: "International Data Transfers",
    body: [
      {
        text: "Our facilities and primary operations are based in Gujarat, India. Where a service provider we use processes data outside India, we take reasonable steps to ensure equivalent protections through contractual safeguards.",
      },
    ],
  },
  {
    title: "Third-Party Links",
    body: [
      {
        text: "Our website may link to third-party sites, including social media platforms and map services. We are not responsible for the privacy practices of those third parties; please review their respective policies.",
      },
    ],
  },
  {
    title: "Changes to this Policy",
    body: [
      {
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last updated" date at the top of this page indicates when it was last revised. Material changes will be highlighted on this page.',
      },
    ],
  },
  {
    title: "Contact & Grievance Officer",
    body: [
      {
        text: "For questions about this Privacy Policy or to exercise your rights, please contact:",
      },
      {
        text: "Datenfarmen Centers LLP\nAnkleshwar, Gujarat, India\nEmail: info@datenfarmen.com\nPhone: +91 98925 50902",
      },
      {
        text: 'Grievance Officer (as required under the Information Technology Act, 2000 and applicable rules): available at the above email address, marked "Attn: Grievance Officer".',
      },
    ],
  },
];
const termsSections = [
  {
    title: "Acceptance of Terms",
    body: [
      {
        text: 'These Terms & Conditions ("Terms") govern access to and use of the website www.datenfarmen.com and all colocation, managed services, cloud compute, storage, and connectivity services (together, the "Services") offered by Datenfarmen Centers LLP ("Datenfarmen", "we", "us").',
      },
      {
        text: 'By accessing our website, submitting an inquiry, signing an order form, or using any Service, you ("Customer", "you") agree to be bound by these Terms and any service-specific schedules (including a signed Service Order, SLA schedule, or Master Services Agreement) referenced herein. Where a signed agreement conflicts with these Terms, the signed agreement prevails.',
      },
    ],
  },
  {
    title: "Definitions",
    body: [
      {
        text: "Facility — Datenfarmen's data center sites at Ankleshwar (ANK-1) and Indore (IND-1), Gujarat, India.",
      },
      {
        text: "Services — Colocation, Cloud Compute (Edge tiers), Cloud Storage, Data & Connectivity plans, Managed Services, and related add-ons as described on our Pricing page.",
      },
      {
        text: "Customer Data — Any content, applications, or data that Customer or its end users upload, host, process, or transmit using the Services.",
      },
      {
        text: "SLA — The Service Level Agreement schedule governing uptime commitments for a given Service tier.",
      },
      {
        text: "Order — A quotation, order form, or online configuration (e.g., via our Pricing page configurator) accepted by both parties.",
      },
    ],
  },
  {
    title: "Description of Services",
    body: [
      {
        text: "Datenfarmen provides: (a) rack, cage, and suite colocation under Plan A (Wholesale/Anchor Tenant), Plan B (Retail Co-Location), and Plan C (Managed Premium); (b) Edge Compute virtual servers (Edge Micro through Edge Scale); (c) Business Cloud Storage tiers; (d) Data & Connectivity plans (1:1 Dedicated ILL, 1:10 Shared, and Pure Data Transfer); and (e) associated utilities such as IPv4 addresses, physical security, and data migration services, each as further described on our Pricing page and incorporated into these Terms by reference.",
      },
      {
        text: "Specifications, features, and pricing are subject to change with notice as described in Section 18.",
      },
    ],
  },
  {
    title: "Accounts & Eligibility",
    body: [
      {
        text: "You must provide accurate, current, and complete information when requesting or ordering Services and keep such information updated. You are responsible for maintaining the confidentiality of any account credentials, access badges, or API keys issued to you, and for all activities conducted under your account.",
      },
    ],
  },
  {
    title: "Pricing, Orders & Payment",
    body: [
      {
        type: "list",
        items: [
          "All prices published on our Pricing page are exclusive of applicable taxes (GST and other government levies as applicable) unless stated otherwise.",
          "Fixed monthly fees, variable power charges (per unit), and metered add-ons (bandwidth, storage, migration) are billed as described in the applicable Order.",
          "Standard billing cycles are monthly in advance, with variable/usage-based components billed in arrears based on actual consumption.",
          "A flexible locking period may apply to certain Data & Connectivity and Colocation plans as specified in the Order; early termination within a locked period may incur pro-rata charges.",
          "Late payments may attract interest and/or suspension of Services after notice, as set out in Section 10.",
        ],
      },
    ],
  },
  {
    title: "Service Levels (SLA)",
    body: [
      {
        text: 'Where a Service includes an SLA — for example, our 99.5% network availability commitment on 1:1 Dedicated (ILL) connectivity and Plan C (Managed Premium) colocation — the specific uptime target, measurement methodology, exclusions, and service-credit remedy are set out in the applicable SLA schedule provided with your Order. Services offered on a "best-effort" or "no SLA" basis (for example, Pure Data Transfer and Shared 1:10 connectivity) are provided without an uptime guarantee.',
      },
    ],
  },
  {
    title: "Acceptable Use Policy",
    body: [
      {
        text: "You agree not to use the Services to: transmit unlawful, defamatory, or infringing content; distribute malware, conduct network attacks, or engage in unauthorized scanning/intrusion of third-party systems; send unsolicited bulk communications (spam); violate the intellectual property or privacy rights of others; or engage in any activity that threatens the security, integrity, or availability of the Facility or other customers' environments.",
      },
      {
        text: "We reserve the right to investigate suspected violations and to suspend affected Services pending resolution, as described in Section 10.",
      },
    ],
  },
  {
    title: "Customer Data & Backups",
    body: [
      {
        text: "Except where you have purchased a specific backup, disaster recovery, or managed-backup service, you are solely responsible for backing up your Customer Data. Datenfarmen is not liable for loss of Customer Data arising from Customer-managed systems, software, or configurations. You retain all right, title, and interest in your Customer Data; Datenfarmen claims no ownership over it and will not access it except as described in our Privacy Policy.",
      },
    ],
  },
  {
    title: "Facility Access & Security",
    body: [
      {
        text: "Access to our Facilities is restricted to authorized personnel and pre-registered visitors, subject to identity verification, biometric/badge access control, and applicable safety and escort procedures. Customers accessing colocation space must comply with our facility rules, including restrictions on hazardous materials, equipment weight/power limits, and working-hours notification for on-site maintenance.",
      },
    ],
  },
  {
    title: "Suspension & Termination",
    body: [
      {
        type: "list",
        items: [
          "We may suspend or restrict a Service, with notice where reasonably practicable, for non-payment, a suspected Acceptable Use Policy violation, a security threat to the Facility or other customers, or as required by law.",
          "Either party may terminate an Order for material breach not cured within 30 days of written notice.",
          "Standard contract terms typically run for 24 months from the Service start date, renewing thereafter unless either party gives written notice of non-renewal as specified in the Order; specific term lengths and notice periods are set out in your signed Order.",
          "Upon termination, Customer must remove its equipment and Customer Data from the Facility within the period specified in the Order; Datenfarmen may treat unclaimed equipment or data thereafter in accordance with the Order terms.",
        ],
      },
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      {
        text: "All Datenfarmen trademarks, service marks, website content, and documentation remain the property of Datenfarmen Centers LLP. Customer Data and Customer's own intellectual property remain the property of Customer. Nothing in these Terms transfers ownership of either party's pre-existing intellectual property to the other.",
      },
    ],
  },
  {
    title: "Confidentiality",
    body: [
      {
        text: "Each party agrees to protect the other's confidential information disclosed in connection with the Services with the same degree of care it uses for its own confidential information of similar nature, and not to disclose it to third parties except as permitted under an Order, required by law, or necessary to perform the Services (including to sub-processors bound by confidentiality obligations).",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      {
        text: "To the maximum extent permitted by applicable law, Datenfarmen's aggregate liability arising out of or relating to the Services in any twelve-month period shall not exceed the fees paid by Customer for the affected Service during that period. Neither party shall be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, or data, except in cases of gross negligence, willful misconduct, or as otherwise required by applicable law.",
      },
      {
        text: "Any SLA service credits constitute Customer's sole and exclusive remedy for a failure to meet an uptime commitment, unless the applicable SLA schedule states otherwise.",
      },
    ],
  },
  {
    title: "Indemnification",
    body: [
      {
        text: "Customer agrees to indemnify and hold Datenfarmen harmless from third-party claims arising from Customer's Data, Customer's use of the Services in violation of these Terms or applicable law, or Customer's breach of the Acceptable Use Policy. Datenfarmen agrees to indemnify Customer from third-party claims that the Services, as provided by Datenfarmen and used in accordance with these Terms, infringe a third party's intellectual property rights, subject to the limitations in Section 13.",
      },
    ],
  },
  {
    title: "Force Majeure",
    body: [
      {
        text: "Neither party shall be liable for delay or failure to perform obligations (excluding payment obligations) due to causes beyond its reasonable control, including natural disasters, fire, flood, grid power failures beyond our hybrid backup capacity, war, civil unrest, government action, pandemic, or widespread internet/telecom carrier outages.",
      },
    ],
  },
  {
    title: "Governing Law & Disputes",
    body: [
      {
        text: "These Terms are governed by the laws of India. Subject to any arbitration clause in a signed Order, the courts of Bharuch/Ankleshwar, Gujarat shall have exclusive jurisdiction over disputes arising from these Terms. Where an Order specifies arbitration, disputes shall be referred to a sole arbitrator under the Arbitration and Conciliation Act, 1996, seated in Gujarat, India, with proceedings conducted in English.",
      },
    ],
  },
  {
    title: "General Provisions",
    body: [
      {
        type: "list",
        items: [
          "Changes to these Terms: We may update these Terms from time to time; continued use of the Services after an update constitutes acceptance of the revised Terms. Material changes affecting active Orders will be communicated with reasonable notice.",
          "Severability: If any provision of these Terms is held invalid, the remaining provisions continue in full force.",
          "Entire Agreement: These Terms, together with any signed Order and SLA schedule, constitute the entire agreement between the parties regarding the Services and supersede prior discussions on the same subject matter.",
          "Assignment: Customer may not assign an Order without Datenfarmen's prior written consent, not to be unreasonably withheld.",
        ],
      },
    ],
  },
  {
    title: "Contact Us",
    body: [
      {
        text: "For questions about these Terms or an active Service Order, please contact:",
      },
      {
        text: "Datenfarmen Centers LLP\nAnkleshwar, Gujarat, India\nEmail: info@datenfarmen.com\nPhone: +91 98925 50902",
      },
    ],
  },
];
function ChatBubble({ open, setOpen }) {
  const [input, setInput] = useState("");
  return (
    <>
      {open && (
        <div className="chat-window">
          <div className="chat-head">
            <div>
              <strong>Datenfarmen Assistant</strong>
              <small>Online</small>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-msg">
              Hello! I am the Datenfarmen service assistant. Ask me about our
              Cloud, Colocation, or Indore facility!
            </div>
            {input && <div className="chat-msg user">{input}</div>}
          </div>
          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              setInput("");
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services..."
            />
            <button>
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
      <button
        className="chat-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label="Datenfarmen Assistant"
      >
        <CircleHelp size={21} />
      </button>
    </>
  );
}
function Modal({ title, onClose, children }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-head">
          <h2>{title}</h2>
          <button onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found"
        description="The requested page could not be found."
      />
      <div className="center-link">
        <Link className="button primary" to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
