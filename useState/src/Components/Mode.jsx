import React from 'react'
import { useState } from 'react'

function Mode() {

  var [mode, setMode] = useState("dark");

  const toggleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");

      if (mode === "dark") {
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        document.getElementById("theme-toggle").innerText="Change to Light Mode";
      }else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        document.getElementById("theme-toggle").innerText="Change to Dark Mode"
      }
  }
  return (
    <>
    <h1>Hello World</h1>
    <button onClick={toggleMode} id="theme-toggle">Change theme</button>
    </>
  )
}

export default Mode