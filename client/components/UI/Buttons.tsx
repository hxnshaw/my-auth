import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactElement,
  isValidElement,
} from "react";
import { ScaleLoader } from "react-spinners";
import classNames from "classnames";
import RArrow from "public/svgs/r-arrow.svg";
import Send from "public/svgs/send.svg";

type Type = "button" | "submit" | "reset" | "link";

type BaseButtonTypeProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type BaseLinkTypeProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type BaseButtonProps = {
  type?: Type;
  text: string;
  bgColor?: string;
  loading?: boolean;
  icon?: "right-arrow" | "send" | ReactElement;
  iconPlacement?: "left" | "right";
} & (BaseButtonTypeProps | BaseLinkTypeProps);

export function BaseButton({
  type,
  text,
  icon,
  iconPlacement,
  loading,
  color = "#3A6AD4",
  className,
  ...props
}: BaseButtonProps) {
  const defaultStyles = `flex ${
    iconPlacement === "left" ? "flex-row-reverse" : ""
  } items-center justify-center gap-5 border text-[.9rem] p-4 w-full h-14 rounded-md`;
  if (type === "link") {
    return (
      <a
        style={{ borderColor: color, color }}
        className={classNames(className, defaultStyles)}
        {...(props as BaseLinkTypeProps)}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      style={{ borderColor: color, color }}
      className={classNames(className, defaultStyles)}
      {...(props as BaseButtonTypeProps)}
    >
      {loading ? <ScaleLoader height={12} color="#ffffff" /> : text}
      {icon === "right-arrow" && <RArrow fill={color} />}
      {icon === "send" && <Send fill={color} />}
      {isValidElement(icon) && icon}
    </button>
  );
}

export function BaseButtonWithColor({
  type,
  text,
  icon,
  iconPlacement,
  loading,
  bgColor = "#3A6AD4",
  className,
  ...props
}: BaseButtonProps) {
  const defaultStyles = `flex ${
    iconPlacement === "left" ? "flex-row-reverse" : ""
  } items-center justify-center text-white text-[.9rem] p-4 w-full h-14 rounded-md`;
  if (type === "link") {
    return (
      <a
        style={{ backgroundColor: bgColor }}
        className={classNames(className, defaultStyles)}
        {...(props as BaseLinkTypeProps)}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      style={{ backgroundColor: bgColor }}
      className={classNames(className, defaultStyles)}
      {...(props as BaseButtonTypeProps)}
    >
      {loading ? <ScaleLoader height={12} color="#ffffff" /> : text}
    </button>
  );
}
