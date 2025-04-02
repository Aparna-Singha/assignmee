import AUTH_CONSTANT from "../constants/auth";

export function userLoggedIn() {
  const token = localStorage.getItem(AUTH_CONSTANT);
  return !!token;
}

export async function userLogin({ email, password, creatorMode }) {
  if (!email || !password || !creatorMode) {
    alert("Please fill in all fields");
    return;
  }

  const successCallback = function (token) {
    localStorage.setItem(AUTH_CONSTANT, token);
  };

  successCallback("test-token");
  return true;
}

export async function userRegister({ email, password, creatorMode }) {
  if (!email || !password || !creatorMode) {
    alert("Please fill in all fields");
    return;
  }

  const successCallback = function (token) {
    localStorage.setItem(AUTH_CONSTANT, token);
  };

  successCallback("test-token");
  return true;
}
