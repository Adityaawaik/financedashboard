import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FintrackLogic from "./store/FintrackLogic.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Transaction from "./components/Transaction.jsx";
import AddExpense from "./components/AddExpense.jsx";
import Insights from "./components/Insights.jsx";

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/transaction", element: <Transaction /> },
  { path: "/add-expense", element: <AddExpense /> },
  { path: "/insgights", element: <Insights /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FintrackLogic>
      <RouterProvider router={router} />
    </FintrackLogic>
  </StrictMode>
);
