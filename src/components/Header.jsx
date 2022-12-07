import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/icons/logo.svg";
import logoChico from "../assets/icons/logo-chico.svg";
import ButtonsAccess from "./ButtonsAccess";
import "../assets/stylesheets/Header.css";
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import Swal from 'sweetalert2';

function Header() {

  const { userContext, setUserContext } = useContext(UserContext)

  console.log(userContext.authorized)

  function handleSubmit() {
    let toggle = document.querySelector(".btn-nav");
    let links = document.querySelector(".mobile-menu");

    toggle.classList.toggle("rotate");
    links.classList.toggle("active");
  }


  function buttonSelective(isLogged) {
    if (!isLogged) {
      return (<>
        <div className="login">
          <Link className="btn" to="/login">
            Inicia Sesión
          </Link>
        </div>
      </>)
    }

    return (<>
      <div className="login">
        <Link className="btn" to="#" onClick={()=>{
          setUserContext({token:"null",authorized:false})
          Swal.fire({
            icon: 'success',
            title: 'Sesión finalizada',
            text: 'Se ha cerrado sesión correctamente'
          })
        }}>
          Cerrar Sesión
        </Link>
      </div>
    </>)
  }

  return (
    <>
      <header>
        <section className="flex-container">
          <div className="flex-logo">
            <Link to="/">
              <img className="logo" src={logo} alt="Logo header" />
            </Link>
          </div>
          <div className="nav">
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/choose">Menú</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contáctanos</NavLink>
              </li>
            </ul>
          </div>
          {buttonSelective(userContext.authorized)}
        </section>
      </header>
      <header className="mobile-header">
        <Link
          className="btn-modo-oscuro"
          to="https://github.com/Adolfo-Juarez/chiche-client"
        ></Link>
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo header" />
          </Link>
        </div>
        <Link onClick={handleSubmit} className="btn-nav" to="#"></Link>
        <ul className="mobile-menu">
          <Link className="logo" to="/">
            <img src={logoChico} alt="Logo nav" width="60px" />
          </Link>
          <ul className="nav">
            <li className="link">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="link">
              <NavLink to="/choose">Menú</NavLink>
            </li>
            <li className="link">
              <NavLink to="/contact">Contáctanos</NavLink>
            </li>
            <p className="description">
              Se parte de nosotros para obtener los mejores productos y
              descuentos.
              <br></br>
              <br></br>
              <b>Más información...</b>
            </p>
            <div className="buttons">
              <ButtonsAccess />
            </div>
          </ul>
          <ul className="more-links">
            <li>
              <Link to="/order">
                <span className="imgPedidos"></span>
                <span>Pedidos</span>
              </Link>
            </li>
            <li>
              <Link to="/help">
                <span className="imgAyuda"></span>
                <span>Ayuda</span>
              </Link>
            </li>
          </ul>
        </ul>
      </header>
    </>
  );
}

export default Header;
