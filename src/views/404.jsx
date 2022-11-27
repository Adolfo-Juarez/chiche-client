import Header from "../components/Header";
import Footer from "../components/Footer";
import oDonn from "../assets/icons/bitten-donnut.svg";
import "../assets/stylesheets/404.css";

function E404() {
  return (
    <>
      <Header />
      <main className="error-not-found">
        <h1 className="not-found-header">
          4<img src={oDonn} style={{ width: 120 }}></img>4
        </h1>
        <h2 className="not-found-caption">
          {" "}
          ¡Ups! No hemos podido encontrar la ruta solicitada.
        </h2>
        <p className="not-found-back">
          <a href="/">Ir a la página de inicio</a>
        </p>
      </main>
      <Footer />
    </>
  );
}

export default E404;
