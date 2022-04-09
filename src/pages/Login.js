import React from "react";

import Flex from "../elements/Flex";
import Input from "../elements/Input";
import Button from "../elements/Button";

const Login = props => {
  return (
    <>
      <Flex fd="column" border="2px solid black" width="400px" height="400px" gap="50px">
        
        <Input
          ph={"아이디를 입력해 주세요!"}
          label={"ID"}
        ></Input>
        <Input
          
        ></Input>
        <Flex>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
