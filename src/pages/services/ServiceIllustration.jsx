import { ChevronRight, Monitor, Server } from "lucide-react";
import {
  SIMPLE_EXPLANATIONS,
  SIMPLE_VISUALS,
} from "../../content/services.js";
export function ServiceIllustration({ title }) {
  const visual = SIMPLE_VISUALS[title] || {
    icon: Server,
    a: "Your business",
    b: title,
    tag: "Solution",
  };
  const Icon = visual.icon;
  return (
    <div
      className="service-visual"
      role="img"
      aria-label={`Simple visual explanation of ${title}`}
    >
      <div className="visual-topline">
        <span>Simple view</span>
        <b>{visual.tag}</b>
      </div>
      <div className="visual-flow">
        <div className="visual-node">
          <span className="visual-icon">
            <Monitor size={23} />
          </span>
          <div>
            <small>START</small>
            <strong>{visual.a}</strong>
          </div>
        </div>
        <div className="visual-connector">
          <span></span>
          <ChevronRight size={21} />
        </div>
        <div className="visual-node visual-node-main">
          <span className="visual-icon">
            <Icon size={23} />
          </span>
          <div>
            <small>SOLUTION</small>
            <strong>{visual.b}</strong>
          </div>
        </div>
      </div>
      <p className="visual-explanation">
        {SIMPLE_EXPLANATIONS[title] ||
          "A simple way to understand this service and what it provides."}
      </p>
    </div>
  );
}
