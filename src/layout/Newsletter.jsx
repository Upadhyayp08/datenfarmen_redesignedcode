import { useState } from "react";
import { Send } from "lucide-react";
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  function submit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("Thanks — your email is ready to be submitted.");
    setEmail("");
  }
  return (
    <form className="newsletter" onSubmit={submit}>
      <label htmlFor="newsletter">Newsletter</label>
      <div>
        <input
          id="newsletter"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          type="email"
          required
        />
        <button aria-label="Subscribe">
          <Send size={15} />
        </button>
      </div>
      {status && <small>{status}</small>}
    </form>
  );
}
