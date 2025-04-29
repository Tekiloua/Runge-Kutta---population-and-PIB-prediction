import { useTypeBarchartSimulation } from "../store/useTypeBarchartSimulation";
import { BarchartSimulation } from "../components/graphics/BarchartSimulation";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { LoaderSquare } from "../components/LoaderSquare";
import { predireCroissance } from "../algorithm/RungeKutta";
import {
  calculerTauxCroissancePIB,
  calculerTauxCroissancePopulation,
  taux,
} from "../algorithm/Taux";
import { dataPopulation } from "../../data_population";
import { data_pib } from "../../data_pib";
import { data } from "react-router-dom";
import { rungeKuttaPib } from "../algorithm/rungeKuttaPib";
import { rungeKuttaPopulation } from "../algorithm/rungeKuttaPopulation";

export default function Simulation() {
  //Le premier argument est un tableau d'objets contenant les données historiques de Madagascar
  //Le deuxieme argument est le PIB de Madagascar en 2023
  //Le troisieme argument est le taux de croissance de Madagascar en 2023
  //Le quatrieme argument est le pas de calcul
  //Le cinquieme argument est le nombre d'années futures à predire
  // const predictions = predireCroissance(donneesHistoriques, 31195932, 3, 1, 300);

  const { isPending: isPendingTousGenres, data: dataTousGenres } = useQuery({
    queryKey: ["TousGenres"],
    queryFn: () => {
      return window.electronAPI.fetchTousGenres(); // Appel à la fonction exposée dans preload
    },
  });

  const { isPending: isPendingPib, data: dataPib } = useQuery({
    queryKey: ["pib"],
    queryFn: () => {
      return window.electronAPI.fetchPibs(); // Appel à la fonction exposée dans preload
    },
  });

  if (isPendingPib || isPendingTousGenres) return <LoaderSquare />;

  const predictionsPIB = rungeKuttaPib(data_pib);
  console.log("PIB predictions : ", predictionsPIB);
  const predictionsPopulation = rungeKuttaPopulation(dataPopulation);
  console.log("Population predictions : ", predictionsPopulation);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full flex flex-col max-w-[1366px] mx-auto gap-4"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">
          Experimenter et Regarder l'avenir de Madagascar
        </h1>
      </div>
      <div className="flex w-full gap-10">
        <GraphiqueResultat />
      </div>
    </motion.div>
  );
}

const GraphiqueResultat = () => {
  const { typeBarchart } = useTypeBarchartSimulation();
  return (
    <div className="w-[100%]">
      {/* <div className="p-3 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-lg shadow-md w-full max-w-xl ">
        <h2 className="text-lg font-semibold text-blue-700">
          🎯 Filtrer le type de courbe
        </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Type de courbe</span>
          </label>
          <select className="select select-bordered w-full">
            <option disabled selected>
              Choisir un type
            </option>
            <option>📈 Ligne</option>
            <option>📊 Barres</option>
            <option>📉 Courbe Lissée</option>
            <option>🌀 Radar</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Période (année)</span>
          </label>
          <input
            type="number"
            placeholder="Ex: 2020"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control mt-4">
          <button className="btn bg-cyan-600 w-full text-white">
            🔍 Appliquer le filtre
          </button>
        </div>
      </div> */}
      <div className="flex flex-col gap-6 p-4">
        <p>
          En fonction des données que nous avons recolter , nous allons predire
          les futur PIB et les futurs taux de croissance de Madagascar dans les
          futurs années{" "}
        </p>
        <form action="">
          <div className="flex gap-3 items-center border border-purple-400 rounded-md w-64 justify-center h-12">
            <label htmlFor="" className="font-semibold">
              2025 à{" "}
            </label>
            <input
              type="number"
              className="w-40 h-7 text-center rounded-lg border border-gray-700"
              placeholder="2100"
            />
          </div>
        </form>
      </div>
      <BarchartSimulation typeBarchart={typeBarchart} />
    </div>
  );
};

const FormFilter = () => {
  // const { typeBarchart } = useTypeBarchartSimulation();
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-lg rounded-xl p-6 max-w-xl mx-auto mt-6">
      <h2 className="text-3xl font-bold text-primary mb-6">🧮 Parametre</h2>
      <form className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">
              Valeur initiale de y (📍 y₀)
            </span>
          </label>
          <input
            type="number"
            name="y0"
            placeholder="ex: 1"
            className="input input-bordered input-primary w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">
              Point de départ x (x₀)
            </span>
          </label>
          <input
            type="number"
            name="x0"
            placeholder="ex: 0"
            className="input input-bordered input-primary w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">
              Pas de calcul (⏱ h)
            </span>
          </label>
          <input
            type="number"
            step="any"
            name="h"
            placeholder="ex: 0.1"
            className="input input-bordered input-primary w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">
              Nombre d'itérations (n)
            </span>
          </label>
          <input
            type="number"
            name="n"
            placeholder="ex: 10"
            className="input input-bordered input-primary w-full"
          />
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-cyan-600 w-full text-white text-lg"
          >
            ▶️ Simuler
          </button>
        </div>
      </form>
    </div>
  );
};
