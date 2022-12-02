import betunMantequilla from "../assets/icons/betun-mantequilla.svg";
import manga from "../assets/icons/manga.svg";
import impresion from "../assets/icons/impresion.svg";
import mantequilla from "../assets/icons/queso.svg";
import circulo from "../assets/icons/circulo.svg";
import corazon from "../assets/icons/corazon.svg";
import { useState } from "react";
import "../assets/stylesheets/VistaPastel.css";

function VistaPastel3() {
  const [classes1, setClasses1] = useState(["", ""]);
  const [classes2, setClasses2] = useState(["", ""]);
  const [classes3, setClasses3] = useState(["", ""]);

  return (
    <>
      <main className="bizcocho">
        <div className="sub">
          <h2>Cobertura del pastel</h2>
        </div>
        <div className="cuadros small">
          <div
            className={`cuadro ${classes1[0]}`}
            onClick={() => {
              localStorage.setItem("coverage", "betún de mantequilla");
              setClasses1(["selected", "unselected"]);
            }}
          >
            <img src={betunMantequilla} />
            <h3>Betún de Matequilla</h3>
          </div>
          <div
            className={`cuadro ${classes1[1]}`}
            onClick={() => {
              localStorage.setItem("coverage", "crema pastelera");
              setClasses1(["unselected", "selected"]);
            }}
          >
            <img src={manga} />
            <h3>Crema Pastelera</h3>
          </div>
        </div>
        <div className="sub">
          <h2>Diseños</h2>
        </div>
        <div className="cuadros small">
          <div
            className={`cuadro ${classes2[0]}`}
            onClick={() => {
              localStorage.setItem("design", "impresiones");
              setClasses2(["selected", "unselected"]);
            }}
          >
            <img src={impresion} />
            <h3>Impresión</h3>
          </div>
          <div
            className={`cuadro ${classes2[1]}`}
            onClick={() => {
              localStorage.setItem("design", "con crema de mantequilla");
              setClasses2(["unselected", "selected"]);
            }}
          >
            <img src={mantequilla} />
            <h3>Crema de Mantequilla</h3>
          </div>
        </div>
        <div className="sub">
          <h2>Formas</h2>
        </div>
        <div className="cuadros small">
          <div
            className={`cuadro ${classes3[0]}`}
            onClick={() => {
              localStorage.setItem("shape", "circular");
              setClasses3(["selected", "unselected"]);
            }}
          >
            <img src={circulo} />
            <h3>Circular</h3>
          </div>
          <div
            className={`cuadro ${classes3[1]}`}
            onClick={() => {
              localStorage.setItem("shape", "corazon");
              setClasses3(["unselected", "selected"]);
            }}
          >
            <img src={corazon} />
            <h3>Corazón</h3>
          </div>
        </div>
      </main>
    </>
  );
}

export default VistaPastel3;
