import React from "react";
import Link from "next/link";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children, href }) => {
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;