import { createContext, useState } from "react";
import data from "../Assets/data.json";

export const AppContext = createContext();

const initState = {
  realData: data,
  updatedData: data,
};

// console.log("data", data);

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);

  const updateState = (newData) => {
    setState({ ...initState, updatedData: newData });
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};
