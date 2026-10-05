import { ServiceIllustration } from "./ServiceIllustration.jsx";
import { SpecTable } from "./SpecTable.jsx";
export function ServiceBlock({ data }) {
  return (
    <div className="service-block">
      <ServiceIllustration title={data.title} />
      <div className="service-content">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <h3>How It Works</h3>
        <div className="steps">
          {data.steps.map((s, i) => (
            <div key={i} className="step">
              <span>STEP {i + 1}</span>
              <p>{s}</p>
            </div>
          ))}
        </div>
        <div className="responsibility">
          <div>
            <h3>Managed by Datenfarmen Centers</h3>
            <ul className="bullet-list">
              {data.managed.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Managed by You</h3>
            <ul className="bullet-list">
              {data.you.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
        {data.specs && (
          <>
            <h3>Specifications</h3>
            <SpecTable rows={data.specs} />
          </>
        )}
        <h3>Best For</h3>
        <div className="bestfor">
          {data.best.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
