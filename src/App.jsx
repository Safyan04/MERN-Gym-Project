import './App.css'
import SIGN from './SIGN'
import INDEX from './INDEX'
import LOGIN from './LOGIN'
import { Routes, Route } from 'react-router-dom'
// import INDRX from './INDEX'
function App() {

  return (
    <div>
    <Routes>
    <Route path='/' element={<INDEX/>} />
    <Route path='/login' element={<LOGIN/>} />
    <Route path='/register' element={<SIGN/>} />
    </Routes>
    </div>

  )
}

export default App
