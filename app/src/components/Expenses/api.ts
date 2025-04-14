import ky from "ky";

export const getTransactionFiles = () =>
  ky.get("http://localhost:8000/expenses/transacciones");
