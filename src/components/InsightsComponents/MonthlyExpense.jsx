import React, { useContext } from "react";
import { FintrackContext } from "../../store/FintrackContext";

const MonthlyExpense = () => {
  const { monthlyComparison, mode } = useContext(FintrackContext);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">📊 Monthly Comparison</h2>

      {monthlyComparison.length === 0 ? (
        // ✅ EMPTY STATE UI
        <div
          className={`p-6 rounded-xl shadow-md text-center ${
            mode
              ? "bg-[#1e293b] border border-gray-700 text-gray-400"
              : "bg-white border border-gray-200 text-gray-500"
          }`}
        >
          <p className="text-lg font-medium">No Transactions Yet</p>
          <p className="text-sm mt-1">
            Add some transactions to see monthly insights 📈
          </p>
        </div>
      ) : (
        monthlyComparison.map((item) => (
          <div
            key={item.month}
            className={`p-4 rounded-xl shadow-md flex justify-between items-center ${
              mode
                ? "bg-[#1e293b] border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <div>
              <p className="font-semibold">{item.month}</p>
              <p className="text-sm text-gray-400">
                Income: ₹{item.income} | Expense: ₹{item.expense}
              </p>
            </div>

            <div
              className={`font-bold ${
                item.savings >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              ₹{item.savings}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MonthlyExpense;
