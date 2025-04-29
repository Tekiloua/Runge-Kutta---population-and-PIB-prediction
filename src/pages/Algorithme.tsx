import { motion } from "framer-motion";
import runge from "../assets/runge.png";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Algorithme = () => {
  return (
    // <div className="w-full h-full">
    //   <div className="relative px-2 py-8 w-full space-y-2">
    //     <h1 className="text-4xl font-bold text-blue-700 mb-6">
    //       🧠 Comprendre l’algorithme de Runge-Kutta
    //     </h1>

    //     <section className="space-y-4">
    //       <h2 className="text-2xl font-semibold text-blue-600">
    //         🎯 Le but du site
    //       </h2>
    //       <p className="text-gray-700 text-lg">
    //         Ce site a été créé pour aider les étudiants, passionnés de maths et
    //         développeurs à mieux comprendre l’algorithme de{" "}
    //         <strong>Runge-Kutta</strong>, une méthode numérique très utilisée
    //         pour résoudre les équations différentielles 🧮.
    //       </p>
    //       <p className="text-gray-700 text-lg">
    //         Grâce à des explications simples, des exemples concrets et une
    //         visualisation interactive, vous allez enfin saisir cette méthode
    //         puissante !
    //       </p>
    //     </section>

    //     <section className="space-y-4">
    //       <h2 className="text-2xl font-semibold text-blue-600">
    //         🔍 Qu’est-ce que Runge-Kutta ?
    //       </h2>
    //       <p className="text-gray-700 text-lg">
    //         C’est une méthode d’approximation qui permet de trouver une solution
    //         approchée à une équation différentielle sans avoir besoin de la
    //         résoudre exactement. On avance "pas à pas" à partir d’une condition
    //         initiale 📈.
    //       </p>
    //     </section>

    //     <section className="space-y-4">
    //       <h2 className="text-2xl font-semibold text-blue-600">
    //         🧩 Les étapes de l’algorithme (ordre 4)
    //       </h2>
    //       <ol className="list-decimal list-inside text-gray-700 text-lg space-y-2">
    //         <li>
    //           On part d’un point initial <code>(x₀, y₀)</code>.
    //         </li>
    //         <li>
    //           On choisit un pas de calcul <code>h</code>.
    //         </li>
    //         <li>
    //           On calcule 4 pentes :
    //           <ul className="list-disc list-inside ml-6">
    //             <li>
    //               <code>k₁ = f(x₀, y₀)</code>
    //             </li>
    //             <li>
    //               <code>k₂ = f(x₀ + h/2, y₀ + h·k₁/2)</code>
    //             </li>
    //             <li>
    //               <code>k₃ = f(x₀ + h/2, y₀ + h·k₂/2)</code>
    //             </li>
    //             <li>
    //               <code>k₄ = f(x₀ + h, y₀ + h·k₃)</code>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           On combine ces pentes pour estimer le nouveau <code>y</code> :
    //           <br />
    //           <code>y₁ = y₀ + (h/6)·(k₁ + 2k₂ + 2k₃ + k₄)</code>
    //         </li>
    //         <li>
    //           On passe à <code>x₁ = x₀ + h</code> et on recommence 🔁.
    //         </li>
    //       </ol>
    //     </section>

    //     <section className="space-y-4">
    //       <h2 className="text-2xl font-semibold text-blue-600">
    //         ✨ Ce que vous allez apprendre ici
    //       </h2>
    //       <ul className="list-disc list-inside text-gray-700 text-lg">
    //         <li>La logique derrière l’algorithme</li>
    //         <li>Comment l’implémenter en code (Python, JavaScript…)</li>
    //         <li>Des cas concrets et simulations interactives 🎮</li>
    //       </ul>
    //     </section>
    //     <img
    //       src={runge}
    //       className="absolute right-56 top-[40%] opacity-75"
    //       alt=""
    //     />
    //   </div>
    // </div>
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-8 bg-white rounded-2xl shadow-md text-gray-900 leading-relaxed"
    >
      <h2 className="text-3xl font-bold mb-6 text-cyan-600">
        📈 Modélisation de la population avec Runge-Kutta (ordre 4)
      </h2>

      <p className="mb-4">
        Dans cette section, nous présentons la méthode numérique utilisée pour
        estimer la population d’un pays entre les années <strong>2024</strong>{" "}
        et <strong>2090</strong>, à partir des données historiques collectées
        entre
        <code>1961</code> et <code>2023</code>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-cyan-600">
        🔍 Étape 1 : Calcul du taux de croissance moyen
      </h3>
      <p className="mb-4">
        Le premier objectif est d’estimer le{" "}
        <strong>taux de croissance annuel moyen</strong>. Pour cela, on parcourt
        l’ensemble des données de population disponibles. Pour chaque paire
        d’années consécutives, on calcule le taux de croissance annuel comme
        suit :
      </p>
      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        {`growthRate = (population[i] - population[i - 1]) / population[i - 1]`}
      </pre>
      <p className="mb-4">
        On fait la moyenne de ces taux pour obtenir une estimation constante de
        la croissance annuelle, notée <code>r</code>. Cette constante est
        utilisée dans la modélisation de l’équation différentielle de type
        exponentielle :<code>dy/dt = y × r</code>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-cyan-600">
        🧮 Étape 2 : Approximation par l’algorithme de Runge-Kutta d’ordre 4
      </h3>
      <p className="mb-4">
        L’équation différentielle obtenue n’a pas de solution analytique simple
        ici, car elle est utilisée dans un cadre numérique discret (année par
        année). On applique donc la méthode de Runge-Kutta d’ordre 4 (RK4), un
        algorithme qui permet de simuler l’évolution de la population{" "}
        <em>avec précision</em> sur un intervalle donné.
      </p>

      <p className="mb-4">
        Pour chaque année, on effectue quatre évaluations de la fonction dérivée
        (ici, <code>f(t, y) = y × r</code>) pour calculer une valeur pondérée
        qui sert à projeter l’année suivante :
      </p>

      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        {`k1 = h × f(t, y)
k2 = h × f(t + h/2, y + k1/2)
k3 = h × f(t + h/2, y + k2/2)
k4 = h × f(t + h, y + k3)

y_{next} = y + (1/6) × (k1 + 2×k2 + 2×k3 + k4)`}
      </pre>

      <p className="mb-4">
        Cette formule permet de minimiser les erreurs d’approximation typiques
        des méthodes plus simples comme Euler. Chaque <code>k</code> représente
        une prédiction intermédiaire de la dérivée de la population (la
        variation), prise à différents moments au sein de l’année. L’ensemble
        permet d’avoir une estimation très fidèle du changement de la population
        sur un pas <code>h = 1</code> an.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-cyan-600">
        📤 Étape 3 : Génération des prédictions
      </h3>
      <p className="mb-4">
        L’algorithme commence à l’année <code>2024</code>, en utilisant la
        dernière population connue de <code>2023</code>
        comme valeur initiale. Il applique la méthode RK4 pour générer les
        valeurs successives, stockées dans un tableau d’objets contenant{" "}
        <code>year</code> et <code>value</code> :
      </p>

      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        {`[
  { year: 2024, value: 31965231 },
  { year: 2025, value: 32743016 },
  ...
  { year: 2090, value: 89120451 }
]`}
      </pre>

      <p className="mb-4">
        Ces données sont ensuite utilisables dans des graphiques ou pour
        effectuer d’autres calculs économiques (comme le PIB par habitant).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-cyan-600">
        📌 Remarque finale
      </h3>
      <p>
        Ce modèle repose sur l’hypothèse d’un taux de croissance constant, ce
        qui est une simplification. Il fonctionne bien pour des projections
        éducatives ou générales, mais ne tient pas compte des événements
        démographiques majeurs (migrations massives, catastrophes, politiques de
        natalité, etc.). Pour des prédictions plus fines, des modèles plus
        complexes (démographiques ou basés sur des réseaux neuronaux) seraient
        nécessaires.
      </p>
    </motion.section>
  );
};
