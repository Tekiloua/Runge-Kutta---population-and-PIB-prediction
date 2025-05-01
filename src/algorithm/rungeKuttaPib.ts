type PibEntry = {
    year: string;
    value: number;
  };
  
  export type Prediction = {
    year: number;
    value: number;
  };
  
 export function rungeKuttaPib(pibTab: PibEntry[],targetYear:number): Prediction[] {
    // Tri au cas où le tableau n'est pas ordonné
    const sorted = [...pibTab].sort((a, b) => parseInt(a.year) - parseInt(b.year));
  
    const lastYear = parseInt(sorted[sorted.length - 1].year);
    const y0 = 3.8; // Valeur de départ arbitraire (ex : PIB indexé à 100)
    const t0 = lastYear + 1;
    const tEnd = targetYear;
    const h = 1;
  
    const getGrowthRate = (year: number): number => {
      const known = pibTab.find(e => parseInt(e.year) === year);
      if (known) return known.value / 100;
  
      return 0.029; // Valeur moyenne par défaut (~2.9%)
    };
  
    let t = t0;
    let y = y0;
    const result: Prediction[] = [];
  
    while (t <= tEnd) {
      result.push({ year: t, value: parseFloat(y.toFixed(2)) });
  
      const f = (t: number, y: number) => y * getGrowthRate(t);
  
      const k1 = h * f(t, y);
      const k2 = h * f(t + h / 2, y + k1 / 2);
      const k3 = h * f(t + h / 2, y + k2 / 2);
      const k4 = h * f(t + h, y + k3);
  
      y += (1 / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
      t += h;
    }
  
    return result;
  }
  