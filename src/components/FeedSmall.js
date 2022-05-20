import React from "react";
import classNames from "classnames";

export const FeedSmall = ({
  className,
  img,
  backColor,
  style = {},
  ...props
}) => {
  return (
    <div
      className={classNames("permission-feed-small", className)}
      style={{
        backgroundColor: backColor,
        ...style,
      }}
      {...props}
    >
      <img src={img} className="permission-feed-small-img" alt="main" />
      <div
        style={{
          position: "absolute",
          width: "90%",
          height: "80%",
          filter: "blur(8px)",
          marginTop: "22%",
          backgroundColor: backColor,
          left: "5%",
        }}
        alt="shadow"
      />
    </div>
  );
};
