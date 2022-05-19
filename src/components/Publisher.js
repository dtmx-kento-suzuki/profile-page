import React from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";

export const Publisher = ({
  className,
  label,
  value = false,
  onChange = () => {},
  backColor = "green",
}) => {
  const id = nanoid();
  const handleChange = () => {
    onChange(!value);
  };
  return (
    <div
      className={classNames("publisher-control d-flex flex-column", className)}
    >
      <div className={classNames("publisher-control-content", backColor)}></div>
      <div className="switch-control mt-auto mx-auto">
        <input
          id={id}
          type="checkbox"
          onChange={handleChange}
          checked={value}
        />
        <label htmlFor={id}>
          <span>{label}</span>
          <span></span>
        </label>
      </div>
    </div>
  );
};
