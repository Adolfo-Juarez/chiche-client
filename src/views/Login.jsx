import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/stylesheets/form-dynamic.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../resources/Auth";
import UserContext from "../context/UserContext";
import { useContext } from "react";


function SignUp() {

  const { userContext, setUserContext } = useContext(UserContext)

  //Funciones handler para hacer la transición
  // De los paneles
  function signHandler() {
    container.classList.add("right-panel-active");
  }

  function signHandler2() {
    container.classList.remove("right-panel-active");
  }

  ////////////LÓGICA DEL INICIO DE SESIÓN////////////
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function loginHandler(e) {
    e.preventDefault()
    setUserContext(await login(email, password))
    if (userContext.authorized) {
      Swal.fire({
        icon: 'sucess',
        title: 'Sesión iniciada',
        text: 'Se ha iniciado sesión correctamente'
      })
      navigate("/")
      return
    }
    Swal.fire({
      icon: 'error',
      title: 'Error al iniciar sesión',
      text: 'Verifque su usuario o contraseña'
    })
  }

  useEffect(() => {

  }, [])
  ///////////////////////////////////////////////////
  //////////////LÓGICA PARA EL REGISTRO /////////////////
  const [usernameRegister, setUsernameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  async function sendRegister(e) {
    e.preventDefault();
    setUserContext(await register(usernameRegister, emailRegister, passwordRegister));
    navigate("/")
  }

  useEffect(() => { }, [])
  ///////////////////////////////////////////////////
  return (
    <>
      <Header />
      {/*   <div className="display-flex-official"  >
        <LoginForm />
        <RegisterForm></RegisterForm>
      </div> */}
      <div className="container" id="container">





        <div className="form-container sign-up-container">

          {/* FORMULARIO DEL REGISTRO DE CUENTA */}

          <form onSubmit={sendRegister} className="form-dynamic">
            <h1>Crea tu cuenta</h1>
            <div className="social-container">
              <a href="#" className="social"><ion-icon name="logo-google"></ion-icon></a>
              <a href="#" className="social"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#" className="social"><ion-icon name="logo-twitter"></ion-icon></a>
            </div>
            <span>O usa tu correo para registrarte</span>
            <input type="text" placeholder="Usuario" onChange={(e) => {
              setUsernameRegister(e.target.value);
            }} />
            <input type="email" placeholder="Correo electrónico" onChange={(e) => {
              setEmailRegister(e.target.value);
            }} />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPasswordRegister(e.target.value)} />
            <button className="btn-sign-up" type="submit">Registrarse</button>
          </form>



        </div>



        <div className="form-container sign-in-container">


          {/* FORMULARIO DEL INICIO DE SESIÓN */}

          <form onSubmit={loginHandler}>
            <h1>Iniciar Sesión</h1>
            <div className="social-container">
              <a href="#" className="social"><ion-icon name="logo-google"></ion-icon></a>
              <a href="#" className="social"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#" className="social"><ion-icon name="logo-twitter"></ion-icon></a>
            </div>
            <span>O usa tu cuenta</span>
            <input type="text" placeholder="Nombre de usuario" onChange={(e) => {
              setEmail(e.target.value);
            }}
            />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            <a href="#">¿Olvidaste tú contraseña?</a>
            <button className="btn-sign-up">Ingresar</button>
          </form>




        </div>




        <div className="overlay-container">


          <div className="overlay">


            <div className="overlay-panel overlay-left">
              <h1>¡Bienvenido de vuelta compañero!</h1>
              <p>Para seguir conectado con nosotros y poder hacer un pedido haz click al botón de abajo para iniciar sesión</p>
              <button className="ghost" id="signIn" onClick={signHandler2}>Ingresar</button>
            </div>



            <div className="overlay-panel overlay-right">
              <h1>¡Bienvenido!</h1>
              <p>Haz click en el botón de abajo para abrir una cuenta con nosotros</p>
              <button className="ghost btn-sign-up" id="signUp" onClick={signHandler}>Crear cuenta</button>
            </div>


          </div>


        </div>




      </div>
      <Footer />
    </>
  );
}

export default SignUp;