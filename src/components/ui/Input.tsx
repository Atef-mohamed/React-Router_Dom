import { InputHTMLAttributes } from "react";

// interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="border-[1px] border-gray-300 shadow-md bg-gray-500 w-full
       focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 
       rounded-md text-md py-3 px-3"
      {...rest}
    ></input>
  );
};

export default Input;
