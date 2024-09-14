import { DollarSign } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import FormInputGroup from "./FormInputGroup";

const Form = () => {
  return (
    <form className="flex flex-col gap-2 w-96">
      <FormInputGroup
        text="Home Value"
        icon={<DollarSign size={18} />}
        placeholder="Enter the value of the home"
      />
      <FormInputGroup
        text="Down Payment"
        icon={<DollarSign size={18} />}
        placeholder="Enter your funds"
      />
      <FormInputGroup
        text="Loan Amount"
        icon={<DollarSign size={18} />}
        placeholder="Funds needed"
        readOnly={true}
      />
      <Button type="submit" className="w-full">
        Calculate
      </Button>
    </form>
  );
};

export default Form;
