
import './App.css';
import { useState } from "react";
const gifts = [
  'Cpu I9',
  'Ram 32g',
  'Cpu I7',
  'Coffee',
  'Bike',
  'TV',
  'Desk',
  'Magic mouse',
  '2000eur',
  '1000eur',
  'Apartment 42m2',

]
function App() {
  const [gift, setGift] = useState()
  function handleRandom() {
    const item = Math.floor(Math.random() * gifts.length)
    return (
      setGift(gifts[item])
    )
   
  }

  return (
    <div className="wrapper">
      <h1>
        {
          gift || "You have not been randomed yet"
        }
      </h1>
      <button onClick={handleRandom}>Random me</button>
    </div>
  )
}

export default App;
