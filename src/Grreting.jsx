import React from 'react'
import { useState } from 'react'

function Grreting() {
    const[name,setName] =useState('');
    
  return (
    <div>
        <p>Heloo :{name}</p>
        <input type="text" value={name} placeholder='Enter name' onChange={(event)=>setName(event.target.value)}/>
    </div>
  )
}

export default Grreting