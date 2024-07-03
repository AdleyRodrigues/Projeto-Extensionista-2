import { Sidebar } from "../../components/sidebar";
import style from "./Enem.module.css";

export const Enem = () => {
  return (
    <div className={style.container}>
      <Sidebar />
      <main className={style.main_content}>
        <header className={style.header}>
          <div className={style.user_info}>
            <p>
              Bem-vindo, <span id="username">Adley</span>
            </p>
          </div>
        </header>
        <section className={style.content}>
          <h1>ENEM - Material de Estudo</h1>
          <div className={style.sections}>
            <div className={style.section}>
              <h2>Matemática</h2>
              <ul>
                <li>
                  <a href="#">Aulas em Vídeo</a>
                </li>
                <li>
                  <a href="#">Apostilas em PDF</a>
                </li>
                <li>
                  <a href="#">Exercícios</a>
                </li>
              </ul>
            </div>
            <div className={style.section}>
              <h2>Português</h2>
              <ul>
                <li>
                  <a href="#">Aulas em Vídeo</a>
                </li>
                <li>
                  <a href="#">Apostilas em PDF</a>
                </li>
                <li>
                  <a href="#">Exercícios</a>
                </li>
              </ul>
            </div>
            <div className={style.section}>
              <h2>Ciências Humanas</h2>
              <ul>
                <li>
                  <a href="#">Aulas em Vídeo</a>
                </li>
                <li>
                  <a href="#">Apostilas em PDF</a>
                </li>
                <li>
                  <a href="#">Exercícios</a>
                </li>
              </ul>
            </div>
            <div className={style.section}>
              <h2>Ciências da Natureza</h2>
              <ul>
                <li>
                  <a href="#">Aulas em Vídeo</a>
                </li>
                <li>
                  <a href="#">Apostilas em PDF</a>
                </li>
                <li>
                  <a href="#">Exercícios</a>
                </li>
              </ul>
            </div>
            <div className={style.section}>
              <h2>Redação</h2>
              <ul>
                <li>
                  <a href="#">Dicas de Redação</a>
                </li>
                <li>
                  <a href="#">Modelos de Redação</a>
                </li>
                <li>
                  <a href="#">Exercícios de Redação</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
