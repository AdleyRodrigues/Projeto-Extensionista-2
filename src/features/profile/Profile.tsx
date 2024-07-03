import { PageContent } from "../../components/pageContent";
import style from "./Profile.module.css";

export const Profile = () => {
  return (
    <PageContent>
      <main className={style.main_content}>
        <section className={style.content}>
          <h1>Minha Conta</h1>
          <div className={style.profile_container}>
            <div className={style.profile_details}>
              <h2>Adley Rodrigues</h2>
              <p>adleyrodrigues2015@gmail.com</p>
            </div>
          </div>
          <form>
            <h3>Informações Pessoais</h3>
            <div className={style.form_group}>
              <label htmlFor="login">Login</label>
              <input type="text" id="login" name="login" readOnly />
            </div>
            <div className={style.form_group}>
              <label htmlFor="firstName">Nome</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className={style.form_group}>
              <label htmlFor="lastName">Sobrenome</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
            <div className={style.form_group}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className={style.form_group}>
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <button type="submit">Salvar</button>
          </form>
        </section>
      </main>
    </PageContent>
  );
};
