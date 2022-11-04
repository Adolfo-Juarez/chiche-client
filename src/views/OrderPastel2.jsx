import Header from "../components/Header";
import Barra from "../components/Barra";
import VistaPastel2 from "../components/VistaPastel2";
import Footer from "../components/Footer";

function OrderPastel2() {
  return (
    <>
      <Header></Header>
      <Barra
      nextpage="/details"
      previouspage="/biscuit"></Barra>
      <VistaPastel2></VistaPastel2>
      <Footer></Footer>
    </>
  );
}

export default OrderPastel2;