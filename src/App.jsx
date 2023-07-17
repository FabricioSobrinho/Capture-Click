// import { useState } from "react"
import { useState } from "react"
import "./App.css"

function App() {
  const [divs, setDivs] = useState([])
  const [counter, setCounter] = useState(0)

  const createCircle = (widthPos, heightPos) => {
    const style = {
      position: "absolute",
      left: widthPos - 8,
      top: heightPos - 8,
      border: "2px solid #5f00f8",
      borderRadius: "50%",
      height: "5vh",
      width: "5vh",
      zIndex: "99999",
    }
    const novaDiv = <div key={`"${counter}A"`} style={style}></div>
    setDivs([...divs, novaDiv])
    setCounter(() => counter + 1)
  }

  const captureClick = (e) => {
    createCircle(e.pageX, e.pageY)
  }
  const removeClick = () => {
    setDivs(divs.slice(0, divs.length - 1));
    setCounter(counter - 1);
  }

  return (
    <div>

      <button onClick={removeClick}>Undo</button>

      <div className="App" onClick={captureClick} key={divs.length + 1}>
        {divs && divs.map((div) => div)}

      </div>
    </div>
  )
}

export default App
