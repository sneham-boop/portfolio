import React from "react";
import "./Button.scss";

function Button1(props) {
  const { btnText, onClick, end } = props;
  return (
    <>
      <button className={`custButton ${end}`} type="button" onClick={onClick}>
        {btnText}
      </button>
    </>
  );
}

export default Button1;