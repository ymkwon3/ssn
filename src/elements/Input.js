import React from "react";
import styled from "styled-components";

const Input = props => {
    const { 
        margin, 
        width, 
        height, 
        type, 
        placeholder, 
        padding, 
        value,
        label,
    } = props;
    
    const styles = {
        margin: margin,
        width: width,
        height: height,
        type: type,
        placeholder: placeholder,
        padding: padding,
        // 있는 정보를 가져오기 위한
    };
    return (
        <InputStyle 
            {...styles}
            type = {type}
            placeholder = {placeholder}
        />
    );
};

Input.defaultProps = {
    width: "250px",
    // ""안에 넣는이유? defaultProps값은 
    type: "text",
}

const InputStyle = styled.input`
    width: ${props => props.width};
    padding: ${props => props.padding};
`;

export default Input;