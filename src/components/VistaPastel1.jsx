import "../assets/stylesheets/VistaPastel1.css";
import cacao from "../assets/icons/cacao.svg";
import vainilla from "../assets/icons/vainilla.svg";
import funfetti from "../assets/icons/funfetti.svg";
import redVelvet from "../assets/icons/red-velvet.svg";
import oreo from "../assets/icons/oreo.svg";
import cafe from "../assets/icons/granos-de-cafe.svg";
import { useState } from "react";

function VistaPastel1() {

  const [classes, setClasses] = useState(["", "", "", "", "", ""]);

  return (
    <>
      <div className="contenedor2">
        <main className="main">
          <div className="cuadros">
            <div
              className={`cuadro ${classes[0]}`}
              onClick={() => {
                localStorage.setItem("biscuit", "chocolate");
                setClasses(["selected", "unselected", "unselected"
                  , "unselected", "unselected", "unselected"])
              }}
            >
              <img src={cacao} className="cacao" />
              <h3>Chocolate</h3>
            </div>

            <div
              className={`cuadro ${classes[1]}`}
              onClick={() => {
                localStorage.setItem("biscuit", "vainilla");
                setClasses(["unselected", "selected", "unselected"
                  , "unselected", "unselected", "unselected"])
              }}
            >
              <img src={vainilla} className="vainilla" />
              <h3>Vainilla</h3>
            </div>

            <div
              className={`cuadro ${classes[2]}`}
              onClick={() => {
                localStorage.setItem("biscuit", "funfetti");
                setClasses(["unselected", "unselected", "selected"
                  , "unselected", "unselected", "unselected"])
              }}
            >
              <img src={funfetti} className="funfetti" />
              <h3>Funfetti</h3>
            </div>
          </div>
          <div className="cuadros2">
            <div
              className={`cuadro ${classes[3]}`}
              onClick={() => {
                localStorage.setItem("biscuit", "red velvet");
                setClasses(["unselected", "unselected", "unselected"
                  , "selected", "unselected", "unselected"])
              }}
            >
              <img src={redVelvet} className="redVelvet" />
              <h3>Red Velvet</h3>
            </div>

            <div
              className={`cuadro ${classes[4]}`}
              onClick={() => {
                localStorage.setItem("biscuit", "oreo");
                setClasses(["unselected", "unselected", "unselected"
                  , "unselected", "selected", "unselected"])
              }}
            >
              <img src={oreo} className="oreo" />
              <h3>Oreo</h3>
            </div>

            <div
              className={`cuadro ${classes[5]}`}
              onClick={() => {
                localStorage.setItem("biscuit", "café");
                setClasses(["unselected", "unselected", "unselected"
                  , "unselected", "unselected", "selected"])
              }}
            >
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
