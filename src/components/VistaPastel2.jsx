import "../assets/stylesheets/MainVistaPastel2.css";
import mermelada from "../assets/icons/Cuadro1.svg";
import cajeta from "../assets/icons/Cuadro2.svg";
import betunCafe from "../assets/icons/Cuadro3.svg";
import betunChocolate from "../assets/icons/Cuadro4.svg";
import betunCereza from "../assets/icons/Cuadro6.svg";
import hershey from "../assets/icons/Cuadro7.svg";
import betunQueso from "../assets/icons/Cuadro8.svg";

import betunVainilla from "../assets/icons/Cua2.svg";
import betunOreo from "../assets/icons/Cua4.svg";

function MainVistaPastel2() {
  return (
    <>
      <div className="contenedor2">
        <main className="main">
          <div className="cuadros">
            <div className="cuadro">
              <img src={mermelada} />
              <h3>Mermelada de fresa</h3>
            </div>
            <div className="cuadro">
              <img src={cajeta} />
              <h3>Cajeta</h3>
            </div>
            <div className="cuadro">
              <img src={betunCafe} />
              <h3>Betún de café</h3>
            </div>
          </div>
          <div className="cuadros2">
            <div className="cuadro">
              <img src={betunChocolate} />
              <h3>Betún de chocolate</h3>
            </div>
            <div className="cuadro">
              <img src={betunVainilla} />
              <h3>Betún de vainilla</h3>
            </div>
            <div className="cuadro">
              <img src={betunCereza} />
              <h3>Betún de cereza</h3>
            </div>
          </div>
          <div className="cuadros3">
            <div className="cuadro">
              <img src={hershey} />
              <h3>Ganage de Hershey's</h3>
            </div>
            <div className="cuadro">
              <img src={betunQueso} />
              <h3>Betún de queso crema</h3>
            </div>
            <div className="cuadro">
              <img src={betunOreo} />
              <h3>Betún de oreo</h3>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainVistaPastel2;