import { ReactNode } from "react";
import { Sidebar } from "../sidebar";
import style from "./PageContent.module.css";

interface PageContentProps {
  children: ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
  return (
    <div className={style.page_content}>
      <Sidebar />
      {children}
    </div>
  );
};
