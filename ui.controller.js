import { createLineChart } from './chart.service.js';

export function renderChart(canvasId, hist) {
  const ctx = document.getElementById(canvasId).getContext('2d');

  const labels = hist.map(h => h.date.toLocaleDateString());
  const data = hist.map(h => h.value);

  return createLineChart(ctx, labels, [{
    label: 'USD/BRL',
    data
  }]);
}
