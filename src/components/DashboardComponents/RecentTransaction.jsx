import React from "react";

const RecentTransaction = ({ transaction }) => {
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
        Rs. {transaction.amount}
      </p>
    </div>
  );
};

export default RecentTransaction;
