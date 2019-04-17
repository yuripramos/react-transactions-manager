import styled, { css } from "styled-components";
import { white, grey10 } from "../../../styles/settings";
import { rem, media } from "../../../styles/tools/index";
import { isResponsive } from "../../../utils/getResolution";

export const Title = styled.span`
  color: ${grey10};
  font-size: ${rem(11)};
  font-weight: bold;
  line-height: 1.45;
  text-transform: uppercase;
`;

export const IconContainer = styled.span`
  align-items: center;
  background: ${white};
  border-radius: ${rem(4)};
  color: ${grey10};
  display: inline-flex;
  height: ${rem(24)};
  justify-content: center;
  margin-right: ${rem(9)};
  width: ${rem(24)};
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
`;

export const Wrapper = styled.div`
  display:inline-flex;
  flex-wrap: wrap;
  ${({ noTitle }) =>
  noTitle &&
    css`
      ${media.xs(css`
        transform: translateY(0px);
      `)};
      ${media.md(css`
        transform: translateY(10px);
      `)};
  `};
  ${({ width }) =>
  width &&
  css`
    width: ${isResponsive() ? rem(width/0.7) : rem(width)};
  `};
`;

