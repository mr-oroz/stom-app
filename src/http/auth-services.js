import instance from "./settings";

const getMe = () => {
  return instance.get('/auth/users/me')
}

const register = (data) => {
  return instance.post('/auth/users/', data)
}
const signIn = (data) => {
  return instance.post('/auth/token/login', data)
}
const logout = () => {
  return instance.get('/auth/token/logout')
}

export const authServices = {
  getMe,
  register,
  signIn,
  logout
};