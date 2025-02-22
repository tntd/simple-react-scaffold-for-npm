import React from "react";
import "./Button.less";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  console.log("Button component rendered"); // 查看是否渲染

  return (
    <button className="my-button" onClick={onClick}>
      {label}moco nike
    </button>
  );
};

export default Button;
