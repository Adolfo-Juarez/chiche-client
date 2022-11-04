import { useState } from 'react'
import ComponentTest from '../components/ComponentTest'
import Login from './Login'

function Test() {
  const [count, setCount] = useState(0)

  return (
    <> {/* Para hacer las pruebas de sus componentes, cambien el ComponentTest por los suyos */}
      <ComponentTest></ComponentTest>
    </>
  )
}

export default Test
