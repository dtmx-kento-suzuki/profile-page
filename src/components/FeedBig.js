import React from "react";
import classNames from "classnames";

export const FeedBig = ({ className, img, style = {}, ...props }) => {
  return (
    <div
      className={classNames("permission-feed-big", className)}
      style={{
        backgroundImage: `url(${img})`,
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          position: "absolute",
          width: "90%",
          height: "80%",
          filter: "blur(8px)",
          marginTop: "20%",
          background: `url(${img})`,
          left: "5%",
          zIndex: -1,
        }}
        alt="shadow"
      />
    </div>
  );
};
