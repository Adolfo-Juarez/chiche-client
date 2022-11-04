import Header from "../components/Header";
import Barra from "../components/Barra";
import VistaPastel3 from "../components/VistaPastel3";
import Footer from "../components/Footer";

function OrderPastel3() {
  return (
    <>
      <Header></Header>
      <Barra
      nextpage="#"
      previouspage="/filling"></Barra>
      <VistaPastel3></VistaPastel3>
      <Footer></Footer>
    </>
  );
}

export default OrderPastel3;