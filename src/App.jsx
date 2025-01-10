import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [print, setPrint] = useState("")

  const handlePrint = () => {
  const msg = "Love you Choco"
  let repeatMsg = "";

  for (let index = 0; index <= 9999; index++) {
    console.log(print)
     repeatMsg += index+1 + " " + msg + " " + " ";
  }
  setPrint(repeatMsg);
};
  return (
    <>
      <div>
      <img src="https://t3.ftcdn.net/jpg/03/13/56/08/360_F_313560871_b75XP5UEoNv7UwiBKo5mjehL3jrILjUn.jpg" alt="" width={"100%"}/>
        <div>
        <a href="#" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxT8ekxTvaGS2g1WfWDI_Du0KkfDq6f1DOh1My3TbXQDEF4Fz_ad9xHcV5jmjoBQ47os&usqp=CAU" className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src="https://i.postimg.cc/jd4mmbSS/1736475470764.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Choco<img src="https://i.postimg.cc/J02D4g1D/1736476803485.png" alt="" width={80}/>Coco</h1>
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
