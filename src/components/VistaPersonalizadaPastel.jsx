import panque from "../assets/icons/panque.svg";
import cookie from "../assets/icons/galletas.svg";
import cake from "../assets/icons/cake.svg";
import blondie from "../assets/icons/blondie.svg";
import "../assets/stylesheets/VistaPersonalizadaPastel.css";
import { useNavigate } from "react-router-dom";

function VistaPersonalizadaPastel() {

  const navigate = useNavigate()

  return (
    <>
      <div className="container-cards">
        <div className="texto">
          <h2>Disfruta de la variedad de productos</h2>
        </div>
        <div className="cards">
          <div
            className="card"
            onClick={() => {
              navigate("/biscuit");
            }}
          >
            <img src={cake} />
            <div className="card-title">
              <h3>Pasteles</h3>
            </div>
          </div>
          <div
            className="card"
            onClick={() => {
              navigate("/cupcake");
            }}
          >
            <img src={panque} />
            <div className="card-title">
              <h3>Panques</h3>
            </div>
          </div>
          <div
            className="card"
            onClick={() => {
              navigate("/blondie");
            }}
          >
            <img src={blondie} />
            <div className="card-title">
              <h3>Blondies</h3>
            </div>
          </div>
          <div
            className="card"
            onClick={() => {
              navigate("/cookie");
            }}
          >
            <img src={cookie} />
            <div className="card-title">
              <h3>Galletas</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaPersonalizadaPastel;
