import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CalculadoraFront from './pages/CalculadoraFront'
import CalculadoraBack from './pages/CalculadoraBack'

import './styles/global.scss'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/calculadoraFront' element={<CalculadoraFront />}></Route>
                <Route path='/calculadoraBack' element={<CalculadoraBack />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App