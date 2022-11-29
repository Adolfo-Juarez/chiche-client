import mermelada from "../assets/icons/mermelada.svg";
import cajeta from "../assets/icons/cajeta.svg";
import betunCafe from "../assets/icons/granos-de-cafe.svg";
import betunChocolate from "../assets/icons/cacao.svg";
import betunCereza from "../assets/icons/cereza.svg";
import hershey from "../assets/icons/hershey.svg";
import betunQueso from "../assets/icons/queso.svg";
import betunVainilla from "../assets/icons/vainilla.svg";
import betunOreo from "../assets/icons/red-velvet.svg";
import { useState } from "react";
import "../assets/stylesheets/VistaPastel.css";

function VistaPastel2() {
  const [classes, setclasses] = useState(["", "", "", "", "", "", "", "", ""]);
  return (
    <>
      <main className="bizcocho">
        <div className="cuadros">
          <div
            className={`cuadro ${classes[0]}`}
            onClick={() => {
              localStorage.setItem("filling", "mermelada de fresa");
              setclasses([
                "selected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
              ]);
            }}
          >
            <img className="small" src={mermelada} />
            <h4>Mermelada de Fresa</h4>
          </div>
          <div
            className={`cuadro ${classes[1]}`}
            onClick={() => {
              localStorage.setItem("filling", "cajeta");
              setclasses([
                "unselected",
                "selected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
              ]);
            }}
          >
            <img src={cajeta} />
            <h4>Cajeta</h4>
          </div>
          <div
            className={`cuadro ${classes[2]}`}
            onClick={() => {
              localStorage.setItem("filling", "betún de café");
              setclasses([
                "unselected",
                "unselected",
                "selected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
              ]);
            }}
          >
            <img src={betunCafe} />
            <h4>Betún de Café</h4>
          </div>
        </div>
        <div className="cuadros">
          <div
            className={`cuadro ${classes[3]}`}
            onClick={() => {
              localStorage.setItem("filling", "betún de chocolate");
              setclasses([
                "unselected",
                "unselected",
                "unselected",
                "selected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
              ]);
            }}
          >
            <img src={betunChocolate} />
            <h4>Betún de Chocolate</h4>
          </div>
          <div
            className={`cuadro ${classes[4]}`}
            onClick={() => {
              localStorage.setItem("filling", "betún de vainilla");
              setclasses([
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "selected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
              ]);
            }}
          >
            <img src={betunVainilla} />
            <h4>Betún de Vainilla</h4>
          </div>
          <div
            className={`cuadro ${classes[5]}`}
            onClick={() => {
              localStorage.setItem("filling", "betún de cereza");
              setclasses([
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "selected",
                "unselected",
                "unselected",
                "unselected",
              ]);
            }}
          >
            <img src={betunCereza} />
            <h4>Betún de Cereza</h4>
          </div>
        </div>
        <div className="cuadros">
          <div
            className={`cuadro ${classes[6]}`}
            onClick={() => {
              localStorage.setItem("filling", "ganage de Hersheys");
              setclasses([
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "selected",
                "unselected",
                "unselected",
              ]);
            }}
          >
            <img src={hershey} />
            <h4>Ganage de Hershey's</h4>
          </div>
          <div
            className={`cuadro ${classes[7]}`}
            onClick={() => {
              localStorage.setItem("filling", "betún de queso crema");
              setclasses([
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "selected",
                "unselected",
              ]);
            }}
          >
            <img src={betunQueso} />
            <h4>Betún de Queso Crema</h4>
          </div>
          <div
            className={`cuadro ${classes[8]}`}
            onClick={() => {
              localStorage.setItem("filling", "betún de oreo");
              setclasses([
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "unselected",
                "selected",
              ]);
            }}
          >
            <img src={betunOreo} />
            <h4>Betún de Oreo</h4>
          </div>
        </div>
      </main>
    </>
  );
}

export default VistaPastel2;
