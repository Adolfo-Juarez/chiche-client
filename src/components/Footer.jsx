import imgFacebook from "../assets/img/handbag.png";
import imgTwitter from "../assets/img/archive.png";
import imgInstagram from "../assets/img/question.png";
import "../assets/stylesheets/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <h1>Envíanos tus comentarios</h1>
        <div class="social">
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