import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export function CTA({ title, body, button = "Talk to an Expert" }) {
  return (
    <section className="cta-wrap">
      <div className="container">
        <div className="cta">
          <div>
            <span className="eyebrow">Datenfarmen Centers</span>
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
