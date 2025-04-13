// Visual.jsx - Komponent för att visa visualiseringar av AI-arkitektur och process

import { applicationChartData, comparisonTableData, aiProcessSteps } from '../utils/dataHelpers';

function Visual() {
  return (
    <div className="visual-container">
      <h2>Visualisering</h2>
      <h3>Generativ AI - Arkitektur och process</h3>
      
      <div className="visualizations">
        {/* Process diagram */}
        <section>
          <h3>1. Grundläggande process för generativ AI</h3>
          <div className="process-diagram">
            {aiProcessSteps.map((step) => (
              <div key={step.id} className="process-step">
                <h4>Steg {step.id}: {step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section>
          <h3>2. Jämförelse: Traditionell AI vs. Generativ AI</h3>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Aspekt</th>
                <th>Traditionell AI</th>
                <th>Generativ AI</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTableData.map((row, index) => (
                <tr key={index}>
                  <td><strong>{row.aspect}</strong></td>
                  <td>{row.traditional}</td>
                  <td>{row.generative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Application chart */}
        <section>
          <h3>3. Användningsområden för generativ AI (2023)</h3>
          <div className="application-chart">
            {applicationChartData.map((item, index) => (
              <div key={index} className="usage-area">
                <div>
                  <strong>{item.area}</strong>
                  <div><small>{item.examples}</small></div>
                </div>
                <div style={{ width: '60%' }}>
                  <div className="bar" style={{ width: `${item.percentage}%` }}></div>
                  <div style={{ textAlign: 'right' }}>{item.percentage}%</div>
                </div>
              </div>
            ))}
            <p><small>* Uppskattad mognadsgrad av olika generativa AI-tekniker år 2023</small></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Visual; 