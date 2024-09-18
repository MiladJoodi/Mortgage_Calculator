"use client";

import { useState } from "react";
import "./MortgageCalculator6.css";

// constants
export const tenureData = [12,24,36,48,60];

const MortgageCalculator6 = () => {
  // States
  const [cost, setCost] = useState(0);
  const [interest, setInterst] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

//   calculate Emi
  const calculateEMI = () => {};


//   Update Emi by Slider
  const updateEMI = (e) => {
    if (!cost) return;
    
    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0))
  };

//   Calculate EMI and update
  const updateDownPayment = (e) => {
    if (!cost) return;
    
    const emi = Number(e.target.value);
    setEmi(dp.toFixed(0));
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
          <b>{downPayment}</b>
          <label>100%</label>
        </div>
      </div>
      {/* Loan Per Month */}
      <span className="title">Loan per Month</span>
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
          <label>{calculateEMI(cost)}</label>
          <b>{downPayment}</b>
          <label>{calculateEMI(0)}</label>
        </div>
      </div>

      <span className="title">Tenure</span>
      <div className="tenureContainer"></div>
      {tenureData.map((t)=>{
        return <button onClick={()=> setTenure(t)} className={`tenure ${t === tenure ? "selected": ""}`}>
            {t}
        </button>
      })}

    </div>
  );
};

export default MortgageCalculator6;
