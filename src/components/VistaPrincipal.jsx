import cupcakes from "../assets/img/img-6.jpeg";
import cupcakes2 from "../assets/img/cupcakes2.png";
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
            <a className="btn" href="/choose">
              Ordena aquí
            </a>
          </div>
        </section>
        <section className="cupcakes">
          <div className="image">
            <img src={cupcakes} alt="Cupcakes" />
          </div>
          <div className="content">
            <h1>Sobre nosotros</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur qui officia deserunt
              mollit anim id est laborumconsectetur qui officia deserunt mollit
              anim id est laborumconsectetur qui officia anim id est
              laborumconsectetur qui official“.
            </p>
            <span>- Leonardo Toledo</span>
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
