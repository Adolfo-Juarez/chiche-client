import logo from "../assets/icons/logo.svg";
import logoChico from "../assets/icons/logo-chico.svg";
import ButtonsAccess from "./ButtonsAccess";
import "../assets/stylesheets/Header.css";

function Header() {
  function handleSubmit() {
    let toggle = document.querySelector(".btn-nav");
    let links = document.querySelector(".mobile-menu");

    toggle.classList.toggle("rotate");
    links.classList.toggle("active");
  }

  return (
    <>
      <header>
        <section className="flex-container">
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
        <ul className="mobile-menu">
          <a className="logo" href="/">
            <img src={logoChico} alt="Logo nav" width="60px" />
          </a>
          <ul className="nav">
            <li className="link">
              <a href="/">Inicio</a>
            </li>
            <li className="link">
              <a href="/choose">Menú</a>
            </li>
            <li className="link">
              <a href="/contact">Contáctanos</a>
            </li>
            <p className="description">
              Se parte de nosotros para obtener los mejores productos y
              descuentos.
              <br></br>
              <br></br>
              <b>Más información...</b>
            </p>
            <div className="buttons">
              <ButtonsAccess />
            </div>
          </ul>
          <ul className="more-links">
            <li>
              <a href="/order">
                <span className="imgPedidos"></span>
                <span>Pedidos</span>
              </a>
            </li>
            <li>
              <a href="/help">
                <span className="imgAyuda"></span>
                <span>Ayuda</span>
              </a>
            </li>
          </ul>
        </ul>
      </header>
    </>
  );
}

export default Header;
