import { ADD_TODO, REMOVE_TODO, CHANGE_STATUS_TODO } from './actionType';

export const addTodoToState = payload => {
  return {
    type: ADD_TODO,
    payload
  };
};
export const removeTodoFromState = payload => {
  return {
    type: REMOVE_TODO,
    payload
  };
};
export const changeTodoStatusFromState = payload => {
  return {
    type: CHANGE_STATUS_TODO,
    payload
  };
};
