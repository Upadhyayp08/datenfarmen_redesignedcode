export function Section({ eyebrow, title, children, muted = false, className = "" }) {
  return (
    <section
      className={"section " + (muted ? "section-muted " : "") + className}
    >
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
