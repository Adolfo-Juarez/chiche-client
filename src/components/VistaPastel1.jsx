import "../assets/stylesheets/VistaPastel1.css";
import cacao from "../assets/icons/cacao.svg";
import vainilla from "../assets/icons/vainilla.svg";
import funfetti from "../assets/icons/Funfetti.svg";
import redVelvet from "../assets/icons/red-velvet.svg";
import oreo from "../assets/icons/Oreo.svg";
import cafe from "../assets/icons/granos-de-cafe.svg";

function VistaPastel1() {
  return (
    <>
      <div className="contenedor2">
        <main className="main">
          <div className="cuadros">
            <div className="cuadro">
              <img src={cacao} className="cacao" />
              <h3>Chocolate</h3>
            </div>
            <div className="cuadro">
              <img src={vainilla} className="vainilla" />
              <h3>Vainilla</h3>
            </div>
            <div className="cuadro">
              <img src={funfetti} className="funfetti" />
              <h3>Funfetti</h3>
            </div>
          </div>
          <div className="cuadros2">
            <div className="cuadro">
              <img src={redVelvet} className="redVelvet" />
              <h3>Red Velvet</h3>
            </div>
            <div className="cuadro">
              <img src={oreo} className="oreo" />
              <h3>Oreo</h3>
            </div>
            <div className="cuadro">
              <img src={cafe} className="cafe" />
              <h3>Café</h3>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default VistaPastel1;