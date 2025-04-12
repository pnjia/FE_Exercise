import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home/Home'
import Tes from './pages/Home/Tes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tes' element={<Tes/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
