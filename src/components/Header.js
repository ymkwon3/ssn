import React from "react";
import Flex from "../elements/Flex";

import Button from "../elements/Button"
import CircleImage from "../elements/CircleImage"
import Input from "../elements/Input"

const Header = props => {
  return (
    <Flex margin="20px auto " padding="10px" jc="space-between" border-bottom="1px solid black">
      <CircleImage></CircleImage>
      <Input
        width="400px"
        height="50px"
        ph={"찾으실 친구를 검색해주세요"}
      ></Input>
      <Button 
        width="200px" 
        height="50px"
        margin="0 -220px 0 0"
      >방명록</Button>
      <Button 
        width="200px" 
        height="50px"
        margin="0 20px 0 0"
      >로그아웃</Button>
    </Flex>
  );
};

export default Header;
