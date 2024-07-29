import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.user_info}>
        <p>
          Bem-vindo, <span id="username">Aluno</span>
        </p>
      </div>
    </header>
  );
};
