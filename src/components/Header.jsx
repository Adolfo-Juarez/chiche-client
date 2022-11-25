import logo from "../assets/icons/logo1.svg";
import logoChico from "../assets/img/logo-chico.png";
import imgPedidos from "../assets/img/archive.png";
import imgAyuda from "../assets/img/question.png";
import ButtonsAccess from "./ButtonsAccess";
import { isAuthenticated } from "../resources/Auth";
import "../assets/stylesheets/Header.css";

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
        <section className="FlexContainer">
          <div className="flex-logo">
            <a href="/">
              <img className="logo" src={logo} alt="Logo header" />
            </a>
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/choose">Menú</a>
              </li>
              <li>
                <a href="/contact">Contáctanos</a>
              </li>
            </ul>
          </div>
          <div className="login">
            <a className="btn" href="/login">
              Inicia Sesión
            </a>
          </div>
        </section>
      </header>
      <header className="mobile-header">
        <a
          className="btn-modo-oscuro"
          href="https://github.com/Adolfo-Juarez/chiche-client"
        ></a>
        <div>
          <a href="/">
            <img className="logo" src={logo} alt="Logo header" />
          </a>
        </div>
        <a onClick={handleSubmit} className="btn-nav" href="#"></a>
        <ul className="links">
          <a href="/">
            <img src={logoChico} alt="Logo nav" width="60px" />
          </a>
          <li className="link">
            <a href="/">Inicio</a>
          </li>
          <li className="link">
            <a href="/choose">Menú</a>
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
              <a href="/order">
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
