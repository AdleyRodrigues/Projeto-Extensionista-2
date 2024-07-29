import { PageContent } from "../../components/pageContent";
import style from "./DicasEstudo.module.css";

export const DicasEstudo = () => {
  return (
    <PageContent>
      <main className={style.main_content}>
        <h1>Dicas de Estudo</h1>

        <section className={style.section}>
          <h2>Ferramentas de IA para Estudo</h2>
          <p>As ferramentas de IA podem ser grandes aliadas no seu aprendizado, ajudando a personalizar suas experiências de estudo e oferecendo recursos adicionais. Aqui estão algumas plataformas recomendadas:</p>
          <ul>
            <li>
              <a href="https://learningstudioai.com/" target="_blank">Learning Studio AI</a> - Personaliza seu plano de estudo com base nas suas necessidades.
            </li>
            <li>
              <a href="https://www.teachy.com.br/" target="_blank">Teachy</a> - Oferece tutoria personalizada e material didático variado.
            </li>
            <li>
              <a href="https://www.khanacademy.org/" target="_blank">Khan Academy</a> - Disponibiliza aulas em vídeo e exercícios práticos.
            </li>
            <li>
              <a href="https://www.quizlet.com/" target="_blank">Quizlet</a> - Cria flashcards e testes para melhorar a memorização.
            </li>
            <li>
              <a href="https://www.coursera.org/" target="_blank">Coursera</a> - Oferece cursos de universidades e empresas renomadas.
            </li>
            <li>
              <a href="https://www.edx.org/" target="_blank">edX</a> - Cursos online de instituições líderes mundiais.
            </li>
          </ul>
        </section>

        <section className={style.section}>
          <h2>Técnicas de Estudo</h2>
          <p>Estudar de maneira eficiente pode fazer toda a diferença no seu desempenho. Aqui estão algumas técnicas comprovadas para melhorar seus estudos:</p>
          <ul>
            <li>
              <strong>Método Pomodoro:</strong> Estude por 25 minutos e depois faça uma pausa de 5 minutos. Após quatro "Pomodoros", faça uma pausa mais longa de 15-30 minutos. <a href="https://pomofocus.io/" target="_blank">Ferramenta Pomodoro</a>
            </li>
            <li>
              <strong>Mapas Mentais:</strong> Crie diagramas que conectem informações de forma visual para ajudar na memorização e compreensão. <a href="https://www.mindmeister.com/" target="_blank">MindMeister</a>
            </li>
            <li>
              <strong>Técnica Feynman:</strong> Ensine o conteúdo para você mesmo ou para outra pessoa em termos simples. Isso ajuda a identificar pontos fracos no seu entendimento.
            </li>
            <li>
              <strong>Espaçamento:</strong> Distribua suas sessões de estudo ao longo do tempo em vez de concentrar tudo em um único período.
            </li>
            <li>
              <strong>Prática Intercalada:</strong> Misture diferentes temas ou tipos de problemas durante suas sessões de estudo para melhorar a retenção e a aplicação do conhecimento.
            </li>
          </ul>
        </section>

        <section className={style.section}>
          <h2>Dicas Gerais para um Estudo Eficiente</h2>
          <ul>
            <li>Encontre um lugar tranquilo e organizado para estudar, livre de distrações.</li>
            <li>Estabeleça metas de estudo claras e atingíveis para cada sessão.</li>
            <li>Use técnicas de revisão ativa, como fazer perguntas a si mesmo sobre o material.</li>
            <li>Durma bem e mantenha uma alimentação saudável para garantir que seu cérebro esteja funcionando de maneira ideal.</li>
            <li>Faça exercícios físicos regularmente para melhorar sua concentração e reduzir o estresse.</li>
          </ul>
        </section>
      </main>
    </PageContent>
  );
};
