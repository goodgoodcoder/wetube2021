// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSSWORD = "/change-password";

// Videos
const VIDEOS = "/";
const VIDEO_DETAIL = "/:id";
const UPLOAD_VIDEO = "/upload";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = ":id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSSWORD,
  videos: VIDEOS,
  upload: UPLOAD_VIDEO,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;