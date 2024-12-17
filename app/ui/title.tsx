import React from "react";
import { TitleProps } from "../lib/definitions";

const Title: React.FC<TitleProps> = ({
  title,
  subtitle,
  textColor = "text-primary",
  className = "",
}) => {
  return (
    <header className={`p-6 ${textColor}`}>
      <div className="container mx-auto">
        <h1 className={`text-4xl font-bold ${className}`}>{title}</h1>
        {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
      </div>
    </header>
  );
};

export default Title;