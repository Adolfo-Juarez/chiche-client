import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import img from "../assets/img/img-3.jpeg";
import "../assets/stylesheets/Responsive.css";

function SignUp() {
  return (
    <>
      <Header />
      <div class="content-login" style={{ backgroundImage: `url(${img})` }}>
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
