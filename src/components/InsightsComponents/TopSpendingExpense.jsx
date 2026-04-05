import React, { useContext } from "react";
import { FintrackContext } from "../../store/FintrackContext";

const TopSpendingExpense = () => {
  const { mode, highestExpenseTransaction, highestPercentExpense } =
    useContext(FintrackContext);
  if (!highestExpenseTransaction) {
    return <div className="p-6 text-center">No data available</div>;
  }
  return (
    <div
      className={`w-full max-w-md p-6 rounded-2xl shadow-lg transition-all duration-300 ${
        mode
          ? "bg-[#1e293b] border border-gray-700"
          : "bg-white border border-gray-200"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">💡 Top Spending Category</h2>

      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-600">
          {highestExpenseTransaction.category}
        </span>

        <span className="text-sm text-gray-400">
          {highestPercentExpense.toFixed(2)}% of total
        </span>
      </div>

      <div className="text-3xl font-bold text-red-500 mb-2">
        ₹{highestExpenseTransaction.amount}
      </div>

      <p className="text-sm text-gray-400">
        You spent the highest on{" "}
        <span className="font-semibold text-red-500">
          {highestExpenseTransaction.category}
        </span>{" "}
        this month.
      </p>

      <div className="mt-4 text-xs text-gray-500">
        Date: {highestExpenseTransaction.date}
      </div>
    </div>
  );
};

export default TopSpendingExpense;
