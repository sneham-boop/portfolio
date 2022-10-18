import React, { useState, useEffect, createContext } from "react";

export const modeContext = createContext();

export default function DataProvider(props) {
  const [dark, setDark] = useState(true);
  const [modeStyle, setModeStyle] = useState("dark");

  useEffect(() => {
    dark ? setModeStyle("dark") : setModeStyle("light");
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
