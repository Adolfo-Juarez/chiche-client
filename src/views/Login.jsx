import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../assets/stylesheets/form-dynamic.css"
import { useEffect, useState } from "react";
import { authenticate, isAuthenticated } from "../resources/Auth";
import { useNavigate } from "react-router-dom";



function SignUp() {

  //Funciones handler para hacer la transición
  // De los paneles
  function signHandler(){
    container.classList.add("right-panel-active");
   }

   function signHandler2(){
    container.classList.remove("right-panel-active");
   }

   ////////////LÓGICA DEL INICIO DE SESIÓN////////////
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
   ///////////////////////////////////////////////////
   //////////////LÓGICA PARA EL REGISTRO /////////////////
   const [usernameRegister, setUsernameRegister] = useState("");
   const [emailRegister, setEmailRegister] = useState("");
   const [passwordRegister, setPasswordRegister] = useState("");
 
   function sendRegister(e) {
     e.preventDefault()
     register(usernameRegister, emailRegister, passwordRegister).then(
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
			<input type="text" placeholder="Usuario"  onChange={(e) => {
          setUsernameRegister(e.target.value);
        }}/>
			<input type="email" placeholder="Correo electrónico" onChange={(e) => {
          setEmailRegister(e.target.value);
        }}/>
			<input type="password" placeholder="Contraseña"  onChange={(e) => setPasswordRegister(e.target.value)}/>
			<button className="btn-sign-up">Registrarse</button>
		</form>



	</div>



	<div className="form-container sign-in-container">


    {/* FORMULARIO DEL INICIO DE SESIÓN */}

		<form onSubmit={login}>
			<h1>Iniciar Sesión</h1>
			<div class="social-container">
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