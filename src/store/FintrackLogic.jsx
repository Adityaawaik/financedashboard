import React, { useEffect, useState } from "react";
import { FintrackContext } from "./FintrackContext";

const FintrackLogic = ({ children }) => {
  const INITIAL_TRANSACTIONS = [
    {
      id: 1,
      date: "2025-01-05",
      desc: "January Salary",
      amount: 5500,
      category: "Salary",
      type: "income",
    },
    {
      id: 2,
      date: "2025-01-08",
      desc: "Rent Payment",
      amount: 800,
      category: "Housing",
      type: "expense",
    },
    {
      id: 3,
      date: "2025-01-12",
      desc: "Grocery Store",
      amount: 127.5,
      category: "Food",
      type: "expense",
    },
    {
      id: 4,
      date: "2025-01-15",
      desc: "Freelance Project",
      amount: 950,
      category: "Freelance",
      type: "income",
    },
    {
      id: 5,
      date: "2025-01-18",
      desc: "Netflix + Spotify",
      amount: 8,
      category: "Entertainment",
      type: "expense",
    },
  ];

  const [transaction, setTransaction] = useState(() => {
    const savedTransaction = localStorage.getItem("transaction");
    return savedTransaction
      ? JSON.parse(savedTransaction)
      : INITIAL_TRANSACTIONS;
  });

  const [expenseDate, setExpenseDate] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("All");
  const [incomeType, setIncomeType] = useState("All");
  const [amount, setAmount] = useState("");
  const [searchTransac, setSearchTransac] = useState("");
  const [userType, setUserType] = useState("Viewer");

  const [mode, setMode] = useState(false);

  const toggleMode = () => setMode(!mode);

  const newExpense = (date, desc, category, type, amount) => {
    const id = crypto.randomUUID();
    const newExp = [
      { date, desc, category, type, amount: Number(amount), id: id },
      ...transaction,
    ];

    setTransaction(newExp);
  };

  const filteredTransactions = transaction
    .filter((transac) =>
      incomeType === "All" ? transac : transac.type === incomeType.toLowerCase()
    )
    .filter((transac) =>
      category === "All"
        ? transac
        : transac.category.toLowerCase() === category.toLowerCase()
    )
    .filter((transac) =>
      searchTransac === ""
        ? transac
        : transac.desc.toLowerCase().includes(searchTransac.toLowerCase())
    );

  const deleteExpense = (id) => {
    const deleteUserExp = transaction.filter((transac) => transac.id !== id);
    setTransaction(deleteUserExp);
  };

  const totalInc_ExpByType = (typeOfInc) => {
    const incomeType = transaction
      .filter((transac) => transac.type === typeOfInc)
      .map((transac) => Number(transac.amount))
      .reduce((acc, curr) => acc + curr, 0);

    return incomeType;
  };

  const totalIncome = totalInc_ExpByType("income");
  const totalExpense = totalInc_ExpByType("expense");

  const totalExpenseTransaction = transaction.filter(
    (transac) => transac.type === "expense"
  ).length;

  const totalBalance = totalIncome - totalExpense;

  const firstFiveTransac = transaction.slice(0, 5);

  const totalExpByCategory = (categoryType) => {
    const exp = transaction
      .filter((transac) => transac.category.toLowerCase() === categoryType)
      .map((transac) => Number(transac.amount))
      .reduce((acc, curr) => acc + curr, 0);

    return exp;
  };

  const houseExpense = totalExpByCategory("housing");
  const foodExpense = totalExpByCategory("food");
  const entertainmentExpense = totalExpByCategory("entertainment");
  const transportExpense = totalExpByCategory("transport");
  const healthExpense = totalExpByCategory("health");
  const shoppingExpense = totalExpByCategory("shopping");

  const highestExpenseTransaction =
    transaction.filter((t) => t.type === "expense").length > 0
      ? transaction
          .filter((t) => t.type === "expense")
          .reduce(
            (max, curr) => (curr.amount > (max?.amount || 0) ? curr : max),
            null
          )
      : null;

  const highestPercentExpense =
    highestExpenseTransaction && totalExpense > 0
      ? Math.round((highestExpenseTransaction.amount * 100) / totalExpense)
      : 0;

  const monthlyData = transaction.reduce((acc, transac) => {
    const month = new Date(transac.date).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (!acc[month]) {
      acc[month] = {
        income: 0,
        expense: 0,
      };
    }

    if (transac.type === "income") {
      acc[month].income += Number(transac.amount);
    } else {
      acc[month].expense += Number(transac.amount);
    }

    return acc;
  }, {});

  const monthlyComparison = Object.keys(monthlyData).map((month) => ({
    month,
    income: monthlyData[month].income,
    expense: monthlyData[month].expense,
    savings: monthlyData[month].income - monthlyData[month].expense,
  }));
  const [editTransaction, setEditTransaction] = useState(null);

  const editExp = (transac) => {
    setEditTransaction(transac);
    setExpenseDate(transac.date);
    setDesc(transac.desc);
    setCategory(transac.category);
    setIncomeType(transac.type);
    setAmount(transac.amount);
  };

  const updateExpense = (id, updatedData) => {
    const updatedTransactions = transaction.map((t) =>
      t.id === id
        ? { ...t, ...updatedData, amount: Number(updatedData.amount) }
        : t
    );

    setTransaction(updatedTransactions);
    setEditTransaction(null);
  };
  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(transaction));
  }, [transaction]);

  return (
    <>
      <FintrackContext.Provider
        value={{
          transaction: filteredTransactions,
          mode,
          expenseDate,
          desc,
          category,
          incomeType,
          amount,
          userType,
          totalIncome,
          totalExpense,
          totalBalance,
          totalExpenseTransaction,
          firstFiveTransac,
          houseExpense,
          foodExpense,
          entertainmentExpense,
          transportExpense,
          healthExpense,
          shoppingExpense,
          highestExpenseTransaction,
          highestPercentExpense,
          monthlyComparison,
          editTransaction,

          toggleMode,
          newExpense,
          setExpenseDate,
          setDesc,
          setCategory,
          setIncomeType,
          setAmount,
          setSearchTransac,
          setUserType,
          deleteExpense,
          editExp,
          updateExpense,
          setEditTransaction,
        }}
      >
        {children}
      </FintrackContext.Provider>
    </>
  );
};

export default FintrackLogic;
