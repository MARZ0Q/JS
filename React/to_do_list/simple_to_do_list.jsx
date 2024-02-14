import { useState } from "react"

function ToDoList(){
    let[useValue,setValue]=useState([])

    function addToTheList(){
        let input = document.getElementById('list')
        setValue((e)=>[...e,input.value])
    }

    function removeList(i){
        setValue(useValue.filter((element,index)=>index!=i))
    }
// onClick={()=>removeList(i)}>{e}{(function(){return ' '})()} this is a masterpiece discovered by me :)

    return(
        <>
        <ol>{useValue.map((e,i)=><li key={i} onClick={()=>removeList(i)}>{e}{(function(){return ' '})()}</li>)}</ol>
        <label htmlFor="">
            <input type="text" id='list' />
            <button onClick={addToTheList}>Add to The list</button>
        </label>
        </>
    )
}

export default ToDoList