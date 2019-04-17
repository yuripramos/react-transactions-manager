import React, { Component } from "react";
import { string, func, bool, array, number, oneOfType } from "prop-types";

/* eslint-disable */

import {
  InputWrapper,
  InputField,
  Label,
  IconContainer,
  ValidityContainer,
  Tooltip,
  Prefix
} from "./styles";
import Icon from "../Icon";

export const KEYCODES = {
  ENTER: 13,
  BACKSPACE: 8,
  ALL: "all"
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this._onKeyDown.bind(this);
    this.state = {
      isFocused: false,
      emptyState: false,
      isValid: typeof props.valid === "boolean" ? props.valid : null
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value === "" && this.state.isValid !== null) {
      this.setState({
        isValid: null
      });
    }

    if (prevProps.value === "" && this.props.value.length > 4) {
      this.setState({
        isValid:
          this.props.value === ""
            ? null
            : typeof this.props.valid === "function"
            ? this.props.valid()
            : this.state.isValid
      });
    }
  }

  _onKeyDown(event) {
    const { disableKeys, onKeyDown } = this.props;

    const disableKeysArray = Array.isArray(disableKeys)
      ? disableKeys
      : [disableKeys];

    const disabledKey = disableKeysArray.find(
      disableKey => event.keyCode == disableKey || event.which == disableKey
    );

    if (disableKeysArray.includes(KEYCODES.ALL) || disabledKey) {
      event.preventDefault();
      return;
    }
    onKeyDown && onKeyDown(event);
  }

  render() {
    const {
      label,
      value,
      placeholder,
      onChange,
      onBlur,
      onFocus,
      onKeyUp,
      type,
      name,
      icon,
      valid,
      tinyLabels,
      toolTip,
      dataTest,
      width,
      maskType,
      refType,
      prefix,
      maxLength,
      ...props
    } = this.props;
    const { isFocused, emptyState, isValid } = this.state;
    return (
      <InputWrapper valid={emptyState ? false : isValid} width={width}>
        {prefix && (value || isFocused) && <Prefix>{prefix}</Prefix>}
        <InputField
          {...props}
          required
          maxLength={maxLength}
          onChange={e => {
            onChange && onChange(e);
            this.setState({ emptyState: e.target.value === "" });
          }}
          innerRef={this.props.innerRef}
          onFocus={e => {
            onFocus && onFocus(e);
            (prefix || toolTip) && this.setState({ isFocused: true });
          }}
          onBlur={e => {
            onBlur && onBlur(e);
            this.setState({
              isFocused: false,
              isValid: valid ? valid() : this.state.isValid
            });
          }}
          prefix={prefix}
          type={type}
          value={value}
          name={name}
          onKeyDown={this.onKeyDown}
          autoComplete="new-password"
          placeholder={placeholder}
          data-test={dataTest ? dataTest : Input.displayName}
          isEmpty={!value}
          tinyLabels={tinyLabels}
        />
        {label && <Label tinyLabels={tinyLabels}>{label}</Label>}
        {/* {(isValid !== null || emptyState) && !disabled && (
          <ValidityContainer>
            {isValid && !emptyState ? (
              <Icon type="Check" width="13" height="13" />
            ) : (
              <Icon type="Attention" width="24" height="24" />
            )}
          </ValidityContainer>
        )} */}
      </InputWrapper>
    );
  }
}

Input.displayName = "Input";

Input.defaultProps = {
  placeholder: "",
  type: "text",
  name: "",
  label: null,
  icon: null,
  valid: () => {},
  onFocus: null,
  tinyLabels: null,
  onBlur: () => {},
  value: "",
  disableKeys: []
};

Input.propTypes = {
  placeholder: string,
  type: string,
  name: string,
  label: string,
  icon: string,
  tinyLabels: bool,
  value: oneOfType([number, string]),
  valid: oneOfType([bool, func]),
  onBlur: func,
  onFocus: func,
  disableKeys: oneOfType([number, string, array]),
  onChange: func
};

export default Input;
