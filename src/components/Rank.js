import React from "react";
import CircleImage from "../elements/CircleImage";
import Flex from "../elements/Flex";

const Rank = props => {
  return (
    <Flex fd="column">
      <div>왕관, 순위 이미지</div>
      <CircleImage></CircleImage>
      <div>유저아이디</div>
      <div>총 시간</div>
    </Flex>
  );
};

export default Rank;
