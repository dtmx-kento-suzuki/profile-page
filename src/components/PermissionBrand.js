import React from "react";
import classNames from "classnames";
import { Checkbox } from "./Checkbox";

export const PermissionBrand = ({ className, img, name }) => {
  return (
    <div className={classNames("permission-brand-container w-100", className)}>
      <img className="permission-brand-img" src={img} alt={`${name} brand`} />
      <div className="permission-brand-name ml-2 my-auto"> {name} </div>
      <div className="permission-personalize d-flex">
        <Checkbox className="my-auto mx-auto" />
      </div>
      <div className="permission-third-party d-flex">
        <Checkbox className="my-auto mx-auto" />
      </div>
    </div>
  );
};
