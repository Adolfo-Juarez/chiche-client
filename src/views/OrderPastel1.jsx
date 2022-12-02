import Header from "../components/Header";
import Barra from "../components/Barra";
import VistaPastel1 from "../components/VistaPastel1";
import Footer from "../components/Footer";
import { useContext } from "react";
import IngredientsContext from "../resources/IngredientsContext";

function OrderPastel1() {

  /* const {biscuit,coverage,filling,design,shape} = useContext(IngredientsContext);
  console.log(biscuit)
 */
  return (
    <>
      <Header></Header>
      <Barra nextpage="/filling" previouspage="/choose" title="Bizcocho"></Barra>
      <VistaPastel1></VistaPastel1>
      <Footer></Footer>
    </>
  );
}

export default OrderPastel1;
