import React from "react";
import CircleImage from "../elements/CircleImage";
import Flex from "../elements/Flex";

const User = props => {
  return (
    <Flex border="2px solid yellow" height="100%" fd="column" jc="space-around">
      <Flex border="2px solid navy"><CircleImage/> 유저 닉네임 / 총공부시간</Flex>
      <Flex border="2px solid green">방명록 작성 input 들어가야함</Flex>
      <Flex border="2px solid white">uid에 해당하는 방명록 리스트들이 나와야함</Flex>
    </Flex>
  );
};

export default User;
