import '../assets/stylesheets/RegisterForm.css'
import axios from 'axios'; // Para hacer peticiones
import { useState, useEffect } from 'react'; // Para manejar estados
import { Navigate, useNavigate } from 'react-router-dom'; // Para redirigir la página 
import config from '../resources/config.json'



function RegisterForm() {

    const navigate = useNavigate();
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendRegister = (e) => {
        e.preventDefault()
        axios.post(`${config.host}user`,{
            username: username,
            email : email,
            password: password,
            role:"client"
        }).then((response)=>{
            localStorage.setItem('user', JSON.stringify(response.data))
        })
    }

    const isLogged =()=>{
        if(localStorage.getItem('user')){
            alert("Ya tienes una sesión activa");
            navigate('/')
        }
    }

    useEffect(()=>{isLogged()},[])

    return ( 
        <form className='register-register' onSubmit={sendRegister}>
            <h2 className="register-title">Se parte de nosotros</h2>

            <label className="labels-register" htmlFor="username">Nombre de Usuario</label>
            <input type="text" id="username" className="input-register" onChange={(e)=>{setUsername(e.target.value)}}/>

            <label className="labels-register" htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" className="input-register" onChange={(e)=>{setEmail(e.target.value)}}/>

            <label className="labels-register" htmlFor="password">Contraseña</label>
            <input type="password" id="password" className="input-register" onChange={(e)=>setPassword(e.target.value)}/>

            <input type="submit" className='register-btn' value="Registrarse"/>
        </form>
     );
}

export default RegisterForm;