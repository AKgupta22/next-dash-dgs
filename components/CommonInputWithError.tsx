import { Label, TextInput } from "flowbite-react";
import React from "react";

interface CommonInputWithErrorProps {
  value: string | undefined;
  changeHandler: (e: React.ChangeEvent) => void;
  touched: boolean | undefined;
  errorText: string | undefined;
  label: string;
  name: string;
  type: string | null;
}

const CommonInputWithError = ({
  value,
  changeHandler,
  touched,
  errorText,
  label,
  name,
  type,
}: CommonInputWithErrorProps): React.JSX.Element => {
  return (
    <div>
      <div className="mb-2 block">
        <Label color="gray" value={label} />
      </div>
      <TextInput
        placeholder={`Enter ${label.toLowerCase()}`}
        color="gray"
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={changeHandler}
        helperText={
          touched && errorText ? (
            <p className="text-xs text-red-600">{errorText}</p>
          ) : null
        }
      />
    </div>
  );
};

export default CommonInputWithError;
