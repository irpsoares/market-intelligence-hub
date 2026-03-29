import { getFX, genHist } from './data.service.js';
import { renderChart } from './ui.controller.js';
import { loadNews } from './news.service.js';

async function init() {
  const fx = await getFX();

  console.log('FX REAL:', fx);

  const hist = genHist(fx.usd);

  renderChart('chart', hist);

  const news = await loadNews();
  renderNews(news);
}

function renderNews(news) {
  const el = document.getElementById('news');

  el.innerHTML = news.map(n =>
    `<div><a href="${n.link}" target="_blank">${n.title}</a></div>`
  ).join('');
}

window.onload = init;
