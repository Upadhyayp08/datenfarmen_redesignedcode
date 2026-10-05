import { PricingSectionHeading } from "./PricingSectionHeading.jsx";
export function PricingSolar() {
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
