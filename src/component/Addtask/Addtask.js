import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { addToDo } from "../../redux/actions/ToDoActions";
const Addtask = ({ addToDo }) => {
  const [input, setInput] = useState("");
  const toDo = useSelector(state => state.toDo);
  let id = toDo.length + 1;
  // fonction add to do
  const addNewToDo = e => {
    e.preventDefault();
    addToDo({
      id: id,
      text: input,
      isCompleted: false,
    });
    setInput("");
  };

  return (
    <div>
      {/* ------------------------- title ------------------- */}
      <h1 className="title">Todo List With React Redux</h1>
      {/* ------------------------- input add ------------------- */}

      <form className="todo-form">
        <input
          type="text"
          placeholder="Your Task?"
          value={input}
          required
          className="todo-input"
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="todo-button"
          onClick={input.trim() !== "" ? addNewToDo : input}
        >
          Add
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    addToDo: x => dispatch(addToDo(x)),
  };
};
export default connect(null, mapDispatchToProps)(Addtask);
