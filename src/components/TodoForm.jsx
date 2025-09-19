import { useState, useEffect } from "react";
function TodoForm(props) {
  const setlistitem = props.setlistitem;
  const listitem = props.listitem;

  const [input, setinput] = useState("");
  function handleInput(evt) {
    setinput(evt.target.value);
  }
  function handleAddListItem() {
    const cur_input=input.trim()
   if(cur_input){
        setlistitem([...listitem, { id:crypto.randomUUID(), activity:cur_input }]);
    setinput("");
   } 
  }
  return (
    <div>
      <h1 className="text-2xl font-medium mb-3">Manage Activities</h1>
      <input
        value={input}
        onChange={handleInput}
        placeholder="Next Activity?"
        className="border border-black outline-none p-1"
      />
      <button
        onClick={handleAddListItem}
        className="bg-black border border-black text-white p-1"
      >
        Add
      </button>
    </div>
  );
}
export default TodoForm;
