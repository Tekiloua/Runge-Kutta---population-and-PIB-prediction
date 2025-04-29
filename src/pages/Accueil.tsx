import SousAccueil from "../components/SousAccueil";
import Helper from "../components/Helper";
import { FileQuestion } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import mada from "../assets/mada.png";

function Accueil() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative h-scrren flex px-6 pt-20"
    >
      <div className="max-w-8xl w-full p-6 space-y-10">
        {/* Titre principal */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-cyan-600">
            Prédiction du Taux Démographique de Madagascar
          </h1>
          <p className="text-lg text-gray-700">
            Ce projet utilise l'algorithme de{" "}
            <span className="font-semibold text-indigo-600">
              Runge-Kutta (RK4)
            </span>{" "}
            pour prédire l'évolution du taux démographique de Madagascar jusqu'à
            une année donnée, en se basant sur les données historiques de 1961 à
            2023.
          </p>
          <p className="text-md text-gray-600">
            Le modèle repose sur une équation différentielle estimée à partir
            des relations observées entre le PIB et le taux démographique. En
            utilisant RK4, nous pouvons intégrer cette équation dans le temps et
            générer des prédictions précises sur le long terme.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-indigo-400">
            <p className="text-gray-900 font-medium">
              🔍 Objectif : Estimer le taux démographique futur en fonction du
              PIB avec un modèle numérique basé sur les données passées.
            </p>
          </div>
        </div>

        {/* Section données utilisées */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-700">
            📊 Données utilisées
          </h2>
          <p className="text-md text-gray-700">
            Les données exploitées proviennent des archives économiques et
            démographiques de Madagascar, couvrant la période de{" "}
            <span className="font-medium text-indigo-600">
              {" "}
              <a
                href="https://donnees.banquemondiale.org/indicateur/NY.GDP.MKTP.KD.ZG?locations=MG"
                className="link-primary"
              >
                1961 à 2023
              </a>
            </span>
            . Chaque enregistrement contient :
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>
              <strong>Année</strong> : De 1961 à 2023
            </li>
            <li>
              <strong>Produit Intérieur Brut (PIB)</strong> : En milliards de
              dollars USD
            </li>
            <li>
              <strong>Taux de croissance démographique</strong> : Pourcentage
              annuel
            </li>
          </ul>
        </div>

        {/* Section approche mathématique */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-700">
            🧠 Approche mathématique
          </h2>
          <p className="text-md text-gray-700">
            Une équation différentielle est dérivée de la relation entre le PIB
            et le taux démographique à partir des données historiques. Cette
            équation est ensuite résolue numériquement avec l’algorithme{" "}
            <span className="font-semibold text-indigo-600">
              Runge-Kutta d'ordre 4
            </span>{" "}
            pour effectuer la prédiction jusqu’en 2300.
          </p>
        </div>

        {/* Bouton call to action */}
        <div className="text-center">
          <Link to={"/simulation"}>
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-200">
              🚀 Lancer la Simulation
            </button>
          </Link>
        </div>
      </div>
      <img src={mada} className=" right-2 top-5" alt="" />
    </motion.div>
  );
}

export default Accueil;
