import { useState } from "react";
import TransactionForm from "./TransactionForm";

const Overview = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="balance-section">
        <p>Balance: {income - expense}</p>
        <button
          className={`btn ${isShow && "cancel"}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransactionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}
      <div className="result-section">
        <div className="expense-box">
          Expense <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className="expense-box">
          Income <span>{income} $</span>
        </div>
      </div>
    </>
  );
};

export default Overview;
