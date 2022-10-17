import React, { useState, useEffect, createContext } from "react";

export const modeContext = createContext();

export default function DataProvider(props) {
  const [dark, setDark] = useState(true);
  const data = {
    dark
  };
  return (
    <modeContext.Provider value={data}>{props.children}</modeContext.Provider>
  );
}
