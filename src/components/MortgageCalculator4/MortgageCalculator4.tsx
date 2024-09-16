"use client";
import { useState } from "react";
import { AppContext } from "./context";
import Form from "./Form";
import "./MortgageCalculator4.css";
import Results from "./Results";
import { IState } from "./model";

const initialState: IState = {
  principalAmount: 0,
  interestAmount: 0,
  totalAmount: 0,
  monthlyPayment: 0,
  currency: '$',
}

const MortgageCalculator4 = () => {

  const [state, dispatch] = useState(initialState);

  return (
    <div>
      <header className="text-2xl">
        <h1 className="header">Loan Payment Calculator</h1>
      </header>

      <main>
        <section>
          <div className="info">
            This is a{" "}
            <span className="highlight">
              SIMPLE INTEREST LOAN PAYMENT CALCULATOR.
            </span>{" "}
            This calculator will help you determine the monthly payments on a
            loan. Simply enter the loan amount, term and interest rate in the
            fields below and click calculate
          </div>
        </section>

        <AppContext.Provider value={{state, dispatch}}>
        <section>
          <div className="row">
            <div className="col col-1">
              <Form />
            </div>
            <div className="col col-2">
              <Results />
            </div>
          </div>
        </section>
        </AppContext.Provider>
      </main>
    </div>
  );
};

export default MortgageCalculator4;
