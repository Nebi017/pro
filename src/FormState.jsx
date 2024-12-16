import React from 'react'
import { useState } from 'react'

function FormState() {
    const [form,setForm]=useState({
        name:null,
        email:null,
        password:null,
    });
    function handleForm(event){
        const {name ,value}=event.target;
       setForm((prevForm)=>({
        ...prevForm,
        [name]:value,
        
       }))
    }

  return (
    <>
        <div className=''>
            <input type="text" name='name' value={form.name} onChange={handleForm} placeholder='name' />
            <input type="text" name='email' value={form.email} onChange={handleForm} placeholder='email' />
            <input type="password" name='password' value={form.password} onChange={handleForm} placeholder='password' />
        </div>
        <>
            <p>Name:{form.name}</p>
            <p>Email:{form.email}</p>
            <p>Password:{form.password}</p>
        </>
    </>
  )
}

export default FormState