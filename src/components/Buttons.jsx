import React, { useState } from 'react';

export default function Buttons({setClickedButtonValue, clickedButtonValue}) {

  const equal = () => {

    let resultado = 0;

    debugger;

    if (typeof clickedButtonValue !== 'string'){
      return setClickedButtonValue("");
    } else {
      if (clickedButtonValue.includes('%')) {
          resultado = clickedButtonValue.slice(0, -1) / 100;
      } else if (clickedButtonValue.includes('+') || clickedButtonValue.includes('-') || clickedButtonValue.includes('*') || clickedButtonValue.includes('/')) {
        resultado = eval(clickedButtonValue);
      } else if (clickedButtonValue.includes('mod')) {
        resultado = eval(clickedButtonValue.replace('mod', '%'));
      } else if ((clickedButtonValue.includes('R'))) {
        resultado = Math.sqrt(clickedButtonValue.replace('R', ''));
      } else if ((clickedButtonValue.includes('x²'))) {
        resultado =  Math.pow(clickedButtonValue.replace('x²', ''), 2);
      } else if ((clickedButtonValue.includes('x³'))) {
        resultado =  Math.pow(clickedButtonValue.replace('x³', ''), 3);
      }
      
      return setClickedButtonValue(resultado);

  }
}

  const cleanAll = () => {
    setClickedButtonValue("");
  }

  const deleteNumber = () => {
    setClickedButtonValue(prevValue => prevValue.slice(0, -1));
  }

  const capNumber = (event) => {
    const buttonValue = event.target.innerText;

    return setClickedButtonValue(prevValue => prevValue + buttonValue);
  }

  const numbersCal = () => {

    const numeros = [];
    
    for (let i = 0; i <= 9; i++) {
      numeros.push(
        <button key={i} className='numberButton' onClick={capNumber}>
          {i}
        </button>
      );
    }

    return numeros;
  }

  return (
    <div className='container' >
      <div className='buttons'>
          <button onClick={deleteNumber} className='delButton'>del</button>
          <button onClick={capNumber}>{`(`}</button>
          <button onClick={capNumber}>{`)`}</button>
          <button onClick={capNumber}>mod</button>
          <button onClick={capNumber}>n</button>
          <div className='buttonsNumber'>
            {numbersCal()}
          </div>
        <button onClick={capNumber}>/</button>
        <button onClick={capNumber}>R</button>
        <button onClick={capNumber}>x²</button>
        <button onClick={capNumber}>-</button>      
        <button onClick={capNumber}>x³</button>
        <button onClick={capNumber}>.</button>
        <button onClick={capNumber}>%</button>
        <button onClick={capNumber}>+</button>
        <button onClick={capNumber}>*</button>      
        <button onClick={capNumber}>*</button>
        </div>
        <div className='buttonsCleanEquals'>
        <button onClick={cleanAll} className='delButton'>LIMPAR</button>
        <button onClick={equal} className='equalsButton'>=</button>
        </div>
      </div>
  )
}
