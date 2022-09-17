import { useState } from "react";
import TransactionForm from "./TransactionForm";

const Overview = ({ income, expense }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="balance-section">
        <p>Balance: {income - expense}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransactionForm />}
      <div className="result-section">
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </>
  );
};

export default Overview;
