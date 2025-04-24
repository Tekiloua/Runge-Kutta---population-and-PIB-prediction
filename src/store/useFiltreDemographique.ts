import { create } from "zustand";

type Store = {
  filtre: string;
  setFiltre: (filtre: string) => void;
};

export const useFiltre = create<Store>()((set) => ({
  filtre: "",
  setFiltre: (a) => set((filtre) => ({ filtre: a })),
}));
