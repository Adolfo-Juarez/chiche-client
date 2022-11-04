import '../assets/stylesheets/login.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import InputLogin from '../components/InputLogin';

function Login() {
    
    return ( 
        <>
         <Header></Header>
        <div className='display-center background-login'>
        <InputLogin></InputLogin>
        </div>
        <div className="footer-login">
        <Footer></Footer>
        </div>

        </>
     );
}

export default Login;