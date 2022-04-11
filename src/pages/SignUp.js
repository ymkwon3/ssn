import React from "react";

import Flex from "../elements/Flex";
import Input from "../elements/Input";
import Button from "../elements/Button";
import InputLabel from "../elements/InputLabel";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import Text from "../elements/Text";

const SignUp = props => {
  const dispatch = useDispatch();

  const signUpBtn = () => {
    console.log("회원가입버튼스니펫 딸깍!");
    // dispatch(userActions.signUpMD("id", "pwd", "name"));
  };

  return (
    <>
      <Flex fd="column" width="400px" gap="40px" padding="40px" bg="#0e487a">
        <Text fontSize="20px" fontWeight="bold" userSelect="none">
          회원가입
        </Text>
        <InputLabel
          type="text"
          label="아이디"
          width="60%"
          height="40px"
          padding="10px"
          bg="#0e487a"
        ></InputLabel>
        <InputLabel
          type="text"
          label="아이디"
          width="60%"
          height="40px"
          padding="10px"
          bg="#0e487a"
        ></InputLabel>
        <InputLabel
          type="password"
          label="비밀번호"
          width="60%"
          height="40px"
          padding="10px"
          bg="#0e487a"
        ></InputLabel>
        <InputLabel
          type="password"
          label="비밀번호"
          width="60%"
          height="40px"
          padding="10px"
          bg="#0e487a"
        ></InputLabel>

        <Button
          width="200px"
          bg="#fff"
          color="#0e487a"
          _onClick={() => signUpBtn()}
        >
          회원가입
        </Button>
      </Flex>
    </>
  );
};

export default SignUp;
