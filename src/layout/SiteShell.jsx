import { useState } from "react";
import { AppRoutes } from "../app/routes.jsx";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
export function SiteShell() {
  const [mobile, setMobile] = useState(false);
  const [chat, setChat] = useState(false);
  return (
    <div className="app">
      <Header mobile={mobile} setMobile={setMobile} />
      <AppRoutes onChat={() => setChat(true)} />
      <Footer />
      {/* <ChatBubble open={chat} setOpen={setChat} /> */}
    </div>
  );
}
