import './App.css';
import { Button } from './components/Button';
import { Window } from './components/Window';
import { ClearButton } from './components/ClearButton';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';
//Hook
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');
  const addInput = val => {
    setInput(input + val);
  };
  const calculateResult = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Debe ingresar algún valor para hacer el cálculo!");
    }
  };

  return (
    <div className='contain'>
      <div className="App">
        <Logo></Logo>
          <div className='calculator-contain'>
            <Window input={input}/>
            <div className='row'>
              <Button handleClick={addInput}>1</Button>
              <Button handleClick={addInput}>2</Button>
              <Button handleClick={addInput}>3</Button>
              <Button handleClick={addInput}>+</Button>
            </div>
            <div className='row'>
              <Button handleClick={addInput}>4</Button>
              <Button handleClick={addInput}>5</Button>
              <Button handleClick={addInput}>6</Button>
              <Button handleClick={addInput}>-</Button>
            </div>
            <div className='row'>
              <Button handleClick={addInput}>7</Button>
              <Button handleClick={addInput}>8</Button>
              <Button handleClick={addInput}>9</Button>
              <Button handleClick={addInput}>*</Button>
            </div>
            <div className='row'>
              <ClearButton handleClear={() => setInput('')}>C</ClearButton>
              <Button handleClick={addInput}>0</Button>
              <Button handleClick={addInput}>.</Button>
              <Button handleClick={addInput}>/</Button>
            </div>
            <div className='row'>
              <Button handleClick={calculateResult}>=</Button>
            </div>
          </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;