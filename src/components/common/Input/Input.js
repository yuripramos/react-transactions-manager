import React, { Component } from "react";
import { string, func, bool, array, number, oneOfType } from "prop-types";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
/* eslint-disable */

import {
  InputWrapper,
  InputField,
  Label,
  IconContainer,
  ValidityContainer,
  Tooltip,
  Prefix,
  WrapperDayPicker,
  InputDayPicker
} from "./styles";
import Icon from "../Icon";


class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      emptyState: false,
      isValid: typeof props.valid === "boolean" ? props.valid : null,
      selectedDay: undefined,
      isDisabled: false
    };
    this.handleDayChange = this.handleDayChange.bind(this);
    this.clearDayPicker = this.clearDayPicker.bind(this);
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

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true
    });

    const syntheticEvent = {
      target: {
        name: this.props.name,
        value: selectedDay
      }
    };
    this.props.onChange(syntheticEvent);

  }
  clearDayPicker(){
    if(this.state.selectedDay !== undefined){
      this.setState({
        selectedDay: undefined
      });
    }
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
    const {
      isFocused,
      emptyState,
      isValid,
      selectedDay
    } = this.state;
    if(value === "" && type === "date"){
      this.clearDayPicker();
    }
    if (type === "date") {
      return (
        <WrapperDayPicker>
          <DayPickerInput
            value={selectedDay}
            onDayChange={this.handleDayChange}
            dayPickerProps={{
              selectedDays: selectedDay,
              disabledDays: {
                daysOfWeek: [0, 6]
              }
            }}
          />
        </WrapperDayPicker>
      );
    }
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
