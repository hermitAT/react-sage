import React from "react";
import classnames from "classnames";
import "components/Button.scss";

export default function Button(props) {
  const buttonClass = classnames("button",
  { "button--confirm": props.confirm,
    "button--cancel": props.cancel
  });
   return (
      <button
        className = {buttonClass}
        onClick = {props.onClick}
      >
        {props.children}
      </button>
    );
}

