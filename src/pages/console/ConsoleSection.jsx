import { Link } from "react-router-dom";
import { Server } from "lucide-react";
import { Field } from "../../components/Field.jsx";
import { PriceTable } from "../../components/PriceTable.jsx";
export function ConsoleSection({ section, servers, setModal }) {
  if (section === "Dashboard")
    return (
      <>
        <div className="console-metrics">
          {[
            ["Active Instances", servers.length, "of 0 total"],
            ["Est. Monthly Spend", "₹0", "Across all running services"],
            ["Data Transfer Used", "184 GB", "of 1 TB pooled allowance"],
            ["Network SLA", "99.5%", "Uptime commitment (Dedicated ILL)"],
          ].map((m) => (
            <div key={m[0]}>
              <span>{m[0]}</span>
              <strong>{m[1]}</strong>
              <small>{m[2]}</small>
            </div>
          ))}
        </div>
        <div className="console-card">
          <h3>Compute usage — last 7 days</h3>
          <div className="fake-chart">
            <span>Aggregate CPU %, all instances</span>
            <div className="chart-bars">
              {[35, 52, 42, 60, 46, 71, 55].map((h, i) => (
                <i style={{ height: h + "%" }} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="console-card">
          <div className="card-head">
            <h3>Your servers</h3>
            <button className="text-link" onClick={() => setModal("create")}>
              Create Server
            </button>
          </div>
          {servers.length ? (
            servers.map((s, i) => (
              <div className="server-row" key={i}>
                <span>
                  <Server size={17} />
                  <b>{s.hostname}</b>
                </span>
                <em>{s.plan}</em>
                <span>{s.region}</span>
              </div>
            ))
          ) : (
            <div className="empty">No servers yet.</div>
          )}
        </div>
      </>
    );
  if (section === "Compute")
    return (
      <div className="console-card">
        <h3>Compute</h3>
        <p>Manage your Edge Compute servers across Ankleshwar and Indore.</p>
        {servers.length ? (
          servers.map((s, i) => (
            <div className="server-row" key={i}>
              <span>
                <Server size={17} />
                <b>{s.hostname}</b>
              </span>
              <em>{s.plan}</em>
              <span>{s.region}</span>
              <button
                className="button danger small"
                onClick={() => setModal("delete")}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="empty">No active instances.</div>
        )}
      </div>
    );
  if (section === "Storage")
    return (
      <div className="console-card">
        <div className="card-head">
          <h3>Storage</h3>
          <button
            className="button secondary"
            onClick={() => alert("Attach Volume flow")}
          >
            Attach Volume
          </button>
        </div>
        <p>Business Cloud Storage volumes attached to your account.</p>
        <div className="empty">No attached volumes.</div>
      </div>
    );
  if (section === "Networking")
    return (
      <div className="console-card">
        <h3>Networking</h3>
        <p>IP addresses and firewall rules for your environment.</p>
        <div className="mini-panels">
          <div>
            <span>IP Addresses</span>
            <strong>Add IPv4 (₹250/mo)</strong>
          </div>
          <div>
            <span>Firewall Rules</span>
            <strong>No rules configured.</strong>
          </div>
        </div>
      </div>
    );
  if (section === "Connectivity")
    return (
      <div className="console-card">
        <h3>Connectivity</h3>
        <p>Your active data & bandwidth plans.</p>
        <div className="connectivity-grid">
          <div>
            <span>Active Plan</span>
            <strong>SF 300</strong>
            <small>1:10 Shared · 300 Mbps committed</small>
          </div>
          <div>
            <span>Burstable Speed</span>
            <strong>390 Mbps</strong>
            <small>30% extra, included</small>
          </div>
          <div>
            <span>Monthly Rate</span>
            <strong>₹14,990</strong>
            <small>Billed monthly</small>
          </div>
        </div>
        <div className="notice">
          Need dedicated bandwidth, or a pure data-transfer plan for backups and
          CDN? Compare the full range — Dedicated (ILL), Shared, and Pure Data
          Transfer — on the Pricing page.
        </div>
        <Link className="button secondary" to="/pricing">
          View Data & Connectivity Plans
        </Link>
      </div>
    );
  if (section === "Billing")
    return (
      <div className="console-card">
        <div className="connectivity-grid">
          <div>
            <span>This Month's Estimate</span>
            <strong>₹0</strong>
            <small>Compute + Storage + Connectivity</small>
          </div>
          <div>
            <span>Payment Method</span>
            <strong>•••• 4471</strong>
            <small>Visa, expires 08/28</small>
          </div>
          <div>
            <span>Next Invoice</span>
            <strong>1 Aug 2026</strong>
            <small>Auto-billed monthly</small>
          </div>
        </div>
        <h3>Invoice History</h3>
        <PriceTable
          rows={[
            [
              "INV-2026-0619",
              "1 Jul 2026",
              "Compute + Connectivity",
              "₹24,480 · Paid",
            ],
            [
              "INV-2026-0518",
              "1 Jun 2026",
              "Compute + Connectivity",
              "₹22,980 · Paid",
            ],
            [
              "INV-2026-0417",
              "1 May 2026",
              "Compute + Connectivity",
              "₹22,980 · Paid",
            ],
          ]}
        />
      </div>
    );
  return (
    <div className="console-card">
      <h3>Settings</h3>
      <p>Account details and API access.</p>
      <div className="form-grid two">
        <Field label="Full Name" />
        <Field label="Email" />
        <Field label="Company" />
        <Field label="Phone" />
      </div>
      <div className="settings-actions">
        <button className="button primary">Save Changes</button>
        <h4>API Access</h4>
        <Field label="API Key" />
        <button className="button secondary">Regenerate Key</button>
        <h4>Danger Zone</h4>
        <p>
          Closing your account will schedule deletion of all instances, volumes,
          and data after the notice period in your service agreement.
        </p>
        <button className="button danger">Close Account</button>
      </div>
    </div>
  );
}
