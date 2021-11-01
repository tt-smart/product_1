// Core - Avatar Component
import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import clsx from "clsx";
import { Input as InputComponent } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { addToClass } from "../../helper/styles";

// Main Component
const Input = (props) => {
  const {
    name,
    value,
    size,
    type,
    maxLength,
    placeholder,
    isDisabled,
    onChange,
    onBlur,
    onFocus,
    id,
    error,
    invalid,
    autoComplete
  } = props;

  const cls = {
    input: true
  };

  addToClass(
    cls,
    {
      small: "input-sml",
      medium: "input-mdm",
      large: "input-lge"
    },
    size,
    "normal"
  );

  const handleChange = (event) => {
		if (onChange) {
			onChange(event.target.value, event.target.name, event);
		}
	};

  // function handleBlur(event) {
  //   if (onBlur) {
  //     onBlur();
  //   }
  // }

  function handleFocus(event) {
    if (onFocus) {
      onFocus();
    }
  }
  function handleKeyPress(event) {
    // console.log("inside...press" + event.charCode );
    props.onKeyPress && props.onKeyPress(event.charCode)
  }

  return (
    <div className="inputDiv">
      <InputComponent
        id={id}
        className={clsx(cls)}
        type={type}
        size={size}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={handleChange}
        // onBlur={handleBlur}
        onFocus={handleFocus}
        data-testid="input"
        // value={value}
        name={name}
        invalid={!!error}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(["normal", "small", "medium", "large"]),
  type: PropTypes.oneOf(["text", "password", "number", "email"]),
  value: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  invalid: PropTypes.func,
};

Input.defaultProps = {
  id: '',
  size: "normal",
  type: "text",
  name: '',
  value: '',
  maxLength: '',
  placeholder: '',
  isDisabled: false,
  onChange: null,
  onFocus: null,
  onBlur: null,
  onKeyPress: null,
  invalid: null,
};

export default React.memo(Input, isEqual);
