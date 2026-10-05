import { useState } from "react";
import { Field } from "../../components/Field.jsx";
export function CreateServer({ onDone }) {
  const [s, setS] = useState({
    hostname: "",
    plan: "Edge Micro",
    region: "Indore",
    os: "Ubuntu",
  });
  return (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();
        onDone(s);
      }}
    >
      <Field
        label="Hostname"
        placeholder="e.g. app-server-01"
        required
        value={s.hostname}
        onChange={(e) => setS({ ...s, hostname: e.target.value })}
      />
      <label className="field">
        <span>Plan</span>
        <select
          value={s.plan}
          onChange={(e) => setS({ ...s, plan: e.target.value })}
        >
          <option>Edge Micro</option>
          <option>Edge Small</option>
          <option>Edge Medium</option>
          <option>Edge Large</option>
          <option>Edge Scale</option>
        </select>
      </label>
      <label className="field">
        <span>Region</span>
        <select
          value={s.region}
          onChange={(e) => setS({ ...s, region: e.target.value })}
        >
          <option>Indore</option>
          <option>Ankleshwar</option>
        </select>
      </label>
      <label className="field">
        <span>Operating System</span>
        <select
          value={s.os}
          onChange={(e) => setS({ ...s, os: e.target.value })}
        >
          <option>Ubuntu</option>
          <option>Debian</option>
          <option>CentOS</option>
          <option>Windows Server</option>
        </select>
      </label>
      <label className="check-field">
        <input type="checkbox" /> Enable daily backups (+10% of plan price)
      </label>
      <div className="modal-actions">
        <button
          className="button secondary"
          type="button"
          onClick={() => onDone(null)}
        >
          Cancel
        </button>
        <button className="button primary">Deploy Server</button>
      </div>
    </form>
  );
}
