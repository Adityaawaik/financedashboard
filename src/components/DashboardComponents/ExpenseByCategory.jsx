import React, { useContext } from "react";
import { FintrackContext } from "../../store/FintrackContext";

const ExpenseByCategory = () => {
  const {
    mode,
    houseExpense,
    foodExpense,
    entertainmentExpense,
    transportExpense,
    healthExpense,
    shoppingExpense,
  } = useContext(FintrackContext);

  const categories = [
    { name: "Housing", value: houseExpense.toFixed(2), color: "bg-blue-500" },
    { name: "Food", value: foodExpense.toFixed(2), color: "bg-green-500" },
    {
      name: "Entertainment",
      value: entertainmentExpense.toFixed(2),
      color: "bg-purple-500",
    },
    {
      name: "Transport",
      value: transportExpense.toFixed(2),
      color: "bg-yellow-500",
    },
    { name: "Health", value: healthExpense.toFixed(2), color: "bg-red-500" },
    {
      name: "Shopping",
      value: shoppingExpense.toFixed(2),
      color: "bg-pink-500",
    },
  ];

  return (
    <div
      className={`w-full h-90 sm:h-87.5 md:h-100 lg:h-112.5 p-4 rounded-2xl shadow-md border transition-all duration-300 ${
        mode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <h2 className="text-center text-lg sm:text-xl font-semibold mb-4 tracking-wide">
        Expense By Category
      </h2>

      <div className="space-y-3">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 ${
              mode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {/* Left Side */}
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${cat.color}`} />
              <span className="text-sm font-medium">{cat.name}</span>
            </div>

            {/* Right Side */}
            <span className="text-sm font-semibold tracking-wide">
              ₹ {cat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseByCategory;
