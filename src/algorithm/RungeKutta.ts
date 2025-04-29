type DonneeHistorique = {
  annee: number;
  tauxCroissancePopulation: number; // en %
  tauxCroissancePIB: number;         // en %
};

export function predireCroissance(
  donneesHistoriques: DonneeHistorique[],
  populationInitiale: number,
  tauxPIBInitial: number,
  pasDeTemps: number,
  nombreAnnees: number
): { population: number[]; tauxPIB: number[] } {
  const resultatsPopulation: number[] = [populationInitiale];
  const resultatsPIB: number[] = [tauxPIBInitial];

  for (let i = 0; i < nombreAnnees; i++) {
    const t = 2023 + i;
    const donneeAnnee = donneesHistoriques.find((d) => d.annee === t) || donneesHistoriques[donneesHistoriques.length - 1];

    const tauxPopulation = (donneeAnnee.tauxCroissancePopulation ?? 0) / 100;
    const tauxPIB = (donneeAnnee.tauxCroissancePIB ?? 0) / 100;

    const populationActuelle = resultatsPopulation[resultatsPopulation.length - 1];
    const pibActuel = resultatsPIB[resultatsPIB.length - 1];

    // Runge-Kutta pour Population
    const k1Population = tauxPopulation * populationActuelle;
    const k2Population = tauxPopulation * (populationActuelle + (pasDeTemps / 2) * k1Population);
    const k3Population = tauxPopulation * (populationActuelle + (pasDeTemps / 2) * k2Population);
    const k4Population = tauxPopulation * (populationActuelle + pasDeTemps * k3Population);

    const prochainePopulation = populationActuelle + (pasDeTemps / 6) * (k1Population + 2 * k2Population + 2 * k3Population + k4Population);
    resultatsPopulation.push(prochainePopulation);

    // Runge-Kutta pour Taux de PIB
    const k1PIB = tauxPIB * pibActuel;
    const k2PIB = tauxPIB * (pibActuel + (pasDeTemps / 2) * k1PIB);
    const k3PIB = tauxPIB * (pibActuel + (pasDeTemps / 2) * k2PIB);
    const k4PIB = tauxPIB * (pibActuel + pasDeTemps * k3PIB);

    const prochainTauxPIB = pibActuel + (pasDeTemps / 6) * (k1PIB + 2 * k2PIB + 2 * k3PIB + k4PIB);
    resultatsPIB.push(prochainTauxPIB);
  }

  return {
    population: resultatsPopulation,
    tauxPIB: resultatsPIB,
  };
}
