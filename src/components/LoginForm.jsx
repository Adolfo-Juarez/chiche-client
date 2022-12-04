import "../assets/stylesheets/Forms.css";
import { useEffect, useState } from "react";
import { authenticate, isAuthenticated } from "../resources/Auth";
import { useNavigate } from "react-router-dom";


function LoginForm() {

    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    function login(e){
        e.preventDefault()
        authenticate(email,password).then(
            (data) => {
                if (!data.logged) {
                  alert("Verifique sus datos")
                } else {
                  navigate("/")
                }
            }
        )
    }

    useEffect(() => { if(isAuthenticated()){
        alert("Ya tienes una sesión iniciada")
        navigate("/")
      } }, [])

    return (
        <form className="register-register" onSubmit={login}>
            <h2 className="register-title">Iniciar sesión</h2>
            <label className="labels-register" htmlFor="email">
                Nombre de usuario
            </label>
            <input
                type="text"
                id="email"
                className="input-register"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />

            <label className="labels-register" htmlFor="password">
                Contraseña &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
                type="password"
                id="password"
                className="input-register"
                onChange={(e) => setPassword(e.target.value)}
            />

            <input type="submit" className="register-btn" value="Ingresar" />

            <p>¿No tienes una cuenta?</p>&nbsp;
          <a href="" className="a-links"> <p>¡Haz click aquí!</p> </a> 

            <button type="button" class="button">
		<span class="button__text">Continuar con Google&nbsp;&nbsp;&nbsp;&nbsp;</span>
		<span class="button__icon">
    <ion-icon name="logo-google"></ion-icon>
		</span>
	</button>

            <button type="button" class="button">
		<span class="button__text">Continuar con Facebook</span>
		<span class="button__icon">
    <ion-icon name="logo-facebook"></ion-icon>
		</span>
	</button>
        </form>
    );
}

export default LoginForm;