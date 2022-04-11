import React from "react";
import styled from "styled-components";
const Text = props => {
  const {fontSize, fontWeight, color, userSelect, children} = props;
  const styles = {
    fontSize,
    fontWeight,
    color,
    userSelect,
  }
  return (
    <StyledText {...styles}>
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  color: "#fff",
  userSelect: "text",  
}

const StyledText = styled.div`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  user-select: ${props => props.userSelect};
`;

export default Text;
