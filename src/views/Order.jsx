import Header from "../components/Header";
import Footer from "../components/Footer";
import { getOrders, orderCake } from "../resources/Request";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../assets/stylesheets/Order.css'
import { isAuthenticated } from "../resources/Auth";

function Order() {

    const navigate = useNavigate()
    const [lastOr, setLastOr] = useState([]);

    orderCake()

    useEffect(() => {
        if (!isAuthenticated()) {
            alert("Debes iniciar sesion para ver tu pedido")
            navigate("/")
        }
        setLastOr(getOrders())
    }, [])

    return (
        <>
            <Header />
            <h1 className="title-order">Tu orden</h1>
            <h2 className="almost-ready">Ya estamos preparando tu postre!</h2>
            <hr />
            <p className="cause-order">Bizcocho</p>
            <p className="des-order">{lastOr.biscuit}</p>

            <p className="cause-order">Cobertura</p>
            <p className="des-order">{lastOr.coverage}</p>

            <p className="cause-order">Diseño</p>
            <p className="des-order">{lastOr.design}</p>

            <p className="cause-order">Relleno</p>
            <p className="des-order">{lastOr.filling}</p>

            <p className="cause-order">Forma</p>
            <p className="des-order">{lastOr.shape}</p>
            <p className="subtotal-title">Subtotal</p>
            <p className="subtotal-order">${lastOr.subtotal}</p>

            <hr />
            <p className="total-title">Total</p>
            <p className="total-order">${lastOr.total}</p>

            <Footer />
        </>
    );
}

export default Order;