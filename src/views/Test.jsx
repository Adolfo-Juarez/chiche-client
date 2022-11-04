import { useState } from 'react'
import Barra from '../components/Barra'
import Header from '../components/Header'
import Main from '../components/Main'
/* import '../assets/stylesheets/App.css' */
/* import ComponentTest from '../components/ComponentTest' */

function Test() {
  const [count, setCount] = useState(0)

  return (
    <> {/* Para hacer las pruebas de sus componentes, cambien el ComponentTest por los suyos */}
      {/* <ComponentTest/> */}
      <Header></Header>
      <Barra></Barra>
      <Main></Main>
    </>
  )
}

export default Test
