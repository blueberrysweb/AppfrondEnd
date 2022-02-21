import Comptador from "./Comptador";
import Galeria from "./Galeria";

const llista = [
  { path: "comptador", titol: "Comptador", Component: Comptador },
  { path: "galeria", titol: "Galeria de fotos", Component: <Galeria /> },
];

export default llista;
