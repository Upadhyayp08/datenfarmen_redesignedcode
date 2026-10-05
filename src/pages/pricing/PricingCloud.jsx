import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { EDGE_PLANS } from "../../content/pricing.js";
import { PricingSectionHeading } from "./PricingSectionHeading.jsx";
export function PricingCloud() {
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
