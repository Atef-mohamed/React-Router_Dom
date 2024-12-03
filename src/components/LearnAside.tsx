import { NavLink } from "react-router-dom";

const LearnAside = () => {
  return (
    <aside className="px-7 mr-20">
      <nav className="">
        <ul className="flex flex-col gap-4">
          <li className="hover:text-[#149eca] duration-200">
            <NavLink to="/learn" end>
              Quick Start
            </NavLink>
          </li>
          <li className="hover:text-[#149eca] duration-200">
            <NavLink to="/learn/thinking-in-react">thinking in react</NavLink>
          </li>
          <li className="hover:text-[#149eca] duration-200">
            <NavLink to="/learn/installition">installition</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LearnAside;
