import { useState } from 'react'
import '../assets/stylesheets/App.css'
import ComponentTest from '../components/ComponentTest'

function Test() {
  const [count, setCount] = useState(0)

  return (
    <> {/* Para hacer las pruebas de sus componentes, cambien el ComponentTest por los suyos */}
      <ComponentTest/>
    </>
  )
}

export default Test
