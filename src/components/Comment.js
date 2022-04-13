import React from "react";
import Flex from "../elements/Flex";
import Text from "../elements/Text";
import moment from "moment";
import "moment/locale/ko"

const Comment = props => {
  const {writer, content, date, userId} = props;

  return (
    <Flex
      width="90%"
      height="60px"
      bg="transparent"
      borderBottom="1px solid #282936"
      borderR="0"
      padding="10px 5px"
      jc="space-between"
    >
      <Text width="100px" textAlign="center">{writer}</Text>
      <Text width="500px">{content}</Text>
      <Text width="100px" textAlign="center">{moment(date).fromNow()}</Text>
    </Flex>
  );
};

export default Comment;
