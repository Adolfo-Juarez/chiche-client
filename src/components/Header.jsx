import logo from "../assets/icons/logo1.svg";
import logoChico from "../assets/img/logo-chico.png";
import imgBolsa from "../assets/img/handbag.png";
import imgPedidos from "../assets/img/archive.png";
import imgAyuda from "../assets/img/question.png";
import "../assets/stylesheets/Header.css";
import { isAuthenticated } from "../resources/Auth";
import ButtonsAccess from "./ButtonsAccess";

function Header() {
  function handleSubmit() {
    let toggle = document.querySelector(".btn-nav");
    let links = document.querySelector(".links");

    toggle.classList.toggle("rotate");
    links.classList.toggle("active");
  }

  return (
    <>
      <header>
        <a className="btn-modo-oscuro" href="https://github.com/Adolfo-Juarez/chiche-server"></a>
        <div>
          <a href="/">
            <img className="logo" src={logo} alt="Logo header" />
          </a>
        </div>
        <a onClick={handleSubmit} className="btn-nav" href="#"></a>
        <ul className="links">
          <img src={logoChico} alt="Logo nav" width="60px" />
          <li className="link">
            <a href="/">Inicio</a>
          </li>
          <li className="link">
            <a href="/choose">Pasteles</a>
          </li>
          <li className="link">
            <a href="/contact">Contáctanos</a>
          </li>
          <p>
            Se parte de nosotros para obtener los mejores productos y
            descuentos.
            <b>Más información</b>
          </p>
          <div className="buttons">
            <ButtonsAccess />
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
              <a href="/help">
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
