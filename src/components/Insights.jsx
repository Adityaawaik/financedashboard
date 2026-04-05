import React, { useContext } from "react";
import Navbar from "./Navbar";
import { FintrackContext } from "../store/FintrackContext";
import TopSpendingExpense from "./InsightsComponents/TopSpendingExpense";
import MonthlyExpense from "./InsightsComponents/MonthlyExpense";

const Insights = () => {
  const { mode } = useContext(FintrackContext);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        mode ? "bg-[#0f172a] text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar />

      <div className="p-6  ">
        <TopSpendingExpense />
      </div>

      <div className="mt-8 w-full  p-6">
        <MonthlyExpense />
      </div>
    </div>
  );
};

export default Insights;
