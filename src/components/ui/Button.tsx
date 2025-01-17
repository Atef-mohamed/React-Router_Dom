import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}
const Button = ({ children, className, width, ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} rounded-md p-2 text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
