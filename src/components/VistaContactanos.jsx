import "../assets/stylesheets/VistaPrincipal.css";

function VistaPrincipal() {
  return (
    <>
      <main className="home">
        <section className="contactanos">
          <div className="content">
            <h1>Contáctanos</h1>
            <p>
              ¡Contáctanos para conocer más sobre nuestra venta de pasteles
              deliciosos!
            </p>
            <form id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  className="form-text"
                  type="text"
                  name="name"
                  id="name"
                  required
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Télefono</label>
                <input
                  className="form-text"
                  type="number"
                  name="phone"
                  id="phone"
                  min={0}
                  max={9999999999}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input
                  className="form-text"
                  type="email"
                  name="email"
                  id="email"
                  required
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Contactame
                </button>
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
