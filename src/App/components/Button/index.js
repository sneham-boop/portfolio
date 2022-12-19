import React from "react";
import "./Button.scss";

function Button1(props) {
  const { btnText, onClick, end, custom, icon } = props;
  return (
    <>
      <button
        className={`button1-style ${end} ${custom}`}
        type="button"
        onClick={onClick}
      >
        {btnText}
        {icon && <i className={icon} />}
      </button>
    </>
  );
}

export default Button1;
