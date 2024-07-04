import { useEffect, useState } from "react";
import { PageContent } from "../../components/pageContent";
import { fetchComments, postComment } from "../../services/api";
import style from "./Feedback.module.css";
import { Rating } from "../../components/rating";

interface Comment {
  id?: number;
  name: string;
  age: string;
  school: string;
  comment: string;
  rating: number;
}

export const Feedback = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    loadComments();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const newComment: Comment = {
      name: formData.get("name") as string,
      age: formData.get("age") as string,
      school: formData.get("school") as string,
      comment: formData.get("comment") as string,
      rating: rating,
    };

    try {
      const data = await postComment(newComment);
      setComments([...comments, data]);
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <PageContent>
      <main className={style.main_content}>
        <section className={style.content}>
          <h1>Feedback</h1>
          <form id="feedback-form" onSubmit={handleSubmit}>
            <div className={style.form_group}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={style.form_group}>
              <label htmlFor="age">Idade</label>
              <input type="text" id="age" name="age" required />
            </div>
            <div className={style.form_group}>
              <label htmlFor="school">Escola</label>
              <input type="text" id="school" name="school" required />
            </div>
            <div className={style.form_group}>
              <label htmlFor="comment">Comentário sobre a plataforma</label>
              <textarea
                id="comment"
                name="comment"
                rows={5}
                required
              ></textarea>
            </div>
            <div className={style.form_group}>
              <label>Avaliação</label>
              <Rating rating={rating} setRating={setRating} />
            </div>
            <button type="submit">Enviar</button>
          </form>
          <hr />
          <h2>Comentários</h2>
          <div id={style.comments_section}>
            {comments.map((comment) => (
              <div key={comment.id} className={style.comment}>
                <p>
                  <strong>Nome:</strong> {comment.name}
                </p>
                <p>
                  <strong>Idade:</strong> {comment.age}
                </p>
                <p>
                  <strong>Escola:</strong> {comment.school}
                </p>
                <p>
                  <strong>Comentário:</strong> {comment.comment}
                </p>
                <p>
                  <strong>Avaliação:</strong>{" "}
                  {"★".repeat(comment.rating) + "☆".repeat(5 - comment.rating)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageContent>
  );
};
