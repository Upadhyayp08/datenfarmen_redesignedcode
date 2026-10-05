import { COLO_PLANS } from "../../content/pricing.js";
import { PricingPlanCard } from "./PricingPlanCard.jsx";
import { PricingSectionHeading } from "./PricingSectionHeading.jsx";
export function PricingColocation() {
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
