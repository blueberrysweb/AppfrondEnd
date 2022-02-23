import Acordio from "./Acordio";
import Comptador from "./Comptador";
import Galeria from "./Galeria";
import ToggleButton from "./ToggleButton";
import Vector from "./Vector";

const llista = [
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "galeria", titol: "Galeria", element: <Galeria /> },
  { path: "togglebutton", titol: "Toggle", element: <ToggleButton /> },
  { path: "acordio", titol: "Acordio", element: <Acordio /> },
  { path: "vector", titol: "Vector", element: <Vector /> },
];

export default llista;
