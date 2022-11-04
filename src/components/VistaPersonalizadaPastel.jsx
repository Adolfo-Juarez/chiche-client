import "../assets/stylesheets/VistaPersonalizadaPastel.css";
import panque from "../assets/img/panque.png";
import cookie from "../assets/img/galletas.png";
import cake from "../assets/img/cake.png";
import blondie from "../assets/img/blondie.png";

function VistaPersonalizadaPastel() {
  return (
    <>
      <div className="texto">
        <h2>
          Disfruta de la <br /> variedad de <br /> productos
        </h2>
      </div>
      <div className="container-cards" />
      <div className="cards">
        <div className="card">
          <img className="image" src={cake} />
          <div className="card-top">
            <h2>Pasteles</h2>
          </div>
        </div>
        <div className="card">
          <img className="image" src={panque} />
          <div className="card-top">
            <h2>Panques</h2>
          </div>
        </div>
        <div className="card">
          <img className="image" src={blondie} />
          <div className="card-top">
            <h2>Blondies</h2>
          </div>
        </div>
        <div className="card">
          <img className="image" src={cookie} />
          <div className="card-top">
            <h2>Galletas</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaPersonalizadaPastel;
