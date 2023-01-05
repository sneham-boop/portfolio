import React, { useState, useEffect, createContext } from "react";
import useLocalStorage from "../App/hooks/useLocalStorage";

export const modeContext = createContext();

export default function DataProvider(props) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  const [modeStyle, setModeStyle] = useState(
    getLocalStorage("snehaPortMode") || "light"
  );

  useEffect(() => {
    modeStyle === "dark"
      ? setLocalStorage("snehaPortMode", "dark")
      : setLocalStorage("snehaPortMode", "light");
  }, [modeStyle, setLocalStorage]);

  const data = {
    modeStyle,
    setModeStyle,
  };
  return (
    <modeContext.Provider value={data}>{props.children}</modeContext.Provider>
  );
}
