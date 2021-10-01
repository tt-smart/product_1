import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

//main component
const ButtonComponent = (props) => {
  const { active, block, disabled, color, outline, arialabel, label } = props;

  return (
    <div>
      <Button
        active={active}
        block={block}
        color={color}
        disabled={disabled}
        outline={outline}
        arialabel={arialabel}
      >
        {label}
      </Button>
    </div>
  );
};
// main props
ButtonComponent.propTypes = {
  active: PropTypes.bool,
  arialabel: PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  label: PropTypes.string,
};
//default props

ButtonComponent.defaultProps = {
  active: false,
  arialabel: "",
  block: false,
  color: "",
  disabled: false,
  outline: false,
  label: "",
};

export default ButtonComponent;
