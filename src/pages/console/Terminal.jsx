export function Terminal({ cmd, setCmd }) {
  return (
    <div className="terminal">
      <div className="terminal-output">
        $ {cmd || "help"}
        <br />
        <span>status · uptime · ls</span>
      </div>
      <div className="terminal-input">
        <span>$</span>
        <input
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          placeholder="Type a command (try: help, status, uptime, ls)"
        />
      </div>
    </div>
  );
}
