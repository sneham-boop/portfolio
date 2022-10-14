import React from "react";
import "./Button.scss";

function Button1(props) {
  const { btnText } = props;
  return (
    <>
      <button className="custButton" type="button">
        {btnText}
      </button>
    </>
  );
}

export default Button1;
