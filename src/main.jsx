import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home";
import ChooseBiscuit from "./views/OrderPastel1";
import ChooseFilling from "./views/OrderPastel2";
import ChooseDetails from "./views/OrderPastel3";
import Login from "./views/Login";
import "./assets/stylesheets/index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./views/SignUp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biscuit" element={<ChooseBiscuit />} />
        <Route path="/filling" element={<ChooseFilling />} />
        <Route path="/details" element={<ChooseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);