import React from "react";
import classNames from "classnames";
import { FaCheckCircle } from "react-icons/fa";
import AgeImg from "./../assets/permission-age.svg";
import BrowsingImg from "./../assets/permission-browsing.svg";
import EmailImg from "./../assets/permission-email.svg";
import FriendsImg from "./../assets/permission-friends.svg";
import GenderImg from "./../assets/permission-gender.svg";
import IncomeImg from "./../assets/permission-income.svg";
import InterestsImg from "./../assets/permission-interests.svg";
import LocationImg from "./../assets/permission-location.svg";
import MaritalImg from "./../assets/permission-marital.svg";
import NameImg from "./../assets/permission-name.svg";
import PhoneImg from "./../assets/permission-phone.svg";
import SpendingImg from "./../assets/permission-spending.svg";

const data = {
  financial: {
    title: "FINANCIAL",
    data: [
      { img: NameImg, title: "Name" },
      { img: AgeImg, title: "Age" },
      { img: GenderImg, title: "Gender" },
      { img: LocationImg, title: "Location (City, State)" },
    ],
  },
  browsing: {
    title: "BROWSING",
    data: [
      { img: IncomeImg, title: "Income" },
      { img: MaritalImg, title: "Marital status" },
      { img: EmailImg, title: "Email" },
      { img: PhoneImg, title: "Phone number" },
    ],
  },
  shopping: {
    title: "SHOPPING",
    data: [
      { img: SpendingImg, title: "Spending activity" },
      { img: FriendsImg, title: "Friends activity" },
      { img: BrowsingImg, title: "Browsing behavior" },
      { img: InterestsImg, title: "Interests" },
    ],
  },
};

export const Option = ({
  className,
  value = "financial",
  onChange = () => {},
  active = true,
}) => {
  return (
    <div
      className={classNames("user-option-container", className, { active })}
      onClick={() => onChange(value)}
    >
      <div>
        <div className="user-option-title">{data[value].title}</div>
        <div className="mt-2">
          {data[value].data.map(({ img, title }) => (
            <div className="user-option-item mt-2">
              <img src={img} alt={title} />
              <div className="ml-2 user-option-text">{title}</div>
            </div>
          ))}
        </div>
      </div>
      {active && (
        <div className="d-flex flex-column mt-1">
          <div className="user-option-selected">SELECTED</div>
          <span className="mt-2 ml-auto">
            <FaCheckCircle color="#62E5B1" size={20} />
          </span>
        </div>
      )}
    </div>
  );
};
