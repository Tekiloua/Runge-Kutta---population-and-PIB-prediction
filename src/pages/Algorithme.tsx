import { motion } from "framer-motion";
import runge from "../assets/runge.png";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Algorithme = () => {
  return (
    <div className="w-full h-full">
      <div className="relative px-2 py-8 w-full space-y-2">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          🧠 Comprendre l’algorithme de Runge-Kutta
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            🎯 Le but du site
          </h2>
          <p className="text-gray-700 text-lg">
            Ce site a été créé pour aider les étudiants, passionnés de maths et
            développeurs à mieux comprendre l’algorithme de{" "}
            <strong>Runge-Kutta</strong>, une méthode numérique très utilisée
            pour résoudre les équations différentielles 🧮.
          </p>
          <p className="text-gray-700 text-lg">
            Grâce à des explications simples, des exemples concrets et une
            visualisation interactive, vous allez enfin saisir cette méthode
            puissante !
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            🔍 Qu’est-ce que Runge-Kutta ?
          </h2>
          <p className="text-gray-700 text-lg">
            C’est une méthode d’approximation qui permet de trouver une solution
            approchée à une équation différentielle sans avoir besoin de la
            résoudre exactement. On avance "pas à pas" à partir d’une condition
            initiale 📈.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            🧩 Les étapes de l’algorithme (ordre 4)
          </h2>
          <ol className="list-decimal list-inside text-gray-700 text-lg space-y-2">
            <li>
              On part d’un point initial <code>(x₀, y₀)</code>.
            </li>
            <li>
              On choisit un pas de calcul <code>h</code>.
            </li>
            <li>
              On calcule 4 pentes :
              <ul className="list-disc list-inside ml-6">
                <li>
                  <code>k₁ = f(x₀, y₀)</code>
                </li>
                <li>
                  <code>k₂ = f(x₀ + h/2, y₀ + h·k₁/2)</code>
                </li>
                <li>
                  <code>k₃ = f(x₀ + h/2, y₀ + h·k₂/2)</code>
                </li>
                <li>
                  <code>k₄ = f(x₀ + h, y₀ + h·k₃)</code>
                </li>
              </ul>
            </li>
            <li>
              On combine ces pentes pour estimer le nouveau <code>y</code> :
              <br />
              <code>y₁ = y₀ + (h/6)·(k₁ + 2k₂ + 2k₃ + k₄)</code>
            </li>
            <li>
              On passe à <code>x₁ = x₀ + h</code> et on recommence 🔁.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            ✨ Ce que vous allez apprendre ici
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>La logique derrière l’algorithme</li>
            <li>Comment l’implémenter en code (Python, JavaScript…)</li>
            <li>Des cas concrets et simulations interactives 🎮</li>
          </ul>
        </section>
        <img
          src={runge}
          className="absolute right-56 top-[40%] opacity-75"
          alt=""
        />
      </div>
    </div>
  );
};
