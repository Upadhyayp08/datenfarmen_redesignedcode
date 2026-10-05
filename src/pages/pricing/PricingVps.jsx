import { VPS_GROUPS } from "../../content/pricing.js";
import { PricingPlanCard } from "./PricingPlanCard.jsx";
import { PricingSectionHeading } from "./PricingSectionHeading.jsx";
export function PricingVps() {
  return (
    <div className="pricing-content">
      {VPS_GROUPS.map((group) => (
        <section className="pricing-group" key={group.title}>
          <PricingSectionHeading
            eyebrow="Datenfarmen Centers"
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
