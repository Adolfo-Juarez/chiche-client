import logo from "../assets/icons/logo1.svg";
import logoChico from "../assets/img/logo-chico.png";
import imgBolsa from "../assets/img/handbag.png";
import imgPedidos from "../assets/img/archive.png";
import imgAyuda from "../assets/img/question.png";
import "../assets/stylesheets/Header.css";

const toggle = document.querySelector(".btn-nav");
const links = document.querySelector(".links");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("rotate");
  links.classList.toggle("active");
});

function Header() {
  return (
    <>
      <header>
        <a className="btn-modo-oscuro" href="#"></a>
        <img className="logo" src={logo} alt="Logo header" />
        <a className="btn-nav" href="#"></a>
        <ul className="links">
          <img src={logoChico} alt="Logo nav" width="60px"/>
          <li className="link">
            <a href="#">Inicio</a>
          </li>
          <li className="link">
            <a href="#">Pasteles</a>
          </li>
          <li className="link">
            <a href="#">Contáctanos</a>
          </li>
          <p>
            Se parte de nosotros para obtener los mejores productos y
            descuentos.
            <b>Más información</b>
          </p>
          <div className="buttons">
            <a className="btn" href="#">
              Únete
            </a>
            <a className="btn" href="#">
              Inicia Sesión
            </a>
          </div>
          <ul className="more-links">
            <li>
              <a href="#">
                <img src={imgBolsa} alt="Handbag" />
                Bolsa de compra
              </a>
            </li>
            <li>
              <a href="#">
                <img src={imgPedidos} alt="Handbag" />
                Pedidos
              </a>
            </li>
            <li>
              <a href="#">
                <img src={imgAyuda} alt="Handbag" />
                Ayuda
              </a>
            </li>
          </ul>
        </ul>
      </header>
    </>
  );
}

export default Header;