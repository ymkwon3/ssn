import React from "react";
import Flex from "../elements/Flex";
import { history } from "../redux/configureStore";

import Button from "../elements/Button"
import CircleImage from "../elements/CircleImage"
import Input from "../elements/Input"

const Header = props => {
  return (
<<<<<<< HEAD
    <Flex width="100%" height="100px" border="1px solid black">
      <button onClick={() => history.push("/")}>home</button>
      <button onClick={() => history.push("/userid")}>toUserID</button>
=======
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
>>>>>>> jinho
    </Flex>
  );
};

export default Header;
