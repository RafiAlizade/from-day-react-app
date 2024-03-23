import { useState } from 'react'
import './App.css'

function App() {
  const [RangeValue, setRangeValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const dateToday = new Date().getDay();
  const dateYear = new Date().getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[new Date().getMonth()];

  console.log(dateToday);

  function minusFunction() {
    const inputDate = document.querySelector('.input_date');
    const currentValue = Number(inputDate.value) || 0;
    inputDate.value = currentValue - Number(RangeValue);
    setCurrentValue(currentValue - Number(RangeValue));

    if (inputDate.value < 0) {
      inputDate.value = 0
    }
  }

  function plusFunction() {
    const inputDate = document.querySelector('.input_date');
    const currentValue = Number(inputDate.value) || 0;
    inputDate.value = currentValue + Number(RangeValue);
    setCurrentValue(currentValue + Number(RangeValue));

    if (inputDate.value < 0) {
      inputDate.value = 0
    }
  }

  return (
    <>
      <main className="main_app">
        <div className="input__div">
          <div className="input__div__range">
          <input type="range" min="0" max="10" className='range_input' onChange={handleRangeChange} />
          <span>{RangeValue}</span>
          </div>
        </div>

        <div className="add__date">
          <button className="button_main minus" onClick={minusFunction}>-</button>
          <input type="text" className='input_date'/>
          <button className="button_main plus" onClick={plusFunction}>+</button>
        </div>

        <div className="input__text">
          <span>{`${currentValue == 0 ? "" : `${currentValue} days from`} Today is ${monthName} ${dateToday}  ${dateYear} `}</span>
        </div>
      </main>
    </>
  )
}

export default App
