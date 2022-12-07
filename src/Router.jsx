import Home from "./views/Home";
import Choose from "./views/OrderPastelPersonaliza";
import ChooseBiscuit from "./views/OrderPastel1";
import ChooseFilling from "./views/OrderPastel2";
import ChooseDetails from "./views/OrderPastel3";
import Login from "./views/Login";
import Contactanos from "./views/Contactanos";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./views/SignUp";
import E404 from "./views/404";
import Help from "./views/Ayuda";
import Order from "./views/Order";

import UserContext from "./context/UserContext";
import OrderContext from "./context/OrderContext";

import Admin from "./views/Administrador"
import Test from "./components/Test";

import { useState } from "react";

function Routered() {

    const [userContext, setUserContext] = useState({ token: "null", authorized: false });
    const [orderContext, setOrderContext] = useState({ biscuit: "null", coverage: "null", design: "null", filling: "null", shape: "null", size: "null" });

    return (
        <BrowserRouter>
            <UserContext.Provider value={{userContext, setUserContext}}>
                <OrderContext.Provider value={{ orderContext, setOrderContext }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/choose" element={<Choose />} />
                        <Route path="/biscuit" element={<ChooseBiscuit />} />
                        <Route path="/filling" element={<ChooseFilling />} />
                        <Route path="/details" element={<ChooseDetails />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<SignUp />} />
                        <Route path="/contact" element={<Contactanos />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/a" element={<Test />} />
                        <Route path="/*" element={<E404 />} />
                    </Routes>
                </OrderContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default Routered;