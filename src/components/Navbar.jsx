import React, { useContext, useState } from "react";
import { GoGraph } from "react-icons/go";
import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { FintrackContext } from "../store/FintrackContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { toggleMode, mode, setUserType, userType } =
    useContext(FintrackContext);

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`relative p-4 flex items-center justify-between shadow-md ${
        mode ? "bg-[#0f172a] text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center font-semibold gap-2">
        <GoGraph className="text-[2rem] p-[0.3rem] bg-[#4A5CFF] text-white rounded-lg" />
        <span className="max-[450px]:hidden">Fintrack</span>
      </div>

      <nav className="flex items-center max-[700px]:hidden">
        <ul className="flex gap-8">
          <li onClick={() => navigate("/")} className="cursor-pointer">
            Dashboard
          </li>
          <li
            onClick={() => navigate("/transaction")}
            className="cursor-pointer"
          >
            Transactions
          </li>
          <li onClick={() => navigate("/insgights")} className="cursor-pointer">
            Insights
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer mr-2 text-[1.4rem] hidden max-[700px]:flex ml-4"
        >
          <FaBars />
        </button>

        <div className="relative w-32 max-[670px]:w-full">
          <select
            className="w-full appearance-none border border-gray-300 dark:border-gray-700 px-4 py-2 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="Viewer">Viewer</option>
            <option value="Admin">Admin</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
            ▼
          </div>
        </div>

        <button onClick={toggleMode} className="cursor-pointer">
          {mode ? (
            <IoSunnyOutline className="text-2xl" />
          ) : (
            <IoIosMoon className="text-2xl" />
          )}
        </button>

        {/* Add Button */}
        <button
          onClick={() => navigate("/add-expense")}
          className={`w-20 bg-[#4A5CFF] font-semibold text-white p-1 rounded-lg ${
            userType === "Viewer" && "hidden"
          }`}
        >
          Add
        </button>
      </div>

      <nav
        className={`absolute top-full left-0 w-full p-4 shadow-md z-50 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        } ${mode ? "bg-[#1e293b]" : "bg-white"}`}
      >
        <ul className="flex flex-col gap-4">
          <li
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            className="cursor-pointer"
          >
            Dashboard
          </li>

          <li
            onClick={() => {
              navigate("/transaction");
              setIsOpen(false);
            }}
            className="cursor-pointer"
          >
            Transactions
          </li>

          <li
            onClick={() => {
              navigate("/insgights");
              setIsOpen(false);
            }}
            className="cursor-pointer"
          >
            Insights
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
