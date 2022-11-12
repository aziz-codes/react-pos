import React, { useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { useStateContext } from "../contexts/ContextProvider";
const Navbar = () => {
  // console.log(useStateContext);
  const { screenSize, setScreenSize, setActiveMenu } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });
  // test commit
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {
        <HiMenu
          className="text-sky-500 h-6 w-6"
          onClick={() => {
            setActiveMenu((prevState) => !prevState);
          }}
        />
      }
    </div>
  );
};

export default Navbar;
