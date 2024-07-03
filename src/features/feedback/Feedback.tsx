import { PageContent } from "../../components/pageContent";
import style from "./Feedback.module.css";

export const Feedback = () => {
  return (
    <PageContent>
      <main className={style.main_content}>
        <section className={style.content}>
          <h1>Feedback</h1>
          <form id="feedback-form">
            <div className={style.form_group}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={style.form_group}>
              <label htmlFor="name">Idade</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={style.form_group}>
              <label htmlFor="name">Escola</label>
              <input type="text" id="name" name="name" required />
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
            <button type="submit">Enviar</button>
          </form>
          <h2>Comentários</h2>
          <div id="comments-section"></div>
        </section>
      </main>
    </PageContent>
  );
};
