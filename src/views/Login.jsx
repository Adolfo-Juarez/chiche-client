import {useState} from 'react';
import '../assets/stylesheets/login.css'

function Login() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleChangeName =(e)=> setName (e.target.value);
    const handleChangeLastname =(e)=> setLastname(e.target.value);
    const handleChangeUsername =(e)=> setUsername (e.target.value);
    const handleChangePassword =(e)=> setPassword (e.target.value);

    const handleBlurUsername =(e) => {
        fetch('Here we gonna put our url from the API'+username)
        .then(response => response.json())
        .then(data => data.status ? alert('Usuario ocupado') : '');
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        const option = {
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                name: name,
                lastname: lastname,
                username: username,
                password: password 
            })
        }
        fetch('Here we gonna put our url from the API', option)
        .then(response => response.json())
        .then(data => data.status ? alert('Registro exitoso') : alert('Ha ocurrido un error') )
        .catch(err => console.log(err));
    }


    return ( 
        <>
        <div className='display-center background-login'>
         <form className="section-form" onSubmit={handleSubmit}>
        <>
        <h2 className='title-form'>BIENVENIDO</h2>
            <input type="text" className="input" placeholder="Usuario o correo electrónico" onChange={handleChangeUsername} value={username} onBlur={handleBlurUsername}/>

           
                <input type="password" className="input" placeholder="Escriba su contraseña"onChange={handleChangePassword} value= {password}/>
        
            <div className="center">
                <input type="submit" className="btn-Submit" value="Iniciar Sesión"/>
            </div>

            <div className='center'>
                <p>¿No tienes una cuenta?</p>
            </div>

            <div className='center'>
            <a href="">Registrate aquí</a>
            </div>
        
        </>
        </form>
        </div>
        </>
     );
}

export default Login;