import React from "react";
import { SearchBox } from "./../components/SearchBox";
import { PermissionBrand } from "./../components/PermissionBrand";
import { Publisher } from "./../components/Publisher";
import { Option } from "./../components/Option";
import { FeedSmall } from "./../components/FeedSmall";
import { FeedBig } from "./../components/FeedBig";
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
          <FeedBig img="https://marx-assets.s3.amazonaws.com/prod/brand/5db9af9916a4d06c98ac7849/so/1652429932136__featured_image.jpg" />
          <div className="d-flex flex-column" style={{ marginLeft: 15 }}>
            <FeedSmall
              img={
                "https://marx-assets.s3.amazonaws.com/prod/brand/5db8900716a4d04c3d484133/so/1572536140026_Best_Buy_logo_2018.png"
              }
              backColor="red"
            />
            <FeedSmall
              img={
                "https://marx-assets.s3.amazonaws.com/prod/brand/5db9a9e516a4d06c98ac7843/so/1572454966209_CocaColaStore.png"
              }
              style={{ marginTop: 10 }}
              backColor="yellow"
            />
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="d-flex flex-column">
            <FeedSmall
              img={
                "https://marx-assets.s3.amazonaws.com/prod/brand/5db9a8fc16a4d06c98ac7842/so/1652430938557_cabelaslogo.png"
              }
              backColor="blue"
            />
            <FeedSmall
              img={
                "https://marx-assets.s3.amazonaws.com/prod/brand/5db9ac2716a4d06c98ac7846/so/1572449335046_Crocs.png"
              }
              style={{ marginTop: 10 }}
              backColor="black"
            />
          </div>

          <FeedBig
            style={{ marginLeft: 15 }}
            img="https://marx-assets.s3.amazonaws.com/prod/brand/5de90c6d16a4d050c1dcbe67/so/1652693916480_241316565_10165924877565495_1201932218685537329_n.jpeg"
          />
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
