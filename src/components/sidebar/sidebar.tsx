import { routes } from "../../utils/routes";
import style from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <div className={style.navigation}>
        <h2>StudyEasy</h2>
        <nav>
          <ul>
            <li>
              <a href={routes.home}>Início</a>
            </li>
            <li>
              <a href={routes.enem}>Enem</a>
            </li>
            <li>
              <a href="#" id="materias-link">
                Matérias
              </a>
              <ul id="materias-list" className={style.hidden}>
                <li>
                  <a href="../Materias/matematica.html">Matemática</a>
                </li>
                <li>
                  <a href="../Materias/portugues.html">Português</a>
                </li>
                <li>
                  <a href="../Materias/historia.html">História</a>
                </li>
                <li>
                  <a href="../Materias/geografia.html">Geografia</a>
                </li>
              </ul>
            </li>
            <li>
              <a href={routes.feedback}>Feedback</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href={routes.profile}>Perfil</a>
            </li>
            <li>
              <a href={routes.login}>Sair</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
