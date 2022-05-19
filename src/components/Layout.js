import React from "react";
import classNames from "classnames";
import { AiOutlineSearch } from "react-icons/ai";
import LogoImg from "./../assets/marx-logo.svg";

const menuData = [
  {
    label: "BROWSE BRANDS",
    url: "#",
  },
  {
    label: "PREFERENCES",
    url: "#",
  },
  {
    label: "SHOP",
    url: "#",
  },
  {
    label: "SUPPORT",
    url: "#",
  },
];
export const Layout = ({ children }) => {
  return (
    <div className="profile-page-layout">
      <div className="profile-page-banner">
        <div className="profile-page-header">
          <img src={LogoImg} className="profile-page-log" alt="logo" />
          {menuData.map(({ label, url }) => (
            <a className="profile-page-nav" href={url}>
              {label}
            </a>
          ))}
          <SearchBox />
          <Marx value={23} />
        </div>
      </div>
      {children}
    </div>
  );
};

const SearchBox = ({
  value,
  onChange = () => {},
  className,
  placeholder = "",
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

const Marx = ({ value }) => {
  return (
    <div className="marx-point-container">
      <span>Profile</span>
      <div className="marx-point-value">{value} MARX</div>
    </div>
  );
};
