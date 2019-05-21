// Maybe put it all in helpers

const login = () => {

}

const logout = () => {
  localStorage.clear();
  // Redirect...
}

const checkAuth = () => {
  const token = localStorage.getItem("token");
  // refresh token
  if (!token) {
    return false
  }
  return true
}

export const authenticationService = {
  login,
  logout,
  checkAuth,
}