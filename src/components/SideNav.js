import React from "react";
import Flex from "../elements/Flex";

import { useSelector } from "react-redux";
import CircleImage from "../elements/CircleImage";
import FriendsInfo from "./FriendsInfo";

const SideNav = props => {
  const friendsinfo = useSelector(state => state.user.friendsinfo);
  return (
    <Flex fd="column" width="200px" height="100%" border="1px solid red">
      {friendsinfo.map((v, i) => (
        <FriendsInfo key={v.userid} {...v}></FriendsInfo>
      ))}
    </Flex>
  );
};

export default SideNav;
