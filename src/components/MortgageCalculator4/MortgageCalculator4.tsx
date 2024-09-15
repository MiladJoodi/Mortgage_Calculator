import "./MortgageCalculator4.css";

const MortgageCalculator4 = () => {
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

        <section>
          <div>
            <div>{/* <Form /> */}</div>
            <div>{/* <Result /> */}</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MortgageCalculator4;
