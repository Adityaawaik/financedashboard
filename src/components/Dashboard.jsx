import React, { useContext } from "react";
import Navbar from "./Navbar";

import Dashboard_Transaction from "./DashboardComponents/DashboardTransaction";
import IncomeExpenseChart from "./DashboardComponents/IncomeExpenseChart";
import RecentTransaction from "./DashboardComponents/RecentTransaction";
import ExpenseByCategory from "./DashboardComponents/ExpenseByCategory";
import { FintrackContext } from "../store/FintrackContext";

const Dashboard = () => {
  const { mode, firstFiveTransac } = useContext(FintrackContext);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        mode ? "bg-[#0f172a] text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar />

      <div className="overflow-x-auto px-6 pt-6">
        <div className="flex gap-4 min-w-125 justify-between">
          <Dashboard_Transaction />
        </div>
      </div>

      <div className="flex justify-center max-[700px]:flex-col">
        <div className="p-6 w-[50%] max-[700px]:w-full">
          <IncomeExpenseChart />
        </div>
        <div className="p-6 w-[50%] max-[700px]:w-full">
          <ExpenseByCategory />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold  p-6">Recent Transactions</h2>

        <div className="overflow-x-auto px-6 pb-6">
          <div className="min-w-175">
            {firstFiveTransac.map((transac) => (
              <RecentTransaction transaction={transac} key={transac.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
