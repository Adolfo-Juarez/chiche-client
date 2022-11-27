import next from "../assets/icons/next.svg";
import back from "../assets/icons/back.svg";
import "../assets/stylesheets/Barra.css";

function Barra({ nextpage, previouspage, title }) {
  return (
    <>
      <nav className="barra">
        <div className="contenedor">
          <a href={previouspage}>
            <img src={back} />
          </a>
          <h1>{`${title}:`}</h1>
          <a href={nextpage}>
            <img src={next} />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Barra;
