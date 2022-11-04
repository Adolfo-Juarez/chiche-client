import Header from "../components/Header";
import Barra from "../components/Barra";
import VistaPersonalizadaPastel from "../components/VistaPersonalizadaPastel";
import Footer from "../components/Footer";

function OrderPastel1() {
  return (
    <>
      <Header></Header>
      <Barra nextpage="/filling" previouspage="#"></Barra>
      <VistaPersonalizadaPastel></VistaPersonalizadaPastel>
      <Footer></Footer>
    </>
  );
}

export default OrderPastel1;