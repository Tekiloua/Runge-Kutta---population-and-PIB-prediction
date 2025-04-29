import { create } from "zustand";

type Store = {
  target: number;
  setTarget: (target: number) => void;
};

export const useTargetPrediction = create<Store>()((set) => ({
  target: 2050,
  setTarget: (a) => set(() => ({ target: a })),
}));
