import React from "react";
import { bool, node, string, func, number } from "prop-types";
import { ButtonTag } from "../../../styles/objects";

function Button({
  children,
  onClick,
  isCallToAction,
  isWarning,
  type,
  disabled,
  width,
  className,
  small,
  height,
  dataTest,
  paddingSize,
  opacity,
  isNewTransfer
}) {
  return (
    <ButtonTag
      className={className}
      width={width}
      height={height}
      type={type}
      disabled={disabled}
      isCallToAction={isCallToAction}
      isWarning={isWarning}
      data-test={dataTest ? dataTest : Button.displayName}
      onClick={onClick}
      small={small}
      opacity={opacity}
      paddingSize={paddingSize}
      isNewTransfer={isNewTransfer}
    >
      {children}
    </ButtonTag>
  );
}

Button.displayName = "Button";

Button.defaultProps = {
  isCallToAction: null,
  isWarning: null,
  type: "button",
  disabled: false,
  width: null,
  height: null,
  onClick: null,
  className: null,
  small: false,
  paddingSize: null,
  isNewTransfer: null
};

Button.propTypes = {
  children: node,
  isCallToAction: bool,
  isWarning: bool,
  disabled: bool,
  type: string,
  width: number,
  onClick: func,
  className: string,
  small: bool,
  height: number,
  paddingSize: number,
  isNewTransfer: bool
};

export default Button;
