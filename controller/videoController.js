import routes from "../routes";
import Video from "../models/Video";

// Router의 callback 함수
export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 }); // db의 Video를 모두 불러옴
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
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
    res.render("search", { pageTitle: "Search", searchingBy, videos: [] });
  }
};
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  // db에 새로운 파일을 생성(저장)
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  res.redirect(routes.videoDetail(newVideo.id));
};
export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findByIdAndUpdate(id, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
