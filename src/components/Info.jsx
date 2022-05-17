import React from "react";
import { FaInfoCircle } from "react-icons/fa";

export const Info = ({ className }) => {
  return (
    <span className={`box-info ${className}`}>
      <FaInfoCircle color="#ccc" />
    </span>
  );
};
