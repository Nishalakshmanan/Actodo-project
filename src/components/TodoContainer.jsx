import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function TodoContainer() {
    const [listitem,setlistitem]=useState([])
  return (
    <div className="flex gap-5 items-start flex-wrap my-3">
      <TodoForm listitem={listitem} setlistitem={setlistitem}></TodoForm>
      <TodoList listitem={listitem} setlistitem={setlistitem}></TodoList>
    </div>
  );
}
export default TodoContainer;
