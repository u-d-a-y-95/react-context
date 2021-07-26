import { ADD_TODO, REMOVE_TODO, CHANGE_STATUS_TODO } from './actionType';
import { removeTodo,changeStatusInTodo } from './todo';
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      state.todos.push(action.payload);
      return { ...state };
    case REMOVE_TODO:
      state.todos = removeTodo(state.todos, action.payload);
      return { ...state };
    case CHANGE_STATUS_TODO:
      state.todos = changeStatusInTodo(state.todos, action.payload);
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
