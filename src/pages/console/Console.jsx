import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Modal } from "../../components/Modal.jsx";
import { ConsoleSection } from "./ConsoleSection.jsx";
import { CreateServer } from "./CreateServer.jsx";
import { DeleteServer } from "./DeleteServer.jsx";
import { Terminal } from "./Terminal.jsx";
export function Console() {
  const [section, setSection] = useState("Dashboard");
  const [modal, setModal] = useState(null);
  const [cmd, setCmd] = useState("");
  const [servers, setServers] = useState([]);
  const nav = [
    "Dashboard",
    "Compute",
    "Storage",
    "Networking",
    "Connectivity",
    "Billing",
    "Settings",
  ];
  return (
    <div className="console-wrap">
      <div className="console-shell">
        <aside className="console-side">
          <Link to="/" className="console-brand">
            <span className="brand-mark">
              <span />
            </span>
            <b>DATENFARMEN CENTERS</b>
            <small>Cloud Console</small>
          </Link>
          <div className="console-nav">
            {nav.map((x) => (
              <button
                key={x}
                className={section === x ? "active" : ""}
                onClick={() => setSection(x)}
              >
                {x}
              </button>
            ))}
          </div>
          <Link to="/" className="console-back">
            ← Back to Website
          </Link>
        </aside>
        <main className="console-main">
          <div className="console-topbar">
            <input placeholder="Search servers, volumes, invoices..." />
            <div className="admin">
              AD <span>Admin</span>
            </div>
          </div>
          <div className="console-content">
            <div className="console-head">
              <div>
                <span className="eyebrow">Cloud Console</span>
                <h1>{section}</h1>
                <p>
                  Here's what's happening across your Datenfarmen Centers
                  infrastructure.
                </p>
              </div>
              {section === "Dashboard" || section === "Compute" ? (
                <button
                  className="button primary"
                  onClick={() => setModal("create")}
                >
                  Create Server
                  <ArrowRight size={17} />
                </button>
              ) : null}
            </div>
            <ConsoleSection
              section={section}
              servers={servers}
              setModal={setModal}
              setServers={setServers}
            />
          </div>
        </main>
      </div>
      {modal && (
        <Modal
          onClose={() => setModal(null)}
          title={
            modal === "create"
              ? "Create a New Server"
              : modal === "delete"
              ? "Delete Server"
              : "Console — instance"
          }
        >
          {modal === "create" ? (
            <CreateServer
              onDone={(s) => {
                if (s) setServers((v) => [...v, s]);
                setModal(null);
              }}
            />
          ) : modal === "delete" ? (
            <DeleteServer
              onCancel={() => setModal(null)}
              onDone={() => {
                setServers([]);
                setModal(null);
              }}
            />
          ) : (
            <Terminal cmd={cmd} setCmd={setCmd} />
          )}
        </Modal>
      )}
    </div>
  );
}
