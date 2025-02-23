import React from "react";
import svgDemo from "./2.svg";
import "./Button.less";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <>
      <button className="my-button" onClick={onClick}>
        {label}
      </button>
      <img src={svgDemo} />
    </>
  );
};

export default Button;
