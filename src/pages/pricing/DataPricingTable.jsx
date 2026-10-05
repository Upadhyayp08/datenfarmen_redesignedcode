export function DataPricingTable({ title, note, rows }) {
  return (
    <div className="data-table-card">
      <div className="data-table-head">
        <div>
          <strong>{title}</strong>
          <span>{note}</span>
        </div>
      </div>
      <div className="table-scroll">
        <table className="price-table modern-price-table">
          <thead>
            <tr>
              <th>PLAN</th>
              <th>COMMITTED SPEED</th>
              <th>BURSTABLE SPEED (30% EXTRA)</th>
              <th>MONTHLY RENTAL (INR)</th>
              <th>ANNUAL RENTAL (INR)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
