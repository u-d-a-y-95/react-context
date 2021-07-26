import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { initValue, parsist } from './configuration';

export const context = createContext();

const Provider = ({ children }) => {
  // const [store, dispatch] = useReducer(reducer, initValue, () => {
  //   if (parsist.isSet) {
  //     const data = localStorage.getItem(parsist?.keyName);
  //     return data ? JSON.parse(data) : initValue;
  //   }
  //   return initValue;
  // });

  // useEffect(() => {
  //   if (parsist.isSet) {
  //     localStorage.setItem(parsist?.keyName, JSON.stringify(store));
  //   }
  // }, [store]);

  const [store, dispatch] = useReducer(reducer, initValue)

  return (
    <context.Provider value={{ store, dispatch }}>{children}</context.Provider>
  );
};

export default Provider;
