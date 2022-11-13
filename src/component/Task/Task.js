import React from "react";
import { connect, useDispatch } from "react-redux";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { completeToDo, deleteToDo } from "../../redux/actions/ToDoActions";
import EditTask from "../EditTodo/EditTask";

const Task = ({ el, i }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-row">
      <div style={{ display: "flex" }}>
        {/* ------------------------- icon complete ------------------- */}
        <FaRegCheckCircle
          onClick={() => dispatch(completeToDo(el.id))}
          key={i}
          style={{
            marginRight: "20px",
            fontSize: "1.5rem",
            alignSelf: "center",
            cursor: "pointer",
          }}
        />
        <p
          className={el.isCompleted ? "complete" : "notComplete"}
          style={{ fontSize: "20px", alignSelf: "center" }}
        >
          {el.text}
        </p>
      </div>

      <div className="icons">
        {/* ------------------------- icon delete ------------------- */}
        <RiCloseCircleLine
          style={{ marginRight: "10px" }}
          onClick={() => dispatch(deleteToDo(el.id))}
        />
        {/* ------------------------- component edit ------------------- */}
        <EditTask el={el} />
      </div>
    </div>
  );
};

export default connect()(Task);
