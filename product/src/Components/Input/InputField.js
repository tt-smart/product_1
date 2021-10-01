import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";
const InputField = ({
  name,
  email,
  type,
  placeholder,
  onChange,
  className,
  value,
  radio,
  checkbox,
  children,
  password,
  date,
  time,
  label,
  ...props
}) => {
  return (
    <React.Fragment>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
      
      />
      
    </React.Fragment>
  );
};
//this is default props
InputField.defaultProps = {
  type: "text",
  className: "",
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password", "email","radio","checkbox","date","time"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
