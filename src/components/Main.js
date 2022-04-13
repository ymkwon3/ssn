import React from "react";
import Flex from "../elements/Flex";
import Timer from "./Timer";

import Rank from "./Rank";
import Permit from "../shared/Permit";
import Text from "../elements/Text";

const Main = props => {
  
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
          <Text fontSize="24px">총"{props.userinfo?.totalTime}"시간 달려왔습니다!</Text>
        </Flex>
        <Flex
          width="1000px"
          height="300px"
          gap="20px"
          bg="#323542"
          zIndex="1"
          boxS="rgba(0, 0, 0, 0.2) 0px 5px 10px;"
        >
          <Rank></Rank>
          <Rank></Rank>
          <Rank></Rank>
        </Flex>
      </Flex>
  );
};

export default Main;
