"use client"

import { useContext } from "react";
import { AppContext } from "./context";
import "./Results.css";

const Results = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="result">
      <div className="results-item">
        <div>Total principal amount to pay</div>
        <div>$200</div>
      </div>
      <div className="results-item">
        <div>Total interest to pay</div>
        <div>$50</div>
      </div>
      <hr></hr>
      <div className="results-item total-amt">
        <div>Total Loan amount to pay</div>
        <div>$100</div>
      </div>
      <div className="monthly-payment">
        <div>Monthly payment</div>
        <div className="amount">
          <span className="currency">$</span>
          <span className="value">180</span>
        </div>
      </div>
    </div>
  );
};

export default Results;
