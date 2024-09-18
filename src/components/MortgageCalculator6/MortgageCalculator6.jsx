"use client";

import { useEffect, useState } from "react";
import "./MortgageCalculator6.css";
import { numberWithCommas } from "./config";

// constants
export const tenureData = [12, 24, 36, 48, 60];

const MortgageCalculator6 = () => {
  // States
  const [cost, setCost] = useState(0);
  const [interest, setInterst] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  //   Calculate Emi
  const calculateEMI = (downpayment) => {
    // EMIamount = [P x R x (1+R)^N]/[(1+R)^N-1]
    if (!cost) return;

    const loanAmt = cost - downpayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;

    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
      ((1 + rateOfInterest) ** numOfYears - 1);
    return Number(EMI / 12).toFixed(0);
  };

  const calculateDP = (emi) => {
    if (!cost) return;

    const downPaymentPercent = 100 - (emi / calculateEMI(0)) * 100;
    return Number((downPaymentPercent / 100) * cost);
  };

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }

    const emi = calculateEMI(downPayment);
    setEmi(emi);
  }, [tenure]);

  //   Update Emi by Slider
  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    const emi = calculateEMI(dp);
    setEmi(emi);
  };

  //   Calculate EMI and update
  const updateDownPayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    const dp = calculateDP(emi);
    setDownPayment(dp);
  };

  const totalDownPayment = () => {
    return numberWithCommas(
      (Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)
    );
  };

  const totalEMI = () => {
    numberWithCommas;
    return numberWithCommas((emi * tenure).toFixed(0));
  };

  return (
    <div className="App">
      <span className="title">EMI Calculator</span>

      {/* Total Cost */}
      <span>Total Cost of Asset</span>
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Total Cost of Assets"
      />

      {/* Interest Rate */}
      <span>Interest Rate (in %)</span>
      <input
        type="number"
        value={interest}
        onChange={(e) => setInterst(e.target.value)}
        placeholder="Interest Rate (in %)"
      />

      {/* Processing Fee */}
      <span>Processing Fee (in %)</span>
      <input
        type="number"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
        placeholder="Processing Fee (in %)"
      />

      {/* Down Payment Slider */}
      <span className="title">Down Payment</span>
      <span className="title" style={{ textDecoration: "underline" }}>
        Total Down Payment - {totalDownPayment()}
      </span>
      <div>
        <input
          type="range"
          min={0}
          max={cost}
          className="slider"
          value={downPayment}
          onChange={updateEMI}
        />
        <div className="lables">
          <label>0</label>
          <b>{numberWithCommas(downPayment)}</b>
          <label>100%</label>
        </div>
      </div>
      {/* Loan Per Month */}
      <span className="title">Loan per Month</span>
      <span className="title" style={{ textDecoration: "underline" }}>
        Total Loan Amount - {totalEMI()}
      </span>
      <div>
        <input
          type="range"
          min={calculateEMI(cost)}
          max={calculateEMI(0)}
          className="slider"
          value={emi}
          onChange={updateDownPayment}
        />
        <div className="lables">
          <label>{numberWithCommas(calculateEMI(cost))}</label>
          <b>{numberWithCommas(emi)}</b>
          <label>{numberWithCommas(calculateEMI(0))}</label>
        </div>
      </div>

      <span className="title">Tenure</span>
      <div className="tenureContainer">
        {tenureData.map((t) => {
          return (
            <button
              onClick={() => setTenure(t)}
              className={`tenure ${t === tenure ? "selected" : ""}`}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MortgageCalculator6;
