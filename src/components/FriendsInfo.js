import React from "react";

import axios from "axios";
import CircleImage from "../elements/CircleImage";
import {RESP} from "../shared/response"

const FriendsInfo = props => {
    const {userinfo} = props;
    const mockData = RESP.USER.result[userinfo];

    return (
        <CircleImage
        />
    );
};

export default FriendsInfo;