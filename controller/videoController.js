// Router의 callback 함수
export const home = (req, res) => {
  return res.send("Home");
};
export const search = (req, res) => {
  return res.send("Search");
};
export const videos = (req, res) => {
  return res.send("Search");
};
export const upload = (req, res) => {
  return res.send("Upload Video");
};
export const videoDetail = (req, res) => {
  return res.send("Video Detail");
};
export const editVideo = (req, res) => {
  return res.send("Edit Video");
};
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
