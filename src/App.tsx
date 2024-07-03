import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Enem } from "./features/enem";
import { Feedback } from "./features/feedback";
import { Home } from "./features/home";
import { Login } from "./features/login";
import { routes } from "./utils/routes";
import { Profile } from "./features/profile";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.enem} element={<Enem />} />
        <Route path={routes.feedback} element={<Feedback />} />
        <Route path={routes.profile} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
