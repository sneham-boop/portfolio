import React, { useState, useEffect, createContext } from "react";
import useLocalStorage from "../App/hooks/useLocalStorage";

export const modeContext = createContext();

export default function DataProvider(props) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const [modeStyle, setModeStyle] = useState(
    getLocalStorage("snehaPortMode") || "dark"
  );
  const [ballCursorVisibility, setBallCursorVisibility] = useState(true);
  const [ballColor, setBallColor] = useState({
    full: "#ff7b00",
    medium: "#e54d41",
    low: "#ffff3f",
  });

  useEffect(() => {
    if (modeStyle === "light") {
      setBallColor({
        full: "#ff7b00",
        medium: "#e54d41",
        low: "#07a0c3",
      });
    }
  }, [modeStyle]);

  useEffect(() => {
    modeStyle === "dark"
      ? setLocalStorage("snehaPortMode", "dark")
      : setLocalStorage("snehaPortMode", "light");
  }, [modeStyle, setLocalStorage]);

  const data = {
    modeStyle,
    setModeStyle,
    ballColor,
    ballCursorVisibility,
    setBallCursorVisibility
  };
  return (
    <modeContext.Provider value={data}>{props.children}</modeContext.Provider>
  );
}
