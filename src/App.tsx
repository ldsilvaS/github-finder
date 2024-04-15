import { useState } from 'react'
import { Main } from './style'
import Home from './components/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Main>
      <Home/>
    </Main>
  )
}

export default App
