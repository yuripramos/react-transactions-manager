import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";
import {
  white,
  grey30,
  black50,
  darkBlue,
  red,
  lighestgrey,
  grey180
} from "../../../styles/settings";

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: ${rem(55)};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  color: ${black50};
  transition: 0.3s color;
  pointer-events: none;
`;

export const Prefix = styled.span`
  position: absolute;
  padding: ${rem(26)} ${rem(0)} ${rem(0)} ${rem(10)};
  pointer-events: none;
  font-family: Lato;
  font-size: ${rem(13)};
  color: ${grey180};
`;

export const Tooltip = styled.div`
  visibility: visible;

  ${({ hide }) =>
    hide &&
    css`
      visibility: hidden;
    `};
`;

export const Label = styled.label`
  position: absolute;
  left: ${rem(52)};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.3s top, 0.2s color, 0.3s font-size;
  font-family: Lato;
  font-size: ${rem(13)};
  letter-spacing: ${rem(0.1)};
  color: ${black50};
  ${({ tinyLabels }) =>
    tinyLabels &&
    css`
      font-size: ${rem(10)};
      left: ${rem(10)};
      top: 50%;
      transform: translateY(-50%);
    `};
`;

const revealContent = css`
  padding-top: ${rem(15)};

  ~ ${Label} {
    top: ${rem(22)};
    font-family: Lato Bold;
    font-size: ${rem(11)};
    letter-spacing: ${rem(0.1)};
    text-align: left;
    color: ${darkBlue};
  }
`;

const revealContent2 = css`
  padding-top: ${rem(15)};

  ~ ${Label} {
    top: ${rem(10)};
    font-family: Lato Bold;
    font-size: ${rem(9)};
    letter-spacing: ${rem(0.1)};
    text-align: left;
    color: ${darkBlue};
  }
`;

const revealContent3 = css`
  padding-top: ${rem(15)};

  ~ ${Label} {
    top: ${rem(12)};
    color: ${black50};
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: ${rem(62)};
  border-radius: ${rem(4)};
  background-color: ${white};
  border: solid ${rem(1)} ${grey30};
  font-family: Lato;
  font-size: ${rem(13)};
  letter-spacing: ${rem(0.1)};
  color: ${black50};
  padding: 0 ${rem(52)};
  transition: 0.3s padding, 0.3s border;
  box-shadow: none;

  ::-ms-clear {
    display: none !important;
  }
  ${({ prefix }) =>
    prefix &&
    css`
      padding-left: ${rem(32)} !important;
    `};

  :focus {
    outline: none;
    border: solid ${rem(1)} ${darkBlue};
  }

  ${({ tinyLabels }) =>
    tinyLabels &&
    css`
      padding: 0 ${rem(9.2)};
    `};

  :focus {
    ${({ tinyLabels }) => (tinyLabels ? revealContent2 : revealContent)};
  }
  ${({ isEmpty }) => !isEmpty && revealContent};
  ${({ isEmpty, tinyLabels }) => !isEmpty && tinyLabels && revealContent2};
  :not(:focus) {
    ${({ tinyLabels, isEmpty }) => tinyLabels && !isEmpty && revealContent3};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  height: ${rem(62)};

  input:not(:focus) {
    ${({ valid }) =>
      valid === false &&
      css`
        border-color: ${red};
      `};
  }
  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `};
`;
