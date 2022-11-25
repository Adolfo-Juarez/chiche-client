import header1 from "../assets/img/header1.png";
import header2 from "../assets/img/header2.png";
import panque from "../assets/img/panque.png";
import cookie from "../assets/img/galletas.png";
import cake from "../assets/img/cake.png";
import cakeAbout from "../assets/img/cake-about.png";
import blondie from "../assets/img/blondie.png";
import gallery1 from "../assets/img/gallery1.png";
import gallery2 from "../assets/img/gallery2.png";
import gallery3 from "../assets/img/gallery3.png";
import gallery4 from "../assets/img/gallery4.png";
import gallery5 from "../assets/img/gallery5.png";
import gallery6 from "../assets/img/gallery6.png";
import "../assets/stylesheets/VistaPrincipal.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

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
        <div className="pintura"></div>
        <section className="products">
          <div className="text">
            <h2>Disfruta de la variedad de productos</h2>
          </div>
          <div className="cards">
            <div className="card">
              <img className="imagePastel" src={cake} />
              <div className="card-top">
                <h2>Pasteles</h2>
              </div>
            </div>
            <div className="card">
              <img className="imagePastel" src={panque} />
              <div className="card-top">
                <h2>Panques</h2>
              </div>
            </div>
            <div className="card">
              <img className="imagePastel" src={blondie} />
              <div className="card-top">
                <h2>Blondies</h2>
              </div>
            </div>
            <div className="card">
              <img className="imagePastel" src={cookie} />
              <div className="card-top">
                <h2>Galletas</h2>
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
                "Lorem ipsum dolor sit amet, consectetur qui officia deserunt
                mollit anim id est laborumconsectetur qui officia deserunt
                mollit anim id est laborumconsectetur qui officia anim id est
                laborumconsectetur qui official“.
              </p>
              <span>- CEO</span>
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
