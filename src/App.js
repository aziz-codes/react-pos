import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Orders, Finance, Users, Dashboard } from "./pages/index";
import { useStateContext } from "./contexts/ContextProvider";
const App = () => {
  const { activeMenu } = useStateContext();
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <div className="flex relative ">
            {activeMenu ? (
              <div className="fixed w-72 bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0"></div>
            )}

            <div
              className={`min-h-screen w-full ${
                activeMenu ? "md:ml-72" : "flex-2"
              }`}
            >
              <div className="fixed md:static w-full">
                <Navbar />
              </div>
              <div className="ml-4">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/finance" element={<Finance />} />
                  <Route path="/users" element={<Users />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      ) : (
        "Login to Contunue"
      )}
    </>
  );
};

export default App;
