import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Intro = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/app");
  };
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 px-6">
      <motion.div
        initial={{ opacity: 0.6, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center text-white max-w-2xl space-y-8"
      >
        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
          Simulateur Démographique 🇲🇬
        </h1>
        <p className="text-xl text-indigo-200">
          Anticipez le futur de Madagascar avec l’algorithme Runge-Kutta et plus
          de 60 ans de données.
        </p>
        <button
          onClick={handleStart}
          className="mt-6 bg-white text-indigo-700 hover:bg-indigo-100 font-semibold px-10 py-4 rounded-2xl shadow-lg transition duration-200"
        >
          🚀 Commencer la simulation
        </button>
      </motion.div>
    </div>
  );
};

export default Intro;
