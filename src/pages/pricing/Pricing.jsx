import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal.jsx";
import { SafeIcon } from "../../components/SafeIcon.jsx";
import { PRICING_TABS } from "../../content/pricing.js";
import { PricingAddons } from "./PricingAddons.jsx";
import { PricingCloud } from "./PricingCloud.jsx";
import { PricingColocation } from "./PricingColocation.jsx";
import { PricingData } from "./PricingData.jsx";
import { PricingSolar } from "./PricingSolar.jsx";
import { PricingStorage } from "./PricingStorage.jsx";
import { PricingVps } from "./PricingVps.jsx";
import { RequestForm } from "./RequestForm.jsx";
export function Pricing() {
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
          {PRICING_TABS.map((item, i) => (
            <button
              key={item.id}
              className={i === tab ? "active" : ""}
              onClick={() => setTab(i)}
              role="tab"
              aria-selected={i === tab}
            >
              <SafeIcon icon={item.icon} size={15} />
              <span>{item.label}</span>
            </button>
          ))}
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
