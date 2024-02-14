import { useState } from "react"

function StateUpdater(){
    let [valueObject,nameStateUpdater]=useState({
        name:'Marzoq',
        age:33
    })
    let space = String.fromCodePoint(160);

    function nameChanger(e){
        nameStateUpdater((c)=>({...c,name:e.target.value}))
    }
    function ageChanger(e){
        nameStateUpdater((c)=>({...c,age:e.target.value}))
    }
    return(
        <>
            <p>Name:{valueObject.name} {space} Age:{valueObject.age}</p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={nameChanger}/> <br />

            <label htmlFor="age">Age:</label>
            <input type="text" id="age" onChange={ageChanger} /> 
        </>
    )
}

export default StateUpdater