import React, { useState, useContext } from 'react';
import { addTodoToState } from '../state/action';
import useDispatch from '../state/useDispatch';
const Input = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState('');
  const add = () => {
    if (todoInput) {
      dispatch(
        addTodoToState({
          task: todoInput,
          status: false
        })
      );
      setTodoInput('');
    }
  };
  return (
    <>
      <div className="d-flex">
        <input
          value={todoInput}
          onChange={e => {
            setTodoInput(e.target.value);
          }}
        />
        <button className="addBtn" onClick={add}>
          Add
        </button>
      </div>
    </>
  );
};
export default Input;
