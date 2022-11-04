import cupcakes from "../assets/img/img-5.jpeg";
import cupcakes2 from "../assets/img/img-2.jpeg";
import "../assets/stylesheets/VistaPrincipal.css";

function VistaPrincipal() {
  return (
    <>
      <main className="home">
        <section className="order">
          <div className="content">
            <h1>¿Cómo podemos ayudarte?</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur qui officia deserunt
              mollit anim id est laborum."
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur qui officia deserunt
              mollit anim id est laborum."
            </p>
          </div>
        </section>
        <section className="cupcakes">
          <div className="image">
            <img src={cupcakes} alt="Cupcakes" />
          </div>
          <div className="contacto">
            
          </div>
          <div className="image">
            <img className="margin2" src={cupcakes2} alt="Cupcakes" />
          </div>
        </section>
      </main>
    </>
  );
}

export default VistaPrincipal;