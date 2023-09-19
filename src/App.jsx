import React, { useRef, useState } from "react";
import "./styles/App.css";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const myInput = useRef(null)

  const handleClick = () => {
    setInputValue(myInput.current.value);
    myInput.current.value = "0";
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Metric/Imperial Unit Conversion</h1>
        <input
          className="value"
          defaultValue= "0"
          ref={myInput}
        />
        <button className="btn-convert" onClick={handleClick}>
          Convert
        </button>
      </div>
      <div className="meassure-container">
        <h2>Length (Meter/Feet)</h2>
        <p>
          {inputValue} meters = {parseFloat(inputValue * 3.2808).toFixed(3)}{" "}
          feet | {inputValue} feet ={" "}
          {parseFloat(inputValue / 3.2808).toFixed(3)} meters
        </p>
      </div>
      <div className="meassure-container">
        <h2>Volume(Liter/Gallons)</h2>
        <p>
          {inputValue} liters = {parseFloat(inputValue * 0.264).toFixed(3)}{" "}
          gallons | {inputValue} gallons ={" "}
          {parseFloat(inputValue / 0.264).toFixed(3)} liters
        </p>
      </div>
      <div className="meassure-container">
        <h2>Mass(Kilograms/Pounds)</h2>
        <p>
          {inputValue} kilos = {parseFloat(inputValue * 2.204).toFixed(3)}{" "}
          pounds = {parseFloat(inputValue / 2.204).toFixed(3)} kilos
        </p>
      </div>
    </div>
  );
}

export default App;
