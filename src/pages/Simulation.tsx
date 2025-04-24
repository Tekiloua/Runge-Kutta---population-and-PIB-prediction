import { useTypeBarchartSimulation } from "../store/useTypeBarchartSimulation";
import { BarchartSimulation } from "../components/graphics/BarchartSimulation";
import { Calendar, Coins, Search } from "lucide-react";
import React, { useState } from "react";
import { useRungeApply } from "../store/useRungeApply";
import { motion } from "framer-motion";

export default function Simulation() {
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
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          obcaecati delectus nam libero excepturi? Saepe ut ratione illum ipsa,
          aut esse fuga eos eaque reiciendis repellendus quaerat dicta
          praesentium recusandae!
        </p>
      </div>
      <div className="grid grid-cols-[380px,1fr] w-full gap-10">
        <FormFilter />
        <GraphiqueResultat />
      </div>
    </motion.div>
  );
}

const GraphiqueResultat = () => {
  const { typeBarchart } = useTypeBarchartSimulation();
  return (
    <div className="w-[100%]">
      <div className="p-3 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-lg shadow-md w-full max-w-xl ">
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
          <button className="btn btn-primary w-full">
            🔍 Appliquer le filtre
          </button>
        </div>
      </div>

      <BarchartSimulation typeBarchart={typeBarchart} />
    </div>
  );
};

const FormFilter = () => {
  // const { typeBarchart } = useTypeBarchartSimulation();
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-lg rounded-xl p-6 max-w-xl mt-6">
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
            className="btn btn-primary w-full text-white text-lg"
          >
            ▶️ Simuler
          </button>
        </div>
      </form>
    </div>
  );
};
