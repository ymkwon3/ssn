import React from "react";
import CircleImage from "../elements/CircleImage";
import Flex from "../elements/Flex";
import Text from "../elements/Text";
import { timeConvert } from "../shared/Time";
import { AiTwotoneCrown } from "react-icons/ai";
import { GiLaurelCrown } from "react-icons/gi";

const Rank = props => {
  const { nickName, userImage, totalTime, size, rank } = props;

  const icon_list = [
    <GiLaurelCrown size={size * 0.5} color="gold"></GiLaurelCrown>,
    <AiTwotoneCrown size={size * 0.5} color="silver"></AiTwotoneCrown>,
    <AiTwotoneCrown size={size * 0.5} color="#CD7F32"></AiTwotoneCrown>,
  ];

  return (
    <Flex fd="column" bg="transparent">
      {icon_list[rank]}
      <CircleImage size={size} src={userImage}></CircleImage>
      <Text fontSize="24px" fontWeight="bold">
        {nickName}
      </Text>
      <Text fontSize="18px">{timeConvert(totalTime)}</Text>
    </Flex>
  );
};

Rank.defaultProps = {
  nickName: "친구",
  userImage: "https://upload.wikimedia.org/wikipedia/ko/a/a5/%EC%B9%9C%EA%B5%AC.jpg",
  totalTime: 0,
}

export default Rank;
