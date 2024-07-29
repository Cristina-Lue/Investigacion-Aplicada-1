"use strict";

document.getElementById('commentForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var commentInput = document.getElementById('commentInput');
  var commentText = commentInput.value.trim();

  if (commentText) {
    addComment(commentText);
    commentInput.value = '';
  }
});

function addComment(text) {
  var commentContainer = document.createElement('div');
  commentContainer.classList.add('comment');
  var commentParagraph = document.createElement('p');
  commentParagraph.textContent = text;
  commentContainer.appendChild(commentParagraph);
  document.getElementById('commentsContainer').appendChild(commentContainer);
}
//# sourceMappingURL=comenfuncion.dev.js.map
