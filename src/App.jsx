import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [print, setPrint] = useState("")

  const handlePrint = () => {
  const msg = "Love you Jaan"
  let repeatMsg = "";

  for (let index = 0; index <= 9999; index++) {
    console.log(print)
     repeatMsg += index+1 + " " + msg + " " + " ";
  }
  setPrint(repeatMsg);
};
  return (
    <>
      <h3 id='print' style={{color: 'hotpink'}}>
        {print}
      </h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count the love <img src='https://i.postimg.cc/jd4mmbSS/1736475470764.png'width={60} /> {count}
        </button>
        <button onClick={handlePrint}>Print Love</button>
       </div>
      </div>
    </>
  )
}

export default App
