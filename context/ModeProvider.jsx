import React, { useState, createContext } from "react";

export const ModeContext = createContext({});
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("menu");
  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};
