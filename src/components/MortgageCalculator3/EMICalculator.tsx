"use client"

import React, { useState } from "react";

// InputField component for reusable input fields
interface InputFieldProps {
  label: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  type = "number",
}) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded-md"
      />
    </div>
  );
};

const EMICalculator: React.FC = () => {
  // States for storing user inputs
  const [loanAmount, setLoanAmount] = useState<number | string>("");
  const [interestRate, setInterestRate] = useState<number | string>("");
  const [loanDuration, setLoanDuration] = useState<number | string>("");

  // State for storing the calculated EMI
  const [emi, setEmi] = useState<number | null>(null);

  // Function to calculate EMI
  const calculateEMI = () => {
    const P = Number(loanAmount); // Principal amount
    const r = Number(interestRate) / 12 / 100; // Monthly interest rate
    const n = Number(loanDuration) * 12; // Loan duration in months

    if (P && r && n) {
      const emi =
        (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emi);
    } else {
      alert("Please fill all fields with valid values");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-200 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">EMI Calculator</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateEMI();
        }}
        className="flex flex-col"
      >
        <InputField
          label="Loan Amount (₹)"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
        <InputField
          label="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter annual interest rate"
        />
        <InputField
          label="Loan Duration (Years)"
          value={loanDuration}
          onChange={(e) => setLoanDuration(e.target.value)}
          placeholder="Enter loan duration in years"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
        >
          Calculate EMI
        </button>
      </form>

      {emi !== null && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-md">
          <h3 className="text-lg font-semibold">Estimated EMI: ₹ {emi.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
