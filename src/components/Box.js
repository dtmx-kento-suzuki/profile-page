import React from "react";
import { Info } from "./Info";

export const Box = ({ title, children, className, info = "", ...props }) => {
  return (
    <div className={`box ${className}`} {...props}>
      <div className="box-header">
        <div className="box-header-title">{title}</div>
        {info && <Info className="ml-auto my-auto" />}
      </div>
      <div className="box-content">{children}</div>
    </div>
  );
};
