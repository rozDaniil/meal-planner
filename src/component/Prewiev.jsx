import React from "react";
import { PrewievBlock } from "./PrewievBlock";

export const Prewiev = () => {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <PrewievBlock />
        <PrewievBlock />
      </div>
    </div>
  );
};
