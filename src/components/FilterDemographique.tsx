import { Funnel } from "lucide-react";
import { useFiltre } from "../store/useFiltreDemographique";

export default function FilterDemographique() {
  const { setFiltre } = useFiltre();
  return (
    <div className="flex gap-3 items-center">
      <div className="">
        <div
          tabIndex={0}
          role="button"
          className="flex items-center mb-1 gap-3 bg-purple-600 text-white rounded-lg p-2"
        >
          <Funnel className="text-primary size-5" /> FiltresGenre
        </div>
        <select
          onChange={(e) => {
            setFiltre(e.target.value);
          }}
          tabIndex={0}
          className="bg-base-100 rounded-lg z-1 w-52 p-2 shadow-sm border border-purple-400"
        >
          <option value={"Masculin"}>Masculin</option>
          <option value={"Feminin"}>Feminin</option>
          <option value={"Tous les genres"}>Tous les genres</option>
        </select>
      </div>
      <div className="">
        <div
          role="button"
          className="flex items-center mb-1 gap-3 bg-purple-600 text-white rounded-lg p-2"
        >
          <Funnel className="text-primary size-5" /> Filtres Age
        </div>
        <select
          onChange={(e) => {
            setFiltre(e.target.value);
          }}
          className="bg-base-100 rounded-lg z-1 w-52 p-2 shadow-sm border border-purple-400"
        >
          <option value={"0 à 4"}>0 à 4</option>
          <option
            value={"5 à 9"}
            onClick={() => {
              setFiltre("5 à 9");
            }}
          >
            5 à 9
          </option>
          <option value={"10 à 14"}>10 à 14</option>
          <option value={"15 à 19"}>15 à 19</option>
          <option value={"20 à 24"}>20 à 24</option>
          <option value={"25 à 29"}>25 à 29</option>
          <option value={"30 à 34"}>30 à 34</option>
          <option value={"35 à 39"}>35 à 39</option>
          <option value={"40 à 44"}>40 à 44</option>
          <option value={"45 à 49"}>45 à 49</option>
          <option value={"50 à 64"}>50 à 64</option>
          <option value={"+ 65"}>+ 65</option>
          <option value={"Tous les ages"}>Tous les ages</option>
        </select>
      </div>
    </div>
  );
}
