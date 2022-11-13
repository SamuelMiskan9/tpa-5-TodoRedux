import {
  add_toDo,
  delete_toDo,
  edit_toDo,
  complete_toDo,
} from "../constants/ActionTypes";

export const addToDo = payload => {
  return { type: add_toDo, payload };
};

export const deleteToDo = payload => {
  return { type: delete_toDo, payload };
};

export const editToDo = payload => {
  return { type: edit_toDo, payload };
};

export const completeToDo = payload => {
  return { type: complete_toDo, payload };
};
