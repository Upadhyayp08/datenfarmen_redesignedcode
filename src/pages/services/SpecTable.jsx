export function SpecTable({ rows }) {
  return (
    <table className="spec-table">
      <tbody>
        {rows.map((r) => (
          <tr key={r[0]}>
            <th>{r[0]}</th>
            <td>{r[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
