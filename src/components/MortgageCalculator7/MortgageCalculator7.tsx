"use client";

import { useState } from "react";
import "./MortgageCalculator7.css";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const MortgageCalculator7 = () => {
  // States
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [loanTenure, setLoanTenure] = useState<number>(0);
  const [emi, setEmi] = useState<number | null>(null);
  const [totalPayable, setTotalPayable] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  // Calculator
  const calculatorEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const tenure = loanTenure * 12;

    // Formula for EMI
    const emiValue =
      (principal * rate * Math.pow(1 + rate, tenure)) /
      (Math.pow(1 + rate, tenure) - 1);

    setEmi(emiValue);

    // Calculate Total Payable and Total Interest
    const totalPayableValue = emiValue * tenure;
    setTotalPayable(totalPayableValue);

    const totalInterestValue = totalPayableValue - principal;
    setTotalInterest(totalInterestValue);
  };

  return (
    <div className="loan-calculator">
      <div className="top">
        <h2 className="text-4xl">Loan Calculator</h2>

        <form>
          <div className="group h-26 flex flex-col justify-between">
            <div className="title">Amount</div>
            <Input
              type="number"
              value={loanAmount}
              className="bg-white text-black"
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>

          <div className="group h-26 flex flex-col justify-between">
            <div className="title flex flex-col">
              Interest Rate
              <span>(% per annum)</span>
            </div>
            <Input
              type="number"
              value={interestRate}
              className="bg-white text-black"
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>

          <div className="group h-26 flex flex-col justify-between">
            <div className="title">Tenure (in months)</div>
            <Input
              type="number"
              value={loanTenure}
              className="bg-white text-black"
              onChange={(e) => setLoanTenure(Number(e.target.value))}
            />
          </div>
        </form>
      </div>

      <div className="result">
        <div className="left">
          <div className="loan-emi">
            <h3>Loan EMI / Monthly Payment</h3>
            <div className="value">{emi !== null ? emi.toFixed(2) : "0.00"}</div>
          </div>

          <div className="total-interest">
            <h3>Total Interest Payable</h3>
            <div className="value">{totalInterest !== null ? totalInterest.toFixed(2) : "0.00"}</div>
          </div>

          <div className="total-amount">
            <h3>Total Amount Payable</h3>
            <div className="value">{totalPayable !== null ? totalPayable.toFixed(2) : "0.00"}</div>
          </div>

          <Button className="calculate-btn" onClick={calculatorEMI}>
            Calculate EMI
          </Button>
        </div>

        <div className="right">
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator7;
