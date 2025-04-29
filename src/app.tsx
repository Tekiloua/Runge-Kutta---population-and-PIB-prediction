import { Loader2, TrendingDownIcon } from "lucide-react";
import Barcharts from "./components/Barcharts";
import Sidebar from "./components/Sidebar";
import Timeline from "./components/Timeline";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Simulation from "./pages/Simulation";
import Accueil from "./pages/Accueil";
import { Donnee } from "./pages/Donnee";
import { Algorithme } from "./pages/Algorithme";
import { Graphique } from "./pages/Graphique";
import Intro from "./pages/Intro";
import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { LoaderSquare } from "./components/LoaderSquare";
import { GraphLoader } from "./components/GraphLoader";
const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
      setIsLoading(false);
    }, 20);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const [isRouteLoading, setRouteLoading] = useState<boolean>(true);

  useEffect(() => {
    setRouteLoading(true);
    const timeout = setTimeout(() => {
      setRouteLoading(false);
    }, 20); // Durée du loader entre les routes (tu peux ajuster)

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const isIntroPage = location.pathname == "/";

  if (isLoading)
    return (
      <div className="w-full h-[98vh] flex items-center justify-center">
        <GraphLoader />
      </div>
    );

  return (
    <div
      className={`w-full ${
        !isIntroPage ? "grid grid-cols-[270px,1fr]" : null
      } h-full`}
    >
      {/* Afficher Sidebar seulement si on n’est pas sur la page d’intro */}
      {!isIntroPage && <Sidebar />}
      <main
        className={` ${
          !isIntroPage
            ? "w-[99%] bg-gray-200 flex justify-center py-[1%] mt-[1vh] rounded-r-xl"
            : "w-full"
        } h-[98vh] `}
      >
        <div
          className={`${
            !isIntroPage
              ? "container flex flex-col gap-6 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-indigo-100 w-full h-[94vh] overflow-x-scroll"
              : "w-full h-full"
          }`}
        >
          {isRouteLoading ? (
            <div className="w-full h-[98vh] flex items-center justify-center">
              <GraphLoader />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Intro />} />
              {/* <Route
              path="/usr/lib/electron-react/resources/app.asar/.vite/renderer/main_window/index.html"
              element={<Intro />}
            /> */}
              <Route path="/app" element={<Accueil />} />
              <Route path="/algorithme" element={<Algorithme />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/graphique" element={<Graphique />} />
              <Route path="/donnee" element={<Donnee />} />
            </Routes>
          )}
        </div>
      </main>
    </div>
  );
};
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
