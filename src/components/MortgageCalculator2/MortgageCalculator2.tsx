import { FcHome } from "react-icons/fc";
import Form from "./Form";

const MortgageCalculator2 = () => {
  return (
    <div className="container h-screen">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="flex gap-2 justify-center items-center text-2xl">
          <FcHome />
          <span>Mortgage Calculator</span>
        </h1>
        <Form />
      </div>
    </div>
  );
};

export default MortgageCalculator2;
