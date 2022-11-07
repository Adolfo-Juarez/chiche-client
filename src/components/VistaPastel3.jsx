import "../assets/stylesheets/VistaPastel3.css";
import { useState } from "react";
import c1 from "../assets/icons/C1.svg";
import c2 from "../assets/icons/C2.svg";
import c3 from "../assets/icons/C3.svg";
import c4 from "../assets/icons/C4.svg";
import c5 from "../assets/icons/C5.svg";
import c6 from "../assets/icons/C6.svg";

function VistaPastel3() {

  const [classes1, setClasses1] = useState(["", ""]);
  const [classes2, setClasses2] = useState(["", ""]);
  const [classes3, setClasses3] = useState(["", ""]);

  return (
    <>
      <div className="sub1">
        <h2>Cobertura del pastel</h2>
      </div>
      <div className="contenedor2">
        <main className="main2">
          <div className="cuadros">

            <div className={`cuadro ${classes1[0]}`} onClick={() => {
              localStorage.setItem("coverage", "betún de mantequilla")
              setClasses1(["selected", "unselected"])
            }}>
              <img src={c1} />
              <h3>Betún de matequilla</h3>
            </div>

            <div className={`cuadro ${classes1[1]}`} onClick={() => {
              localStorage.setItem("coverage", "crema pastelera")
              setClasses1(["unselected", "selected"])
            }}>
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

            <div className={`cuadro ${classes2[0]}`} onClick={() => {
              localStorage.setItem("design", "impresiones")
              setClasses2(["selected", "unselected"])
            }}>
              <img src={c3} />
              <h3>Impresiones</h3>
            </div>

            <div className={`cuadro ${classes2[1]}`} onClick={() => {
              localStorage.setItem("design", "con crema de mantequilla")
              setClasses2(["unselected", "selected"])
            }}>
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

            <div className={`cuadro ${classes3[0]}`} onClick={() => {
              localStorage.setItem("shape", "circular")
              setClasses3(["selected", "unselected"])
            }}>
              <img src={c5} />
              <h3>Circular</h3>
            </div>

            <div className={`cuadro ${classes3[1]}`} onClick={() => {
              localStorage.setItem("shape", "corazon")
              setClasses3(["unselected", "selected"])
            }}>
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
