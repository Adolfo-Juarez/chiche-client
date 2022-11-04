import Header from "../components/Header";
import '../assets/stylesheets/login.css'
import InputRegister from "../components/InputRegister";

function Register() {
    return (  
    <> 
    <Header></Header>
    <div className='display-center background-login'>
    <InputRegister></InputRegister>
    </div>
    </>

    );
}

export default Register;