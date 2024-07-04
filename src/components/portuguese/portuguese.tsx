import style from "./portugues.module.css";

export const Portuguese = () => {
  return (
    <section className={style.content}>
      <p>Recursos e ferramentas para melhorar suas habilidades em português.</p>

      <h2>Plataformas de Aprendizado</h2>
      <img
        src="https://hed.pearson.com.br/hs-fs/hubfs/Blog%20HED/Multim%C3%ADdia/Imagens%20Blog/plataformas-digitais-educacao-5.0.jpg?width=1000&name=plataformas-digitais-educacao-5.0.jpg"
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
            href="https://www.duolingo.com/course/pt/en/Learn-Portuguese"
            target="_blank"
          >
            Duolingo
          </a>
        </li>
        <li>
          <a
            href="https://edisciplinas.usp.br/course/view.php?id=1516"
            target="_blank"
          >
            Curso de Português USP
          </a>
        </li>
        <li>
          <a
            href="https://www.memrise.com/course/2025248/portugues-brasileiro-1/"
            target="_blank"
          >
            Memrise
          </a>
        </li>
        <li>
          <a
            href="https://www.babbel.com/learn-portuguese-online"
            target="_blank"
          >
            Babbel
          </a>
        </li>
      </ul>
      <h2>Conteúdos de Português</h2>
      <img
        src="https://static.todamateria.com.br/img/categories/lingua-portuguesa.png"
        alt="Conteúdos de Português"
        className={style.section_image}
      />
      <ul>
        <li>
          <a href="https://www.professorsergionogueira.com.br/" target="_blank">
            Blog do Professor Sérgio Nogueira
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/c/Portugu%C3%AAscomLet%C3%ADcia"
            target="_blank"
          >
            Português com Letícia (YouTube)
          </a>
        </li>
        <li>
          <a href="https://g1.globo.com/educacao/" target="_blank">
            G1 Educação
          </a>
        </li>
        <li>
          <a href="https://redacaonline.com.br/" target="_blank">
            Redação Online
          </a>
        </li>
        <li>
          <a href="https://novaescola.org.br/" target="_blank">
            Nova Escola
          </a>
        </li>
      </ul>
    </section>
  );
};
