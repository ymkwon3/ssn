import React from "react";

import Flex from "../elements/Flex";
import Input from "../elements/Input";
import Button from "../elements/Button";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = props => {
  const dispatch = useDispatch();
  const loginBtn = () => {
    dispatch(userActions.loginMD("id", "pwd"));
  }

  return (
    <>
      <Flex fd="column" border="2px solid black" width="400px" height="400px" gap="50px">
        
        <Input
          ph={"아이디를 입력해 주세요!"}
          label={"ID"}
        ></Input>
        <Input
          ph={"비밀번호를 입력해 주세요!"}
          label={"PW"}
        ></Input>
        <Flex margin="4px" padding="4px">
          <Button _onClick={() => loginBtn()}>로그인</Button>
          <Button>회원가입</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
