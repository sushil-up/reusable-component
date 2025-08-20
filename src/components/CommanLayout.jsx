import React from "react";
import { NavUser } from "./app-sidebar/nav-user";

const CommonLayout = ({ pageTitle }) => {
  return (
    <>
      <div className="mt-0 flex items-center gap-3  border-gray-300 pb-2">
        <h2 className="text-3xl font-semibold text-red-800">{pageTitle}</h2>
      </div>
    </>
  );
};

export default CommonLayout;
