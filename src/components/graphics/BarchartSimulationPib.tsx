import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useTargetPrediction } from "../../store/useTargetPrediction";
import { Prediction } from "../../algorithm/rungeKuttaPib";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Prediction de PIB",
    },
  },
};

interface BarchartSimulationProps {
  typeBarchart: string;
  datas: Prediction[];
}

export const BarchartSimulationPib: FC<BarchartSimulationProps> = ({
  typeBarchart,
  datas,
}) => {
  const labels_2050 = Array.from({ length: 2050 - 2023 + 1 }, (_, i) =>
    (2023 + i).toString()
  );
  const labels_2100 = Array.from({ length: 2100 - 2023 + 1 }, (_, i) =>
    (2023 + i).toString()
  );
  const labels_2150 = Array.from({ length: 2150 - 2023 + 1 }, (_, i) =>
    (2023 + i).toString()
  );
  const labels_2200 = Array.from({ length: 2200 - 2023 + 1 }, (_, i) =>
    (2023 + i).toString()
  );
  const labels_2250 = Array.from({ length: 2250 - 2023 + 1 }, (_, i) =>
    (2023 + i).toString()
  );
  const labels_2300 = Array.from({ length: 2300 - 2023 + 1 }, (_, i) =>
    (2023 + i).toString()
  );

  const { target: targetYear } = useTargetPrediction();
  const labels =
    targetYear == 2050
      ? labels_2050
      : targetYear == 2100
      ? labels_2100
      : targetYear == 2150
      ? labels_2150
      : targetYear == 2200
      ? labels_2200
      : targetYear == 2250
      ? labels_2250
      : targetYear == 2300
      ? labels_2300
      : labels_2050;
  const data2: Array<number> = datas.map((item) => item.value);
  const data = {
    labels,
    datasets: [
      {
        label: "PIB",
        data: data2,
        backgroundColor: "rgba(10, 66, 150, 0.5)",
      },
    ],
  };
  return (
    <div className="w-[100%] p-2 ">
      {typeBarchart == "courbe" ? (
        <div>
          <Line options={options} data={data} />
        </div>
      ) : (
        <div>
          <Bar
            options={options}
            className="bg-gray-100 rounded-xl p-4 border-2 border-gray-400"
            data={data}
          />
        </div>
      )}
    </div>
  );
};
