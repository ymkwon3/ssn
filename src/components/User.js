import React from "react";
import CircleImage from "../elements/CircleImage";
import Flex from "../elements/Flex";
import Permit from "../shared/Permit";
import { timeConvert } from "../shared/Time";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Text from "../elements/Text";
import InputLabel from "../elements/InputLabel";
import Button from "../elements/Button";
import Comment from "./Comment";

const User = props => {
  const dispatch = useDispatch();
  const comment_list = useSelector(state => state.user.comment);
  const friend_list = useSelector(state => state.user.friendsinfo);
  const param = useParams().userid;
  const [userId, setUserId] = React.useState("");
  const ref = React.useRef([]);
  const statueRef = React.useRef([]);
  if (userId !== param) {
    setUserId(param);
  }

  let userinfo;
  const writerId = props.userinfo.userId;
  if (userId === writerId) {
    // 사용자의 방명록 페이지일 경우
    userinfo = props.userinfo;
  } else {
    // 친구 방명록 페이지일 경우
    userinfo = friend_list.filter(v => v.userId === userId)[0];
  }

  // 방명록 남기기
  const setComment = () => {
    dispatch(userActions.setCommentMD(userId, ref.current[0].value, writerId));
    ref.current[0].value = "";
  };

  // 상태메세지 업데이트
  const updateStatus = () => {
    dispatch(userActions.setStatusMsgMD(writerId, statueRef.current[0].value));
  };

  React.useEffect(() => {
    // user페이지에서 별도의 이동 없이 보고자 하는 친구를 바꿨을 경우
    dispatch(userActions.getCommentMD(userId));
    
  }, [userId]);

  return (
    <Flex borderR="0" height="100%" fd="column" jc="space-around">
      <Flex
        width="800px"
        height="300px"
        bg="#323542"
        fd="column"
        gap="20px"
        zIndex="1"
        boxS="rgba(0, 0, 0, 0.2) 0px 5px 10px;"
      >
        <Flex>
          <CircleImage src={userinfo?.userImage} margin="0 20px" />
          <Text margin="0 20px" fontSize="24px" fontWeight="bold">
            {userinfo?.nickName}
          </Text>
          <Text margin="0 20px" fontSize="24px" fontWeight="bold">
            {timeConvert(userinfo?.totalTime)}
          </Text>
        </Flex>
        <Flex overflow="scroll" color="#bbb" borderR="10px" bg="#282936" padding="20px" width="80%">{userinfo?.statusMeg}</Flex>
        {userId === writerId ? (
          <Flex gap="20px">
            <InputLabel
              type="text"
              label="상태메시지 남기기"
              width="300px"
              padding="10px"
              fontSize="16px"
              color="#eee"
              bg="#323542"
              ref={statueRef}
            ></InputLabel>
            <Button _onClick={updateStatus} width="100px" height="45px">
              수정
            </Button>
          </Flex>
        ) : null}
      </Flex>
      <Flex
        width="800px"
        fd="column"
        height="500px"
        bg="#323542"
        zIndex="1"
        jc="space-around"
        boxS="rgba(0, 0, 0, 0.2) 0px 5px 10px;"
        padding="10px"
      >
        <Flex bg="transparent" height="50px" jc="space-around">
          <InputLabel
            type="text"
            label="방명록 남기기"
            width="70%"
            padding="10px"
            fontSize="16px"
            color="#eee"
            bg="#323542"
            ref={ref}
          ></InputLabel>
          <Button _onClick={setComment} width="100px" height="45px">
            응원하기
          </Button>
        </Flex>
        <Flex
          bg="transparent"
          height="400px"
          fd="column"
          jc="start"
          gap="20px"
          overflow="scroll"
        >
          {comment_list?.map((v, i) => (
            <Comment key={v.id} {...v}></Comment>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default User;
