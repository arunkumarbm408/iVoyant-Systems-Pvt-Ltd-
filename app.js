function addComment() {
    var commentText = document.getElementById("commentInput").value;
    if (commentText.trim() !== "") {
        var commentList = document.getElementById("comment-list");

        var commentItem = document.createElement("li");
        commentItem.className = "comment";
        commentItem.innerHTML = "<p>" + commentText + "</p>" +
            "<button onclick='addReply(this)'>Reply</button>" +
            "<button onclick='editComment(this)'>Edit</button>" +
            "<button onclick='deleteComment(this)'>Delete</button>";

        commentList.appendChild(commentItem);

        document.getElementById("commentInput").value = "";
    }
}

function addReply(button) {

    var replyList = button.parentNode.querySelector(".reply-list");
    

    if (!replyList) {
        replyList = document.createElement("ul");
        replyList.className = "reply-list";
        button.parentNode.appendChild(replyList);
    }

    var replyItem = document.createElement("li");
    replyItem.className = "reply";

    var textarea = document.createElement("textarea");
    textarea.placeholder = "Enter your reply...";
    replyItem.appendChild(textarea);
 
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.onclick = function () {
        
        var replyText = textarea.value.trim();
        if (replyText !== "") {
            var replyTextElement = document.createElement("p");
            replyTextElement.innerText = replyText;
            replyItem.insertBefore(replyTextElement, submitButton);

            replyItem.removeChild(textarea);
            replyItem.removeChild(submitButton);
            replyItem.removeChild(replyButton);
            replyItem.innerHTML += "<button onclick='addReply(this)'>Reply</button>" +
        "<button onclick='editReply(this)'>Edit</button>" +
        "<button onclick='deleteReply(this)'>Delete</button>";

    replyList.appendChild(replyItem);

    var commentItem = button.parentNode;
    commentItem.appendChild(replyList);
  
        }
    };
    var replyButton = document.createElement("button");
    replyButton.textContent = "Reply";
    replyButton.onclick = function () {
        
        textarea.style.display = "block";
        submitButton.style.display = "block";
        replyButton.style.display = "none";
        
    };
    
    replyItem.appendChild(submitButton);

    replyList.appendChild(replyItem);
    replyButton.style.display = "none"
    replyItem.appendChild(replyButton);
    
}

    function editComment(button) {
        var commentItem = button.parentNode;
        var commentText = commentItem.querySelector("p").innerText;
        var newCommentText = prompt("Edit your comment:", commentText);

        if (newCommentText !== null && newCommentText.trim() !== "") {
            commentItem.querySelector("p").innerText = newCommentText;
        }
    }

    function deleteComment(button) {
        var commentItem = button.parentNode;
        commentItem.parentNode.removeChild(commentItem);
    }

    function editReply(button) {
        var replyItem = button.parentNode;
        var replyText = replyItem.querySelector("p").innerText;
        var newReplyText = prompt("Edit your reply:", replyText);

        if (newReplyText !== null && newReplyText.trim() !== "") {
            replyItem.querySelector("p").innerText = newReplyText;
        }
    }

    function deleteReply(button) {
        var replyItem = button.parentNode;
        replyItem.parentNode.removeChild(replyItem);
    }