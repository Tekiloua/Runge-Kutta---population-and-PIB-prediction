import { useRungeApply } from "../store/useRungeApply";

type FiltreType = {
  anneDebut: number;
  anneFin: number;
  ageFiltre: string;
};
export const RungeKutta = (data: Array<any>, filtre?: FiltreType) => {
  const { rungeApply, setRungeApply, setRungeTab } = useRungeApply();
  data.push(3);
  data.push(4);
  setRungeTab(rungeApply, data);
  return data;
};
