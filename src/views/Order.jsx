import Header from "../components/Header";
import Footer from "../components/Footer";
import { getOrders, orderCake } from "../resources/Request";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../assets/stylesheets/Order.css'
import { isAuthenticate } from "../resources/Auth";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Order() {

    const {userCtx, setUserCtx} = useContext(UserContext)
    const navigate = useNavigate()
    const [lastOr, setLastOr] = useState([]);

    useEffect(()=>{
        Swal.fire({
            icon: 'success',
            title: 'Pedido realizado',
            text: 'Su pedido está en camino...'
          })
    },[])

    return (
        <>
            <Header />
            <h1 className="title-order">Tu orden</h1>
            <h2 className="almost-ready">Ya estamos preparando tu postre!</h2>
            <hr />
            <p className="cause-order">Bizcocho</p>
            <p className="des-order">Chocolate</p>

            <p className="cause-order">Cobertura</p>
            <p className="des-order">Betún de mantequilla</p>

            <p className="cause-order">Diseño</p>
            <p className="des-order">Impresion</p>

            <p className="cause-order">Relleno</p>
            <p className="des-order">Cajeta</p>

            <p className="cause-order">Forma</p>
            <p className="des-order">Corazon</p>
            <p className="subtotal-title">Subtotal</p>
            <p className="subtotal-order">$240.00</p>

            <hr />
            <p className="total-title">Total</p>
            <p className="total-order">$278.50</p>

            <Footer />
        </>
    );
}

export default Order;