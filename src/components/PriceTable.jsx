export function PriceTable({ rows }) {
  return (
    <div className="table-scroll">
      <table className="price-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Detail</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
