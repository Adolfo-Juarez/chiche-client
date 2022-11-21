import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import img from "../assets/img/img-3.jpeg";
import "../assets/stylesheets/Responsive.css";

function SignUp() {
  return (
    <>
      <Header />
      <div class="content-login" style={{ backgroundImage: `url(${img})` }}>
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
