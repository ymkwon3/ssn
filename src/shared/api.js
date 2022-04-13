import axios from "axios";
import { isSession, setSession } from "./Session";
import { getSession } from "./Session";
import moment from "moment";

const URL = "http://3.34.129.39";
// const URL = "http://54.180.90.16";

const h = () => {
  return { Authorization: `Bearer ${getSession()}` };
};

// 회원가입
const post_signUp = async (id, pwd, name) => {
  await axios
    .post(`${URL}/api/signup`, {
      userId: id,
      nickName: name,
      password: pwd,
      passwordCheck: pwd,
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return { error: "회원가입 실패" };
};

// 로그인
const post_login = async (id, pwd) => {
  const result = await axios
    .post(`${URL}/api/login`, { userId: id, password: pwd })
    .then(res => {
      setSession(res.data.token);
      const userinfo = res.data.userinfo;

      return userinfo;
    })
    .catch(err => {
      console.log(err);
    });

  return result;
};

// 세션로그인
const get_autoLogin = async () => {
  const headers = h();
  const result = await axios
    .get(`${URL}/api/islogin`, { headers })
    .then(res => {
      const userinfo = res.data.user;
      return userinfo;
    })
    .catch(err => {
      console.log(err);
    });

  return result;
};

// 친구정보 가져오기
const get_friend = async userId => {
  const headers = h();
  const result = await axios
    .get(`${URL}/api/${userId}/getfollows`, { headers })
    .then(res => {
      const friendList = res.data;
      return friendList;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

// 친구추가
const post_addFriend = async (userId, friendId) => {
  const headers = h();
  const result = await axios
    .post(`${URL}/api/searchfollow`, { userId, friendId }, { headers })
    .then(res => {
      if (res.data.msg === "추가완료") return true;
    })
    .catch(err => {
      console.log(err);
    });
  return result ? true : false;
};

// 아이디 중복확인
const post_idCheck = async userId => {
  const result = await axios
    .post(`${URL}/api/idCheck`, { userId })
    .then(res => {
      const result = res.data.result === "true" ? true : false;
      return result;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

// 닉네임 중복확인
const post_nameCheck = async (userId) => {
  const result = await axios
    .post(`${URL}/api/nickCheck`, { userId })
    .then(res => {
      const result = res.data.result === "true" ? true : false;
      return result;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};


// 공부시작
const post_checkIn = async (userId, startTime) => {
  const headers = h();
  const result = await axios
    .post(`${URL}/api/${userId}/start`, { userId, startTime }, { headers })
    .then(res => {
      return res.data.msg;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

// 공부종료
const post_checkOut = async (userId, endTime) => {
  const headers = h();
  const result = await axios
    .post(`${URL}/api/${userId}/end`, { userId, endTime }, { headers })
    .then(res => {
      return res.data.totalTime;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

// 방명록 가져오기
const get_comment = async (userId) => {
  const headers = h();
  const result = await axios
    .get(`${URL}/api/${userId}/comments`, { headers })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

// 방명록 등록
const post_comment = async (userId, date, content, writer) => {
  const headers = h();
  
  const result = await axios
    .post(`${URL}/api/${userId}/comments`, { userId, date, content, writer }, { headers })
    .then(res => {
      return res.data.comment;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

const api = {
  post_signUp,
  post_login,
  get_friend,
  post_idCheck,
  post_nameCheck,
  post_addFriend,
  post_checkIn,
  post_checkOut,
  get_autoLogin,
  get_comment,
  post_comment
};

export { api };
