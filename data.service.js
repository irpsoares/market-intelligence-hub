import { API } from './config.js';

export async function getFX() {
  try {
    const res = await fetch(API.FX);
    const data = await res.json();

    return {
      usd: parseFloat(data.USDBRL.bid),
      eur: parseFloat(data.EURBRL.bid)
    };
  } catch (e) {
    console.warn('Erro FX, usando fallback');
    return { usd: 5.70, eur: 6.20 };
  }
}

// fallback para histórico (até você plugar API real)
export function genHist(base, vol = 0.01, days = 90) {
  let v = base;
  const arr = [];

  for (let i = days; i >= 0; i--) {
    const drift = (Math.random() - 0.5) * vol;
    v = v * (1 + drift);

    arr.push({
      date: new Date(Date.now() - i * 86400000),
      value: v
    });
  }

  return arr;
}
