import React from 'react'
import { useState } from 'react'

function BoxExample() {

    var [boxColor, setBoxColor] =  useState("red");

    var boxStyle = {
        width : "200px",
        height : "200px",
        backgroundColor : boxColor,
        transition : "0.5s ease",
        borderRadius : "10px"
    }

    function handleChange(color){
        setBoxColor(color);
    }
  return (
    <>
        <div style={boxStyle}></div>
        <br />
        <button onClick={()=>{handleChange("Orange")}}>Orange</button>
        <button onClick={()=>{handleChange("Green")}}>Green</button>
        <button onClick={()=>{handleChange("Yellow")}}>Yellow</button>
    </>
)
}

export default BoxExample