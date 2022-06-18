import React, { useState } from "react";

interface Inputprops {
  onChange: (val: string) => void;
}

const Input = ({ onChange }: Inputprops) => {
  const [value, setvalue] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setvalue(val);

    if (typeof onChange === "function") {
      onChange(val);
    }
  };

  return (
    <input type="text" value={value} onChange={(e) => handleOnChange(e)} />
  );
};

export default Input;