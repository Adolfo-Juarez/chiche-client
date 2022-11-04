import Header from "../components/Header";
import '../assets/stylesheets/login.css'
import InputRegister from "../components/InputRegister";
import Footer from "../components/Footer";

function Register() {
    return (  
    <> 
    <Header></Header>
    <div className='display-center background-login'>
    <InputRegister></InputRegister>
    </div>
    <div className="footer-login">
    <Footer></Footer>
    </div>
    </>

    );
}

export default Register;