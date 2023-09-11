
import {useState} from 'react';
import './App.css';

function App(e) {
const [weight, SetWeight] = useState(0)
const [bottles, SetBottles] = useState(0)
const [time, SetTime] = useState(0)
const [gender, SetGender] = useState('male')
const [result, SetResult] = useState(0)

const calculate = () => {
  let alcohol = 0
  let litres = bottles * 0.33
  let grams = litres * 8 * 4.5
  let burning = weight / 10
  let leftgrams = grams - (burning * time)
  
  if (gender === "male") {
    alcohol = leftgrams / (weight * 0.7)
  }
  else {
    alcohol = leftgrams / (weight * 0.6)
  }
  
  SetResult(alcohol)
}



return (
<>
<h3>Calculatin alcohol blood level</h3>

  <div id="container">
      <label>Weight</label>
      <input type="number" value={weight} onChange={e => SetWeight(e.target.value)}  />
    </div>
    <div>
      <label>Bottles</label>
      <input type="number" value={bottles} onChange={e => SetBottles(e.target.value)} />
      </div>
    <div>
      <label>Time in Hour</label>
      <input type="number" value ={time} onChange={e => SetTime(e.target.value)} />
      </div>
    
    <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => SetGender(e.target.value)}  /><label>Male</label>
          <input type="radio" name="gender" value="Female" onChange={e => SetGender(e.target.value)}  /><label>Female</label>
   
    <div>
        <label>Result</label>
        <output>{result.toFixed(2)}</output>
      </div>
      <div>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>

   
    </>
);
}

export default App;
