import {
  add_toDo,
  delete_toDo,
  edit_toDo,
  complete_toDo,
} from "../constants/ActionTypes";

const initialState = {
  toDo: [
    { id: 0, text: "Tidur", isCompleted: false },
    { id: 1, text: "Makan", isCompleted: false },
    { id: 2, text: "Main", isCompleted: false },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case add_toDo:
      return {
        ...state,
        toDo: state.toDo.concat(action.payload),
      };

    case delete_toDo:
      return {
        ...state,
        toDo: state.toDo.filter((el, i) => el.id !== action.payload),
      };

    case edit_toDo:
      return {
        ...state,
        toDo: state.toDo.map((el, i) =>
          el.id === action.payload.id
            ? { ...el, text: action.payload.text, isCompleted: false }
            : el
        ),
      };

    case complete_toDo:
      return {
        ...state,
        toDo: state.toDo.map((el, i) =>
          el.id === action.payload
            ? { ...el, isCompleted: !el.isCompleted }
            : el
        ),
      };

    default:
      return state;
  }
};

export default todos;
