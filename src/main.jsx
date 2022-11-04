import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home";
import Contactanos from "./views/Contactanos";
import PagePastel1 from "./views/OrderPastel1";
import PagePastel2 from "./views/OrderPastel2";
import PagePastel3 from "./views/OrderPastel3";
import "./assets/stylesheets/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contactanos />
  </React.StrictMode>
);