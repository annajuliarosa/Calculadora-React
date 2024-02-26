import './style/style.css';
import TitleCalc from './components/titleCalc';
import Display from './components/display';
import Buttons from './components/Buttons';
import { useState } from 'react';

function App(props) {

  const [clickedButtonValue, setClickedButtonValue] = useState('');

  return (
    <div className="App">
      <TitleCalc />
      <Display valor={clickedButtonValue} />
      <Buttons capNumber={props.capNumber} setClickedButtonValue={setClickedButtonValue} clickedButtonValue={clickedButtonValue} />
    </div>
  );
}

export default App;
