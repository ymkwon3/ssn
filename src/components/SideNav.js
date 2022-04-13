import React from "react";
import Flex from "../elements/Flex";

import { useSelector } from "react-redux";
import CircleImage from "../elements/CircleImage";
import FriendsInfo from "./FriendsInfo";

const SideNav = props => {
  const friendsinfo = useSelector(state => state.user.friendsinfo);
  return (
    <Flex
      fd="column"
      width={props.isMenu ? "400px" : "0"}
      height="100%"
      jc="flex-start"
      bg="#323542"
      borderR="0"
      padding="20px 0"
      zIndex="10"
      boxS="rgba(0, 0, 0, 0.2) 0px 5px 10px;"
    >
      {friendsinfo?.map((v, i) => (
        <FriendsInfo key={v.userId} {...v} isMenu={props.isMenu}></FriendsInfo>
      ))}
    </Flex>
  );
};

export default SideNav;
