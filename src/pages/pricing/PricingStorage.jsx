import { STORAGE_PLANS } from "../../content/pricing.js";
import { PricingPlanCard } from "./PricingPlanCard.jsx";
import { PricingSectionHeading } from "./PricingSectionHeading.jsx";
export function PricingStorage() {
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
