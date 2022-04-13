import React from "react";
import styled from "styled-components";
import Text from "./Text";

const InputLabel = React.forwardRef((props, ref) => {
  const {
    type,
    label,
    width,
    height,
    padding,
    fontSize,
    bg,
    color,
    border,
    subText,
    _onBlur,
  } = props;
  const styles = { width, height, padding, fontSize, bg, color, border };
  return (
    <InputContainer {...styles}>
      <input
        ref={el => ref?.current.push(el)}
        type={type}
        placeholder=" "
        autoComplete="off"
        onBlur={_onBlur}
      />
      <label>{label}</label>
      <Text fS="12px" display={subText ? null : "none"}>
        {subText}
      </Text>
    </InputContainer>
  );
});

InputLabel.defaultProps = {
  padding: 0,
  fontSize: "16px",
  border: "2px solid #eee",
  _onBlur: () => {},
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};

  & > input {
    font-size: ${props => props.fontSize};
    width: 100%;
    height: 100%;
    padding: ${props => props.padding};
    outline: none;
    border: ${props => props.border};
    border-radius: 8px;
    background-color: transparent;
    color: ${props => props.color};
  }

  & > label {
    font-size: ${props => props.fontSize};
    position: absolute;
    z-index: 1;
    background-color: ${props => props.bg};
    left: ${props => props.padding};
    top: ${props => props.padding};
    transition: 0.2s;
    user-select: none;
    color: ${props => props.color};
  }

  & > input:focus, & > input:not(:placeholder-shown) {
    border: 2px solid #35a0b8;
    outline: 2px solid #35a0b8;
  }

  & > input:focus + label,
  & > input:not(:placeholder-shown) + label {
    transform: translateY(-${props => props.padding}) translateY(-50%)
      translateX(-${props => props.padding}) scale(0.8);
      color: #35a0b8;
      font-weight: bold;
  }

  & > input::-ms-reveal {
    filter: invert();
  }

  & > div {
    margin-top: 10px;
    color: #ff5040;
  }
`;

export default InputLabel;
