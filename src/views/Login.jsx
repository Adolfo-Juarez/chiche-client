import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../assets/stylesheets/form-dynamic.css"



function SignUp() {

  function signHandler(){
    container.classList.add("right-panel-active");
   }

   function signHandler2(){
    container.classList.remove("right-panel-active");
   }
   



   
  return (
    <>
      <Header />
    {/*   <div className="display-flex-official"  >
        <LoginForm />
        <RegisterForm></RegisterForm>
      </div> */}
      <div className="container" id="container">





	<div className="form-container sign-up-container">
		<form action="#" className="form-dynamic">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><ion-icon name="logo-google"></ion-icon></a>
				<a href="#" className="social"><ion-icon name="logo-facebook"></ion-icon></a>
				<a href="#" className="social"><ion-icon name="logo-twitter"></ion-icon></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button className="btn-sign-up">Sign Up</button>
		</form>
	</div>



	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Iniciar Sesión</h1>
			<div class="social-container">
				<a href="#" className="social"><ion-icon name="logo-google"></ion-icon></a>
				<a href="#" className="social"><ion-icon name="logo-facebook"></ion-icon></a>
				<a href="#" className="social"><ion-icon name="logo-twitter"></ion-icon></a>
			</div>
			<span>O usa tu cuenta</span>
			<input type="text" placeholder="Nombre de usuario" />
			<input type="password" placeholder="Contraseña" />
			<a href="#">¿Olvidaste tú contraseña?</a>
			<button className="btn-sign-up">Ingresar</button>
		</form>
	</div>




	<div className="overlay-container">


		<div className="overlay">


			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal details</p>
				<button className="ghost" id="signIn" onClick={signHandler2}>Sign In</button>
			</div>



			<div className="overlay-panel overlay-right">
				<h1>Hi There!</h1>
				<p>Enter your personal details to open an account with us</p>
				<button className="ghost btn-sign-up" id="signUp" onClick={signHandler}>Sign Up</button>
			</div>


		</div>


	</div>




</div>
      <Footer />
    </>
  );
}

export default SignUp;