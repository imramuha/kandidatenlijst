const getLocalStorage = () => {
  return 'bearer' + localStorage.getItem('token');
}

const logout = () => {
  localStorage.clear();
  // Redirect...
}

// BIj hide request
const getIdFromProfile = (id) => {
  return id;
}

const sendTokenWithHeader = () => {

}

module.exports = {
  getLocalStorage,
  logout,
  getIdFromProfile,
  sendTokenWithHeader,
}