import React from 'react'
import { useState } from 'react'

function Toogle() {
    const [state,setState] = useState('ON');
    const handleState =()=>setState(prev => prev === "ON" ? "OFF" : "ON");
    
  return (
    <div>
        <div>{state}</div>
        <button onClick={handleState}>Click</button>
    </div>
  )
}

export default Toogle