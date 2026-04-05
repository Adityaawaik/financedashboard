import React, { useContext, useMemo } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FintrackContext } from "../../store/FintrackContext";

const Income_Expense_Chart = () => {
  const { transaction, mode } = useContext(FintrackContext);

  const data = useMemo(() => {
    const monthlyData = {};

    transaction.forEach((t) => {
      const month = new Date(t.date).toLocaleString("default", {
        month: "short",
      });

      if (!monthlyData[month]) {
        monthlyData[month] = {
          month,
          income: 0,
          expense: 0,
        };
      }

      if (t.type === "income") {
        monthlyData[month].income += Number(t.amount);
      } else {
        monthlyData[month].expense += Number(t.amount);
      }
    });

    return Object.values(monthlyData);
  }, [transaction]);

  return (
    <div
      className={`w-full h-90 sm:h-87.5 md:h-100 lg:h-112.5 p-4 rounded-2xl shadow-md ${
        mode ? "bg-[#0f172a] text-white" : "bg-white"
      }`}
    >
      <h2 className="text-center text-lg sm:text-xl font-semibold mb-4">
        Monthly Income vs Expense
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Bar dataKey="income" fill="#22c55e" radius={[6, 6, 0, 0]} />
          <Bar dataKey="expense" fill="#ef4444" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Income_Expense_Chart;
