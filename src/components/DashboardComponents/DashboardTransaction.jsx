import React, { useContext } from "react";
import { FintrackContext } from "../../store/FintrackContext";

const Dashboard_Transaction = () => {
  const {
    mode,
    totalIncome,
    totalExpense,
    totalBalance,
    totalExpenseTransaction,
  } = useContext(FintrackContext);
  return (
    <>
      <div
        className={`p-6 rounded-2xl shadow-lg border transition hover:scale-[1.02] shrink-0 w-100 ${
          mode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold opacity-80">Total Balance</h2>
          <span className="text-2xl">💰</span>
        </div>

        <p className="text-3xl font-bold text-blue-500">
          ₹ {totalBalance.toFixed(2)}
        </p>
      </div>

      <div
        className={`p-6 rounded-2xl shadow-lg border transition hover:scale-[1.02] shrink-0 w-100 ${
          mode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold opacity-80">Total Income</h2>
          <span className="text-2xl">📈</span>
        </div>

        <p className="text-3xl font-bold text-green-500">
          ₹ {totalIncome.toFixed(2)}
        </p>
      </div>

      <div
        className={`p-6 rounded-2xl shadow-lg border transition hover:scale-[1.02] shrink-0 w-100 ${
          mode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold opacity-80">Total Expense</h2>
          <span className="text-2xl">📉</span>
        </div>

        <p className="text-3xl font-bold text-red-500">
          ₹ {totalExpense.toFixed(2)}
        </p>
        <p className="text-1xl text-gray-400 mt-4">
          {totalExpenseTransaction} transactions
        </p>
      </div>
    </>
  );
};

export default Dashboard_Transaction;
