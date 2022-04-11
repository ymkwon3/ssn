import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";

import Login from "../pages/Login";

import Flex from "../elements/Flex";
import Header from "../components/Header";
import Main from "../components/Main";
import Permit from "./Permit";
import User from "../components/User";
import SideNav from "../components/SideNav";
import { actionCreators as userActions } from "../redux/modules/user";
import SignUp from "../pages/SignUp";

function App() {
  const dispatch = useDispatch();
  // 나중에 로그인 관련 세션?이 추가되면 그쪽으로 바꿔야 될듯 -영민
  const userinfo = useSelector(state => state.user.userinfo);

  return (
    <Flex fd="column" width="100vw" height="100vh">
      <ConnectedRouter history={history}>
        <Flex width="100%" height="100%" fd="column" jc="start" ai="start">
          <Permit>
            {/*Header*/}
            <Header></Header>
          </Permit>

          <Flex height="100%">
            <Permit>
              {/*SideNav*/}
              <SideNav></SideNav>
            </Permit>

            {/*Content*/}
            <Route
              path="/"
              exact
              component={() => <Main userinfo={userinfo} />}
            ></Route>
            <Route
              path="/userid"
              exact
              component={() => <User userinfo={userinfo} />}
            ></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
            {/* <Main/> */}
          </Flex>
        </Flex>
      </ConnectedRouter>
    </Flex>
  );
}

export default App;


  // const [selectedFile, setSelectedFile] = React.useState(null);

  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   console.log(selectedFile);
  //   formData.append("selectedFile", selectedFile);
  //   formData.append("title", "제목");
  //   for (var key of formData.entries()) {
  //     console.log(key[0] + ", " + key[1]);
  //   }
  //   try {
  //     const response = await axios({
  //       method: "post",
  //       url: "http://127.0.0.1:3001/board",
  //       data: formData,
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleFileSelect = event => {
  //   console.log(event.target.files[0]);
  //   setSelectedFile(event.target.files[0]);
  // };

  // return (
  //   <>
  //     <input type="file" onChange={handleFileSelect} />
  //     <button onClick={e => handleSubmit(e)}>123</button>
  //   </>
  // );