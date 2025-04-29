import React from "react";
import { BarchartPIB } from "./graphics/BarchartPIB";
import { BarchartDemographique } from "./graphics/BarchartDemographique";
import { useFiltre } from "../store/useFiltreDemographique";
import Timeline from "./Timeline";
import { useQuery } from "@tanstack/react-query";
import { LoaderSquare } from "./LoaderSquare";
import { data } from "react-router-dom";

type Person = {
  id: number;
  tag: string;
  year: string;
  value: number;
};

export default function Barcharts() {
  const { filtre } = useFiltre();
  const { isPending: isPendingTousGenres, data: dataTousGenres } = useQuery({
    queryKey: ["TousGenres"],
    queryFn: () => {
      return window.electronAPI.fetchTousGenres(); // Appel à la fonction exposée dans preload
    },
  });

  const { isPending: isPendingHomme, data: dataHomme } = useQuery({
    queryKey: ["hommes"],
    queryFn: () => {
      return window.electronAPI.fetchHommes(); // Appel à la fonction exposée dans preload
    },
  });

  const { isPending: isPendingFemme, data: dataFemme } = useQuery({
    queryKey: ["femmes"],
    queryFn: () => {
      return window.electronAPI.fetchFemmes(); // Appel à la fonction exposée dans preload
    },
  });

  const { isPending: isPendingPib, data: dataPib } = useQuery({
    queryKey: ["pib"],
    queryFn: () => {
      return window.electronAPI.fetchPibs(); // Appel à la fonction exposée dans preload
    },
  });

  if (isPendingHomme || isPendingFemme || isPendingPib || isPendingTousGenres) {
    return <LoaderSquare />;
  }

  const tab0_4ans = dataTousGenres.filter(
    (item: Person) => item.tag === "0 à 4"
  );
  const tab5_9ans = dataTousGenres.filter(
    (item: Person) => item.tag === "5 à 9"
  );
  const tab10_14ans = dataTousGenres.filter(
    (item: Person) => item.tag === "10 à 14"
  );
  const tab15_19ans = dataTousGenres.filter(
    (item: Person) => item.tag === "15 à 19"
  );
  const tab20_24ans = dataTousGenres.filter(
    (item: Person) => item.tag === "20 à 24"
  );
  const tab25_29ans = dataTousGenres.filter(
    (item: Person) => item.tag === "25 à 29"
  );
  const tab30_34ans = dataTousGenres.filter(
    (item: Person) => item.tag === "30 à 34"
  );
  const tab35_39ans = dataTousGenres.filter(
    (item: Person) => item.tag === "35 à 39"
  );
  const tab40_44ans = dataTousGenres.filter(
    (item: Person) => item.tag === "40 à 44"
  );
  const tab45_49ans = dataTousGenres.filter(
    (item: Person) => item.tag === "45 à 49"
  );
  const tab50_64ans = dataTousGenres.filter(
    (item: Person) => item.tag === "50 à 64"
  );
  const tab65ans_plus = dataTousGenres.filter(
    (item: Person) => item.tag === "+ 65"
  );

  return (
    <div className="w-full flex flex-col gap-20 items-center mb-24">
      <div className="w-full flex flex-col items-center gap-3">
        <div className="w-full mb-6 flex flex-col items-center">
          <h1 className="font-bold text-[32px] mb-2 text-primary">
            Graphique du PIB de Madagascar
          </h1>

          <div className=" p-6 rounded-lg shadow-sm max-w-8xl mx-auto mt-8">
            <p className="text-gray-700 text-lg mb-4">
              Le produit intérieur brut (PIB) de Madagascar est un indicateur
              clé de la performance économique du pays. Ce graphique montre
              l’évolution du PIB de Madagascar au cours des dernières années,
              offrant une perspective sur la croissance économique, les défis
              auxquels le pays fait face, ainsi que les opportunités
              d'investissement à venir.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              L'analyse du PIB est essentielle pour comprendre les forces et
              faiblesses de l'économie malgache, et pour orienter les décisions
              politiques et économiques. En observant ces données, vous pouvez
              mieux saisir les impacts des réformes économiques et des
              événements mondiaux sur l'économie de Madagascar. Le graphique ci
              dessous représente la valeur du PIB de Madagascar chaque année
              depuis 1961 à 2023 , ces données proviennent du site officiels du{" "}
              <a
                href="https://donnees.banquemondiale.org/indicateur/NY.GDP.MKTP.KD.ZG?locations=MG"
                className="link-primary"
              >
                Banque mondiale
              </a>
            </p>
            <p className="text-gray-500 text-sm italic">
              Source : Banque Mondiale, données actualisées en 2025.
            </p>
          </div>
        </div>
        <BarchartPIB dataProps={dataPib} />
      </div>
      <div className="w-full flex flex-col items-center gap-3">
        <div className="w-full flex flex-col items-center text-center mb-6">
          <h1 className="font-bold text-[32px] mb-2 text-primary">
            Graphique demographie de la population Malgache
          </h1>
          <p className="text-balance pl-4 text-lg w-[90%]">
            Le graphique ci dessous représente la croissance demographique de
            Madagascar chaque année depuis 1961 à 2023
          </p>
        </div>
        <BarchartDemographique
          dataProps={
            filtre == "Masculin"
              ? dataHomme
              : filtre == "Feminin"
              ? dataFemme
              : filtre == "Tous les genres"
              ? dataTousGenres
              : filtre == "0 à 4"
              ? tab0_4ans
              : filtre == "5 à 9"
              ? tab5_9ans
              : filtre == "10 à 14"
              ? tab10_14ans
              : filtre == "15 à 19"
              ? tab15_19ans
              : filtre == "20 à 24"
              ? tab20_24ans
              : filtre == "25 à 29"
              ? tab25_29ans
              : filtre == "30 à 34"
              ? tab30_34ans
              : filtre == "35 à 39"
              ? tab35_39ans
              : filtre == "40 à 44"
              ? tab40_44ans
              : filtre == "45 à 49"
              ? tab45_49ans
              : filtre == "50 à 64"
              ? tab50_64ans
              : filtre == "+ 65"
              ? tab65ans_plus
              : dataTousGenres
          }
        />
      </div>
      <button className="btn btn-primary">ok</button>
    </div>
  );
}
