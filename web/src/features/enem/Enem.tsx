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
                <a
                  href="https://www.youtube.com/playlist?list=PLrzB-zHlu3aD-mUeGQyB0YChHiSBfNTvB"
                  target="_blank"
                >
                  Aulas em Vídeo
                </a>
              </li>
              <li>
                <a
                  href="https://www.mesalva.com/enem/apostilas"
                  target="_blank"
                >
                  Apostilas em PDF
                </a>
              </li>
              <li>
                <a
                  href="https://www.glau.com.vc/?gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXFr8l6EJIKNxk0rjBGoY425i9xfUmxqD2MfljNaeHGVMOppq5Ce0dRoCMxsQAvD_BwE"
                  target="_blank"
                >
                  Exercícios
                </a>
              </li>
            </ul>
          </div>
          <div className={style.section}>
            <h2>Português</h2>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PLVyIxkvuIqxpOYJyRjx66ZklG0JrIk8ds"
                  target="_blank"
                >
                  Aulas em Vídeo
                </a>
              </li>
              <li>
                <a
                  href="https://www.mesalva.com/enem/apostilas"
                  target="_blank"
                >
                  Apostilas em PDF
                </a>
              </li>
              <li>
                <a
                  href="https://www.todamateria.com.br/questoes-portugues-enem/"
                  target="_blank"
                >
                  Exercícios
                </a>
              </li>
            </ul>
          </div>
          <div className={style.section}>
            <h2>Ciências Humanas</h2>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PLumZRHXP1evv36K3d--DGPSKv7vrolfJF"
                  target="_blank"
                >
                  Aulas em Vídeo
                </a>
              </li>
              <li>
                <a
                  href="https://www.mesalva.com/enem/apostilas"
                  target="_blank"
                >
                  Apostilas em PDF
                </a>
              </li>
              <li>
                <a
                  href="https://www.todamateria.com.br/ciencias-humanas-e-suas-tecnologias/"
                  target="_blank"
                >
                  Exercícios
                </a>
              </li>
            </ul>
          </div>
          <div className={style.section}>
            <h2>Ciências da Natureza</h2>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PLumZRHXP1evs8K8gKQsZAgPim3kzQoQH_"
                  target="_blank"
                >
                  Aulas em Vídeo
                </a>
              </li>
              <li>
                <a
                  href="https://www.mesalva.com/enem/apostilas"
                  target="_blank"
                >
                  Apostilas em PDF
                </a>
              </li>
              <li>
                <a
                  href="https://www.todamateria.com.br/ciencias-da-natureza-e-suas-tecnologias/"
                  target="_blank"
                >
                  Exercícios
                </a>
              </li>
            </ul>
          </div>
          <div className={style.section}>
            <h2>Redação</h2>
            <ul>
              <li>
                <a
                  href="https://blog.imaginie.com.br/dicas-de-redacao/"
                  target="_blank"
                >
                  Dicas de Redação
                </a>
              </li>
              <li>
                <a
                  href="https://descomplica.com.br/blog/modelo-de-redacao/"
                  target="_blank"
                >
                  Modelos de Redação
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </PageContent>
  );
};
