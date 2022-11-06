import Header from "../components/Header";
import Footer from "../components/Footer";
import '../assets/stylesheets/404.css'
import oDonn from '../assets/img/bittenDonnut.jpg'

function E404() {
    return ( 
        <>
        <Header/>
        <main>
            <h1 className="not-found-header">4<img src={oDonn} style={{width:130}}></img>4</h1>
            <h2 className="not-found-caption"> Ups! No hemos podido encontrar la ruta solicitada</h2>
            <p  className="not-found-back">
            <a href="/">Volver a la página principal</a>
            </p>
        </main>
        <Footer/>
        </>
     );
}

export default E404;