import React from "react";
import Flex from "../elements/Flex";
import Timer from "./Timer";

import Rank from "./Rank";
import Permit from "../shared/Permit";

const Main = props => {
  return (
    <Permit toLogin={props.userinfo ? false : true}>
      <Flex border="2px solid blue" height="100%" fd="column" jc="space-around">
        <Timer></Timer>
        <Flex border="2px solid purple">총공부시간 / 어제 몇시간 했네~</Flex>
        <Flex border="2px solid orange">
          <Rank></Rank>
          <Rank></Rank>
          <Rank></Rank>
        </Flex>
      </Flex>
    </Permit>
  );
};

export default Main;
