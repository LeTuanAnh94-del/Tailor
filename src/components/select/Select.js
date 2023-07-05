import React from "react";
import Select from "react-select";

const options = [
  { value: "SHIRT", label: "Shirt" },
  { value: "SUIT", label: "Suit" },
  { value: "TROUSER", label: "Trouser" },
];

export const SelectType = ({ className, value, onChange }) => (
  <div>
    <Select
      isMulti
      name="type"
      classNamePrefix="Select"
      options={options}
      className={className}
      value={value}
      onChange={onChange}
    />
  </div>
);
