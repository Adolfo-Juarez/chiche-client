import { Link } from "react-router-dom";
import imgFacebook from "../assets/icons/facebook.svg";
import imgTwitter from "../assets/icons/twitter.svg";
import imgInstagram from "../assets/icons/instagram.svg";
import imgGitHub from "../assets/icons/github.svg";
import "../assets/stylesheets/Footer.css";




function Footer() {
  return (
    <>
      <footer>
        <Link to="/contact">
          <h1>Envíanos tus comentarios</h1>
        </Link>
        <ul className="more-links">
          <li>
            <Link to="/order">
              <span className="imgPedidos"></span>
              <span>Pedidos</span>
            </Link>
          </li>
          <li>
            <Link to="/help">
              <span className="imgAyuda"></span>
              <span>Ayuda</span>
            </Link>
          </li>
        </ul>
        <div className="social">
          <Link href="https://github.com/Adolfo-Juarez/chiche-client">
            <img src={imgGitHub} alt="GitHub" />
          </Link>
          <Link href="#">
            <img src={imgFacebook} alt="Facebook" />
          </Link>
          <Link href="#">
            <img src={imgTwitter} alt="Twitter" />
          </Link>
          <Link href="#">
            <img src={imgInstagram} alt="Instagram" />
          </Link>
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
