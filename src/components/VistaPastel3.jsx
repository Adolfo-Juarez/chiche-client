import "../assets/stylesheets/VistaPastel.css";
import c1 from "../assets/icons/C1.svg";
import c2 from "../assets/icons/C2.svg";
import c3 from "../assets/icons/C3.svg";
import c4 from "../assets/icons/C4.svg";
import c5 from "../assets/icons/C5.svg";
import c6 from "../assets/icons/C6.svg";

function VistaPastel3() {
  return (
    <>
      <div className="sub1">
        <h2>Cobertura del pastel</h2>
      </div>
      <div className="contenedor2">
        <main className="main">
          <div className="cuadros">
            <div className="cuadro">
              <img src={c1} />
              <h3>Betún de matequilla</h3>
            </div>
            <div className="cuadro">
              <img src={c2} />
              <h3>Crema pastelera</h3>
            </div>
          </div>
        </main>
        <div className="sub1">
          <h2>Diseños</h2>
        </div>
        <div className="main2">
          <div className="cuadros">
            <div className="cuadro">
              <img src={c3} />
              <h3>Impresiones</h3>
            </div>
            <div className="cuadro">
              <img src={c4} />
              <h3>Con crema de mantequilla</h3>
            </div>
          </div>
        </div>
        <div className="sub1">
          <h2>Formas</h2>
        </div>
        <div className="main2">
          <div className="cuadros">
            <div className="cuadro">
              <img src={c5} />
              <h3>Circular</h3>
            </div>
            <div className="cuadro">
              <img src={c6} />
              <h3>Corazón</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaPastel3;