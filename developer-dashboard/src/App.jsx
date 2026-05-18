import "./App.css";

function App() {
  const metrics = [
    {
      title: "Lead Time",
      value: "5 Days",
      status: "Improving",
    },
    {
      title: "Cycle Time",
      value: "3 Days",
      status: "Healthy",
    },
    {
      title: "Bug Rate",
      value: "12%",
      status: "Needs Attention",
    },
    {
      title: "Deployments",
      value: "18",
      status: "Stable",
    },
    {
      title: "PR Throughput",
      value: "25",
      status: "Excellent",
    },
  ];

  return (
    <div className="container">
      <div className="top-bar">
        <div>
          <h1>Developer Productivity Dashboard</h1>
          <p className="subtitle">
            AI-powered engineering productivity insights
          </p>
        </div>

        <button className="export-btn">Export Report</button>
      </div>

      <div className="welcome-box">
        <h2>Engineering Productivity Summary</h2>
        <p>
          This dashboard helps engineering teams monitor software delivery,
          identify bottlenecks, and improve developer productivity using
          AI-driven insights.
        </p>
      </div>

      <div className="card-grid">
        {metrics.map((metric) => (
          <div className="card" key={metric.title}>
            <h2>{metric.title}</h2>
            <p>{metric.value}</p>
            <span>{metric.status}</span>
          </div>
        ))}
      </div>

      <div className="chart-box">
        <h2>Performance Overview</h2>

        <div className="fake-chart">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
        </div>
      </div>

      <div className="insight-box">
        <h2>AI Insights</h2>

        <div className="insight-card">
          <h3>Lead Time Analysis</h3>
          <p>
            Review cycles are taking longer than expected. Smaller pull
            requests may improve delivery speed.
          </p>
        </div>

        <div className="insight-card">
          <h3>Deployment Health</h3>
          <p>
            Deployment frequency is healthy, showing consistent engineering
            delivery patterns.
          </p>
        </div>

        <div className="insight-card">
          <h3>Bug Trend</h3>
          <p>
            Production bug rate indicates testing coverage can be improved in
            critical modules.
          </p>
        </div>
      </div>

      <div className="action-box">
        <h2>Suggested Actions</h2>

        <div className="action-grid">
          <div className="action-card">
            <h3>Improve Testing</h3>
            <p>
              Increase automated test coverage to reduce escaped production
              bugs.
            </p>
          </div>

          <div className="action-card">
            <h3>Smaller PRs</h3>
            <p>
              Reduce pull request size to improve review speed and lead time.
            </p>
          </div>

          <div className="action-card">
            <h3>Team Collaboration</h3>
            <p>
              Improve review collaboration across engineering teams for faster
              delivery.
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        Built using React.js • Developer Productivity MVP
      </div>
    </div>
  );
}

export default App;