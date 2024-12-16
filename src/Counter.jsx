import React from 'react'
import { useState } from 'react'
import './counter.css'

function Counter() {

    const [count,setCount]=useState(1);
    const[stepValue,setStepValue]=useState(1);

// const Increment = () =>{
//     setCount((prev)=> prev+1);
// }
// const Reset = () =>{
//     setCount(0);
// }
// const Decrement = () =>{
//     setCount((prev)=> prev+1);
// }

  return (
    

    <div className='box'>

        <p>{count}</p>
        <div>
            <button onClick={()=>setCount(prev=> prev + Number(stepValue))}>Increment</button>
            <button onClick={()=>setCount(1)}>reset</button>
            <button onClick={()=>setCount(prev=>prev - Number(stepValue))}>Decremenet</button>
        </div>
        <div><input type="text" value={stepValue} onChange={(event)=>setStepValue(event.target.value)} placeholder='Set the step value to jump'/></div>
        
    </div>
  )
}

export default Counter