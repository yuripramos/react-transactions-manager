import React  from "react";
import { string, node } from "prop-types";
import Icon from "../Icon";

import { Title, IconContainer, Header, Wrapper } from "./styles";

function Box({
  title,
  icon,
  titleColor,
  children,
  height,
  width,
  noTitle,
  ...props
}) {
  return (
    <Wrapper noTitle={noTitle} width={width}>
      {(icon || title) && (
        <Header>
          {icon && (
            <IconContainer>
              <Icon name={icon} />
            </IconContainer>
          )}
          {title && <Title titleColor={titleColor}>{title}</Title>}
        </Header>
      )}
      {children}
    </Wrapper>
  );
}

Box.defaultProps = {
  title: null,
  icon: null,
};

Box.propTypes = {
  title: string,
  icon: string,
  childre: node,
};

export default Box;
