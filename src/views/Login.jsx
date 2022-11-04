import '../assets/stylesheets/login.css'
import Header from '../components/Header';
import InputLogin from '../components/InputLogin';

function Login() {
    
    return ( 
        <>
         <Header></Header>
        <div className='display-center background-login'>
        <InputLogin></InputLogin>
        </div>
        </>
     );
}

export default Login;