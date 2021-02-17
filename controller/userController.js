// Router의 callback 함수
export const join = (req, res) => {
  return res.send("Join");
};
export const login = (req, res) => {
  return res.send("Login");
};
export const logout = (req, res) => {
  return res.send("Logout");
};
export const users = (req, res) => {
  return res.send("Users");
};
export const userDetail = (req, res) => {
  return res.send("User Detail");
};
export const editProfile = (req, res) => {
  return res.send("Edit Profile");
};
export const changePassword = (req, res) => {
  return res.send("Change Password");
};
