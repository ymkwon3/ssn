import React from "react";

import Flex from "../elements/Flex";
import Button from "../elements/Button";
import InputLabel from "../elements/InputLabel";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import Text from "../elements/Text";
import axios from "axios";
import { api } from "../shared/api";
import { removeSession } from "../shared/Session";

const SignUp = props => {
  const dispatch = useDispatch();
  const ref = React.useRef([]);
  const [checks, setCheck] = React.useState({
    idSubText: null,
    nameSubText: null,
    pwdSubText: null,
    pwdcSubText: null,
  });

  React.useEffect(() => {
    removeSession();
  }, [])

  const { idSubText, nameSubText, pwdSubText, pwdcSubText } = checks;

  const space_pattern = /\s/g; // 공백 확인 정규표현식

  // 회원가입버튼 이벤트
  const signUpBtn = async () => {
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
      setCheck({ ...checks, pwdcSubText: "비밀번호가 일치하지 않습니다!" });
      return;
    } else {
      setCheck({ ...checks, pwdcSubText: null });
    }

    // 어떠한 조건이 성립이 안됐을때
    if (idSubText || nameSubText || pwdSubText || pwdcSubText) {
      window.alert("입력칸을 확인해주세요!");
      return;
    }

    dispatch(userActions.signUpMD(id, pwd, name));
  };

  // 아이디 중복 확인
  const idCheck = async () => {
    // axios 아이디 중복 체크
    const id = ref.current[0].value;
    let check = false;
    api.post_idCheck(id).then(res => {
      check = res;
      if (!check) setCheck({ ...checks, idSubText: "중복된 아이디입니다!" });
      else setCheck({ ...checks, idSubText: null });
    });
  };

  // 닉네임 중복 확인
  const nameCheck = async () => {
    // axios 닉네임 중복 체크
    const name = ref.current[1].value;
    let check = false;
    api.post_nameCheck(name).then(res => {
      check = res;
      if (!check) setCheck({ ...checks, nameSubText: "중복된 닉네임입니다!" });
      else setCheck({ ...checks, nameSubText: null });
    });
  };


  // 비밀번호 길이 확인
  const pwdCheck = () => {
    const pwd = ref.current[2].value;
    if (pwd.length < 4)
      setCheck({ ...checks, pwdSubText: "비밀번호 길이는 4자이상!" });
    else setCheck({ ...checks, pwdSubText: null });
  };

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
          회원가입
        </Text>
        <InputLabel
          type="text"
          label="아이디"
          width="60%"
          height="40px"
          padding="10px"
          color="#eee"
          bg="#323542"
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
          color="#eee"
          bg="#323542"
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
          color="#eee"
          bg="#323542"
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
          color="#eee"
          bg="#323542"
          ref={ref}
          subText={pwdcSubText}
        ></InputLabel>

        <Button width="200px" height="40px" _onClick={() => signUpBtn()}>
          회원가입
        </Button>
      </Flex>
    </>
  );
};

export default SignUp;
