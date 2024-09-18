import React, { useState } from 'react';

const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [loanTenure, setLoanTenure] = useState<number>(0);
  const [emi, setEmi] = useState<number | null>(null);

  // محاسبه EMI
  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const tenure = loanTenure * 12;

    const emiValue =
      (principal * rate * Math.pow(1 + rate, tenure)) /
      (Math.pow(1 + rate, tenure) - 1);

    setEmi(emiValue);
  };

  return (
    <div>
      <h2>Loan EMI Calculator</h2>

      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Interest Rate (% per annum):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Loan Tenure (years):</label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(Number(e.target.value))}
        />
      </div>

      <button onClick={calculateEMI}>Calculate EMI</button>

      {emi !== null && (
        <div>
          <h3>Your Monthly EMI is: {emi.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
