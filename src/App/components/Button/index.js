import React from "react";
import "./Button.scss";

function Button1(props) {
  const { btnText, onClick, end, custom } = props;
  return (
    <>
      <button className={`button1-style ${end} ${custom}`} type="button" onClick={onClick}>
        {btnText}
      </button>
    </>
  );
}

export default Button1;
