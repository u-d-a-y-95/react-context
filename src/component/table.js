import React from 'react';
import {
  removeTodoFromState,
  changeTodoStatusFromState
} from '../state/action';
import useSelector from '../state/useSelector';
import useDispatch from "../state/useDispatch"
const Table = () => {
  const {
  todos
  } = useSelector();

  const dispatch = useDispatch()

  const changeStatus = params => {
    dispatch(changeTodoStatusFromState(params));
  };

  return (
    <table>
      <tr>
        <th>No</th>
        <th>Task</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      {todos?.map((item, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{item.task}</td>
            <td>{item.status ? 'done' : 'pending'}</td>
            <td>
              <button
                onClick={e => changeStatus({ index, status: !item?.status })}
              >
                {item.status ? (
                  <i className="fa fa-unlock color-red " />
                ) : (
                  <i className="fa fa-lock color-green " />
                )}
              </button>
              <button onClick={e => dispatch(removeTodoFromState(index))}>
                <i className="fa fa-trash color-red" />
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
