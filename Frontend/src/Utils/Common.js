export const getUserId = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  if (user._id) return user._id;
  else return null;
};
export const getUser = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  if (user) return user;
  else return null;
};

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  // console.log(ca);
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      // console.log(c.substring(name.length, c.length));
      return true;
    }
  }
  console.log("null");
  return false;
};

export const isSetToken = () => {
  return localStorage.getItem("token") ? true : false;
};
export const getToken = () => {
  return localStorage.getItem("token") ? localStorage.getItem("token") : null;
};

export const setUserSession = (token, data) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userData", JSON.stringify(data));
};

export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
};

export const setSpeechRate = (speech_rate) => {
  localStorage.setItem("speech_rate", speech_rate);
};

export const getSpeechRate = () => {
  return localStorage.getItem("speech_rate") ? true : false;
};
