import React from "react";
import styled from "styled-components";

const Button = props => {
  const {
    margin,
    padding,
    width,
    height,
    color,
    border,
    borderR,
    bg,
    _onClick,
    children,
    left,
    right,
    ai,
    fontSize,
  } = props;

  const styles = {
    margin,
    padding,
    width,
    height,
    color,
    border,
    borderR,
    bg,
    _onClick,
    right,
    left,
    ai,
    fontSize,
  };

  return (
    <Buttonstyle {...styles} onClick={() => _onClick()}>
      {children}
    </Buttonstyle>
  );
};

Button.defaultProps = {
  margin: "",
  width: "100%",
  height: "",
  color: "#eee",
  padding: "5px",
  bg: "#35a0b8",
  fontSize: "16px",
  border: "none",
  borderR: "8px",
  _onClick: () => {},
};

const Buttonstyle = styled.button`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => props.border};
  border-radius: ${props => props.borderR};

  color: ${props => props.color};
  background-color: ${props => props.bg};
  bottom: ${props => props.border};
  right: ${props => props.right};
  left: ${props => props.left};
  align-items: ${props => props.ai};

  font-weight: bold;
  font-size: ${props => props.fontSize};

  cursor: pointer;
  &:hover {
  }
`;

export default Button;
