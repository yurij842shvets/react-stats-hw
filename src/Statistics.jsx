import "./statistics.css";

export default function Statistics({ stats }) {
  return (
    <>
      <h2>UPLOAD STATS</h2>
      <ul>
        {stats.map((stat, index) => (
          <li key={stat.id} className={`color-${index % 5}`}>
            <h2>{stat.title}</h2>
            <span>{stat.label}</span>
            <span>{`${stat.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
