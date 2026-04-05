// Transaction.jsx
import React, { useContext } from "react";
import Navbar from "./Navbar";
import TransactionSearchBar from "./TransactionComponent/TransactionSearchBar";
import { FintrackContext } from "../store/FintrackContext";
import Transaction_list from "./TransactionComponent/TransactionList";

const Transaction = () => {
  const { mode, userType, transaction } = useContext(FintrackContext);
  const isAdmin = userType === "Admin";

  return (
    <div
      className={`flex flex-col h-screen overflow-hidden duration-300 ${
        mode ? "bg-[#0f172a] text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="shrink-0">
        <Navbar />
      </div>

      <div className="shrink-0 shadow-[0px_0px_2px_0px_black] flex justify-between p-4 max-[670px]:flex-col">
        <TransactionSearchBar />
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-150">
            <div className="transaction-heading p-4 flex justify-between">
              <p className="shrink-0 w-50 text-center font-semibold">Date</p>
              <p className="shrink-0 w-50 text-center font-semibold">
                Description
              </p>
              <p className="shrink-0 w-50 text-center font-semibold">
                Category
              </p>
              <p className="shrink-0 w-20 text-center font-semibold">Type</p>
              <p className="shrink-0 w-50 text-center font-semibold">Amount</p>

              {isAdmin && (
                <p className="shrink-0 w-40 text-center font-semibold">
                  Actions
                </p>
              )}
            </div>

            <div className="transaction-detail">
              {transaction.map((transac, index) => (
                <Transaction_list transaction={transac} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
