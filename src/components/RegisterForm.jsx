import "../assets/stylesheets/Forms.css";
import { useEffect, useState } from "react"; // Para manejar estados
import { useNavigate } from "react-router-dom"; // Para redirigir la página
import { isAuthenticated, register } from "../resources/Auth";

function RegisterForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function sendRegister(e) {
    e.preventDefault()
    register(username, email, password).then(
      (data) => {
        if (!data.logged) {
          alert("Este nombre de usuario ya está en uso")
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
    <form className="register-register" onSubmit={sendRegister}>
      <h2 className="register-title">Crea tu cuenta</h2>

      <label className="labels-register" htmlFor="username">
        Nombre de Usuario
      </label>
      <input
        type="text"
        id="username"
        className="input-register"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <label className="labels-register" htmlFor="email">
        Correo Electrónico
      </label>
      <input
        type="email"
        id="email"
        className="input-register"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <label className="labels-register" htmlFor="password">
        {/* No nos critiquen :( */}
        Contraseña&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </label>
      <input
        type="password"
        id="password"
        className="input-register"
        onChange={(e) => setPassword(e.target.value)}
      />

      <input type="submit" className="register-btn" value="Registrarse" />

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

export default RegisterForm;
