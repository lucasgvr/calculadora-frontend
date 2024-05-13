import { useState } from 'react'

import './styles/home.scss'

function App() {
    const [display, setDisplay] = useState('')

    const handleClick = value => {
        setDisplay(display + value)
    }

    const calculateResult = () => {
        try {
            const result = eval(display)
            setDisplay(result.toString())
        } catch (error) {
            setDisplay('Error')
        }
    }

    const clearDisplay = () => {
        setDisplay('')
    }

    return (
        <div className="calculator">
            <h1>Calculadora</h1>

            <div className="screen" id="screen" value={display}>{display}</div>

            <div className="buttons">
                <button className="number" onClick={() => handleClick('7')}>7</button>
                <button className="number" onClick={() => handleClick('8')}>8</button>
                <button className="number" onClick={() => handleClick('9')}>9</button>
                <button className="operator" onClick={clearDisplay}>C</button>
                <button className="number" onClick={() => handleClick('4')}>4</button>
                <button className="number" onClick={() => handleClick('5')}>5</button>
                <button className="number" onClick={() => handleClick('6')}>6</button>
                <button className="operator" onClick={() => handleClick('/')}>/</button>
                <button className="number" onClick={() => handleClick('1')}>1</button>
                <button className="number" onClick={() => handleClick('2')}>2</button>
                <button className="number" onClick={() => handleClick('3')}>3</button>
                <button className="operator" onClick={() => handleClick('*')}>*</button>
                <button className="number zero" onClick={() => handleClick('0')}>0</button>
                <button className="number" onClick={() => handleClick('.')}>.</button>
                <button className="operator" onClick={() => handleClick('-')}>-</button>
                <button className="equal" onClick={calculateResult}>=</button>
                <button className="operator" onClick={() => handleClick('+')}>+</button>
            </div>
        </div>
    )
}

export default App