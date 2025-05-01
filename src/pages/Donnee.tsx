import { useFiltreDonnee } from "../store/useFiltreDonne";
import { TrendingDownIcon, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
import { data_all as dataTousGenres } from "../db/data_tous_genres";
import { data_pib as dataPib } from "../db/data_pib";


export const Donnee = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col gap-5 h-full"
    >
      <div>
        <p className="mb-4">
          Voici les données que nous avons recolter , puis utliser pour ce
          projet , Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          incidunt quas molestias vitae officia facere quisquam accusantium
          deserunt ipsam recusandae sed eius iusto temporibus impedit dolore?
          Dolorum officia necessitatibus ullam.
        </p>
        <FilterDonnee />
      </div>
      <div className="grid grid-cols-2 w-full h-full gap-6 ">
        <TabDonneeDemographique />
        <TabDonneePIB />
      </div>
    </motion.div>
  );
};

const backgroundAges: Array<string> = [
  "bg-blue-50",
  "bg-green-50",
  "bg-red-50",
  "bg-purple-50",
  "bg-yellow-50",
  "bg-blue-50",
  "bg-green-50",
  "bg-red-50",
  "bg-purple-50",
  "bg-yellow-50",
  "bg-blue-50",
  "bg-green-50",
];

type DataTypeDemographique = { year: string; tag: string; value: number };

const TabDonneeDemographique = () => {

  // const { isPending: isPendingTousGenres, data: dataTousGenres } = useQuery({
  //   queryKey: ["TousGenres"],
  //   queryFn: () => {
  //     return window.electronAPI.fetchTousGenres(); // Appel à la fonction exposée dans preload
  //   },
  // });

  let indexColor = 0;
  const { filtreDonnee } = useFiltreDonnee();
  let dataFiltered: Array<DataTypeDemographique> = [];
  dataTousGenres.forEach((data) => {
    if (filtreDonnee == "1961 à 2023") dataFiltered.push(data);
    else if (data.year == filtreDonnee) dataFiltered.push(data);
  });

  return (
    <div className=" border shadow-lg h-[650px] rounded-lg overflow-scroll bg-base-100 ">
      <table className="relative table w-full">
        <thead>
          <tr className="bg-gray-200 border-b border-b-black w-[750px]">
            <td className="w-[150px] text-center py-3">Id</td>
            <td className="w-[150px] text-center py-3">Année</td>
            <td className="w-[150px] text-center py-3">Age</td>
            <td className="w-[150px] text-center py-3">Taux (%)</td>
            <td className="w-[150px] text-center py-3">Etat</td>
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((data, i) => {
            const tag = data.tag;
            let down: boolean = false;
            if (i > 0) {
              const prevTag = dataTousGenres[i - 1].tag;
              if (prevTag !== tag) indexColor++;
              const prevValue = dataTousGenres[i - 1].value;
              if (prevValue > data.value) down = true;
            }

            return (
              <tr key={i} className={`${"" /*backgroundAges[indexColor]*/}`}>
                <td className="text-center w-[150px] border-b border-r-2 border-b-gray-300">
                  {i + 1}
                </td>
                <td className="text-center w-[150px] border-b border-b-gray-300">
                  {data.year}
                </td>
                <td className="text-center w-[150px] border-b border-b-gray-300">
                  {data.tag}
                </td>
                <td className="text-center w-[150px] border-b border-b-gray-300">
                  {data.value.toFixed(3)} %{" "}
                </td>
                <td className="flex justify-center mx-4 p-3">
                  {down && filtreDonnee == "1961 à 2023" ? (
                    <TrendingDownIcon className="text-red-400" />
                  ) : i > 0 && filtreDonnee == "1961 à 2023" ? (
                    <TrendingUp className="text-green-400" />
                  ) : (
                    <span className="text-center">🟢</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

type DataTypePIB = {
  year: string;
  value: number;
};

const TabDonneePIB = () => {
  const { filtreDonnee } = useFiltreDonnee();
  // const { isPending: isPendingPib, data: dataPib } = useQuery({
  //     queryKey: ["pib"],
  //     queryFn: () => {
  //       return window.electronAPI.fetchPibs(); // Appel à la fonction exposée dans preload
  //     },
  //   });
  let dataFiltered: Array<DataTypePIB> = [];
  dataPib.forEach((data) => {
    if (filtreDonnee == "1961 à 2023") dataFiltered.push(data);
    else if (data.year == filtreDonnee) dataFiltered.push(data);
  });
  return (
    <div className="shadow-xl border rounded-lg bg-base-100 h-[650px] overflow-scroll">
      <table className="relative table w-full">
        <thead>
          <tr className="bg-gray-200 border-b border-b-black w-[750px]">
            <td className="w-[150px] text-center py-3">Id</td>
            <td className="w-[150px] text-center py-3">Année</td>
            <td className="w-[150px] text-center py-3">Taux (%)</td>
            <td className="w-[150px] text-center py-3">Etat</td>
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((data, i) => {
            let down: boolean = false;
            if (i > 0) {
              const prevValue = dataPib[i - 1].value;
              if (prevValue > data.value) down = true;
            }

            return (
              <tr key={i}>
                <td className="text-center w-[150px] border-b border-r-2 border-b-gray-300">
                  {i + 1}
                </td>
                <td className="text-center w-[150px] border-b border-b-gray-300">
                  {data.year}
                </td>
                <td className="text-center w-[150px] border-b border-b-gray-300">
                  {data.value.toFixed(3)} %{" "}
                </td>
                <td className="flex justify-center mx-4 p-3 border-b-gray-300">
                  {down ? (
                    <TrendingDownIcon className="text-red-400" />
                  ) : i > 0 ? (
                    <TrendingUp className="text-green-400" />
                  ) : (
                    <span className="text-center">🟢</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilterDonnee = () => {
  const { filtreDonnee, setFiltreDonnee } = useFiltreDonnee();
  const annees = [
    "1961 à 2023",
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
  return (
    <div
      role="tablist"
      className="shadow-lg grid grid-cols-10 p-2 gap-2 border border-base-400 bg-gray-100"
    >
      {annees.map((annee, i) => (
        <a
          key={i}
          role="tab"
          onClick={(e) => {
            setFiltreDonnee(annee);
          }}
          className={`bg-base-200 text-center rounded-lg p-2 ${
            filtreDonnee == annee ? "bg-white border border-purple-300 " : null
          }`}
        >
          <span className={` ${filtreDonnee == annee ? "text-black" : null}`}>
            {annee}
          </span>
        </a>
      ))}
    </div>
  );
};
