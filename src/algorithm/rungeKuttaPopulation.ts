export type PopulationEntry = {
  year: string;
  value: number;
};

export type PopulationPrediction = {
  year: number;
  value: number;
};

// Fonction pour calculer le taux de croissance annuel moyen (en pourcentage)
function estimateAverageGrowthRate(data: PopulationEntry[]): number {
  let totalGrowth = 0;
  let count = 0;

  for (let i = 1; i < data.length; i++) {
    const prev = data[i - 1].value;
    const curr = data[i].value;
    const growthRate = (curr - prev) / prev;
    totalGrowth += growthRate;
    count++;
  }

  return totalGrowth / count; // Moyenne du taux annuel (ex: 0.0265 pour 2.65%)
}

// Fonction principale avec RK4 pour estimer la population future
export function rungeKuttaPopulation(data: PopulationEntry[],targetYear:number): PopulationPrediction[] {
  const sorted = [...data].sort((a, b) => Number(a.year) - Number(b.year));
  const lastEntry = sorted[sorted.length - 1];
  const t0 = Number(lastEntry.year) + 1;
  const tEnd = targetYear;
  const y0 = lastEntry.value;
  const h = 1;

  const avgGrowthRate = estimateAverageGrowthRate(sorted); // Exemple : ~0.0265

  const f = (t: number, y: number) => y * avgGrowthRate;

  let t = t0;
  let y = y0;
  const result: PopulationPrediction[] = [];

  while (t <= tEnd) {
    result.push({ year: t, value: Math.round(y) });

    const k1 = h * f(t, y);
    const k2 = h * f(t + h / 2, y + k1 / 2);
    const k3 = h * f(t + h / 2, y + k2 / 2);
    const k4 = h * f(t + h, y + k3);

    y += (1 / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
    t += h;
  }

  return result;
}
