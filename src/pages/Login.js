import React from "react";

import Flex from "../elements/Flex";
import Input from "../elements/Input";
import Button from "../elements/Button";
import InputLabel from "../elements/InputLabel";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import Text from "../elements/Text";
import { history } from "../redux/configureStore";

const Login = props => {
  const dispatch = useDispatch();
  const ref = React.useRef([]);

  const loginBtn = () => {
    const id = ref.current[0].value;
    const pwd = ref.current[1].value;
    dispatch(userActions.loginMD("id", "pwd"));
  };

  const signUpBtn = () => {
    history.push("/signup");
  };

  return (
    <>
      <Flex
        fd="column"
        width="400px"
        gap="40px"
        padding="40px"
        border="2px solid #0e487a"
      >
        <Text fontSize="20px" fontWeight="bold" userSelect="none">
          로그인
        </Text>
        <InputLabel
          type="text"
          label="아이디"
          width="60%"
          padding="10px"
          fontSize="16px"
          color="#0e487a"
          bg="#eee"
          ref={ref}
        ></InputLabel>
        <InputLabel
          type="password"
          label="비밀번호"
          width="60%"
          padding="10px"
          fontSize="16px"
          color="#0e487a"
          bg="#eee"
          ref={ref}
        ></InputLabel>

        <Button
          width="200px"
          bg="#0e487a"
          color="#eee"
          height="40px"
          _onClick={() => loginBtn()}
        >
          로그인
        </Button>
        <Button
          width="220px"
          bg="transparent"
          color="#0e487a"
          _onClick={() => signUpBtn()}
        >
          아직도 회원이 아니신가요?
        </Button>
      </Flex>
    </>
  );
};

export default Login;
