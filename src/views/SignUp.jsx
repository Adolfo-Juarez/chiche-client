import Header from '../components/Header'
import Footer from '../components/Footer'
import RegisterForm from '../components/RegisterForm';
import img from '../assets/img/img-3.jpeg'

function SignUp() {


    
    return ( 
        <>
        <Header/>
        <div style={{backgroundImage:`url(${img})`}}>
        <RegisterForm/>
        </div>
        <Footer/>
        </>
     );
}

export default SignUp;