import MortgageCalculator2 from "@/components/MortgageCalculator2/MortgageCalculator2";
import EMICalculator from "@/components/MortgageCalculator3/EMICalculator";
import MortgageCalculator4 from "@/components/MortgageCalculator4/MortgageCalculator4";
import Image from "next/image";
// import MortgageCalculator1 from "../components/MortgageCalculator1/MortgageCalculator1";

export default function Home() {
  return (
    <div>
      {/* <MortgageCalculator1 /> */}
      {/* <MortgageCalculator2 /> */}
      {/* <EMICalculator /> */}
      <MortgageCalculator4 />
    </div>
  );
}
