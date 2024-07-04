const API_URL = "http://localhost:3000/comments";

export const fetchComments = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return response.json();
};

export const postComment = async (comment: {
  name: string;
  age: string;
  school: string;
  comment: string;
}) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
  if (!response.ok) {
    throw new Error("Failed to post comment");
  }
  return response.json();
};
