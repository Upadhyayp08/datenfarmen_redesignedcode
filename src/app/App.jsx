import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { SiteShell } from "../layout/SiteShell.jsx";
export function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <SiteShell />
    </BrowserRouter>
  );
}
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}
