import React from "react";
import { Helmet } from "react-helmet";
import { ReactDynamicTable } from "../components/ReactDynamicTable/ReactDynamicTable" ; 


import config from "../../data/SiteConfig";

import "./index.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <ReactDynamicTable/>
  </div>
  );
}
