import imgFacebook from "../assets/icons/facebook.svg";
import imgTwitter from "../assets/icons/twitter.svg";
import imgInstagram from "../assets/icons/instagram.svg";
import imgGitHub from "../assets/icons/github.svg";
import "../assets/stylesheets/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <a href="/contact">
          <h1>Envíanos tus comentarios</h1>
        </a>
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
        <div className="social">
          <a href="https://github.com/Adolfo-Juarez/chiche-client">
            <img src={imgGitHub} alt="GitHub" />
          </a>
          <a href="#">
            <img src={imgFacebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={imgTwitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={imgInstagram} alt="Instagram" />
          </a>
        </div>
        <span>
          © 2022 Chiché.
          <br />
          All rights reserved.
        </span>
      </footer>
    </>
  );
}

export default Footer;
