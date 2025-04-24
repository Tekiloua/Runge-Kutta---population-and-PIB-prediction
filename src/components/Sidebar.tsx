import { motion } from "framer-motion";
import {
  ChartNoAxesCombined,
  Code,
  Database,
  FlaskConical,
  House,
  LogOut,
  UsersRound,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SideBarProps {
  className?: string;
}

export default function Sidebar({ className }: SideBarProps) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, x: -10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`bg-gradient-to-br from-indigo-100 via-white to-indigo-100 rounded-l-xl h-[98vh] mt-[1vh] ml-4 flex flex-col justify-between items-center pb-8 ${className}`}
    >
      <div className="flex  w-full flex-col gap-16 pt-16">
        <div className="logo flex w-full gap-4 justify-center items-center">
          <UsersRound className="size-10" />
          <span className="flex flex-col">
            <span className="font-semibold text-xl">Population State</span>
            <span className="text-sm">Madagascar</span>
          </span>
        </div>
        <Links />
      </div>
    </motion.div>
  );
}

const Links = () => {
  const location = useLocation();
  return (
    <div className="links flex flex-col gap-4 items-center ">
      <Link
        to={"/app"}
        className={`flex w-[80%] bg-base-100/70  rounded-xl mx-[5%] p-2 border border-gray-400 gap-3 ${
          location.pathname == "/app" ? "bg-primary text-white" : null
        }`}
      >
        <House className={``} />
        <span className=" text-">Accueil</span>
      </Link>
      <Link
        to={"/algorithme"}
        className={`flex w-[80%] bg-base-100/70   rounded-xl mx-[5%] p-2 border border-gray-400 gap-3 ${
          location.pathname == "/algorithme" ? "bg-primary text-white" : null
        }`}
      >
        <Code className={``} />
        <span className="">Algorihtme</span>
      </Link>
      <Link
        to="/graphique"
        className={`flex w-[80%] bg-base-100/70  rounded-xl mx-[5%] p-2 border border-gray-400 gap-3 ${
          location.pathname == "/graphique" ? "bg-primary text-white" : null
        }`}
      >
        <ChartNoAxesCombined className={``} />
        <span className=" ">Graphiques</span>
      </Link>
      <Link
        to={"/simulation"}
        className={`flex w-[80%] bg-base-100/70   rounded-xl mx-[5%] p-2 border border-gray-400 gap-3 ${
          location.pathname == "/simulation" ? "bg-primary text-white" : null
        }`}
      >
        <FlaskConical className={``} />
        <span className="">Simuler</span>
      </Link>

      <Link
        to="/donnee"
        className={`flex items-center w-[80%] bg-base-100/70   rounded-xl mx-[5%] p-2 border border-gray-400 gap-3 ${
          location.pathname == "/donnee" ? "bg-primary text-white" : null
        }`}
      >
        <Database className={``} /> <span className="">Données</span>
        <div className="status status-success"></div>
      </Link>
    </div>
  );
};
