import { useState } from "react";

import BaseInput, { inputType } from "@/components/baseInput/BaseInput";
import ButtonBase from "@/components/buttonBase/ButtonBase";
import { FormOderTrouser, FormOrderShirt } from "@/components/formOder";
import Header from "@/components/header/Header";
import { SelectType } from "@/components/select/Select";

export default function Tailor() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <div>
      <Header />
      <p className="w-full text-center text-6xl text-red-900 mt-6 uppercase">
        Create Order
      </p>
      <form className="p-12">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <BaseInput
              type="text"
              name="name"
              id="name"
              placeholder=" "
              required
              types={inputType.order}
              label="Customer's name"
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <BaseInput
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder=" "
              required
              types={inputType.order}
              label="Phone Number"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <BaseInput
              type="number"
              name="quantity"
              id="quantity"
              placeholder=" "
              required
              types={inputType.order}
              label="Quantity"
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <BaseInput
              type="date"
              name="deadline"
              id="deadline"
              placeholder=" "
              required
              types={inputType.order}
              label="Deadline"
            />
          </div>
        </div>

        <p className="text-xl uppercase my-10">diagram</p>
        <SelectType
          className="my-10 w-80 max-sm:w-52"
          value={selectedOptions}
          onChange={handleSelectChange}
        />
        {selectedOptions.some((option) => option.value === "SHIRT") && (
          <div>
            <p className="text-xl">Shirt</p>
            <FormOrderShirt />
          </div>
        )}
        {selectedOptions.some((option) => option.value === "TROUSER") && (
          <div>
            <p className="text-xl">Trouser</p>
            <FormOderTrouser />
          </div>
        )}
        {selectedOptions.some((option) => option.value === "SUIT") && (
          <div>
            <p className="text-xl">Suit</p>
            <FormOrderShirt />
          </div>
        )}
        <ButtonBase>Submit</ButtonBase>
      </form>
    </div>
  );
}
