const getSession = () => {
  return sessionStorage.getItem('token');
}

const setSession = (token) => {
  sessionStorage.setItem('token', token);
}

const removeSession = () => {
  sessionStorage.removeItem('token');
}

const isSession = () => {
  return sessionStorage.getItem('token') ? true : false;
}

// const getCookie = (token) => {
//   let value = `; ${document.cookie}`;
//   let parts = value.split(`; ${token}=`);

//   if(parts.length === 2) {
//     return parts.pop().split(";").shift();
//   }
// }

// const setCookie = (token, exp=5) => {
//   let date = new Date();
//   date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
//   document.cookie = `token=${token};expires=${date.toUTCString()};path=/`
// }

// const deleteCookie = () => {
//   document.cookie = `token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
// }


export {getSession, setSession, isSession, removeSession};