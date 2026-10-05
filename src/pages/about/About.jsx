import { useState } from "react";
import { ArrowRight, Check, Send, Shield, Sparkles, Zap } from "lucide-react";
import { Field } from "../../components/Field.jsx";
import { IconCard } from "../../components/IconCard.jsx";
import { Modal } from "../../components/Modal.jsx";
import { PageHero } from "../../components/PageHero.jsx";
import { Section } from "../../components/Section.jsx";
export function About() {
  const [activeTab, setActiveTab] = useState("Company");
  const [job, setJob] = useState(null);

  const tabs = ["Company", "Leadership", "Innovation", "Careers"];

  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About Datenfarmen Centers"
        description="Building the foundation for India's digital future."
      />

      <Section>
        <div
          className="tabs static-tabs"
          role="tablist"
          aria-label="About Datenfarmen Centers sections"
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
                Combining solar energy with grid power in a hybrid system
                enhances long-term <strong>sustainability</strong> by seamlessly
                balancing renewable generation with reliable utility backup.
              </p>
              <div className="mission-vision-grid">
                <article className="card icon-card">
                  <span className="icon-chip large" aria-hidden="true">
                    <span className="mission-vision-icon-shape mission-icon" />
                  </span>
                  <h3>Mission</h3>
                  <p>
                    To deploy scalable micro-edge data centers across Tier 3,
                    Tier 4, and rural locations while delivering affordable
                    cloud, storage, cybersecurity, and managed IT services that
                    enable businesses to digitally transform with reliability,
                    speed, and efficiency.
                  </p>
                </article>
                <article className="card icon-card">
                  <span className="icon-chip large" aria-hidden="true">
                    <span className="mission-vision-icon-shape vision-icon" />
                  </span>
                  <h3>Vision</h3>
                  <p>
                    To become India’s leading regional edge infrastructure
                    provider, empowering underserved markets with accessible,
                    sustainable, and enterprise-grade digital solutions.
                  </p>
                </article>
                <figure className="mission-vision-media">
                  <img
                    src="/mission_image.jpeg"
                    alt="Datenfarmen operations team monitoring global infrastructure from the network operations center"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
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
                  At Datenfarmen Centers, innovation isn't just a buzzword; it's
                  our architectural philosophy. We utilize a modular data center
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
// function Field({
//   label,
//   placeholder,
//   type = "text",
//   required = false,
//   area = false,
//   value,
//   onChange,
// }) {
//   return (
//     <label className="field">
//       <span>{label}</span>
//       {area ? (
//         <textarea placeholder={placeholder} value={value} onChange={onChange} />
//       ) : (
//         <input
//           placeholder={placeholder}
//           type={type}
//           required={required}
//           value={value}
//           onChange={onChange}
//         />
//       )}
//     </label>
//   );
// }
