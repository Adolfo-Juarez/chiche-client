import { useState } from 'react'
import Login from './Login'
import Home from './Home'
import Register from './Register'



function Test() {
  const [count, setCount] = useState(0)

  return (
    <> {/* Para hacer las pruebas de sus componentes, cambien el ComponentTest por los suyos */}
     <Login></Login>
    </>
  )
}

export default Test
