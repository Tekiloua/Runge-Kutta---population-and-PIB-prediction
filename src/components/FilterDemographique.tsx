import { Funnel } from "lucide-react";
import { useFiltre } from "../store/useFiltreDemographique";

export default function FilterDemographique() {
  const { setFiltre } = useFiltre();
  return (
    <div className="flex gap-3 items-center">
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-outline btn-primary m-1"
        >
          Genre
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a
              onClick={() => {
                setFiltre("Masculin");
              }}
            >
              Masculin
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("Feminin");
              }}
            >
              Feminin
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("Tous les genres");
              }}
            >
              Tous les genres
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-outline btn-primary m-1"
        >
          Age
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a
              onClick={() => {
                setFiltre("-3");
              }}
            >
              moins de 3 ans
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("4 - 9 ans");
              }}
            >
              4 - 9 ans
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("10 - 17 ans");
              }}
            >
              10 - 17 ans
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("18 - 23 ans");
              }}
            >
              18 - 23 ans
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("24 - 32 ans");
              }}
            >
              24 - 32 ans
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("33 - 45 ans");
              }}
            >
              33 - 45 ans
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("46 - 64 ans");
              }}
            >
              46 - 64 ans
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("plus de 65 ans");
              }}
            >
              plus de 65 ans
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("Tous les ages");
              }}
            >
              Tous les ages
            </a>
          </li>
        </ul>
      </div>
      <button className="btn btn-soft btn-ghost">
        <Funnel className="text-primary size-5" /> Filtres
      </button>
    </div>
  );
}
