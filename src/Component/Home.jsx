import React, { useState } from 'react'
import './Home.css'

function Home() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleInput = (value) => {
      setInput(input + value);
    };

    console.log(input);
  
    const clearInput = () => {
      setInput('');
      setResult('');
    };
  
    const calculateResult = () => {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    };
  return (
    <div className="calculator">
    <div className="display">
      <input type="text" value={input} readOnly />
      <span>{result}</span>
    </div>
    <div className="keypad">
      <button onClick={() => handleInput('7')}>7</button>
      <button onClick={() => handleInput('8')}>8</button>
      <button onClick={() => handleInput('9')}>9</button>
      <button onClick={() => handleInput('+')}>+</button>
      <button onClick={() => handleInput('4')}>4</button>
      <button onClick={() => handleInput('5')}>5</button>
      <button onClick={() => handleInput('6')}>6</button>
      <button onClick={() => handleInput('-')}>-</button>
      <button onClick={() => handleInput('1')}>1</button>
      <button onClick={() => handleInput('2')}>2</button>
      <button onClick={() => handleInput('3')}>3</button>
      <button onClick={() => handleInput('*')}>*</button>
      <button onClick={() => handleInput('0')}>0</button>
      <button onClick={() => handleInput('.')}>.</button>
      <button onClick={() => calculateResult()}>=</button>
      <button onClick={() => handleInput('/')}>/</button>
      <button onClick={() => clearInput()}>Clear</button>
    </div>
  </div>
  )
}

export default Home