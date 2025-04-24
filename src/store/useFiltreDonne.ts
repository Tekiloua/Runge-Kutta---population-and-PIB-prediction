import { create } from "zustand";

type Store = {
  filtreDonnee: string;
  setFiltreDonnee: (filtreDonnee: string) => void;
};

export const useFiltreDonnee = create<Store>()((set) => ({
  filtreDonnee: "1961 à 2023",
  setFiltreDonnee: (a) => set(() => ({ filtreDonnee: a })),
}));
