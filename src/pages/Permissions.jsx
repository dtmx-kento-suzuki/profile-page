import React from "react";
import { SearchBox } from "./../components/SearchBox";
import { PermissionBrand } from "./../components/PermissionBrand";
import { Publisher } from "./../components/Publisher";
import { Option } from "./../components/Option";
import { useInput } from "./../useInput";
import SpendingImg from "./../assets/permission-spending.svg";

export const Permissions = () => {
  const test = useInput();
  return (
    <div className="row">
      <div className="col-4">
        <div className="permission-heading">PERSONALIZE YOUR FEED</div>
        <div className="permission-desc">
          On DTMX, you are in full control of your feed! Here’s a live preview
          of your current feed based on your current Permissions Settings.{" "}
        </div>
        <div className="d-flex">
          <div className="permission-feed-big"></div>
          <div className="d-flex flex-column">
            <div className="permission-feed-small om"></div>
            <div className="permission-feed-small amazon"></div>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column">
            <div className="permission-feed-small bb"></div>
            <div className="permission-feed-small uber"></div>
          </div>
          <div className="permission-feed-big"></div>
        </div>
      </div>
      <div className="col-8">
        <SearchBox className="w-100" />
        <div className="mt-4 row">
          <div className="col-6">
            <div className="d-flex">
              <div className="permission-group">RETAIL</div>
              <div className="permission-personalize">personalize</div>
              <div className="permission-third-party">3rd party access</div>
            </div>
            <PermissionBrand
              img={SpendingImg}
              name="goop test test tesettest"
              className="mt-2"
            />
            <PermissionBrand img={SpendingImg} name="goop" className="mt-2" />
            <PermissionBrand img={SpendingImg} name="goop" className="mt-2" />
            <PermissionBrand img={SpendingImg} name="goop" className="mt-2" />
            <PermissionBrand img={SpendingImg} name="goop" className="mt-2" />
          </div>
          <div className="col-6">
            <div className="d-flex">
              <div className="permission-group">RETAIL</div>
              <div className="permission-personalize">personalize</div>
              <div className="permission-third-party">3rd party access</div>
            </div>
            <PermissionBrand img={SpendingImg} name="goop" className="mt-2" />
            <PermissionBrand img={SpendingImg} name="goop" className="mt-2" />
            <PermissionBrand img={SpendingImg} name="goop" className="mt-2" />
            <PermissionBrand img={SpendingImg} name="goop" className="mt-2" />
            <PermissionBrand img={SpendingImg} name="goop" className="mt-2" />
          </div>
        </div>
        <div className="mt-4">My Publishers</div>
        <div className="d-flex mt-4">
          <Publisher {...test} backColor="purple" className="mr-4" />
          <Publisher {...test} backColor="green" className="mr-4" />
          <Publisher {...test} backColor="red" className="mr-4" />
          <Publisher {...test} backColor="yellow" />
        </div>
        <div className="d-flex mt-4">
          <Option value="financial" className="mr-2" />
          <Option value="browsing" className="mr-2" />
          <Option value="shopping" />
        </div>
      </div>
    </div>
  );
};
