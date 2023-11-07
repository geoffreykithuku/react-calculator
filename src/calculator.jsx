import "./bootstrap.css";
import {useState} from "react";

function Calculator() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState("")

  const operations = ['/', '*', '+', '-', '.']
  const updateValue = valueToAdd => {
    if (operations.includes(valueToAdd) && value === '' ||
    operations.includes(valueToAdd) && operations.includes(value.slice(-1))){
      return;
    }
    if(!operations.includes(valueToAdd)){
      setResult(eval(value + valueToAdd).toString())
    }
    setValue(value + valueToAdd)
  }

  const calculateFinal = () =>{
    if(value === ''){
      return;
    }
    setValue(eval(value).toString())
  }

  const deleteLastInputDigit = () =>{
    if(value === ''){
      return;
    }
    const  newDisplayAfterDelete = value.slice(0, -1)

    setValue(newDisplayAfterDelete)
  }
  const clearScreen = () =>{
    setValue('')
  }
  return (
    <div className="container">
      <div className="row flex justify-content-center align-items-center mt-5">
        <div className="col-sm-8 col-md-5">
          <h1 className='text-center text-info'>Calculator App</h1>
          <div className="border border-info rounded p-3 justify-content-center align-items-center w-100 shadow mt-5">
            <div className="bg-light border border-secondary p-2 text-secondary rounded d-flex justify-content-between fs-2 overflow-hidden">
              <span className='' style={{
                fontWeight: 300,
                fontSize: 18,
              }}>
               Ans: ({result})
              </span>

              <span>
                {value || '0'}
              </span>
            </div>

            <div className=" row-cols-6 mt-2">
              <button className="btn btn-success rounded-0 border " onClick={()=> updateValue('+')}>+</button>
              <button className="btn btn-success rounded-0 border" onClick={()=> updateValue('-')}>-</button>

              <button className="btn btn-success rounded-0 border" onClick={()=> updateValue('*')}>x</button>
              <button className="btn btn-success rounded-0 border" onClick={()=> updateValue('/')}>/</button>
              <button className="btn btn-success rounded-0 border" onClick={()=>deleteLastInputDigit()}>DEL</button>
              <button className="btn btn-success rounded-0 border" onClick={()=> clearScreen()}>CLR</button>
            </div>
             <div className="row mt-2">
              <div className="flex row-cols-3">
                <button className='btn btn-secondary rounded-0 border' onClick={()=> updateValue('1')}>1</button>
                <button className='btn btn-secondary rounded-0 border' onClick={()=> updateValue('2')}>2</button>
                <button className='btn btn-secondary rounded-0 border' onClick={()=> updateValue('3')}>3</button>
              </div>
                <div className="flex row-cols-3">
                <button className='btn btn-secondary rounded-0 border' onClick={()=> updateValue('4')}>4</button>
                <button className='btn btn-secondary rounded-0 border' onClick={()=> updateValue('5')}>5</button>
                <button className='btn btn-secondary rounded-0 border' onClick={()=> updateValue('6')}>6</button>
              </div>   <div className="row-cols-3">
                <button className='btn btn-secondary rounded-0 border' onClick={()=> updateValue('7')}>7</button>
                <button className='btn btn-secondary rounded-0 border' onClick={()=> updateValue('8')}>8</button>
                <button className='btn btn-secondary rounded-0 border' onClick={()=> updateValue('9')}>9</button>
              </div>
            </div>

            <div className="row-cols-3">
              <button className="btn btn-secondary rounded-0 border" onClick={()=> updateValue('0')}>0</button>
              <button className="btn btn-secondary rounded-0 border" onClick={()=> updateValue('.')}>.</button>

              <button className="btn btn-secondary rounded-0 border" onClick={()=> calculateFinal()}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
