import React from "react";
import classNames from "classnames";
export const Percent = ({ percent, onAddFriends = () => {}, className }) => {
  return (
    <div className={classNames("percent-container", className)}>
      <div className="percent-container-left">
        <div className="percent-container-left-heading">
          How Personalized Your Account Is
        </div>
        <div className="percent-container-left-desc mt-2">
          The more sources you connect, the more accurate your recommendations
          will be.
        </div>
        <Progress value={percent} className="mt-4" />
      </div>
      <div className="percent-container-right">
        <div className="d-flex mx-auto">
          <div className="percent-container-percent-value">{percent}</div>
          <div className="percent-container-percent-symbol">%</div>
        </div>
        <div className="text-center mt-auto">NEXT STEP</div>
        <div className="percent-container-right-friends mx-auto mt-2">
          Add friends
        </div>
      </div>
    </div>
  );
};

const Progress = ({ value, className }) => {
  return (
    <div className={`percent-container-progress ${className}`}>
      <div
        className="percent-container-progress-active"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
