import React from "react";
import styled from "styled-components";

const Button = props => {
    const { margin, padding, width, height, color, bg, _onClick, children  } = props;

    const styles = {
        margin: margin,
        padding: padding,
        width: width,
        height: height,
        color: color,
        bg: bg,
        _onClick: _onClick,
    };
    return (
        <Buttonstyle {...styles} onClick={() => {
            _onClick();
        }}>{children}</Buttonstyle>
    );
};

Button.defaultProps = {
    margin: "0",
    width: "100%",
    height: false,
    color: "#EAEAEA",
    padding: "5px",
    bg: "#8C8C8C",
};

const Buttonstyle = styled.button`
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: ${props => props.width};
    color: ${props => props.color};
    background-color: ${props => props.bg};
    border: none;
`;

export default Button;