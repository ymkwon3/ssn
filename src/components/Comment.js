import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

import Flex from "../elements/Flex";
import Text from "../elements/Text";
import moment from "moment";
import "moment/locale/ko";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../shared/api";
import { actionCreators as userActions } from "../redux/modules/user";

const Comment = props => {
  const dispatch = useDispatch();
  const { writer, content, date, userId, commentId, nickName } = props;
  const user = useSelector(state => state.user.userinfo).userId;
  let own = false;
  // 현재 접속자, 작성자, 방명록 주인

  if (user === writer || user === userId) {
    own = true;
  }

  const deleteComment = () => {
    dispatch(userActions.deleteCommentMD(userId, commentId));
  };

  return (
    <Flex
      width="90%"
      bg="transparent"
      borderBottom="1px solid #282936"
      borderR="0"
      padding="10px 5px"
      jc="space-between"
    >
      <Text width="100px" textAlign="center" fontWeight="bold">
        {nickName}
      </Text>
      <Text width="500px">{content}</Text>
      <Text width="100px" textAlign="center">
        {moment(date).fromNow()}
      </Text>
      {own ? (
        <RiDeleteBin5Fill
          onClick={deleteComment}
          className="hoverEvent"
          color="ff5040"
          size={20}
        ></RiDeleteBin5Fill>
      ) : null}
    </Flex>
  );
};

export default Comment;
