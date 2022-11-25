import imgPedidos from "../assets/img/archive.png";
import imgAyuda from "../assets/img/question.png";
import imgFacebook from "../assets/img/facebook.png";
import imgTwitter from "../assets/img/twitter.png";
import imgInstagram from "../assets/img/instagram.png";
import "../assets/stylesheets/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <h1>Envíanos tus comentarios</h1>
        <ul className="more-links">
          <li>
            <a href="/order">
              <img src={imgPedidos} alt="Handbag" />
              <span>Pedidos</span>
            </a>
          </li>
          <li>
            <a href="/help">
              <img src={imgAyuda} alt="Handbag" />
              <span>Ayuda</span>
            </a>
          </li>
        </ul>
        <div className="social">
          <img src={imgFacebook} alt="Facebook" />
          <img src={imgTwitter} alt="Twitter" />
          <img src={imgInstagram} alt="Instagram" />
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
