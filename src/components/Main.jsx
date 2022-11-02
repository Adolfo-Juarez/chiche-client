import '../assets/stylesheets/Main.css'
import cacao from '../assets/icons/Cua1.svg'
import vainilla from '../assets/icons/Cua2.svg'
import funfetti from '../assets/icons/Cua3.svg'
import redVelvet from '../assets/icons/Cua4.svg'
import oreo from '../assets/icons/Cua5.svg'
import cafe from '../assets/icons/Cua6.svg'

function Main(){
    return(
        <>
        <div className="contenedor2">
            <main className='main'>
                <div className="cuadros">
                    <div className="cuadro">
                        <img src={cacao} className="cacao"/>
                        <h3>Chocolate</h3>
                    </div>
                    <div className="cuadro">
                        <img src={vainilla} className='vainilla'/>
                        <h3>Vainilla</h3>
                    </div>  
                    <div className="cuadro">
                        <img src={funfetti} className="funfetti"/>
                        <h3>Funfetti</h3>
                    </div>
                </div>
                <div className="cuadros2">
                    <div className="cuadro">
                        <img src={redVelvet} className="redVelvet"/>
                        <h3>Red Velvet</h3>
                    </div>
                    <div className="cuadro">
                        <img src={oreo} className="oreo"/>
                        <h3>Oreo</h3>
                    </div>      
                    <div className="cuadro">
                        <img src={cafe} className="cafe"/>
                        <h3>Café</h3>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default Main;