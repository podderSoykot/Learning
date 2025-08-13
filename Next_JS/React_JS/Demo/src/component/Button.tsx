import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}

const Button = ({ children, onClick, color = "danger" }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
