//const API_URL = "http://localhost:3000/comments";
//const API_URL = "https://6d71-2804-29b8-5015-2d0e-2444-3a4a-757d-e07f.ngrok-free.app/comments";
const API_URL = import.meta.env.VITE_API_URL;


export const fetchComments = async () => {
  try {
    const response = await fetch(API_URL);
    const text = await response.text(); 
    console.log(text); 
    
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    return JSON.parse(text); 
  } catch (error) {
    console.error('Erro ao buscar comentários:', error);
  }
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
