import React from "react";
import styled from "styled-components";

const Button = props => {
  const { margin, padding, width, height, color, bg, _onClick, children, left, right, ai } =
    props;

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
  };

  return (
    <Buttonstyle {...styles} onClick={() => _onClick}>
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
  _onClick: () => {},
};

const Buttonstyle = styled.button`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  color: ${props => props.color};
  background-color: ${props => props.bg};
  right: ${props => props.right};
  left: ${props => props.left};
  border: none;
  align-items: ${props => props.ai};
  height: ${props => props.height};
`;

export default Button;
