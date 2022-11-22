import cupcakes from "../assets/img/img-6.jpeg";
import cupcakes2 from "../assets/img/cupcakes2.png";
import header1 from "../assets/img/header1.png";
import header2 from "../assets/img/header2.png";
import "../assets/stylesheets/VistaPrincipal.css";

function VistaPrincipal() {
  return (
    <>
      <main className="home">
        <section className="order">
          <div className="content">
            <h1>Exquisito sabor para verdaderos conocedores</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur qui officia deserunt
              mollit anim id est laborum."
            </p>
            <div className="button-images">
              <img className="img1" src={header1} alt="Header 1" />
              <a className="btn" href="/choose">
                Ordena aquí
              </a>
              <img src={header2} alt="Header 2" />
            </div>
          </div>
        </section>
        <section className="products">
          <h2>Disfruta de la variedad de productos</h2>
        </section>
        <section className="cupcakes">
          <div className="image">
            <img src={cupcakes} alt="Cupcakes" />
          </div>
          <div className="content">
            <h1>Acerca de Chiché</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur qui officia deserunt
              mollit anim id est laborumconsectetur qui officia deserunt mollit
              anim id est laborumconsectetur qui officia anim id est
              laborumconsectetur qui official“.
            </p>
            <span>- CEO</span>
          </div>
          <div className="image">
            <img className="margin" src={cupcakes2} alt="Cupcakes" />
          </div>
        </section>
      </main>
    </>
  );
}

export default VistaPrincipal;
