import next from "../assets/icons/next.svg";
import back from "../assets/icons/back.svg";
import "../assets/stylesheets/Barra.css";
import { Link } from "react-router-dom";

function Barra({ nextpage, previouspage, title }) {
  return (
    <>
      <nav className="barra">
        <div className="contenedor">
          <Link to={previouspage}>
            <img src={back} />
          </Link>
          <h1>{`${title}:`}</h1>
          <Link to={nextpage}>
            <img src={next} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Barra;
