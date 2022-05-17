import React from "react";
import classNames from "classnames";
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";

export const Button = ({
  icon,
  type,
  width,
  buttonType = "button",
  size = "normal",
  theme = "green",
  disabled = false,
  widthFluid = false,
  isLoading = false,
  onClick = () => {},
  children,
  className,
}) => {
  return (
    <button
      className={classNames(
        "btn",
        {
          "btn--outline": type === "outline",
          "btn--text": type === "text",
          "btn--disabled": disabled,
        },
        type !== "text" ? "btn--" + theme : "",
        "ripple-effect",
        size,
        className
      )}
      style={{ width: widthFluid ? "100%" : width }}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={buttonType}
    >
      {isLoading ? (
        <ScaleLoader
          css={css`
            width: 60px;
            display: flex;
          `}
          color={
            theme === "green" && type === "outline"
              ? "#35a56e"
              : theme === "yellow" && type === "outline"
              ? "#E9C966"
              : theme === "seafoam" && type === "outline"
              ? "#C0D8CA"
              : theme === "red" && type === "outline"
              ? "#CC4B39"
              : theme === "white"
              ? "#35a56e"
              : "white"
          }
          height={35}
          width={4}
          radius={3}
          margin={10}
        />
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};
