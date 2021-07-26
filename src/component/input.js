import React, { useState, useContext } from 'react';
import { context } from '../state/context';
import { addTodoToState } from '../state/action';
const Input = () => {
  const { dispatch } = useContext(context);
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
