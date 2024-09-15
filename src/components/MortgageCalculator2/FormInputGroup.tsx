"use client"
import { Input } from "../ui/input";

interface FormInputGroupProps {
  text: string;
  icon?: React.ReactNode;
  placeholder: string;
  value?: number;
  oninput?: any;
  onkeyup?: any;
  readOnly?: boolean;
  className?:string;
}

const FormInputGroup = ({
  text,
  icon,
  placeholder,
  value,
  oninput,
  onkeyup,
  readOnly,
  className,
}: FormInputGroupProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center bg-gray-100 px-2 py-1">
        <div className="w-[170px] ">{text}</div>
        {icon}
      </div>
      <Input
        type="number"
        placeholder={placeholder}
        value={value}
        onInput={oninput}
        onKeyUp={onkeyup}
        readOnly={readOnly}
        className={className}
      />
    </div>
  );
};

export default FormInputGroup;
