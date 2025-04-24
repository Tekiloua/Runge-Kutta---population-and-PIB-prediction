import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import FilterDemographique from "../FilterDemographique";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Graphique demographique",
    },
  },
};

const labels =  [
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
]

interface BarchartDemographiqueProps {
  dataProps: Array<number>;
}

export function BarchartDemographique({
  dataProps,
}: BarchartDemographiqueProps) {
  const data = {
    labels,
    datasets: [
      {
        label: "Demographique de la population",
        data: dataProps,
        backgroundColor: "rgba(128, 0, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="w-[80%] flex flex-col gap-3 ">
      <FilterDemographique />
      <Bar className="bg-gray-100 rounded-xl p-4 border-2 border-gray-400" options={options} data={data} />
    </div>
  );
}
