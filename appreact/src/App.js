import "./App.css";
import Comptador from "./Comptador";
import SayHello from "./Efectes";
import Ping from "./Efectes";
import Galeria from "./galeria";

function App() {
  return (
    <>
      <div className="content">
        <Galeria />
      </div>
      <div className="content">
        <Comptador />
      </div>
      <div className="content">
        <SayHello />
      </div>
    </>
  );
}

export default App;
