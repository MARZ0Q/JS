import { useState } from "react"

function MediumToDolist(){
    let[nameValue,setNameValue]=useState()
    let[ageValue,setAgeValue]=useState()
    let[mappingValue,setMappingValue]=useState([])

    function nameChanger(e){
        setNameValue(e.target.value+' ')
    }
    function ageChanger(e){
        setAgeValue(e.target.value+' ')
    }
    function Submit(){
        setMappingValue((m)=>[...m,{age:ageValue,name:nameValue}])
        document.getElementById('nameValue').value = ''
        document.getElementById('ageValue').value = ''
    }
    return(
        <>
        <ul>
            {mappingValue.map((e,i)=><li key={i}>{e.name}{e.age}</li>)}
        </ul>
            <input type="text" id="nameValue" onChange={nameChanger}/><br />
            <input type="number" id="ageValue"onChange={ageChanger}/>
            <button id='input' onClick={Submit}>Submit</button>
        </>
    )
}


export default MediumToDolist