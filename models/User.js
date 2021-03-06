import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId, //Video Object의 ID
      ref: "Video", //Video model
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, //Comment Object의 ID
      ref: "Comment", //Comment model
    },
  ],
});

// https://www.npmjs.com/package/passport-local-mongoose
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
