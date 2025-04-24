import { create } from "zustand";

type Store = {
  rungeApply: boolean;
  setRungeApply: (rungeApply: boolean) => void;
  setRungeTab: (r: boolean, a: Array<any>) => void;
};

export const useRungeApply = create<Store>()((set) => ({
  rungeApply: false,
  setRungeApply: (a) => set(() => ({ rungeApply: a })),
  setRungeTab: (r, a) => set(() => ({ rungeApply: r, tab: a })),
}));
