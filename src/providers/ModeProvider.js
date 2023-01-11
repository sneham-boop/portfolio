import React, { useState, useEffect, createContext } from "react";
import useLocalStorage from "../App/hooks/useLocalStorage";

export const modeContext = createContext();

export default function DataProvider(props) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const [modeStyle, setModeStyle] = useState(
    getLocalStorage("snehaPortMode") || "light"
  );
  const [ballColor, setBallColor] = useState({
    full: "#ff7b00",
    medium: "#bfd200",
    low: "#ffff3f",
  });

  useEffect(() => {
    if (modeStyle === "light") {
      setBallColor({
        full: "#072ac8",
        medium: "#ffba08",
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
    ballColor
  };
  return (
    <modeContext.Provider value={data}>{props.children}</modeContext.Provider>
  );
}
