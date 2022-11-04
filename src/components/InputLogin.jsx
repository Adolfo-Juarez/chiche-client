import "../assets/stylesheets/login.css";

function InputLogin() {
  return (
    <div className="img-login">
      <div className="form-login">
        <h2 className="text-login">BIENVENIDO</h2>
        <input type="text" placeholder="Usuario o correo electronico" />
        <input type="password" placeholder="Contrasena" />
        <button className="btn-login">Inicia sesion</button>
      </div>
      <p>No tienes una cuenta?</p>
      <a href="">Registrate aqui</a>
    </div>
  );
}

export default InputLogin;