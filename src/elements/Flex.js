import React from "react";
import styled from "styled-components";

const Flex = props => {
  // fd: flex-direction, jc: justify-content, ai: align-items, bg: background-color -영민
  // trbl is a list with top, right, bottom, left properties in order -영민
  const {
    width,
    height,
    margin,
    padding,
    border,
    borderR,
    borderBottom,
    boxS,
    gap,
    position,
    trbl,
    fd,
    jc,
    ai,
    bg,
    zIndex,
    overflow,
    children,
    _onClick,
  } = props;
  const styles = {
    width,
    height,
    margin,
    padding,
    border,
    borderR,
    borderBottom,
    boxS,
    gap,
    position,
    trbl,
    fd,
    jc,
    ai,
    bg,
    zIndex,
    overflow,
  };
  return <FlexDiv onClick={_onClick} {...styles}>{children}</FlexDiv>;
};

Flex.defaultProps = {
  width: "100%",
  height: "",
  margin: "",
  padding: "",
  border: "none",
  borderR: '8px',
  borderBottom: "none",
  boxS: "none",
  gap: "",
  position: "static",
  trbl: ["", "", "", ""],
  fd: "row",
  jc: "center",
  ai: "center",
  bg: "transparent",
  zIndex: "0",
  overflow: "visible",
  _onClick: () => {},
};

const FlexDiv = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border: ${props => props.border};
  border-radius: ${props => props.borderR};
  border-bottom: ${props => props.borderBottom};
  box-shadow: ${props => props.boxS};
  gap: ${props => props.gap};
  z-index: ${props => props.zIndex};
  position: ${props => props.position};
  top: ${props => props.trbl[0]};
  right: ${props => props.trbl[1]};
  bottom: ${props => props.trbl[2]};
  left: ${props => props.trbl[3]};
  display: flex;
  flex-direction: ${props => props.fd};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  background-color: ${props => props.bg};
  overflow: ${props => props.overflow};
  transition: 0.2s;
`;

export default Flex;
