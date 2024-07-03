import image from "../../assets/teste.gif";
import { PageContent } from "../../components/pageContent";
import style from "./Home.module.css";

export const Home = () => {
  return (
    <PageContent>
      <div className={style.container}>
        <main className={style.main_content}>
          <header className={style.header}>
            <div className={style.user_info}>
              <p>
                Bem-vindo, <span id="username">Adley</span>
              </p>
            </div>
          </header>
          <section className={style.content}>
            <h1>Página Inicial</h1>
            <p>
              Bem-vindo ao StudyEasy! Aqui você pode acessar seus cursos,
              materiais de estudo e muito mais.
            </p>
            <img
              src={image}
              alt="Imagem de Boas-vindas"
              className={style.welcome_image}
            />
          </section>
        </main>
      </div>
    </PageContent>
  );
};
