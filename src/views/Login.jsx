import {useState} from 'react';
import InputLogin from "../components/InputLogin";
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
            <div className="form-chiche">
                <input type="text" className="input-50" placeholder="Nombre (s)" onChange={handleChangeName} value={name}/>
                <input type="text" className="input-50" placeholder="Apellido (s)" onChange={handleChangeLastname}  value={lastname}/>
            </div>
            <input type="text" className="input-100" placeholder="Usuario" onChange={handleChangeUsername} value={username} onBlur={handleBlurUsername}/>
            


            <div className="form-chiche">
                <input type="password" className="input-50" placeholder="Escriba su contraseña"onChange={handleChangePassword} value= {password}/>
                <input type="password" className="input-50" placeholder="Confirma contraseña" onChange={handleChangePassword}/>
            </div>
            <div className="center">
                <input type="submit" className="btn-Submit" value="Registrarse"/>
            </div>

        
        </>
        </form>
        </div>
        </>
     );
}

export default Login;