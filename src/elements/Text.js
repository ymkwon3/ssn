import React from "react";
import styled from "styled-components";
const Text = props => {
  const {fontSize, fontWeight, color, userSelect, children, display} = props;
  const styles = {
    fontSize,
    fontWeight,
    color,
    userSelect,
    display,
  }
  return (
    <StyledText {...styles}>
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  color: "#0e487a",
  userSelect: "text",
  display: "static",
}

const StyledText = styled.div`
  display: ${props => props.display};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  user-select: ${props => props.userSelect};
`;

export default Text;
