
import { useState } from "react"
import Style from './style.module.css'

function ColorPicker(){
    let[ColorValue,setValue] = useState('#123456')
    function colorDetector(value){
        setValue(value.target.value)
    }
    let divColor = {
        backgroundColor:ColorValue,
        padding:'100px',
        width:'100px',
        border:'3px solid'
    }
    return (
        <>
        <div className={Style.style}>
            <h1>Color picker.</h1>
            <div style={divColor}></div>
            <input type="color" value={ColorValue} onChange={(value)=>colorDetector(value)} style={{cursor:'pointer'}}/>
        </div>
        </>
    )
}

export default ColorPicker