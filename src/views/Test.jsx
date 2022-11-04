import { useState } from 'react'
import '../assets/stylesheets/App.css'
import ComponentTest from '../components/ComponentTest'
import Login from './Login'

function Test() {
  const [count, setCount] = useState(0)

  return (
    <> {/* Para hacer las pruebas de sus componentes, cambien el ComponentTest por los suyos */}
      <Login></Login>
    </>
  )
}

export default Test
