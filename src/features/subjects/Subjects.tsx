import earth from "../../assets/earth.png";
import fisica from "../../assets/fisica.png";
import math from "../../assets/math.png";
import museu from "../../assets/museu.png";
import portuguese from "../../assets/portuguese.png";
import quimica from "../../assets/quimica.png";
import { Card } from "../../components/card";
import { PageContent } from "../../components/pageContent";
import style from "./Subjects.module.css";

export const Subjects = () => {
  return (
    <PageContent>
      <main className={style.main_content}>
        <div className={style.cards}>
          <Card img={math} title="Matemática" />
          <Card img={portuguese} title="Português" />
          <Card img={earth} title="Geografia" />
          <Card img={museu} title="História" />
          <Card img={fisica} title="Física" />
          <Card img={quimica} title="Química" />
        </div>
      </main>
    </PageContent>
  );
};
