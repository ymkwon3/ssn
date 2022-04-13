import React from "react";
import styled from "styled-components";

const InputIcon = props => {
  const {
    margin,
    width,
    height,
    type,
    ph,
    bg,
    padding,
    value,
    _onBlur,
    _onChange,
    _onKeyDown,
  } = props;

  const styles = {
    margin,
    width,
    height,
    bg,
    type,
    padding,
    // 있는 정보를 가져오기 위한
  };
  return (
    <InputStyle
      {...styles}
      type={type}
      placeholder={ph}
      onBlur={_onBlur}
      value={value}
      onChange={e => _onChange(e.target.value)}
      onKeyDown={e => {
        if (e.key === "Enter") {
          _onKeyDown();
        }
      }}
    />
  );
};

InputIcon.defaultProps = {
  // ""안에 넣는이유? defaultProps값은 스타일값이 아니여서
  type: "text",
  margin: "0",
  padding: "0",
  _onBlur: () => {},
  _onChange: () => {},
  _onKeyDown: () => {},
};

const InputStyle = styled.input`
  width: ${props => props.width};
  padding: ${props => props.padding};
  height: ${props => props.height};
  background-color: ${props => props.bg};
  color: #eee;
  border: none;
  outline: none;
  border-bottom: 2px solid #eee;
  font-size: 16px;
  transition: 0.4s;

  &::placeholder {
    color: #eee;
  }

  &:not(:placeholder-shown),
  &:focus {
    width: ${props => parseInt(props.width) * 4 + "px"};
  }
`;

export default InputIcon;
