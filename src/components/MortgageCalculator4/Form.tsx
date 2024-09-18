import { ChangeEvent, useContext, useState } from "react";
import "./Form.css";
import { AppContext } from "./context";

const Form = () => {
  const { state, dispatch } = useContext(AppContext);

  // States
  const [principal, setPrincipal] = useState<number>(5000);
  const [loanTermInYears, setLoanTermInYears] = useState<number>(4);
  const [loanTermInMonths, setLoanTermInMonths] = useState<number>(48);
  const [interestRate, setInterestRate] = useState<number>(6.5);

  // Functions
  const handleLoanTermYears = (e: ChangeEvent<HTMLInputElement>) => {
    const termInYears:number = Number(e.target.value);
    const termInMonths: number = termInYears / 12;
    setLoanTerms(termInYears, termInMonths)
  };

  const handleLoanTermInMonths = (e: ChangeEvent<HTMLInputElement>) => {
    const termInMonth: number = Number(e.target.value);
    const termInYears: number = termInMonth / 12;
    setLoanTermInMonths(termInMonth)

  };

  const setLoanTerms = (termInYears: number, termInMonths: number) => {
    setLoanTermInYears(termInYears);
    setLoanTermInMonths(termInMonths);
  };
  const calculateMonthlyPayment = () => {};

  return (
    <div className="form">
      <div className="form-item loan-amt">
        <label htmlFor="loanAmount">Loan amount</label>
        <input
          type="number"
          id="loanAmount"
          placeholder="E.g 5000"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
        <select value={state.currency} onChange={
          (e)=> dispatch(prevState => ({
            ...prevState,
            currency: e.target.value
          }))
        }>
          <option value="unit">Unit</option>
          <option value="$">$</option>
          <option value="£">£</option>
          <option value="€">€</option>
        </select>
      </div>

      {/* Loan term in years */}
      <div className="form-item">
        <label htmlFor="loanTermYears">Loan term in years</label>
        <input
          type="number"
          id="loanTermYears"
          placeholder="E.g 4"
          value={loanTermInYears}
          onChange={(e) => handleLoanTermYears(e)}
        />
      </div>

      {/* Loan term in month */}
      <div className="form-item">
        <label htmlFor="loanTermYears">Loan term in month</label>
        <input
          type="number"
          id="loanTermYears"
          placeholder="E.g 48"
          value={loanTermInMonths}
          onChange={(e) => handleLoanTermInMonths(e)}
        />
      </div>

      {/* interest rate */}
      <div className="form-item">
        <label htmlFor="loanTermYears">Interest rate per year</label>
        <input
          type="number"
          id="loanTermYears"
          placeholder="E.g 6.5"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>

      <div>
        <button className="calculateBtn" onClick={calculateMonthlyPayment}>
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Form;
