import React from "react";
import { BarchartPIB } from "./graphics/BarchartPIB";
import { BarchartDemographique } from "./graphics/BarchartDemographique";
import { useFiltre } from "../store/useFiltreDemographique";
import Timeline from "./Timeline";

export default function Barcharts() {
  const { filtre } = useFiltre(); // State global utilisant zustand
  const masculinTab = [
    34, 30, 25, 28, 26, 22, 18, 17, 15, 16, 14, 13, 13, 13, 12, 11, 11, 10, 9,
    9, 8, 9, 7, 7, 6, 8, 10, 12, 15,
  ];
  const femininTab = [
    13, 14, 16, 17, 20, 18, 18, 20, 19, 22, 24, 19, 16, 18, 23, 28, 32, 30, 35,
    33, 32, 29, 27, 30, 35, 38, 39, 36, 35,
  ];
  const tousGenreTab = [
    39, 12, 27, 8, 33, 19, 1, 40, 14, 3, 26, 31, 9, 6, 18, 22, 36, 30, 13, 7,
    23, 37, 11, 20, 15, 38, 2, 16, 25,
  ];

  const madaPIBtab = [
    2.04863275061248, 2.27106970111232, -0.929401622790394, 3.96251884651457,

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

  return (
    <div className="w-full flex flex-col gap-20 items-center mb-24">
      {}
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
              événements mondiaux sur l'économie de Madagascar.
              Le graphique ci dessous représente la valeur du PIB de Madagascar
              chaque année depuis 1961 à 2023 , ces données proviennent du site
              officiels du{" "}
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
        <BarchartPIB dataProps={madaPIBtab} />
      </div>

      <Timeline />
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
              ? masculinTab
              : filtre == "Feminin"
              ? femininTab
              : tousGenreTab
          }
        />
      </div>
    </div>
  );
}
