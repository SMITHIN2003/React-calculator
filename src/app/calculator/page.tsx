"use client";
import React, { useState, useEffect } from "react";
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); 
    } catch (error) {
      setResult('Error');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    } else if (['+', '-', '*', '/', 'C', '=', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
      handleButtonClick(key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <div className="display">
        <input type="text" className="input" value={input} />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7','8','9','+','4','5','6','-','1','2','3','*','C','0','/','='].map((button) => (
          <button className={`button ${button === 'C' ? 'red-button' : ''} ${button === '=' ? 'blue-button' : ''} ${button === '*' ? 'star' : ''}`} key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
