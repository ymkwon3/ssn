import React from "react";
import styled from "styled-components";

const Input = props => {
    const { 
        margin, 
        width, 
        height, 
        type, 
        ph, 
        padding, 
        value,
        label,
    } = props;
    
    const styles = {
        margin: margin,
        width: width,
        height: height,
        type: type,
        placeholder: ph,
        padding: padding,
        label: label,
        // 있는 정보를 가져오기 위한
    };
    return (
        <InputStyle 
            {...styles}
            type = {type}
            ph = {ph}
        />
    );
};

Input.defaultProps = {
    width: "270px",
    // ""안에 넣는이유? defaultProps값은 스타일값이 아니여서 
    height: "20px",
    type: "text",
    padding: "0",
}

const InputStyle = styled.input`
    width: ${props => props.width};
    padding: ${props => props.padding};
`;

export default Input;