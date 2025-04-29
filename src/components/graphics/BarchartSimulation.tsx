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
import { RungeKutta } from "../../algorithm/RungeKutta";
import { useRungeApply } from "../../store/useRungeApply";

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
      text: "Chart.js Line Chart",
    },
  },
};

interface BarchartSimulationProps {
  typeBarchart: string;
  rungeApply?: boolean;
}

export const BarchartSimulation: FC<BarchartSimulationProps> = ({
  typeBarchart,
}) => {
  const labels = [
    "1961",
    "1962",
    "1963",
    "1964",
    "1965",
    "1966",
    "1967",
    "1968",
    "1969",
    "1970",
    "1971",
    "1972",
    "1973",
    "1974",
    "1975",
    "1976",
    "1977",
    "1978",
    "1979",
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  const dataInitial = [
    -2.04863275061248, 2.27106970111232, -0.929401622790394, 3.96251884651457,
    -0.452253863397502, 2.06455240789826, 5.52856560967709, 6.8287860983493,
    3.72122216809368, 5.27645557543077, 3.92936503078364, -1.27262153096891,
    -2.61847832966285, 2.00687937961095, 1.25869163453154, -3.06885839129959,
    2.36400035834046, -2.66180596408321, 9.85465029443104, 0.952707585446319,
    -9.80000000085953, -1.90000000001299, 0.899999999396201, 1.76018194295042,
    1.15634413876586, 1.96022488163399, 1.17491326106625, 3.40692921036734,
    4.07488065683054, 3.12890505042525, -6.30635159237733, 1.18088494825233,
    2.09992318110865, -0.042101302622072, 1.67859232120303, 2.15420447175147,
    3.69349261691789, 3.91707460516817, 4.69922703680521, 4.45685893956946,
    5.98023576982733, -12.4079711055149, 9.78489212474175, 5.25700362208742,
    4.75584509499119, 5.3985084485368, 5.71056419885052, 6.71263253913001,
    -3.9787086116544, 0.619239744622121, 1.57842705366555, 3.01114811621208,
    2.30037622800727, 3.33920311195367, 3.13229807490305, 3.99314606199499,
    3.93330759462793, 3.19435651744398, 4.41123212909589, -7.13767162064489,
    5.73961573854336, 3.99999999869678, 3.80000000009488,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "PIB",
        // data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        data: dataInitial,
        backgroundColor: "rgba(10, 99, 32, 0.5)",
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
