import imgFacebook from "../assets/img/facebook.png";
import imgTwitter from "../assets/img/twitter.png";
import imgInstagram from "../assets/img/instagram.png";
import "../assets/stylesheets/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <h1>Envíanos tus comentarios</h1>
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
