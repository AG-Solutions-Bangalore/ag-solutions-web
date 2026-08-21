import React from "react";
import ExportBizNewPage from "../export-biz/pages/ExportBizNewPage";

export interface ExportBizPageProps {
  defaultOpenModal?: boolean;
}

export const ExportBizPage: React.FC<ExportBizPageProps> = () => {
  return <ExportBizNewPage />;
};

export default ExportBizPage;

