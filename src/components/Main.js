import React from "react";
import Flex from "../elements/Flex";
import Timer from "./Timer";
import { timeConvert } from "../shared/Time";

import Rank from "./Rank";
import Text from "../elements/Text";
import { useSelector } from "react-redux";

const Main = props => {
  const userinfo = useSelector(state => state.user.userinfo);
  let list = useSelector(state => state.user.friendsinfo);
  let rank_list = list?.map(v => v);
  if (rank_list) {
    rank_list = [...rank_list, userinfo];
    rank_list.sort((a, b) => b.totalTime - a.totalTime);
  }
  return (
    <Flex height="100%" borderR="0" fd="column" jc="space-around">
      <Timer></Timer>

      <Flex
        width="600px"
        height="100px"
        fd="column"
        gap="20px"
        bg="#323542"
        zIndex="1"
        boxS="rgba(0, 0, 0, 0.2) 0px 5px 10px;"
      >
        <Text fontSize="24px">
          총 {timeConvert(props.userinfo?.totalTime)} 달려왔습니다!
        </Text>
      </Flex>
      <Flex
        width="1000px"
        height="300px"
        gap="20px"
        bg="#323542"
        zIndex="1"
        boxS="rgba(0, 0, 0, 0.2) 0px 5px 10px;"
      >
        {rank_list?.length >= 2 ? (
          <Rank {...rank_list[1]} size={120} rank={1}></Rank>
        ) : (
          <Rank size={120} rank={1}></Rank>
        )}
        {rank_list?.length >= 1 ? (
          <Rank {...rank_list[0]} size={140} rank={0}></Rank>
        ) : (
          <Rank size={140} rank={0}></Rank>
        )}
        {rank_list?.length >= 3 ? (
          <Rank {...rank_list[2]} size={100} rank={2}></Rank>
        ) : (
          <Rank size={100} rank={2}></Rank>
        )}
      </Flex>
    </Flex>
  );
};

export default Main;
