import { ChangeEvent } from "react";
import "./Form.css";


const Form = () => {
  const handleLoanTermYears = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleLoanTermInMonth = (e: ChangeEvent<HTMLInputElement>) => {};
  const setLoanTerms = (termInYears: number, termInMonths: number) => {};
  const calculateMonthlyPayment = () => {};

  return (
    <div className="form">
      <div className="form-item loan-amt">
        <label htmlFor="loanAmount">Loan amount</label>
        <input type="number" id="loanAmount" placeholder="E.g 5000" />
        <select>
          <option value="unit">unit</option>
          <option value="$">$</option>
          <option value="£">£</option>
          <option value="€">€</option>
        </select>
      </div>

      {/* Loan term in years */}
      <div className="form-item">
        <label htmlFor="loanTermYears">Loan term in years</label>
        <input type="number" id="loanTermYears" placeholder="E.g 4" />
      </div>

      {/* Loan term in month */}
      <div className="form-item">
        <label htmlFor="loanTermYears">Loan term in month</label>
        <input type="number" id="loanTermYears" placeholder="E.g 48" />
      </div>

      {/* interest rate */}
      <div className="form-item">
        <label htmlFor="loanTermYears">Interest rate per year</label>
        <input type="number" id="loanTermYears" placeholder="E.g 6.5" />
      </div>

      <div>
        <button className="calculateBtn" onClick={calculateMonthlyPayment}>Calculate</button>
      </div>
    </div>
  );
};

export default Form;
