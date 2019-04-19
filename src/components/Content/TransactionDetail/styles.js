import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import {
  trueWhite,
  darkGreen,
  grey90,
  blue30,
  grey180,
  red
} from "../../../styles/settings";
import { InputWrapper, InputField } from "../../common/Input/styles";
import { default as ButtonRaw } from "../../common/Button";

export const Result = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  height: ${rem(40)};
  transition: all 0.2s linear;
  ${media.md(css`
    padding: 0 ${rem(60)};
  `)};
  ${media.lg(css`
    text-align: left;
  `)};
  ${({ large }) =>
    large &&
    css`
      height: 100%;
    `};
`;

export const DashboardWrapper = styled.div`
  background: ${trueWhite};
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding: ${rem(25)} 0;
  `)};
`;

export const Currency = styled.span`
  color: ${grey180};
  margin: ${rem(4.5)} 0 0 0;
  font-size: ${rem(20)};
    ${({ inDebt }) =>
    inDebt &&
    css`
      color: ${red}
    `};
`;

export const Button = styled(ButtonRaw)`
  height: ${rem(50)};
  line-height: ${rem(40)};
  width: ${rem(150)};

  :not(:last-child) {
    margin-right: ${rem(12)};
  }
`;

export const Title = styled.h1`
  font-size: ${rem(24)};
  margin: ${rem(25)} 0 ${rem(10)};
  color: ${darkGreen};
  width: 100%;
`;

export const Fieldset = styled.div`
  padding: ${rem(14)};
  margin: ${rem(12)} ${rem(10)};
  height: ${rem(180)};
  color: ${grey90};
  border: solid ${rem(1)} ${blue30};
  border-radius: ${rem(4)};
  align-items: center;
  justify-content: space-between;
  display: inline-flex;
  flex-wrap: wrap;
  ${media.md(css`
    margin: ${rem(20)} ${rem(5)};
  `)};
  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `};
  ${({ adjust }) =>
    adjust &&
    css`
      transform: translateY(${adjust}px);
    `};

  ${({ withRows }) =>
    withRows &&
    css`
      padding: ${rem(24)} ${rem(30)};
    `};
`;

export const Content = styled.div`
  padding: 0 ${rem(18)};
  margin-top: ${rem(20)};

  ${InputField} {
    height: ${rem(48)};
    padding-left: ${rem(9.6)};
  }

  ${InputWrapper} {
    margin: ${rem(9)} ${rem(6)} ${rem(9)} 0;
    height: ${rem(48)};
  }
`;

export const FieldsetTitle = styled.span`
  color: ${grey90};
  font-size: ${rem(10)};
  letter-spacing: ${rem(0.2)};
  font-weight: bold;
  text-transform: uppercase;
  font-family: Lato;
`;

export const TitleWrapper = styled.div`
  padding: 0;
  width: 100%;
  ${({ withRows }) =>
    withRows &&
    css`
      margin: ${rem(-15)} ${rem(-15)};
    `};
  ${({ bigMargin }) =>
    bigMargin &&
    css`
      margin-bottom: ${rem(6.2)};
    `};
  ${({ lowMargin }) =>
    lowMargin &&
    css`
      margin-bottom: ${rem(-7)};
    `};
  ${({ isNewTransfer }) =>
    isNewTransfer &&
    css`
      padding: 15px;
      display: inline-flex;
      justify-content: space-between;
    `};
`;

export const FloatingText = styled.div`
  display: inline-flex;
  color: ${grey90};
  width: 100%;
  margin-top: ${rem(12)};
`;

export const AvailableBalBox = styled.span`
  width: 100%;
  height: ${rem(45)};
  font-size: ${rem(18)};
  font-family: Lato;
  transform: translateY(-10px);
`;

export const RowsWrapper = styled.div`
  margin-top: ${rem(12.5)};
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${rem(4)};
  ${media.md(css`
    padding: ${rem(20)};
  `)};
`;

export const ShowHideWrapper = styled.div`
  height: 0;
  transition: height 0.2s linear;
  overflow: hidden;

  ${({ height }) =>
    height &&
    css`
      height: ${height + 55}px;
    `};
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  float: right;
  margin: ${rem(-50)} ${rem(-15)};
`;
