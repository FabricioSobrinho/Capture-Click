// import { useState } from "react"
import { useRef } from "react"
import "./App.css"
import styled from 'styled-components'
function App() {
  const view = useRef()

  const createCircle = (widthPos, heightPos) => {
    document.innerHTML += `Ola`

    console.log(widthPos, heightPos)

  }

  const captureClick = (e) => {
    console.log(e.view);
    console.log(window.innerHeight);
    // createCircle(e.view.innerWidth, e.view.innerHeight)

  }

  const Div = styled.div`
  background: #BF4F74;
  border-radius: 50%;
  border: 2px solid #fff;
  height: 5vh;
  width: 5vh;
`

  return (
    <div className="App" onClick={captureClick} ref={view}>
      <Div></Div>
    </div>
  )
}

export default App
