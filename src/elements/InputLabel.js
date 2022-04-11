import React from "react";
import styled from "styled-components";

const InputLabel = props => {
  const { type, label, width, height, padding, fontSize, bg } = props;
  const styles = { width, height, padding, fontSize, bg };
  return (
    <InputContainer {...styles}>
      <input type={type} placeholder=" " autoComplete="off" />
      <label>{label}</label>
    </InputContainer>
  );
};

InputLabel.defaultProps = {
  padding: 0,
  fontSize: "16px",
};

const InputContainer = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};

  & > input {
    font-size: ${props => props.fontSize};
    width: 100%;
    height: 100%;
    padding: ${props => props.padding};
    outline: none;
    border: 1px solid #fff;
    /* border-bottom: 1px solid #fff; */
    background-color: transparent;
    color: #fff;
  }
  & > input::-ms-reveal {
    filter: invert(100%);
  }

  & > label {
    font-size: ${props => props.fontSize};
    position: absolute;
    z-index: 10;
    background-color: ${props => props.bg};
    left: ${props => props.padding};
    top: ${props => props.padding};
    transition: 0.2s;
    user-select: none;
    color: #fff;
  }

  & > input:focus + label,
  & > input:not(:placeholder-shown) + label {
    transform: translateY(-${props => props.padding}) translateY(-50%)
      translateX(-${props => props.padding}) scale(0.75);
  }
`;

export default InputLabel;
