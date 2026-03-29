export function calcFXImpact(volume, usd, base) {
  const baseCost = volume * base;
  const simCost = volume * usd;

  return {
    baseCost,
    simCost,
    delta: simCost - baseCost
  };
}
