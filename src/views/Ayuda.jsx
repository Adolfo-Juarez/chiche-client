import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/stylesheets/Ayuda.css";

function Help() {
  return (
    <>
      <Header />
      <section className="help">
        <div className="content">
          <h1 className="title-help">Ayuda</h1>
          <p className="content-help">
            Bienvenido a la sección de ayuda de Chiché.com
          </p>
          <h2 className="second-title">¿Algún error durante su navegación?</h2>
          <p className="content-help">
            Reporta cualquier Bug en nuestro repositorio de{" "}
            <a
              href="https://github.com/Adolfo-Juarez/chiche-client/issues"
              target="_blank"
            >
              Github.
            </a>
          </p>
          <h2 className="second-title">Contribuye al proyecto</h2>
          <p className="content-help">
            Puedes hacer{" "}
            <a
              href="https://github.com/Adolfo-Juarez/chiche-client/pulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              pull request
            </a>{" "}
            a nuestro proyecto en cualquier momento
          </p>
          <p className="second-title">Version 1.0.0</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Help;
