import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  large?: boolean;
}

const Logo = ({ className, large, ...props }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex_center" onClick={() => navigate("/")}>
      <img
        src="/silicontech.png"
        alt="logo"
        className={cn(`object-cover cursor-pointer w-20`, className, {
          "w-[300px]": large,
        })}
        {...props}
      />
    </div>
  );
};

export default Logo;
