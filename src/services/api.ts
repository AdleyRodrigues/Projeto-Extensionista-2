//const API_URL = "http://localhost:3000/comments";
const API_URL = "https://2f11-2804-29b8-5015-2d0e-2444-3a4a-757d-e07f.ngrok-free.app/comments";


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
