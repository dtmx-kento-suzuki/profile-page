import React from "react";
import classNames from "classnames";

export const Checkbox = ({
  value = false,
  onChange = () => {},
  children,
  className,
  isReversed = false,
}) => {
  return (
    <div className={classNames(className)}>
      <label
        className={classNames("checkbox-component", {
          "checkbox-component--reversed": isReversed,
        })}
      >
        {children}
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span></span>
      </label>
    </div>
  );
};
