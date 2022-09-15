import React from "react";
import Input from "./input.js";
import { useState } from "react";

import { ReactComponent as EditLogo } from "../../edit-button-svgrepo-com.svg";
import { ReactComponent as DeleteLogo } from "../../delete-button-svgrepo-com.svg";
import { ReactComponent as UpdateLogo } from "../../update-svgrepo-com.svg";

const TodoList = (props) => {
  const [isEdit, setisEdit] = useState(false);
  const [updatedTask, setupdatedTask] = useState(props.data);
  const [checkStyle, setStyle] = useState("white");
  const handleCheck = (e) => {
    props.getId(props.id);
    props.getState(e.target.checked);
    e.target.checked ? setStyle("green") : setStyle("white");
  };

  return (
    <div className="round">
      {isEdit ? (
        <>
          <Input
            type="checkbox"
            className="checkbox-round"
            onChange={handleCheck}
          />

          <div className="upTask">
            <Input
              type="text"
              value={updatedTask}
              className="edit-input"
              onChange={(e) => setupdatedTask(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={() => {
              props.editTodo(props.id, updatedTask);
              setisEdit(!isEdit);
            }}
          >
            <UpdateLogo />
          </button>
          <button type="button" onClick={() => props.deleteTodo(props.id)}>
            <DeleteLogo />
          </button>
        </>
      ) : (
        <>
          <Input
            type="checkbox"
            className="checkbox-round"
            onChange={handleCheck}
          />

          <p className={checkStyle}>{props.data}</p>

          <button
            type="button"
            onClick={() => {
              props.editTodo(props.id);
              setisEdit(!isEdit);
            }}
          >
            <EditLogo />
          </button>
          <button type="button" onClick={() => props.deleteTodo(props.id)}>
            <DeleteLogo />
          </button>
        </>
      )}
    </div>
  );
};

export default TodoList;
