import style from "./math.module.css";
import studying_math from "../../assets/studying_math.webp";

export const Math = () => {
  return (
    <section className={style.content}>
      <p>
        Recursos e ferramentas para melhorar suas habilidades em matemática.
      </p>
      <img
        src={studying_math}
        alt="Plataformas de Aprendizado"
        className={style.section_image}
      />
      <h2>Plataformas de Aprendizado</h2>
      <ul>
        <li>
          <a
            href="https://www.professorferretto.com.br/?utm_source=google-ads&utm_medium=search&utm_campaign=superintensivo-jun-24-palavras-marca&utm_content=ad-geral-2&conversion=superintensivo-jun-24&utm_term=ferreto%20enem&https://www.professorferretto.com.br?utm_source=google-ads&utm_medium=search&utm_campaign=superintensivo-jun-24-palavras-marca&utm_content=ad-geral-2&conversion=superintensivo-jun-24&utm_term=ferreto%20enem&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXFaVjbOiaY7u6b6fpyPB_Fregr95RFeZWLXjp-7KeMBXMf3QHWZwfBoC6IcQAvD_BwE"
            target="_blank"
          >
            Plataforma Ferretto
          </a>
        </li>
        <li>
          <a
            href="https://www.coursera.org/courses?query=mathematics"
            target="_blank"
          >
            Coursera
          </a>
        </li>
        <li>
          <a
            href="https://dmat.universonarrado.com.br/?utm_source=9806c295816d4a308df310504d8ea13f&utm_campaign=alwayson&utm_medium=Search&utm_content=termos-relacionados&utm_term=%7Bkeyword%7D&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXEazb9k2D_n_-4Vk94V1Lwjkdwrfqx02aJvyoezGY5sRnkRE25UMcBoCVTIQAvD_BwE"
            target="_blank"
          >
            Universo Narrado
          </a>
        </li>
        <li>
          <a href="https://www.respondeai.com.br/" target="_blank">
            Responde Ai
          </a>
        </li>
      </ul>

      <h2>Conteúdos de Matemática</h2>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/watch?v=uaYFrtduFmI&list=PLrzB-zHlu3aD-mUeGQyB0YChHiSBfNTvB"
            target="_blank"
          >
            xequemat enem (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=az6OYFS7AUA&list=PLTPg64KdGgYgFpOFt2TETLdEuBB4fvxxf"
            target="_blank"
          >
            Professor Ferretto (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=Yv_S6onjBvU&list=PL83s8LGM84J41-Pa1_KNviiKyqsGq7stB&pp=iAQB"
            target="_blank"
          >
            Rafael Procópio (YouTube)
          </a>
        </li>
      </ul>
    </section>
  );
};
