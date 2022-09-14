import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//  initial state
const initailState = {
  transcation: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//   create context

export const Globalcontext = createContext();

//  provide componornt

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initailState);

  //  Actions

  function deleteTranscation(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }


  function addTranscation(transcation) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transcation,
    });
  }
  return (
    <Globalcontext.Provider
      value={{
        transcation: state.transcation,
        deleteTranscation,
        addTranscation,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};
