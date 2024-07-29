import { ReactNode } from "react";
import { Sidebar } from "../sidebar";
import style from "./PageContent.module.css";
import { Header } from "../header";

interface PageContentProps {
  children: ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
  return (
    <div className={style.page_content}>
      <Sidebar />
      <div className={style.container}>
        <Header />
        {children}
      </div>
    </div>
  );
};
