import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home";
import PagePastel1 from "./views/OrderPastel1";
import PagePastel2 from "./views/OrderPastel2";
import PagePastel3 from "./views/OrderPastel3";
import Login from "./views/Login";
import "./assets/stylesheets/index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biscuit" element={<PagePastel1 />} />
        <Route path="/filling" element={<PagePastel2 />} />
        <Route path="/details" element={<PagePastel3 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);