import React from "react";

export const Button = ({
  className,
  isOutline = false,
  children,
  ...props
}) => {
  return (
    <button
      className={`green-button ripple-effect ${
        isOutline ? "outline" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
