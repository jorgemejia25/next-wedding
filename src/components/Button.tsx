import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  state?:
    | "primary"
    | "secondary"
    | "danger"
    | "warn"
    | "primary-light"
    | "secondary-light";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  className?: string;
  children: string | JSX.Element | JSX.Element[];
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    top: -2,
    transition: {
      duration: 0.2,
      ease: "easeInOuat",
    },
  },
  focus: {
    scale: 1.2,
    top: -3,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

/**
 * Button component with different states and rounded corners.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.type="button"] - The type of the button.
 * @param {string} [props.state="primary"] - The color scheme of the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {string} [props.rounded="md"] - The amount of rounding on the button's corners.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the button.
 * @param {string|JSX.Element|JSX.Element[]} props.children - The content of the button.
 * @returns {JSX.Element} - The rendered button component.
 */
const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  state = "primary",
  disabled = false,
  className = "",
  rounded = "md",
  children,
}) => {
  let buttonClass =
    "flex justify-center text-center relative cursor-pointer z-40 items-center px-4 py-2 border border-transparent text-sm font-bold tracking-widest shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ";

  switch (state) {
    case "primary":
      buttonClass +=
        "text-white bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-fuchsia-500";
      break;
    case "secondary":
      buttonClass +=
        "text-gray-700 bg-orange-400 hover:bg-orange-500 focus:ring-orange-500";
      break;
    case "danger":
      buttonClass +=
        "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500";
      break;
    case "warn":
      buttonClass +=
        "text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500";
      break;
    case "primary-light":
      buttonClass +=
        "text-white bg-fuchsia-400 hover:bg-fuchsia-400 focus:ring-fuchsia-400";
      break;
    case "secondary-light":
      buttonClass +=
        "text-gray-700 bg-orange-200 hover:bg-orange-300 focus:ring-orange-300";
      break;
    default:
      buttonClass +=
        "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
      break;
  }

  switch (rounded) {
    case "none":
      buttonClass += " rounded-none";
      break;
    case "sm":
      buttonClass += " rounded-sm";
      break;
    case "md":
      buttonClass += " rounded-md";
      break;
    case "lg":
      buttonClass += " rounded-xl";
      break;
    case "full":
      buttonClass += " rounded-full";
      break;
    default:
      buttonClass += " rounded-lg";
      break;
  }

  if (disabled) {
    buttonClass += " opacity-50 cursor-not-allowed";
  }

  buttonClass += ` ${className}`;

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="focus"
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </motion.button>
  );
};

export default Button;
