import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import classNames from "classnames";

export const SearchBox = ({
  value,
  onChange = () => {},
  className,
  placeholder = 'Try Search "Xbox"',
  ...props
}) => {
  return (
    <div className={classNames("search-box-container", className)}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        {...props}
      />
      <div className="search-box-container-icon">
        <AiOutlineSearch color="white" size={24} />
      </div>
    </div>
  );
};
