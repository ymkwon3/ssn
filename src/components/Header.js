import React from "react";
import Flex from "../elements/Flex";
import { history } from "../redux/configureStore";

import Button from "../elements/Button"
import CircleImage from "../elements/CircleImage"
import Input from "../elements/Input"
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";


const Header = props => {
  const dispatch = useDispatch();
  const logoutBtn = () => {
    dispatch(userActions.logout());
    history.push("/login")
  }

  return (
    <Flex jc="space-between" border="1px solid black">
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
        _onClick={() => history.push("/userid")}
      >방명록</Button>
      <Button 
        width="200px" 
        height="50px"
        margin="0 20px 0 0"
        _onClick={() => logoutBtn()}
      >로그아웃</Button>
    </Flex>
  );
};

export default Header;
