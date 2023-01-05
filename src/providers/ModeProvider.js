import React, { useState, useEffect, createContext } from "react";
import useLocalStorage from "../App/hooks/useLocalStorage";

export const modeContext = createContext();

export default function DataProvider(props) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const [dark, setDark] = useState((getLocalStorage("snehaPortMode") === "dark") || false);
  const [modeStyle, setModeStyle] = useState(getLocalStorage("snehaPortMode") || "light");

  useEffect(() => {
    if(dark) {
      setModeStyle("dark");
      setLocalStorage("snehaPortMode", "dark");
    } 
    else {
      setModeStyle("light");
      setLocalStorage("snehaPortMode", "light");
    }
    
  }, [dark]);


  const data = {
    dark,
    setDark,
    modeStyle
  };
  return (
    <modeContext.Provider value={data}>{props.children}</modeContext.Provider>
  );
}
