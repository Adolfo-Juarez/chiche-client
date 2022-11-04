import "../assets/stylesheets/Barra.css";
import next from "../assets/icons/Next.svg";
import back from "../assets/icons/Back.svg";

function Barra() {
  return (
    <>
      <div className="contenedor">
        <a href="">
          <img src={back} />
        </a>
        <h2>Más detalles :</h2>
        <a href="">
          <img src={next} />
        </a>
      </div>
    </>
  );
}

export default Barra;