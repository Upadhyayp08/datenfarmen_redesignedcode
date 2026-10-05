import { DATA_ROWS } from "../../content/pricing.js";
import { DataPricingTable } from "./DataPricingTable.jsx";
import { PricingSectionHeading } from "./PricingSectionHeading.jsx";
export function PricingData() {
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
