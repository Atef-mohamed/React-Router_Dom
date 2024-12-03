import { Link, useLocation } from "react-router-dom";

interface IProps {
  statusCode?: number;
  title?: string;
}
const ErrorHandler = ({ statusCode = 500, title = "Server Error" }: IProps) => {
  const { pathname } = useLocation();
  return (
    <div className="fixed inset-0 flex items-center justify-center p-5 w-full">
      <div className="text-center">
        <div className="inline-flex rounded-full bg-red-100 p-4">
          <div className="rounded-full text-red-600  bg-red-200 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
        <h3 className="mt-5 text-[36px] font-bold lg:text-[50px]">
          {statusCode} - {title}
        </h3>
        <p className="mt-5 lg:text-lg">
          Oops something went wrong. Try to refresh this page or <br /> feel
          free to contact us if the problem presists.
        </p>
        <Link
          to={pathname}
          className="inline-block mx-auto bg-[#149eca] p-2 text-white hove:text-white mt-10 rounded-md"
          reloadDocument
        >
          Refresh
        </Link>
      </div>
    </div>
  );
};

export default ErrorHandler;
