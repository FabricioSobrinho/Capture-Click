// import { useState } from "react"
import { useState } from "react"
import "./App.css"

import { BsArrowReturnLeft, BsArrowReturnRight } from 'react-icons/bs'

function App() {
  const [divs, setDivs] = useState([])
  const [deletedDivs, setDeletedDivs] = useState([])

  // circle style and markup
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
    const novaDiv = <div key={divs.length} style={style}></div>
    setDivs([...divs, novaDiv])
  }

  //circle insertion on page
  const captureClick = (e) => {
    createCircle(e.pageX, e.pageY)
  }
  // circle remotion on the page
  const removeClick = () => {
    if (divs.length > 0) {
      setDivs(divs.slice(0, divs.length - 1))
      setDeletedDivs([...deletedDivs, divs[divs.length - 1]])
    } else {
      alert("No more undo moves!")
    }
  }
  // re insert of the circle in the page
  const redoClick = () => {
    if (deletedDivs.length > 0) {
      setDivs([...divs, deletedDivs[deletedDivs.length - 1]])
      setDeletedDivs(deletedDivs.slice(0, deletedDivs.length - 1))
    } else {
      alert("No more redo moves.")
    }
  }

  return (
    <div className="main">
      <h1>Click on the red area to mark clicks.</h1>
      <div className="topContainer">

        <div className="form">
          <button onClick={removeClick}>{<BsArrowReturnLeft />} Undo</button>
          <button onClick={redoClick}>Redo {<BsArrowReturnRight />}</button>
        </div>
        <element>Number of circles: {divs.length}</element>
      </div>
      <div className="App" onClick={captureClick} key={divs.length + 1}>
        {divs && divs.map((div) => div)}
      </div>
    </div>
  )
}

export default App
