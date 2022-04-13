import React from "react";

import Flex from "../elements/Flex";
import Button from "../elements/Button";
import InputLabel from "../elements/InputLabel";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import Text from "../elements/Text";
import { history } from "../redux/configureStore";
import { removeSession } from "../shared/Session";

const Login = props => {
  const dispatch = useDispatch();
  const ref = React.useRef([]);

  const loginBtn = () => {
    const id = ref.current[0].value;
    const pwd = ref.current[1].value;
    dispatch(userActions.loginMD(id, pwd));
  };

  const signUpBtn = () => {
    history.push("/signup");
  };

  React.useEffect(() => {
    removeSession();
  }, [])

  return (
    <>
      <Flex
        fd="column"
        width="400px"
        gap="40px"
        bg="#323542"
        padding="40px"
      boxS="rgba(0, 0, 0, 0.2) 0px 5px 10px;"
      >
        <Text fontSize="24px" fontWeight="bold" userSelect="none">
          로그인
        </Text>
        <InputLabel
          type="text"
          label="아이디"
          width="60%"
          padding="10px"
          fontSize="16px"
          color="#eee"
          bg="#323542"
          ref={ref}
        ></InputLabel>
        <InputLabel
          type="password"
          label="비밀번호"
          width="60%"
          padding="10px"
          fontSize="16px"
          color="#eee"
          bg="#323542"
          ref={ref}
        ></InputLabel>

        <Button
          width="200px"
          height="40px"
          _onClick={() => loginBtn()}
        >
          로그인
        </Button>
        <Button
          width="220px"
          bg="transparent"
          fontSize="14px"
          _onClick={() => signUpBtn()}
        >
          아직도 회원이 아니신가요?
        </Button>
      </Flex>
    </>
  );
};

export default Login;
