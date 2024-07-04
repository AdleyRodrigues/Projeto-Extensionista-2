import { PageContent } from "../../components/pageContent";
import style from "./Enem.module.css";

export const Enem = () => {
  return (
    <PageContent>
      <main className={style.main_content}>
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
      </main>
    </PageContent>
  );
};
