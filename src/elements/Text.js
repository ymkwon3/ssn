import React from "react";
import styled from "styled-components";
const Text = props => {
  const {margin, fS, fW, color, userSelect, children} = props;
  const styles = {
    margin,
    fS,
    fW,
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
  margin: ${props => props.margin};
  font-size: ${props => props.fS};
  font-weight: ${props => props.fW};
  color: ${props => props.color};
  user-select: ${props => props.userSelect};
`;

export default Text;
