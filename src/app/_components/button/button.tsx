import React from "react";
import { ButtonProps, ButtonShape } from "./button.types";
import { Size } from "../types/size.type";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
  default: "",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",

  type = "button",
  isLink = false,
  children,
  className,
  animatedIcon = false,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    className,
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { [`${shapeClasses[shape]}`]: shape },
    { "animated-icon": animatedIcon }
  );

  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {children}
    </button>
  );
};
