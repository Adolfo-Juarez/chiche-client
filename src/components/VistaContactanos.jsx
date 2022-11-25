import "../assets/stylesheets/VistaPrincipal.css";

function VistaPrincipal() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <main className="home">
        <section className="contactanos">
          <div className="content">
            <h1>Contáctanos</h1>
            <p>
              ¡Contáctanos para conocer más sobre nuestra venta de pasteles
              deliciosos!
            </p>
            <form id="contactForm">
              <div
                className="alert alert-success"
                role="alert"
                style={{ display: "none" }}
              >
                Tu mensaje ha sido enviado
              </div>
              <div className="form-group">
                <label for="name">Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  required
                ></input>
              </div>
              <div className="form-group">
                <label for="phone">Télefono</label>
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  id="phone"
                  min={0}
                  max={9999999999}
                ></input>
              </div>
              <div className="form-group">
                <label for="email">Correo</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  required
                ></input>
              </div>
              <div className="form-group">
                <label for="message">Mensaje</label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-12 button text-center">
                    <button className="btn btn-primary btn-block" type="submit">
                      Contactame<br></br>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p>Envíanos un e-mail y en breve nos comunicaremos contigo.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default VistaPrincipal;
