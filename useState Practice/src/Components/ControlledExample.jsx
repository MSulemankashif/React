import React, { useState } from 'react'
import "./controlledExample.css"

function ControlledExample() {

    var [formData, setFormData] = useState({
        firstname : "",
        Lastname : "",
        email : "",
        password : ""
    })

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
    }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>

        <h1>Controlled Components</h1>
        <input type="text"
         name='first_name'
         placeholder='Enter Your First name'
         value={formData.firstname} onChange={(input) => {setFormData({...formData, firstname: input.target.value})}}/>
        <br />

        <input type="text" 
        name='last_name'
        placeholder='Enter Your Last Name'
        value={formData.Lastname} onChange={(input) => {setFormData({...formData, Lastname: input.target.value})}}/>
        <br />

        <input type="email" 
        name='email'
        placeholder='Enter Your Email Here'
        value={formData.email} onChange={(input) => {setFormData({...formData, email : input.target.value})}}/>
        <br />  

        <input type="password" 
        name='password'
        placeholder='Enter Your Password Here'
        value={formData.password} onChange={(input) => {setFormData({...formData, password : input.target.value})}}
        />

        <br />
        <button type='submit'>Submit Form</button>
      </form>
    </>
  )
}

export default ControlledExample