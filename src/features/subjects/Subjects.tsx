import { ReactNode, useState } from "react";
import earth from "../../assets/earth.png";
import fisica from "../../assets/fisica.png";
import math from "../../assets/math.png";
import museu from "../../assets/museu.png";
import portuguese from "../../assets/portuguese.png";
import quimica from "../../assets/quimica.png";
import { Card } from "../../components/card";
import { Geography } from "../../components/geography";
import { Math } from "../../components/math";
import { PageContent } from "../../components/pageContent";
import { Portuguese } from "../../components/portuguese";
import style from "./Subjects.module.css";
import { History } from "../../components/history";
import { Physics } from "../../components/physics";
import { Chemistry } from "../../components/chemistry";

interface subjectProps {
  mathematics: ReactNode;
  portuguese: ReactNode;
  geography: ReactNode;
  history: ReactNode;
  physics: ReactNode;
  chemistry: ReactNode;
}

const subjectContent: subjectProps = {
  mathematics: <Math />,
  portuguese: <Portuguese />,
  geography: <Geography />,
  history: <History />,
  physics: <Physics />,
  chemistry: <Chemistry />,
};

type SubjectKey = keyof subjectProps;

export const Subjects = () => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectKey | null>(
    null
  );

  return (
    <PageContent>
      <main className={style.main_content}>
        <div className={style.cards}>
          <Card
            img={math}
            title="Matemática"
            onClick={() => setSelectedSubject("mathematics")}
            isSelected={selectedSubject === "mathematics"}
          />
          <Card
            img={portuguese}
            title="Português"
            onClick={() => setSelectedSubject("portuguese")}
            isSelected={selectedSubject === "portuguese"}
          />
          <Card
            img={earth}
            title="Geografia"
            onClick={() => setSelectedSubject("geography")}
            isSelected={selectedSubject === "geography"}
          />
          <Card
            img={museu}
            title="História"
            onClick={() => setSelectedSubject("history")}
            isSelected={selectedSubject === "history"}
          />
          <Card
            img={fisica}
            title="Física"
            onClick={() => setSelectedSubject("physics")}
            isSelected={selectedSubject === "physics"}
          />
          <Card
            img={quimica}
            title="Química"
            onClick={() => setSelectedSubject("chemistry")}
            isSelected={selectedSubject === "chemistry"}
          />
        </div>
        <hr className={style.divider} />
        {selectedSubject ? (
          <div>{subjectContent[selectedSubject]}</div>
        ) : (
          <p>Selecione uma matéria para visualização das informações</p>
        )}
      </main>
    </PageContent>
  );
};
