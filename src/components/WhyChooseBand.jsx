import {
  Building2,
  Cloud,
  Code,
  Coins,
  ConciergeBell,
  GraduationCap,
  Headphones,
  Hospital,
  Landmark,
  Radio,
  Server,
  Shield,
  ShoppingCart,
} from "lucide-react";
import { SafeIcon } from "./SafeIcon.jsx";

const REASONS = [
  ["Cost Efficient", "Lower TCO and operating costs", Coins],
  [
    "Reliable & Secure",
    "Enterprise-grade security and availability",
    Shield,
  ],
  [
    "Flexible & Scalable",
    "Scale resources as your business grows",
    Cloud,
  ],
  [
    "Local Support",
    "24/7 expert support from local teams",
    Headphones,
  ],
];

const INDUSTRIES = [
  ["MSMEs", Building2],
  ["Web Hosters", Server],
  ["ISPs", Radio],
  ["Retail & E-commerce", ShoppingCart],
  ["Restaurants & Hotels", ConciergeBell],
  ["Healthcare & Clinics", Hospital],
  ["Education", GraduationCap],
  ["Developers & SaaS", Code],
  ["FinTech & EdTech", Landmark],
];

export function WhyChooseBand() {
  return (
    <>
      <section className="why-choose-band">
        <div className="container why-choose-inner">
          <h2>
            Why Choose
            <span>Datenfarmen Centers</span>
          </h2>
          <div className="why-choose-points">
            {REASONS.map(([title, text, Icon]) => (
              <div className="why-choose-point" key={title}>
                <span className="why-choose-icon" aria-hidden="true">
                  <SafeIcon icon={Icon} size={40} strokeWidth={1.6} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="solution-industries">
        <div className="container">
          <h2>
            Solutions for <span>Every Industry</span>
          </h2>
          <p>
            Our solutions power businesses across a wide range of industries.
          </p>
          <div className="solution-industries-grid">
            {INDUSTRIES.map(([label, Icon]) => (
              <div className="solution-industry" key={label}>
                <span aria-hidden="true">
                  <SafeIcon icon={Icon} size={42} strokeWidth={1.6} />
                </span>
                <b>{label}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
