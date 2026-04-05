import React, { useContext } from "react";
import { FintrackContext } from "../../store/FintrackContext";

const Transaction_SearchBar = () => {
  const { mode, setIncomeType, setCategory, setSearchTransac } =
    useContext(FintrackContext);
  return (
    <>
      <div className="search-transaction max-[670px]:flex max-[670px]:justify-center max-[670px]:mb-4 ">
        <input
          className={`"w-52 appearance-none  border border-gray-300 dark:border-gray-700 px-4 py-2 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer   transition-all duration-200 max-[670px]:w-full ${
            mode ? "placeholder-white" : "placeholder-black"
          }`}
          type="text"
          name="searchTransaction"
          placeholder="Search Transaction"
          onChange={(e) => setSearchTransac(e.target.value)}
        />
      </div>
      <div className="types max-[670px]:flex max-[670px]:justify-center max-[670px]:mb-4">
        <div className="relative w-52 max-[670px]:w-full">
          <select
            name="allTypes"
            className="w-full appearance-none  border border-gray-300 dark:border-gray-700 px-4 py-2 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all duration-200 "
            onChange={(e) => setIncomeType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
            ▼
          </div>
        </div>
      </div>

      <div className="types max-[670px]:flex max-[670px]:justify-center max-[670px]:mb-4">
        <div className="relative w-52 max-[670px]:w-full">
          <select
            name="categories"
            className="w-full appearance-none  border border-gray-300 dark:border-gray-700 px-4 py-2 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all duration-200"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Category</option>
            <option value="Salary">Salary</option>
            <option value="Housing">Housing</option>
            <option value="Food">Food</option>
            <option value="Entertainmnet">Entertainmnet</option>
            <option value="Transport">Transport</option>
            <option value="Health">Health</option>
            <option value="Shopping">Shopping</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
            ▼
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction_SearchBar;
