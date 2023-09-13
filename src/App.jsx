import { useState } from "react";
import "./styles/App.css";

function App() {
  const [inputValue, setInputValue] = useState(0);

  const handleConvert = () => {
    // const value = parseFloat(inputValue).toFixed(3);
    // const meter =  3.281 //feet
    // const liter = 0.264 //gallon
    // const Kilogram = 2.204
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Metric/Imperial Unit Conversion</h1>
        <input
          className="value"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn-convert" onClick={handleConvert}>
          Convert
        </button>
      </div>
      <div className="meassure-container">
        <h2>Length(Meter/Feet)</h2>
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
