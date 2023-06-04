import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    orders: []
}

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useReducer(AppReducer, initialState);

  const addOrder = (order) => {
    dispatch({
      type: "ADD_ORDER",
      payload: order,
    });
  };

  const deleteOrder = (id) => {
    dispatch({
      type: "DELETE_ORDER",
      payload: id,
    });
  };

  return (
    <Context.Provider value={{ state, addOrder, deleteOrder }}>{children}</Context.Provider>
  );
};
