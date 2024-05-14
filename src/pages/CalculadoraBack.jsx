import { useState } from 'react'

import '../styles/back.scss'

function CalculadoraBack() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState('')

    const handleCalculate = () => {
        fetch('http://localhost:8001/calculate', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                operation: operation,
                num1: parseFloat(num1),
                num2: parseFloat(num2)
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.error) {
                setResult(data.error)
            } else {
                setResult('Result: ' + data.result)
            }
        })
        .catch(error => {
            console.log('Error: ', error)
        })
    }

    return (
        <div className="calculatorBack">
            <h1>Calculadora Back</h1>

            <input type="number" value={num1} onChange={event => setNum1(event.target.value)} placeholder='Enter first Number' />
            <input type="number" value={num2} onChange={event => setNum2(event.target.value)} placeholder='Enter second Number' />

            <select value={operation} onChange={event => setOperation(event.target.value)}>
                <option value="add">Add +</option>
                <option value="subtract">Subtract -</option>
                <option value="multiply">Multiply *</option>
                <option value="divide">Divide /</option>
            </select>

            <button onClick={handleCalculate}>Calculate</button>
            <p>{result}</p>
        </div>
    )
}

export default CalculadoraBack