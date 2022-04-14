import React from "react";
import styled from "styled-components";
const Text = props => {
  const {borderR, bg, padding, disabled, width, display, margin, fontSize, fontWeight, color, userSelect, textAlign, children} = props;
  const styles = {
    width,
    margin,
    fontSize,
    fontWeight,
    textAlign,
    color,
    userSelect,
    borderR,
    display,
    disabled,
    padding,
    bg,
  }
  return (
    <StyledText {...styles}>
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  color: "#eee",
  userSelect: "text",
  display: "block",
  fontSize: "12xp",
  fontWeight: "normal",
  textAlign: "start",
  width: "auto",
  className: "",
}

const StyledText = styled.div`
  display: ${props => props.display};
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  user-select: ${props => props.userSelect};
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
  padding: ${props => props.padding};
  background-color: ${props => props.bg};
  border-radius: ${props => props.borderR};
  ${props => props.disabled ? "user-select: none" : ''};
`;

export default Text;
