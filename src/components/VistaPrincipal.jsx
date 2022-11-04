import cupcakes from "../assets/img/img-6.jpeg";
import cupcakes2 from "../assets/img/cupcakes2.png";
import "../assets/stylesheets/VistaPrincipal.css";

function VistaPrincipal() {
  return (
    <>
      <main class="home">
        <section class="order">
          <div class="content">
            <h1>Exquisito sabor para verdaderos conocedores</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur qui officia deserunt
              mollit anim id est laborum."
            </p>
            <a class="btn" href="#">
              Ordena aquí
            </a>
          </div>
        </section>
        <section class="cupcakes">
          <div class="image">
            <img src={cupcakes} alt="Cupcakes" />
          </div>
          <div class="content">
            <h1>Sobre nosotros</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur qui officia deserunt
              mollit anim id est laborumconsectetur qui officia deserunt mollit
              anim id est laborumconsectetur qui officia anim id est
              laborumconsectetur qui official“.
            </p>
            <span>- Leonardo Toledo</span>
          </div>
          <div class="image">
            <img class="margin" src={cupcakes2} alt="Cupcakes" />
          </div>
        </section>
      </main>
    </>
  );
}

export default VistaPrincipal;