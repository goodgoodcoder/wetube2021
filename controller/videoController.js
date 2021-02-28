import routes from "../routes";
import Video from "../models/Video";

// Router의 callback 함수
export const home = async (req, res) => {
  try {
    const videos = await Video.find({}); // db의 Video를 모두 불러옴
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  try {
    const videos = await Video.find({}); // db의 Video를 모두 불러옴
    res.render("search", { pageTitle: "Search", searchingBy, videos });
  } catch (error) {
    console.log(error);
    res.render("search", { pageTitle: "Search", searchingBy, videos: [] });
  }
};
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};
export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "Video Detail" });
};
export const editVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "Edti Video" });
};
export const deleteVideo = (req, res) => {
  res.render("deleteVideo", { pageTitle: "Delete Video" });
};
