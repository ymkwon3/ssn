import React from "react";

import CircleImage from "../elements/CircleImage";
import Text from "../elements/Text";
import Flex from "../elements/Flex";
import { BsDot } from "react-icons/bs";
import { history } from "../redux/configureStore";

const FriendsInfo = props => {

  const friendClick = () => {
    history.push(`/user/${props.userId}`)
  }

  return (
    <Flex jc="flex-start" bg="transparent" padding="0 0 0 60px" 
    borderBottom="1px solid #282936" borderR="0" _onClick={friendClick}>
      <CircleImage src={props.userImage} size="40" />
      {props.connecting === true ? (
        <BsDot color="lightgreen" size={40} />
      ) : (
        <BsDot color="red" size={40} />
      )}
      <Text display={props.isMenu ? "block" : "none"}>
        {props.nickName}
      </Text>
    </Flex>
  );
};

export default FriendsInfo;
