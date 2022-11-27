import header1 from "../assets/img/header1.png";
import header2 from "../assets/img/header2.png";
import panque from "../assets/img/panque.png";
import cookie from "../assets/img/galletas.png";
import cake from "../assets/img/cake.png";
import blondie from "../assets/img/blondie.png";
import cakeAbout from "../assets/img/cake-about.png";
import gallery1 from "../assets/img/gallery1.png";
import gallery2 from "../assets/img/gallery2.png";
import gallery3 from "../assets/img/gallery3.png";
import gallery4 from "../assets/img/gallery4.png";
import gallery5 from "../assets/img/gallery5.png";
import gallery6 from "../assets/img/gallery6.png";
import "../assets/stylesheets/VistaPrincipal.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

function VistaPrincipal() {
  const options = {
    updateOnMove: true,
    type: "loop",
    perPage: 4,
    perMove: 1,
    focus: "center",
    autoplay: true,
    arrows: false,
    pagination: false,
    pauseOnHover: false,
    autowidth: true,
    autoHeight: true,
  };

  return (
    <>
      <main className="home">
        <section className="order">
          <div className="content">
            <h1>Exquisito sabor para verdaderos conocedores</h1>
            <p>
              “Chiché es una empresa dedicada a facilitar que sus clientes
              puedan festejar con postres de sabor y presentación únicos,
              brindándoles además un servicio esmerado que les permita celebrar
              sin complicarse.”
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
        <div className="pintura"></div>
        <section className="products">
          <div className="text">
            <h2>Disfruta de la variedad de productos</h2>
          </div>
          <div className="cards">
            <div className="card">
              <img src={cake} />
              <div className="card-title">
                <h3>Pasteles</h3>
              </div>
            </div>
            <div className="card">
              <img src={panque} />
              <div className="card-title">
                <h3>Panques</h3>
              </div>
            </div>
            <div className="card">
              <img src={blondie} />
              <div className="card-title">
                <h3>Blondies</h3>
              </div>
            </div>
            <div className="card">
              <img src={cookie} />
              <div className="card-title">
                <h3>Galletas</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="wrap">
            <img className="image-cake" src={cakeAbout} />
            <div className="content">
              <h1>Acerca de Chiché</h1>
              <p>
                “Cada uno de nuestros postres esta realizado personalmente,
                utilizando recetas propias, seleccionando las frutas más frescas
                de la temporada y los mejores ingredientes, y cuidando hasta el
                más mínimo detalle de su elaboración para ofrecer siempre la
                calidad y buen sabor que nuestros clientes buscan.”
              </p>
              <span>- CEO -</span>
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="content">
            <Splide
              options={options}
              aria-labelledby="autoplay-example-heading"
              hasTrack={false}
            >
              <div style={{ position: "relative" }}>
                <SplideTrack>
                  <SplideSlide>
                    <img src={gallery1} alt="Image 1" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={gallery2} alt="Image 2" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={gallery3} alt="Image 3" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={gallery4} alt="Image 4" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={gallery5} alt="Image 5" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={gallery6} alt="Image 6" />
                  </SplideSlide>
                </SplideTrack>
              </div>

              <div className="splide__progress">
                <div className="splide__progress__bar" />
              </div>
            </Splide>
          </div>
        </section>
      </main>
    </>
  );
}

export default VistaPrincipal;
