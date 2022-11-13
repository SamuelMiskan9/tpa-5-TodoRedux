import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "../Task/Task";

const ListTask = ({ toDoList }) => {
  const [done, setDone] = useState(false);
  const [undone, setUndone] = useState(false);
  const [reset, setReset] = useState(false);
  const handleDone = () => {
    setDone(!done);
    setUndone(false);
  };
  const handleUnDone = () => {
    setUndone(!undone);
    setDone(false);
  };
  const handleReset = () => {
    setReset(true);
    setUndone(false);
    setDone(false);
  };
  return (
    <div>
      {/* ------------------------- Done,Undone,All Task  ------------------- */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="show-button" onClick={handleDone}>
          Done Tasks
        </button>
        <button className="show-button" onClick={handleUnDone}>
          Undone Tasks
        </button>
        <button className="show-button" onClick={handleReset}>
          All Tasks
        </button>
      </div>

      {/* ------------------------- affichage todo ------------------- */}

      {done
        ? toDoList
            .filter(elem => elem.isCompleted === true)
            .map((el, i) => {
              return <Task el={el} key={i} />;
            })
        : undone
        ? toDoList
            .filter(elem => elem.isCompleted === false)
            .map((el, i) => {
              return <Task el={el} key={i} />;
            })
        : reset
        ? toDoList.map((el, i) => {
            return <Task el={el} key={i} />;
          })
        : toDoList.map((el, i) => {
            return <Task el={el} key={i} />;
          })}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    toDoList: state.toDo,
  };
};

export default connect(mapStateToProps)(ListTask);
