export const charts = {};

export function createLineChart(ctx, labels, datasets) {
  return new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false }
    }
  });
}

export function updateChart(chart, labels, datasets) {
  chart.data.labels = labels;
  chart.data.datasets = datasets;
  chart.update();
}
