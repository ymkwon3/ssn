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
    gap,
    position,
    trbl,
    fd,
    jc,
    ai,
    bg,
    children,
  } = props;
  const styles = {
    width,
    height,
    margin,
    padding,
    border,
    gap,
    position,
    trbl,
    fd,
    jc,
    ai,
    bg,
  };
  return <FlexDiv {...styles}>{children}</FlexDiv>;
};

Flex.defaultProps = {
  width: "100%",
  height: "",
  margin: "",
  padding: "",
  border: "none",
  gap: "",
  position: "static",
  trbl: ["", "", "", ""],
  fd: "row",
  jc: "center",
  ai: "center",
  bg: "#666",
};

const FlexDiv = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border: ${props => props.border};
  gap: ${props => props.gap};
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
`;

export default Flex;
