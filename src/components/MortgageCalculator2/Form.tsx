"use client"
import { DollarSign } from "lucide-react";
import { Button } from "../ui/button";
import FormInputGroup from "./FormInputGroup";
import { useState } from "react";
import { LuBanknote } from "react-icons/lu";
import { CiBank, CiMoneyBill } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";

const Form = () => {
    
  // States
  const [homeValue, setHomeValue] = useState<any>(null);
  const [downPayment, setDownPayment] = useState<any>(null);
  const [loanAmount, setLoanAmount] = useState<any>(null);
  const [interestRate, setInterestRate] = useState<any>(null);
  const [loanDuration, setLoanDuration] = useState<any>(null);
  const [monthlyPayment, setMonthlyPayment] = useState<any>(null);

  
  // Functions
  function calculateLoanAmount() {
    if(homeValue !== null && downPayment !== null){
        const calculatedLoanAmount = homeValue - downPayment
        setLoanAmount(calculatedLoanAmount);
        return calculatedLoanAmount;
    }
  }

  function calculateMonthlyPayment(){
    function percentageToDecimal(percent:number) {
      return percent / 12 / 100;
    }

    // years to month conversion
    function yearsToMonths(year:number) {
      return year * 12;
    }

    setMonthlyPayment(
      (percentageToDecimal(interestRate) * loanAmount) /
        (1 -
          Math.pow(
            1 + percentageToDecimal(interestRate),
            -yearsToMonths(loanDuration)
          ))
    );
    console.log(monthlyPayment)
    return monthlyPayment;
  }

  return (
    <form onSubmit={(e)=> e.preventDefault()} className="flex flex-col gap-2 w-[500px]">
      <FormInputGroup
        text="Home Value"
        icon={<DollarSign size={18} />}
        placeholder="Enter the value of the home"
        onkeyup={calculateLoanAmount}
        value={homeValue as number}
        oninput={(e:any)=>setHomeValue(e.target.value)}
      />
      <FormInputGroup
        text="Down Payment"
        icon={<CiBank size={18} />}
        placeholder="Enter your funds"
        onkeyup={calculateLoanAmount}
        value={downPayment as number}
        oninput={(e:any)=>setDownPayment(e.target.value)}

      />
      <FormInputGroup
        text="Loan Amount"
        icon={<LuBanknote size={18} />}
        placeholder="Funds needed"
        readOnly={true}
        value={loanAmount as number}
        className={"bg-gray-200 cursor-wait"}
      />
      <FormInputGroup
        text="Interest Rates %"
        icon={<CiMoneyBill  size={18} />}
        placeholder="Enter your interest rate"
        value={interestRate as number}
        oninput={(e:any)=>setInterestRate(e.target.value)}
      />
      <FormInputGroup
        text="Loan duration (years)"
        icon={<GrMoney   size={18} />}
        placeholder="Enter the duration or your login years"
        value={loanDuration as number}
        oninput={(e:any)=>setLoanDuration(e.target.value)}
      />
      <Button type="submit" className="w-full" onClick={calculateMonthlyPayment}>
        Calculate
      </Button>
    </form>
  );
};

export default Form;
