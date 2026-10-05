import { PriceTable } from "../../components/PriceTable.jsx";
import { ADDON_ROWS } from "../../content/pricing.js";
import { PricingSectionHeading } from "./PricingSectionHeading.jsx";
export function PricingAddons() {
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
