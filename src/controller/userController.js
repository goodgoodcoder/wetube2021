import passport from "passport";
import routes from "../routes";
import User from "../models/User";

// Router의 callback 함수
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

// Github Login
export const githubLogin = passport.authenticate("github"); // github 인증
export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, name, email, avatar_url },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      // 이미 wetube에 github 계정과 동일한 email로 가입한 경우, github id를 추가
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    // 신규가입
    const newUser = await User.create({
      name,
      email,
      avatarUrl: avatar_url,
      githubId: id,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
}; // 인증 후, github에서 돌아오는 callback
export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
}; // callback 받은 후, 성공 시, home으로 이동

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("videos");
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate("videos");
    console.log(user);
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit Profile" });
};
export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    user: { id, avatarUrl },
    file,
  } = req;
  try {
    await User.findByIdAndUpdate(id, {
      name,
      email,
      avatarUrl: file ? file.location : avatarUrl,
    });
    res.redirect(routes.me);
  } catch (error) {
    res.redirect(routes.editProfile);
  }
};
export const getChangePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};
export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 },
  } = req;
  try {
    if (newPassword !== newPassword1) {
      res.status(400);
      res.redirect(`/users/${routes.changePassword}`);
      return;
    }
    await req.user.changePassword(oldPassword, newPassword);
    res.redirect(routes.me);
  } catch (error) {
    res.status(400);
    res.redirect(`/users/${routes.changePassword}`);
  }
};
