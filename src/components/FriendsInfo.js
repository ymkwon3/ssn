import React from "react";

import axios from "axios";
import CircleImage from "../elements/CircleImage";
import Text from "../elements/Text";
import {RESP} from "../shared/response"
import { useSelector } from "react-redux";
import CntIcon from "../elements/CntIcon";
import Flex from "../elements/Flex"

const FriendsInfo = props => {
    return (
        <React.Fragment>
            <Flex jc="flex-start">
                <CircleImage src={props.user_image} size="40"/>
                
                <Text 
                    key={props.nickname} 
                    fS="10px" 
                    color="black" 
                    margin="0 10px 0 0" 
                >
                    {props.nickname} 
                </Text>
                {props.connecting === true
                ? <CntIcon key={props.connecting} />
                : null
                }
                
            </Flex>
        </React.Fragment>
    );
};

export default FriendsInfo;