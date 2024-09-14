"use client"
import { useState } from 'react';
import './MortgageCalculator1.css';

interface FormData{
  amount: string;
  downPayment: string;
  interestRate: string;
  loanTerm: string
}

const initialState = {
  amount: '',
  downPayment: '',
  interestRate: '',
  loanTerm: '',
};

function MortgageCalculator1() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [payment, setPayment] = useState<string | null>(null);
  const [total, setTotal] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    calculateMonthlyPayment();
  };

  const calculateMonthlyPayment = () => {
    const { amount, downPayment, interestRate, loanTerm } = formData;

    const loanAmount =
      parseFloat(amount) - (downPayment ? parseFloat(downPayment) : 0);

    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    const numerator = loanAmount * r * Math.pow(1 + r, n);
    const denumerator = Math.pow(1 + r, n) - 1;

    const monthlyPayment = (numerator / denumerator).toFixed(2);
    setPayment(monthlyPayment);

    const totalPayable = (parseFloat(monthlyPayment) * n).toFixed(2);
    setTotal(totalPayable);
    
    const totalInterest = (parseFloat(totalPayable) - loanAmount).toFixed(2);
    setInterest(totalInterest);
  };
  return (
    <div className='mortgage-container'>
      <h2>Mortgage Payment Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Home Price ($):</label>
          <input
            type='number'
            name='amount'
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Down Payment ($):</label>
          <input
            type='number'
            name='downPayment'
            value={formData.downPayment}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Interest Rate (%):</label>
          <input
            type='number'
            name='interestRate'
            value={formData.interestRate}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Loan Term (years):</label>
          <input
            type='number'
            name='loanTerm'
            value={formData.loanTerm}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Calculate</button>
      </form>
      {payment && (
        <div>
          <h3>Monthly Payment: {payment}</h3>
          <h3>Total Loan Payment: {total}</h3>
          <h3>Total Interest Payment: {interest}</h3>
        </div>
      )}
    </div>
  );
}

export default MortgageCalculator1;