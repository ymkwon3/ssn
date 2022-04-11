import React from "react";
import styled from "styled-components";

const Button = props => {
  const {
    margin,
    padding,
    width,
    height,
    color,
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
  color: "#EAEAEA",
  padding: "5px",
  bg: "#8C8C8C",
  fontSize: "16px",
  _onClick: () => {},
};

const Buttonstyle = styled.button`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};

  color: ${props => props.color};
  background-color: ${props => props.bg};
  bottom: ${props => props.border};
  right: ${props => props.right};
  left: ${props => props.left};
  align-items: ${props => props.ai};
  border: none;

  font-weight: bold;
  font-size: ${props => props.fontSize};

  cursor: pointer;
  &:hover {
  }
`;

export default Button;
