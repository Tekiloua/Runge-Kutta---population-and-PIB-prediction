import { Person, PibType } from "./types/Person";

declare global {
  interface Window {
    electronAPI: {
      fetchFemmes: () => Promise<Person[]>;
      fetchHommes: () => Promise<Person[]>;
      fetchPibs: () => Promise<PibType[]>;
      fetchTousGenres: () => Promise<Person[]>;
      fetchPopulations: () => Promise<PibType[]>;
    };
  }
}
