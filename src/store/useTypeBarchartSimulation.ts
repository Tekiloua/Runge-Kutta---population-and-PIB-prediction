import { create } from "zustand";

type Store = {
  typeBarchart: string;
  setTypeBarchart: (typeBarchart: string) => void;
};

export const useTypeBarchartSimulation = create<Store>()((set) => ({
  typeBarchart: "Line",
  setTypeBarchart: (a) => set(() => ({ typeBarchart: a })),
}));
