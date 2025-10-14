import React, { useState } from 'react'

function PasswordExample() {

    var [isHidden, setIsHidden] = useState(true);
  return (
    <>
        <h1>Password Example</h1>
            <input type={isHidden ? "password" : "text"} placeholder='Enter Password Here'/>

        <button onClick={ ()=> { setIsHidden(!isHidden)}}>{isHidden ? "Show" : "Hide"} Password</button>
        
    </>
)
}

export default PasswordExample