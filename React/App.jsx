
import ColorPicker from './color_picker_module/color_picker.jsx'
import StateUpdater from './stateUpdater/stateUpdater.jsx'
import ToDoList from './to_do_list/simple_to_do_list.jsx'
import MediumToDolist from './to_do_list/medium_to_do_list.jsx'
import FinalToDoList from './to_do_list/FinalToDoList.jsx'


function App(){
  return(
    <>
      <ColorPicker></ColorPicker>
      <StateUpdater></StateUpdater>
      <MediumToDolist/>
      <ToDoList></ToDoList>
      <FinalToDoList></FinalToDoList>
    </>
  )
}


export default App