import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { initValue, persist, isEnCripted } from "./configuration";

export const context = createContext();

const Provider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initValue, () => {
    if (persist.isSet) {
      let data = localStorage.getItem(persist?.keyName);
      if (data && persist?.isEnCripted) {
        data = atob(data);
      }
      return data ? JSON.parse(data) : initValue;
    }
    return initValue;
  });

  useEffect(() => {
    if (persist.isSet) {
      let data = JSON.stringify(store);
      if (persist.isEnCripted) {
        data = btoa(data);
      }
      localStorage.setItem(persist?.keyName, data);
    }
  }, [store]);
  return (
    <context.Provider value={{ store, dispatch }}>{children}</context.Provider>
  );
};

export default Provider;
