
import { useState } from "react"

function FinalToDoList(){
    let[theValue,setValue]=useState([])
    let[inputValue,setInputValue]=useState([])

    function changeValue(e){
        setInputValue(e.target.value)
    }

    function addList(){
        setValue([inputValue,...theValue])
    }

    function deleteItems(i){
        setValue((va)=>va.filter((ele,item)=>item!=i))
    }

    function moveUp(e,i){
        let upValue = theValue[i-1]
        setValue(theValue.map((ele,ind)=>{
            if(ind==i-1 && upValue != undefined){
                return e
            }
            if(ind===i && upValue != undefined){
                return upValue
            }
            else{
                return ele
            }
        }))
    }

    function moveDown(e,i){
        let downValue = theValue[i+1]
        setValue(theValue.map((ele,ind)=>{
            if(ind==i+1 && downValue != undefined){
                return e
            }
            if(ind===i && downValue != undefined){
                return downValue
            }
            else{
                return ele
            }
        }))
    }

    return(
        <>
            <div>
            <ul>
                {theValue.map((e,i)=>
                <li key={i}>{e} {(function(){return " "})()}
                <button onClick={()=>deleteItems(i)}>Delete</button>
                <button onClick={()=>moveUp(e,i)}>↑</button>
                <button onClick={()=>moveDown(e,i)}>↓</button>
                </li>)}
            </ul>
            <input type="text" onChange={changeValue} />
             <button onClick={addList}>Add</button>
            </div>
        </>
)
}
export default FinalToDoList