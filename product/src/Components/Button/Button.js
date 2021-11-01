// Button Component

import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import clsx from "clsx";

import { addToClass } from "../../helper/styles";

//Main Component
const Button = (props) => {
  const { variant, size, label, onClick, isDisabled, iconName, type } = props;

  function handleClick(event) {
    // alert("working");
    props&&props.onButtonClick&& props.onButtonClick(label);
    if (onClick) {
      onClick(event);
    }
  }

  const cls = {
    btn: true,
    "btn-dis": isDisabled
  };

  addToClass(
    cls,
    {
      primary: "btn-prm",
      quickbook: "btn-quick",
      secondary: "btn-sec",
      normal: "btn-nrm",
      link: "btn-lnk",
      error: "btn-err",
      login: "btn-lgn",
      signup: "btn-sup",
      discard: "btn-dic",
      outline: "btn-out",
      normalOutline: "btn-nro",
      date: "btn-dte",
      linkbtn: "btn-lnknew",
      default: "btn-dft",
      add: "btn-add",
      upload: "btn-upload"
    },
    variant
  );

  addToClass(
    cls,
    {
      small: "btn-sml",
      medium: "btn-med",
      big: "btn-big",
      large: "btn-lrg"
    },
    size
  );

  return (
    <button className={clsx(cls)} onClick={handleClick} disabled={isDisabled} type={type ? type : "button"}>
      {iconName ? <span className="buttonIconStyle">{iconName}</span> :''}
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(
    "normal",
    "primary",
    "quickbook",
    "secondary",
    "error",
    "link",
    "login",
    "signup",
    "discard",
    "outline",
    "normalOutline",
    "dte",
    "linkbtn",
    "default",
    "add",
    "upload"
  ),
  size: PropTypes.oneOf("sm", "md", "lg"),
  label: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool
};

Button.defaultProps = {
  variant: "normal",
  size: "sm",
  label: "",
  onClick: null,
  isDisabled: false
};

export default React.memo(Button, isEqual);
