import { createContext, useState } from "react";
import { initState } from "../Assets/info";

export const AppContext = createContext();

// console.log("data", data);

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);

  // const updateState = (newData) => {
  //   setState(newData);
  // };

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
