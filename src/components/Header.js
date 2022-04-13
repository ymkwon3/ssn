import React from "react";
import Flex from "../elements/Flex";
import { history } from "../redux/configureStore";

import Button from "../elements/Button";
import InputIcon from "../elements/InputIcon";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Text from "../elements/Text";
import { MdPersonAdd } from "react-icons/md";
import { api } from "../shared/api";

const Header = props => {
  const dispatch = useDispatch();
  const [path, setPath] = React.useState(history.location.pathname);
  const [addFriend, setAddFriend] = React.useState("");
  
  const userBtn = () => {
    // 방명록 버튼 클릭 시 메인 버튼으로 변경
    if (path === "/") {
      history.push(`/user/${props.userId}`);
      setPath(`/user`);
    } else {
      history.push(`/`);
      setPath(`/`);
    }
  };
  
  const logoutBtn = () => {
    dispatch(userActions.logout());
    history.replace("/login");
  };

  const addFriendBtn = async () => {
    api.post_addFriend(props.userId, addFriend).then((res1) => {
      // 친구 추가 확인 메시지 추가하기
      if(res1) {
        api.get_friend(props.userId).then((res2) => {
          dispatch(userActions.setFriend(res2));
        })
        window.alert("친구 추가가 완료되었습니다!")
        setAddFriend("");
      }else {
        window.alert("친구 없습니다!")
      }
    })
  };

  return (
    <Flex
      jc="space-around"
      bg="#323542"
      height="60px"
      borderR="0"
      zIndex="1"
      boxS="rgba(0, 0, 0, 0.2) 0px 5px 10px;"
    >
      <button onClick={props._isMenu}>대충메뉴버튼</button>
      <Text color="#eee">{props.nickName}님, 화이팅!</Text>
      <Flex width="500px" bg="#323542">
        <MdPersonAdd style={{ margin: "0 15px 0 0" }} color="#eee" size="30" />
        <InputIcon
          width="85px"
          height="40px"
          bg="#323542"
          padding="10px"
          ph={"친구추가"}
          value={addFriend}
          _onChange={setAddFriend}
          _onKeyDown={addFriendBtn}
        ></InputIcon>
      </Flex>
      <Flex width="200px" gap="10px">
        <Button height="40px" _onClick={userBtn}>
          {path === "/" ? "방명록" : "메인"}
        </Button>
        <Button height="40px" _onClick={logoutBtn}>
          로그아웃
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
