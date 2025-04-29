type DataPopulationType = {
  year: number;
  value: number;
};

type DataPibType = {
  year: string;
  value: number;
};

// Taux de croissance de la population
export function calculerTauxCroissancePopulation(
  populations: DataPopulationType[]
): number[] {
  const tauxCroissance: number[] = [];

  for (let i = 1; i < populations.length; i++) {
    const croissance =
      ((populations[i].value - populations[i - 1].value) /
        populations[i - 1].value) *
      100;
    tauxCroissance.push(parseFloat(croissance.toFixed(2))); // arrondi à 2 décimales
  }
  return tauxCroissance;
}

// Taux de croissance du PIB
export function calculerTauxCroissancePIB(pib: DataPibType[]): number[] {
  const tauxCroissance: number[] = [];
  pib.forEach((element, index) => {
    tauxCroissance.push(element.value);
  });
  return tauxCroissance;
}

/**
 * Fonction pour generer l'historique de données qui est le premier argument
 * de la fonction predireCroissance
 */

export type TauxType = {
  annee: number;
  tauxCroissancePopulation: number;
  tauxCroissancePIB: number;
};

export const taux = (PibTab: number[], PopulationTab: number[]): TauxType[] => {
  let tabT: TauxType[] = [];
  PibTab.forEach((element, index) => {
    const t: TauxType = {
      annee: index + 1961,
      tauxCroissancePopulation: PopulationTab[index],
      tauxCroissancePIB: element,
    };
    tabT.push(t);
  });
  return tabT;
};
0;
