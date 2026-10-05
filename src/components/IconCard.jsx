import { SafeIcon } from "./SafeIcon.jsx";
export function IconCard({ icon, title, text }) {
  return (
    <div className="card icon-card">
      <span className="icon-chip large">
        <SafeIcon icon={icon} size={20} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
