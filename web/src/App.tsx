import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Enem } from "./features/enem";
import { Feedback } from "./features/feedback";
import { Home } from "./features/home";
import { Subjects } from "./features/subjects";
import { routes } from "./utils/routes";
import { DicasEstudo } from "./features/dicasEstudo";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.enem} element={<Enem />} />
        <Route path={routes.dicasEstudo} element={<DicasEstudo />} />
        <Route path={routes.feedback} element={<Feedback />} />
        <Route path={routes.subjects} element={<Subjects />} />
      </Routes>
    </BrowserRouter>
  );
};
