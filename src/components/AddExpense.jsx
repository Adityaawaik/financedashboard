import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { FintrackContext } from "../store/FintrackContext";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const {
    mode,
    expenseDate,
    setExpenseDate,
    desc,
    setDesc,
    category,
    setCategory,
    incomeType,
    setIncomeType,
    amount,
    setAmount,
    newExpense,
    setUserType,
    editTransaction,
    updateExpense,
  } = useContext(FintrackContext);

  const navigate = useNavigate();
  const addExp = (e) => {
    e.preventDefault();

    if (editTransaction) {
      updateExpense(editTransaction.id, {
        date: expenseDate,
        desc,
        category,
        type: incomeType,
        amount,
      });
    } else {
      newExpense(expenseDate, desc, category, incomeType, amount);
    }

    navigate("/transaction");

    setExpenseDate("");
    setDesc("");
    setCategory("All");
    setIncomeType("All");
    setAmount("");
    setUserType("Viewer");
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        mode
          ? "bg-(--bg-dark-theme-color) text-(--text-dark-theme-color)"
          : "bg-(--bg-white-theme-color) text-(--text-white-theme-color)"
      }`}
    >
      <Navbar />

      <div className="flex justify-center min-h-screen items-center p-4">
        <div
          className={`w-150 p-6 rounded-2xl shadow-xl border transition-all duration-300 ${
            mode ? "bg-[#0f172a] border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <h1 className="text-center font-semibold text-3xl mb-6">
            {editTransaction ? "Update Expense" : "Add Expense"}
          </h1>

          <form onSubmit={addExp} className="space-y-4">
            <div>
              <label
                htmlFor="expenseDate"
                className="text-sm font-medium opacity-80"
              >
                Expense Date
              </label>
              <input
                type="date"
                id="expenseDate"
                className={`w-full p-2 mt-2 rounded-lg border outline-0 transition ${
                  mode
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "bg-gray-50 border-gray-300 text-black"
                } focus:ring-2 focus:ring-blue-500`}
                onChange={(e) => setExpenseDate(e.target.value)}
                value={expenseDate}
                required
              />
            </div>

            <div>
              <label htmlFor="desc" className="text-sm font-medium opacity-80">
                Description
              </label>
              <input
                type="text"
                id="desc"
                placeholder="Freelance Project , Pharmacy , Concert tickets..."
                className={`w-full p-2 mt-2 rounded-lg border outline-0 transition ${
                  mode
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    : "bg-gray-50 border-gray-300 text-black placeholder-gray-500"
                } focus:ring-2 focus:ring-blue-500`}
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                required
              />
            </div>

            <div className="flex gap-3 max-[670px]:flex-col">
              <select
                className={`w-full p-2 mt-2 rounded-lg border outline-0 transition ${
                  mode
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "bg-gray-50 border-gray-300 text-black"
                } focus:ring-2 focus:ring-blue-500`}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                value={category}
                required
              >
                <option>Category</option>
                <option>Salary</option>
                <option>Housing</option>
                <option>Food</option>
                <option>Entertainment</option>
                <option>Transport</option>
                <option>Health</option>
                <option>Shopping</option>
              </select>

              <select
                className={`w-full p-2 mt-2 rounded-lg border outline-0 transition ${
                  mode
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "bg-gray-50 border-gray-300 text-black"
                } focus:ring-2 focus:ring-blue-500`}
                onChange={(e) => setIncomeType(e.target.value)}
                value={incomeType}
                required
              >
                <option value="All">Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="amount"
                className="text-sm font-medium opacity-80"
              >
                Amount
              </label>
              <input
                type="number"
                placeholder="₹ 2000"
                className={`w-full p-2 mt-2 rounded-lg border outline-0 transition ${
                  mode
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    : "bg-gray-50 border-gray-300 text-black placeholder-gray-500"
                } focus:ring-2 focus:ring-blue-500`}
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                required
                id="amount"
              />
            </div>

            <button
              className="w-full p-2 mt-4 rounded-xl font-semibold text-white 
              bg-linear-to-r from-green-400 to-green-600 
              hover:from-green-500 hover:to-green-700 
              transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              {editTransaction ? "Update Transaction" : "Add Transaction"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
