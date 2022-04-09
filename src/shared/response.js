export const RESP = {
  // 출석체크 종료 버튼을 눌렀을 때, starttime이랑 현재 시간을 고려해서 뺀 값만 넘겨주도록?
  LOGIN: {
    ok: true,
    result: {
      result: "success",
      userinfo: {
        userid: "testid1",
        nickname: "testname1",
        userimage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20IORmNDNcRa_FOEBKPVI3ano6fLVIiJB_g&usqp=CAU",
        friends: ["testid2", "testid3"],
        totaltime: 1000,
        yestime: 120,
        starttime: "2022-04-09 10:00:00",
        connecting: false,
      },
    },
  },
  USER: {
    ok: true,
    result: {
      testid1: {
        userid: "testid1",
        nickname: "testname1",
        userimage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20IORmNDNcRa_FOEBKPVI3ano6fLVIiJB_g&usqp=CAU",
        friends: ["testid2", "testid3"],
        totaltime: 1000,
        starttime: "2022-04-09 10:00:00",
        connecting: false,
      },
      testid2: {
        userid: "testid2",
        nickname: "testname2",
        user_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20IORmNDNcRa_FOEBKPVI3ano6fLVIiJB_g&usqp=CAU",
        friends: ["testid1"],
        totaltime: 1000,
        yestime: 120,
        starttime: "2022-04-09 10:00:00",
        connecting: false,
      },
      testid3: {
        userid: "testid3",
        nickname: "testname3",
        user_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20IORmNDNcRa_FOEBKPVI3ano6fLVIiJB_g&usqp=CAU",
        friends: ["testid2"],
        totaltime: 1000,
        yestime: 120,
        starttime: "2022-04-09 10:00:00",
        connecting: false,
      },
    },
  },
};
