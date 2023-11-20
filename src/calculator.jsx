import './main.css'
import {useState} from "react";
import {Sun} from "lucide-react";
function Calculator() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState("")

  const [isDarkMode, setIsDarkMode] = useState(true)

  const operations = ['/', '*', '+', '-', '.', 'Math.pow']

  const updateValue = valueToAdd => {
   
   
    if (operations.includes(valueToAdd) && value === '' || 
    operations.includes(valueToAdd) && operations.includes(value.slice(-1))){
      return;
    }

    if (!operations.includes(valueToAdd)) {
      
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
    setResult('')
  }

  const calculateSquareRoot = () => {
    if(value === ''){
      return;
    }
    setValue(Math.sqrt(value).toString())
  }
 
  const calculatePower = () => {
    if(value === ''){
      return;
    }
   
    setValue(Math.pow(value, 2).toString())
  }


  return (
    <div
      className={`absolute top-0 w-screen h-screen justify-center items-center ${
        isDarkMode ? "bg-[#333333] text-white" : ""
      }`}
    >
      <div
        className={`max-w-[400px] rounded border mx-auto mt-20 p-5 ${
          isDarkMode ? "bg-[#2e31ca41]" : "text-[#00010f41] "
        }`}
      >
        <div className="flex w-full justify-between items-center">
          <h1 className="text-center text-2xl font-bold">Calculator</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`flex border w-[80px] px-2 py-1 rounded items-center ${
              isDarkMode ? "justify-start" : "justify-end text-[#a0ada3]"
            }`}
          >
            {isDarkMode ? (
              <Sun size={20} className="self-end" />
            ) : (
              <Sun size={20} className="" />
            )}
          </button>
        </div>
        <div className="">
          <div
            className={`flex border justify-between items-center py-5 my-2 px-5 ${
              isDarkMode ? "text-white" : "text-[#232323]"
            }`}
          >
            <span
              className=""
              style={{
                fontWeight: 300,
                fontSize: 18,
              }}
            >
              {result && <p>Ans: ({result})</p>}
            </span>

            <span>{value || "0"}</span>
          </div>

          <div className="grid grid-cols-4 mb-2 gap-1 text-white font-semibold">
            <button
              className="bg-[#596] bg-opacity-80 rounded "
              onClick={() => updateValue("+")}
            >
              +
            </button>
            <button
              className="bg-[#596] bg-opacity-80 rounded"
              onClick={() => updateValue("-")}
            >
              -
            </button>

            <button
              className="bg-[#596] bg-opacity-80 rounded"
              onClick={() => updateValue("*")}
            >
              x
            </button>
            <button
              className="bg-[#596] bg-opacity-80 rounded"
              onClick={() => updateValue("/")}
            >
              /
            </button>
            <button
              className="bg-[#596] bg-opacity-80 rounded"
              onClick={() => calculateSquareRoot()}
            >
              SQRT
            </button>
            <button
              className="bg-[#596] bg-opacity-80 rounded"
              onClick={() => calculatePower()}
            >
              ^2
            </button>
            <button
              className="bg-[#596] bg-opacity-80 rounded"
              onClick={() => deleteLastInputDigit()}
            >
              DEL
            </button>
            <button
              className="bg-[#596] bg-opacity-80 rounded"
              onClick={() => clearScreen()}
            >
              CLR
            </button>
          </div>
          <div className="text-white">
            <div className="grid grid-cols-3 gap-1 mb-1">
              <button
                className="bg-[#596] bg-opacity-80 rounded"
                onClick={() => updateValue("1")}
              >
                1
              </button>
              <button
                className="bg-[#596] bg-opacity-80 rounded"
                onClick={() => updateValue("2")}
              >
                2
              </button>
              <button
                className="bg-[#596] bg-opacity-80 rounded"
                onClick={() => updateValue("3")}
              >
                3
              </button>
            </div>
            <div className="grid grid-cols-3 gap-1 mb-1 text-white">
              <button
                className="bg-[#596] bg-opacity-80 rounded"
                onClick={() => updateValue("4")}
              >
                4
              </button>
              <button
                className="bg-[#596] bg-opacity-80 rounded"
                onClick={() => updateValue("5")}
              >
                5
              </button>
              <button
                className="bg-[#596] bg-opacity-80 rounded"
                onClick={() => updateValue("6")}
              >
                6
              </button>
            </div>{" "}
            <div className="grid grid-cols-3 gap-1 mb-1">
              <button
                className="bg-[#596] bg-opacity-80 rounded"
                onClick={() => updateValue("7")}
              >
                7
              </button>
              <button
                className="bg-[#596] bg-opacity-80 rounded"
                onClick={() => updateValue("8")}
              >
                8
              </button>
              <button
                className="bg-[#596] bg-opacity-80 rounded"
                onClick={() => updateValue("9")}
              >
                9
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 text-white">
            <button
              className="bg-[#596] bg-opacity-80 rounded"
              onClick={() => updateValue("0")}
            >
              0
            </button>
            <button
              className="bg-[#596] bg-opacity-80 rounded"
              onClick={() => updateValue(".")}
            >
              .
            </button>

            <button
              className="bg-[#596] bg-opacity-80 rounded"
              onClick={() => calculateFinal()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
