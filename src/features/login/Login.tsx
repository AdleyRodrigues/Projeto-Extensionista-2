import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/routes";
import style from "./Login.module.css";

export const Login = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(routes.home);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.login_container}>
        <h2>Login</h2>
        <form>
          <div className={style.form_group}>
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className={style.form_group}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" onClick={navigateToHome}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
