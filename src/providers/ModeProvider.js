import React, { useState, useEffect, createContext } from "react";

export const modeContext = createContext();

export default function DataProvider(props) {
  const [dark, setDark] = useState(false);
  const [modeStyle, setModeStyle] = useState("light");

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
