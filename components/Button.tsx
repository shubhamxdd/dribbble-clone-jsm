import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props {
  title: string;
  type: "button" | "submit";
  isSubmitting: boolean;
  bgColor?: string;
  textColor?: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
}

const Button = ({
  isSubmitting,
  leftIcon,
  title,
  type,
  bgColor,
  handleClick,
  rightIcon,
  textColor,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting || false}
      className={`flexCenter gap-3 px-4 py-3 
    ${textColor ? textColor : "text-white"} 
    ${
      isSubmitting ? "bg-black/50" : bgColor ? bgColor : "bg-primary-purple"
    } rounded-xl text-sm font-medium max-md:w-full`}
      onClick={handleClick}
    >
      {leftIcon && (
        <Image src={leftIcon} width={14} height={14} alt="left icon" />
      )}
      {title}
      {rightIcon && (
        <Image src={rightIcon} width={14} height={14} alt="right icon" />
      )}
    </button>
    // <button
    //   type={type || "button"}
    //   disabled={isSubmitting}
    //   className={`flexCenter gap-3 px-4 py-3 rounded-xl text-sm font-medium max-md:w-full ${
    //     isSubmitting ? "bg-black/50" : bgColor ? bgColor : "bg-primary-purple"
    //   } ${textColor ? textColor : "text-white"}`}
    //   onClick={handleClick}
    // >
    //   {leftIcon && (
    //     <Image src={leftIcon} width={14} height={14} alt="left icon" />
    //   )}
    //   {title}
    //   {rightIcon && (
    //     <Image src={rightIcon} width={14} height={14} alt="right icon" />
    //   )}
    // </button>
  );
};

export default Button;
