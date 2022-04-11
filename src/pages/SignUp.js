import React from "react";

import Flex from "../elements/Flex";
import Button from "../elements/Button";
import InputLabel from "../elements/InputLabel";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import Text from "../elements/Text";

const SignUp = props => {
  const dispatch = useDispatch();
  const ref = React.useRef([]);
  const [check, setCheck] = React.useState({
    idSubText: null,
    nameSubText: null,
    pwdSubText: null,
    pwdcSubText: null,
  });

  const {idSubText, nameSubText, pwdSubText, pwdcSubText} = check;

  const space_pattern = /\s/g; // 공백 확인 정규표현식

  // 회원가입버튼 이벤트
  const signUpBtn = async() => {
    console.log("회원가입버튼 딸깍!");
    const id = ref.current[0].value;
    const name = ref.current[1].value;
    const pwd = ref.current[2].value;
    const pwdc = ref.current[3].value;

    const isSpace = (id + name + pwd + pwdc).match(space_pattern);

    // 띄워쓰기 혹은 공백 확인
    if (isSpace || !id || !name || !pwd || !pwdc) {
      window.alert("빈 칸 혹은 띄워쓰기가 존재합니다.");
      return;
    }

    // 비밀번호 일치 여부 확인
    if (pwd !== pwdc) {
      setCheck({ ...check, pwdcSubText: "비밀번호가 일치하지 않습니다!" });
      return;
    } else {
      setCheck({ ...check, pwdcSubText: null });
    }

    // 어떠한 조건이 성립이 안됐을때
    if(idSubText || nameSubText || pwdSubText || pwdcSubText){
      window.alert("입력칸을 확인해주세요!");
      return;
    }

    // dispatch(userActions.signUpMD("id", "pwd", "name"));
  };

  // 아이디 중복 확인
  const idCheck = () => {
    // axios 아이디 중복 체크
    const id = ref.current[0].value;
    if (false) setCheck({ ...check, idSubText: "중복된 아이디입니다!" });
    else setCheck({ ...check, idSubText: null });
  };

  // 닉네임 중복 확인
  const nameCheck = () => {
    // axios 닉네임 중복 체크
    const name = ref.current[1].value;
    if (false) setCheck({ ...check, nameSubText: "중복된 닉네임입니다!" });
    else setCheck({ ...check, nameSubText: null });
  };

  // 비밀번호 길이 확인
  const pwdCheck = () => {
    const pwd = ref.current[2].value;
    if (pwd.length < 4) setCheck({ ...check, pwdSubText: "비밀번호 길이는 4자이상!" });
    else setCheck({ ...check, pwdSubText: null });
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
          회원가입
        </Text>
        <InputLabel
          type="text"
          label="아이디"
          width="60%"
          height="40px"
          padding="10px"
          bg="#eee"
          color="#0e487a"
          ref={ref}
          subText={idSubText}
          _onBlur={idCheck}
        ></InputLabel>
        <InputLabel
          type="text"
          label="닉네임"
          width="60%"
          height="40px"
          padding="10px"
          bg="#eee"
          color="#0e487a"
          ref={ref}
          subText={nameSubText}
          _onBlur={nameCheck}
        ></InputLabel>
        <InputLabel
          type="password"
          label="비밀번호"
          width="60%"
          height="40px"
          padding="10px"
          bg="#eee"
          color="#0e487a"
          ref={ref}
          subText={pwdSubText}
          _onBlur={pwdCheck}
        ></InputLabel>
        <InputLabel
          type="password"
          label="비밀번호"
          width="60%"
          height="40px"
          padding="10px"
          bg="#eee"
          color="#0e487a"
          ref={ref}
          subText={pwdcSubText}
        ></InputLabel>

        <Button
          width="200px"
          height="40px"
          bg="#0e487a"
          color="#eee"
          _onClick={() => signUpBtn()}
        >
          회원가입
        </Button>
      </Flex>
    </>
  );
};

export default SignUp;
