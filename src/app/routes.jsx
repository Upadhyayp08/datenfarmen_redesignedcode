import { Route, Routes } from "react-router-dom";
import { SOLUTIONS } from "../content/solutions.js";
import { Home } from "../pages/home/Home.jsx";
import { About } from "../pages/about/About.jsx";
import { Solutions } from "../pages/solutions/Solutions.jsx";
import { Locations } from "../pages/locations/Locations.jsx";
import { Pricing } from "../pages/pricing/Pricing.jsx";
import { Contact } from "../pages/contact/Contact.jsx";
import { Console } from "../pages/console/Console.jsx";
import { ServicePage } from "../pages/services/ServicePage.jsx";
import { LegalPage } from "../pages/legal/LegalPage.jsx";
import { NotFound } from "../pages/NotFound.jsx";
export function AppRoutes({ onChat }) {
  return (
    <Routes>
      <Route path="/" element={<Home onChat={onChat} />} />
      <Route path="/about" element={<About />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/console" element={<Console />} />
      {SOLUTIONS.map((s) => (
        <Route key={s.path} path={s.path} element={<ServicePage />} />
      ))}
      <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
      <Route path="/terms-conditions" element={<LegalPage type="terms" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
