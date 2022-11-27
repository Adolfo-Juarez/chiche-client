import "../assets/stylesheets/VistaPastel.css";
import mermelada from "../assets/icons/Cuadro1.svg";
import cajeta from "../assets/icons/Cuadro2.svg";
import betunCafe from "../assets/icons/Cuadro3.svg";
import betunChocolate from "../assets/icons/Cuadro4.svg";
import betunCereza from "../assets/icons/Cuadro6.svg";
import hershey from "../assets/icons/Cuadro7.svg";
import betunQueso from "../assets/icons/Cuadro8.svg";
import betunVainilla from "../assets/icons/Cua2.svg";
import betunOreo from "../assets/icons/Cua4.svg";
import { useState } from "react";

function VistaPastel2() {
  const [classes, setclasses] = useState(["","","","","","","","",""]);
  return (
    <>
      <div className="contenedor2">
        <main className="main">
          <div className="cuadros">
            
            <div className={`cuadro ${classes[0]}`} onClick={()=>{localStorage.setItem("filling","mermelada de fresa")
            setclasses(["selected","unselected","unselected"
                      ,"unselected","unselected","unselected"
                      ,"unselected","unselected","unselected"])
          }}>
              <img src={mermelada} />
              <h3>Mermelada de fresa</h3>
            </div>

            <div className={`cuadro ${classes[1]}`} onClick={()=>{localStorage.setItem("filling", "cajeta")
            setclasses(["unselected","selected","unselected"
                      ,"unselected","unselected","unselected"
                      ,"unselected","unselected","unselected"])
          }}>
              <img src={cajeta} />
              <h3>Cajeta</h3>
            </div>

            <div className={`cuadro ${classes[2]}`} onClick={()=>{localStorage.setItem("filling","betún de café")
            setclasses(["unselected","unselected","selected"
                      ,"unselected","unselected","unselected"
                      ,"unselected","unselected","unselected"])
          }}>
              <img src={betunCafe} />
              <h3>Betún de café</h3>
            </div>

          </div>

          <div className="cuadros2" >

            <div className={`cuadro ${classes[3]}`} onClick={()=>{localStorage.setItem("filling","betún de chocolate")
            setclasses(["unselected","unselected","unselected"
                      ,"selected","unselected","unselected"
                      ,"unselected","unselected","unselected"])
          }}>
              <img src={betunChocolate} />
              <h3>Betún de chocolate</h3>
            </div>

            <div className={`cuadro ${classes[4]}`} onClick={()=>{localStorage.setItem("filling","betún de vainilla")
            setclasses(["unselected","unselected","unselected"
                      ,"unselected","selected","unselected"
                      ,"unselected","unselected","unselected"])
          }}>
              <img src={betunVainilla} />
              <h3>Betún de vainilla</h3>
            </div>

            <div className={`cuadro ${classes[5]}`} onClick={()=>{localStorage.setItem("filling","betún de cereza")
            setclasses(["unselected","unselected","unselected"
                      ,"unselected","unselected","selected"
                      ,"unselected","unselected","unselected"])
          }}>
              <img src={betunCereza} />
              <h3>Betún de cereza</h3>
            </div>

          </div>
          <div className="cuadros3">

            <div className={`cuadro ${classes[6]}`} onClick={()=>{localStorage.setItem("filling","ganage de Hersheys")
            setclasses(["unselected","unselected","unselected"
                      ,"unselected","unselected","unselected"
                      ,"selected","unselected","unselected"])
          }}>
              <img src={hershey} />
              <h3>Ganage de Hershey's</h3>
            </div>

            <div className={`cuadro ${classes[7]}`} onClick={()=>{localStorage.setItem("filling","betún de queso crema")
            setclasses(["unselected","unselected","unselected"
                      ,"unselected","unselected","unselected"
                      ,"unselected","selected","unselected"])
          }}>
              <img src={betunQueso} />
              <h3>Betún de queso crema</h3>
            </div>

            <div className={`cuadro ${classes[8]}`} onClick={()=>{localStorage.setItem("filling","betún de oreo")
            setclasses(["unselected","unselected","unselected"
                      ,"unselected","unselected","unselected"
                      ,"unselected","unselected","selected"])
          }}>
              <img src={betunOreo} />
              <h3>Betún de oreo</h3>
            </div>

          </div>

        </main>
      </div>
    </>
  );
}

export default VistaPastel2;
