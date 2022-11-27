import "../assets/stylesheets/Barra.css";
import next from "../assets/icons/Next.svg";
import back from "../assets/icons/Back.svg";

function Barra({ nextpage, previouspage, title }) {
  return (
    <>
      <nav className="barra">
        <div className="contenedor">
          <a href={previouspage}>
            <img src={back} />
          </a>
          <h2>{`${title}:`}</h2>
          <a href={nextpage}>
            <img src={next} />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Barra;
