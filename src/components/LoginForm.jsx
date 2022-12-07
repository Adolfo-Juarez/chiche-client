import "../assets/stylesheets/Forms.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function login(e) {
  }

  useEffect(() => {
    
  }, []);

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
        Contraseña
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </label>
      <input
        type="password"
        id="password"
        className="input-register"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" className="register-btn" value="Ingresar" />
      <p>¿No tienes una cuenta?</p>&nbsp;
      <a href="" className="a-links">
        {" "}
        <p>¡Haz click aquí!</p>{" "}
      </a>
    </form>
  );
}

export default LoginForm;
