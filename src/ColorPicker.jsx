import React from 'react'
import { useState } from 'react'

function ColorPicker() {
    const [color,setcolor]=useState('');
    function handleColor(event){
        setcolor(event.target.value);
    }
  return (
    <>
        <div style={{width:"200px",height:"200px",backgroundColor:color,border:"1px solid red"}}>
            the div
        </div>
        <input type="text" name='color' value={color} onChange={handleColor}/>
    </>
  )
}

export default ColorPicker