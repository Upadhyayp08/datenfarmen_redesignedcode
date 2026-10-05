export function PricingSectionHeading({ eyebrow, title, description }) {
  return (
    <div className="pricing-section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <span className="heading-rule" />
      <p>{description}</p>
    </div>
  );
}
