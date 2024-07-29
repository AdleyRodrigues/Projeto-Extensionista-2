import { Link } from "react-router-dom";
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
              <Link to={routes.home}>Início</Link>
            </li>
            <li>
              <Link to={routes.enem}>Enem</Link>
            </li>
            <li>
              <Link to={routes.dicasEstudo}>Dicas de Estudo</Link>
            </li>
            <li>
              <Link to={routes.subjects}>Matérias</Link>
              <ul id="materias-list" className={style.hidden}>
                <li>
                  <Link to="/materias/matematica">Matemática</Link>
                </li>
                <li>
                  <Link to="/materias/portugues">Português</Link>
                </li>
                <li>
                  <Link to="/materias/historia">História</Link>
                </li>
                <li>
                  <Link to="/materias/geografia">Geografia</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={routes.feedback}>Feedback</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
