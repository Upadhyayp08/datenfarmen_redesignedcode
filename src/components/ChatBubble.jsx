import { useState } from "react";
import { CircleHelp, Send, X } from "lucide-react";
export function ChatBubble({ open, setOpen }) {
  const [input, setInput] = useState("");
  return (
    <>
      {open && (
        <div className="chat-window">
          <div className="chat-head">
            <div>
              <strong>Datenfarmen Assistant</strong>
              <small>Online</small>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-msg">
              Hello! I am the Datenfarmen service assistant. Ask me about our
              Cloud, Colocation, or Indore facility!
            </div>
            {input && <div className="chat-msg user">{input}</div>}
          </div>
          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              setInput("");
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services..."
            />
            <button>
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
      <button
        className="chat-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label="Datenfarmen Assistant"
      >
        <CircleHelp size={21} />
      </button>
    </>
  );
}
