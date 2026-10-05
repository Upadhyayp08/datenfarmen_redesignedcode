import { Check } from "lucide-react";
export function PricingPlanCard({ plan }) {
  return (
    <article
      className={`pricing-plan-card ${plan.featured ? "is-featured" : ""}`}
    >
      {plan.featured && (
        <span className="plan-badge">{plan.badge || "MOST CHOSEN"}</span>
      )}
      <div className="plan-card-top">
        <div>
          <h3>{plan.name}</h3>
          <p>{plan.desc}</p>
        </div>
        {plan.featured && (
          <span className="plan-check">
            <Check size={14} />
          </span>
        )}
      </div>
      <div className="plan-price">
        {plan.price}
        <small>{plan.unit || "/month"}</small>
      </div>
      {plan.suffix && <div className="plan-suffix">{plan.suffix}</div>}
      {plan.sub && <p className="plan-sub">{plan.sub}</p>}
      {plan.features && (
        <ul className="plan-features">
          {plan.features.map((feature) => (
            <li key={feature}>
              <Check size={14} />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <button
        className={`button ${plan.featured ? "primary" : "ghost"}`}
        data-open-request="true"
      >
        Request This Plan
      </button>
    </article>
  );
}
