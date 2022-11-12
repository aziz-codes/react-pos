import React from "react";
import { FcPositiveDynamic } from "react-icons/fc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { links } from "../data/dummy";
import { NavLink, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleClose = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // const handleNavClick = () =>{
  //   if(activeMenu && screenSize >900){

  //   }
  // }

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-100 m-2";
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2 bg-blue-400";
  return (
    <div
      className=" h-screen md:overflow-hidden overflow-auto
  md:hover:overflow-auto pb-10 shadow-xl"
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ">
            <Link
              to="/dashboard"
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight dark:text-white text-slate-900"
            >
              <FcPositiveDynamic className="h-10 w-10" />
              <span className="font-extrabold text-xl tracking-tight">
                Shoppify
              </span>
            </Link>

            <button onClick={handleClose}>
              <IoIosCloseCircleOutline />
            </button>
          </div>

          <div className="pb-10 overflow-y-auto mt-14">
            {links.map((item, index) => (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={handleClose}
                >
                  {item.icon}
                  <span className="font-semibold tracking-normal">
                    {item.label}
                  </span>
                </NavLink>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
