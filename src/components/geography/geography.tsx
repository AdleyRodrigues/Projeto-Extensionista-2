import style from "./geography.module.css";
import studying_geografy from "../../assets/studying_geography.webp";

export const Geography = () => {
  return (
    <section className={style.content}>
      <p>Recursos e ferramentas para melhorar suas habilidades em geografia.</p>

      <h2>Plataformas de Aprendizado</h2>
      <img
        src={studying_geografy}
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
            href="https://vestibular.profrodrigorodrigues.com/"
            target="_blank"
          >
            GeoBrasil
          </a>
        </li>
        <li>
          <a href="https://www.geoguessr.com/" target="_blank">
            GeoGuess
          </a>
        </li>
        <li>
          <a
            href="https://descomplica.com.br/d/vs/geografia/?utm_term=&utm_campaign=gmax_ug_performance_gwt-paid-media_meio_conversao_always-on_lead&utm_source=google&utm_medium=cpc&hsa_acc=4300659645&hsa_cam=20337576239&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXLAtLVEViGBJaGLkLRIr6rsqtAOYUSQZe7iBWDo2W4kM6tH67fqlvhoCdJsQAvD_BwE"
            target="_blank"
          >
            Descomplica
          </a>
        </li>
      </ul>
      <h2>Conteúdos de Geografia</h2>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLdkZd7NEhSen1qvUgdM56njgqWyUHBbVT"
            target="_blank"
          >
            Ricardo Marcílio (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLNM2T4DNzmq7p-TtQPn3vjNU9t8M0Arxc"
            target="_blank"
          >
            Canal Futura (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLnVqR-Z_Y2bnAdYmwhzD3m1WxqcBTKpv7"
            target="_blank"
          >
            Quadro Livre
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLruc42XZPq_Ykn5OrcgLLknBkDSLtLe6q"
            target="_blank"
          >
            Não Perca a Cabeça
          </a>
        </li>
      </ul>
    </section>
  );
};
