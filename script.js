const ctx = document.getElementById("riskChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
    datasets: [
      {
        label: "Уровень риска",
        data: [30, 45, 60, 70, 80, 78],
        borderColor: "#ff4c4c",
        backgroundColor: "rgba(255,76,76,0.12)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "#eee" },
      },
      x: {
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
    },
  },
});
