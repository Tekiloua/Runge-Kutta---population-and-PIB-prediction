import { useFiltre } from "../store/useFiltrePIB";

export default function FilterPIB() {
  const { setFiltre } = useFiltre();
  return (
    <>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn btn-outline btn-primary m-1">
          Province
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a
              onClick={() => {
                setFiltre("Antananarivo");
              }}
            >
              Antananarivo
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("Antsiranana");
              }}
            >
              Antsiranana
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("Fianaratsoa");
              }}
            >
              Fianaratsoa
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("Mahajanga");
              }}
            >
              Mahajanga
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("Toamasina");
              }}
            >
              Toamasina
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("Toliara");
              }}
            >
              Toliara
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setFiltre("Tous les provinces");
              }}
            >
              Tous les provinces
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
