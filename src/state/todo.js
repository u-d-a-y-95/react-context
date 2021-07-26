export const removeTodo = (arr, index) => {
  arr.splice(index, 1);
  return arr;
};
export const changeStatusInTodo = (arr, payload) => {
  arr[payload.index].status = payload.status;
  return arr;
};
