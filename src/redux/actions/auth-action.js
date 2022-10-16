import { LOGOUT_AUTH, AUTH_ME } from "../types";

export const getMeAction = (data) => {
  console.log(data, "  data")
  return {
    type: AUTH_ME,
    payload: {data}
  }
}

export const logoutAction = () => {
  return {
    type: LOGOUT_AUTH,
  }
}