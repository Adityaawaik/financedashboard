import React, { useContext } from "react";
import { FintrackContext } from "../../store/FintrackContext";
import { useNavigate } from "react-router-dom";

const Transaction_list = ({ transaction }) => {
  const { userType, deleteExpense, editExp } = useContext(FintrackContext);
  const isAdmin = userType === "Admin";
  const navigate = useNavigate();

  return (
    <div className="each-transaction p-4 flex justify-between items-center">
      <p className="shrink-0 w-50 text-center">{transaction.date}</p>
      <p className="shrink-0 w-50 text-center">{transaction.desc}</p>
      <p className="shrink-0 w-50 text-center">{transaction.category}</p>
      <p
        className={`shrink-0 w-20 p-1 text-center rounded-lg ${
          transaction.type === "income"
            ? "bg-green-200 text-green-800"
            : "bg-red-200 text-red-800"
        }`}
      >
        {transaction.type}
      </p>
      <p
        className={`shrink-0 w-50 text-center font-semibold ${
          transaction.type === "income" ? "text-green-500" : "text-red-500"
        }`}
      >
        ₹ {transaction.amount}
      </p>

      {isAdmin && (
        <div className="shrink-0 w-40 flex items-center justify-center gap-4">
          <button
            className="bg-red-500 text-white font-semibold p-2 rounded-lg cursor-pointer"
            onClick={() => deleteExpense(transaction.id)}
          >
            Delete
          </button>
          <button
            onClick={() => {
              editExp(transaction), navigate("/add-expense");
            }}
            className="bg-blue-500 text-white font-semibold p-2 rounded-lg cursor-pointer"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Transaction_list;
