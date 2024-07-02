document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedback-form");
    const commentsSection = document.getElementById("comments-section");

    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

        // Create new comment element
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        const commentName = document.createElement("h3");
        commentName.textContent = name;

        const commentText = document.createElement("p");
        commentText.textContent = comment;

        commentElement.appendChild(commentName);
        commentElement.appendChild(commentText);

        // Add new comment to the comments section
        commentsSection.appendChild(commentElement);

        // Clear form
        feedbackForm.reset();
    });
});
