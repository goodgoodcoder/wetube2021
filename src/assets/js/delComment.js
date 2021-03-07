import axios from "axios";
const commentForm = document.getElementById("jsAddComment");
let deleteCommentBtn, commentList, commentsCount;

const getCommentCount = () => {
  const commentsString = commentsCount.innerHTML;
  const commentsInt = parseInt(commentsString);
  return commentsInt;
};

const decreaseCommentCount = () => {
  const commentNumber = getCommentCount();
  commentsCount.innerHTML = commentNumber - 1;
};

const destroyComment = (element) => {
  const li = element.parentNode;
  commentList.removeChild(li);
};

const deleteComment = async (event) => {
  const { target } = event;
  const btnParent = target.parentNode;
  const commentId = btnParent.getAttribute("data-id");
  const response = await axios({
    method: "post",
    url: `/api/${commentId}/delete-comment`,
  });
  if (response.status === 200) {
    decreaseCommentCount();
    destroyComment(btnParent);
  }
};

function init() {
  deleteCommentBtn = document.querySelectorAll(".canDelete");
  commentList = document.getElementById("jsCommentList");
  commentsCount = document.getElementById("jsCommentNumber");
  Array.from(deleteCommentBtn).forEach((button) =>
    button.addEventListener("click", deleteComment)
  );
}

if (commentForm) {
  init();
}
