import modo from '../assets/icons/Tema.svg'
import image from '../assets/icons/logo1.svg'
import navi from '../assets/icons/Nav.svg'

import '../assets/stylesheets/Header.css'

function Header(){
    return(
        <>
        <div className="contenedor">
            <header className="header">
            <img src={modo} className="tema"/>   
            <img src={image} className="logo"/>
            <img src={navi} className="nav"/>
            </header>
        </div>
        </>
    )
}

export default Header;