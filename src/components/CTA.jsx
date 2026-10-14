import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export function CTA({ title, body, button = "Talk to an Expert", eyebrow }) {
  return (
    <section className="cta-wrap">
      <div className="container">
        <div className="cta">
          <div>
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <Link className="button primary consultation-breathe" to="/contact">
            {button}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
