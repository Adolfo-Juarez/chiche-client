import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";


function SignUp() {
  return (
    <>
      <Header />
      <div className="display-flex-official" /* class="content-login" style={{ backgroundImage: `url(${img2})` }} */>
        <LoginForm />
        <RegisterForm></RegisterForm>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;