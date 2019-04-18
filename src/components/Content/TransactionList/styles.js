import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import {
  black,
  grey10,
  black40,
  lighestgrey,
  trueWhite
} from "../../../styles/settings";

export const ListWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  background: ${lighestgrey};
  color: ${black};
  height: 100%;
  min-width: ${rem(300)};
  ${media.lg(css`
    min-width: ${rem(436)};
  `)};
  align-content: flex-start;
  overflow-y: auto;
`;

export const Item = styled.div`
  width: 100%;
  padding: ${rem(35)} ${rem(30)};
  border-bottom: solid 1px ${grey10};
  height: ${rem(60)};
  cursor: pointer;
  display: inline-flex;
  ${({ isActive }) =>
    isActive &&
    css`
      border-left: solid 1px ${grey10};
      background: ${trueWhite};
    `};
`;

export const City = styled.span`
  font-weight: 700;
`;

export const Description = styled.div`
  font-size: ${rem(14)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 30px;
  font-weight: 700;
  color: ${black40};
  ${({ recipient }) =>
    recipient &&
    css`
      margin-top: ${rem(20)};
      color: ${black40};
      height: ${rem(55)};
      font-size: ${rem(12)};
      font-weight: 400;
      justify-content: flex-start;
    `};
`;

export const Arrow = styled.span`
  position: relative;
  transform: translate(-15px, 50px);
`;

export const DatesStyle = styled.div`
  font-size: ${rem(11)};
  width: 100%;
  display: inline-flex;
  color: ${grey10};
  padding: ${rem(5)} 0;
  font-weight: 300;
`;
export const Address = styled.div`
  width: 50%;
  display: inline-flex;
  flex-wrap: wrap;
  ${({ spacing }) =>
    spacing &&
    css`
      margin-left: 10px;
    `};
`;
