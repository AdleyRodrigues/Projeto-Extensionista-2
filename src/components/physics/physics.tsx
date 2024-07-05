import style from "./physics.module.css";
import studying_physics from "../../assets/studying_physics.webp";

export const Physics = () => {
  return (
    <section className={style.content}>
      <p>Recursos e ferramentas para melhorar suas habilidades em Física.</p>

      <h2>Plataformas de Aprendizado</h2>
      <img
        src={studying_physics}
        alt="Plataformas de Aprendizado"
        className={style.section_image}
      />
      <ul>
        <li>
          <a href="https://pt.khanacademy.org/" target="_blank">
            Khan Academy
          </a>
        </li>
        <li>
          <a
            href="https://descomplica.com.br/vestibulares/enem/a/?utm_source=google&utm_medium=cpc&utm_campaign=psq_snb_uee_performance_gwt-paid-media_conversao_ongoing_venda_teste-palavras&utm_term=plataforma%20para%20estudos&utm_content=teste-palavras&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXCdkPXdFpEZgt44jc1W_tKl536XmwMDxI53V_9us3jENdTGe3-mvIhoCOYsQAvD_BwE"
            target="_blank"
          >
            Descomplica
          </a>
        </li>
        <li>
          <a
            href="https://principal.professorboaro.com.br/plataforma-de-fisica-2/"
            target="_blank"
          >
            Professor Boaro
          </a>
        </li>
        <li>
          <a href="https://www.chamaofisico.com.br/" target="_blank">
            Chama O Físico
          </a>
        </li>
      </ul>
      <h2>Conteúdos de Física</h2>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLJbfCnxJZt8YKoBC_wigw0BZOlDw_vFKS"
            target="_blank"
          >
            Professor Boaro (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLAudUnJeNg4vmlyuv__uBgdOkzw4VSrcJ"
            target="_blank"
          >
            Canal USP (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLnvUhOKqMcbm4VO85AnU_2H-aOimTY2cO"
            target="_blank"
          >
            Física Total
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLXUmiCKnwbRzfhbCPiQGArlUTVFmiMj1Q"
            target="_blank"
          >
            Gustavo Pereira
          </a>
        </li>
      </ul>
    </section>
  );
};
