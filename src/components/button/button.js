// import React from "react"
// import "../layout/layout.css"
// import buttonStyles from "./button.module.css"

// export default props => <button className={buttonStyles.button}>{props.buttonText}</button>

import React, { Component } from "react";
import PropTypes from "prop-types";

import { ButtonTypes, ButtonSizes, ButtonThemes } from "./buttonTypes";
import "./button.css";

export default class Button extends Component {
  getButtonClasses() {
    const { size, theme, type } = this.props;
    const buttonClasses = [
      "button",
      `button--${size}`,
      `button--${theme}`,
      `button--${type}`
    ];

    // icon && icon !== IconTypes.NONE && buttonClasses.push("button--icon");

    return buttonClasses.join(" ");
  }
  render() {
    const { disabled, onClickHandler, label } = this.props;
    return (
      <button
        className={this.getButtonClasses()}
        onClick={event => onClickHandler(event.target)}
        disabled={disabled}
      >
        {/* {icon && <Icon icon={icon} />} */}
        {label}
      </button>
    );
  }
}
Button.propTypes = {
  type: PropTypes.oneOf(Object.values(ButtonTypes)),
  disabled: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(ButtonSizes)),
  theme: PropTypes.oneOf(Object.values(ButtonThemes))
};

Button.defaultProps = {
  type: ButtonTypes.PRIMARY,
  onClickHandler: () => console.log("No click handler specified"),
  label: "",
  disabled: false,
  size: ButtonSizes.MEDIUM,
  theme: ButtonThemes.LIGHT
};
