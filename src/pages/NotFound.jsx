import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero.jsx";
export function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found"
        description="The requested page could not be found."
      />
      <div className="center-link">
        <Link className="button primary" to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
}
