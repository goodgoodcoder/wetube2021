import passport from "passport";
import routes from "./routes";
import User from "./models/User";
import GithubStrategy from "passport-github";
import { githubLoginCallback } from "./controller/userController";

// Local
passport.use(User.createStrategy()); // passport.use(new LocalStrategy(User.authenticate())); 와 동일
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Gibhub
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
); // http://www.passportjs.org/packages/passport-github/
