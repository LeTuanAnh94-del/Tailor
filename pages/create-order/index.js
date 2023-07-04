import { useTranslation } from "react-i18next";
import { useState } from "react";

import BaseInput, { inputType } from "@/components/baseInput/BaseInput";
import ButtonBase from "@/components/buttonBase/ButtonBase";
import Header from "@/components/header/Header";
import { createOrder } from "@/apis/createOrder.api";
import { FormOderTrouser, FormOrderShirt } from "@/components/formOder";

export default function CreateOrder() {
  const { t } = useTranslation();

  const [phoneNumber, setPhoneNumber] = useState("");

  const [note, setNote] = useState("");

  const [deadline, setDeadline] = useState("");

  const [items, setItems] = useState([
    {
      quantity: "",
      type: "",
      itemInformation: {
        shoulder: "",
        longShirt: "",
        neck: "",
        calfArm: "",
        gile: "",
        chestType: "",
        downShoulder: "",
        longArm: "",
        withinArmpit: "",
        chest: "",
        butt: "",
        handDoor: "",
        lowerWaist: "",
      },
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createOrder(phoneNumber, note, deadline, items);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleItemsChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const handleItemInformationChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index].itemInformation[field] = value;
    setItems(updatedItems);
  };

  return (
    <div>
      <Header />
      <p className="text-center text-6xl text-red-900 mt-4 uppercase mx-2 max-sm:text-4xl">
        {t("information")}
      </p>
      <form className="p-12" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <BaseInput
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder=" "
              required
              types={inputType.order}
              label={`${t("phone-number")}`}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <BaseInput
              type="datetime"
              name="deadline"
              id="deadline"
              placeholder=" "
              required
              types={inputType.order}
              label={`${t("deadline")}`}
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <BaseInput
              type="text"
              name="note"
              id="note"
              placeholder=" "
              required
              types={inputType.order}
              label={`${t("note")}`}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          {items.map((item, index) => (
            <div key={index}>
              <div className="relative z-0 w-full mb-6 group">
                <BaseInput
                  type="text"
                  name={`type-${index}`}
                  id={`type-${index}`}
                  placeholder=" "
                  types={inputType.order}
                  label={`${t("type")}`}
                  value={item.type}
                  onChange={(e) =>
                    handleItemsChange(index, "type", e.target.value)
                  }
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <BaseInput
                  type="number"
                  name={`quantity-${index}`}
                  id={`quantity-${index}`}
                  placeholder=" "
                  types={inputType.order}
                  label={`${t("quantity")}`}
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemsChange(index, "quantity", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6"></div>
        <p className="text-xl uppercase my-10 max-sm:text-base">diagram</p>
        <div>
          <p className="text-xl">{t("suit")}</p>
          <div className="px-5 mt-4">
            {items.map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`shoulder-${index}`}
                    id={`shoulder-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("shoulder")}`}
                    value={item.itemInformation.shoulder}
                    onChange={(e) =>
                      handleItemInformationChange(
                        index,
                        "shoulder",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`longShirt-${index}`}
                    id={`longShirt-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("long-shirt")}`}
                    value={item.itemInformation.longShirt}
                    onChange={(e) =>
                      handleItemInformationChange(
                        index,
                        "longShirt",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`calfArm-${index}`}
                    id={`calfArm-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("calf-arm")}`}
                    value={item.itemInformation.calfArm}
                    onChange={(e) =>
                      handleItemInformationChange(
                        index,
                        "calfArm",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            ))}
            {items.map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`neck-${index}`}
                    id={`neck-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("neck")}`}
                    value={item.itemInformation.neck}
                    onChange={(e) =>
                      handleItemInformationChange(index, "neck", e.target.value)
                    }
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`gile-${index}`}
                    id={`gile-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("gile")}`}
                    value={item.itemInformation.gile}
                    onChange={(e) =>
                      handleItemInformationChange(index, "gile", e.target.value)
                    }
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="text"
                    name={`chestType-${index}`}
                    id={`chestType-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("chest-type")}`}
                    value={item.itemInformation.chestType}
                    onChange={(e) =>
                      handleItemInformationChange(
                        index,
                        "chestType",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            ))}
            {items.map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`downShoulder-${index}`}
                    id={`downShoulder-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("down-shoulder")}`}
                    value={item.itemInformation.downShoulder}
                    onChange={(e) =>
                      handleItemInformationChange(
                        index,
                        "downShoulder",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`longArm-${index}`}
                    id={`longArm-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("long-arm")}`}
                    value={item.itemInformation.longArm}
                    onChange={(e) =>
                      handleItemInformationChange(
                        index,
                        "longArm",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`withinArmpit-${index}`}
                    id={`withinArmpit-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("within-armpit")}`}
                    value={item.itemInformation.withinArmpit}
                    onChange={(e) =>
                      handleItemInformationChange(
                        index,
                        "withinArmpit",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            ))}
            {items.map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`chest-${index}`}
                    id={`chest-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("chest")}`}
                    value={item.itemInformation.chest}
                    onChange={(e) =>
                      handleItemInformationChange(
                        index,
                        "chest",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`butt-${index}`}
                    id={`butt-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("butt")}`}
                    value={item.itemInformation.butt}
                    onChange={(e) =>
                      handleItemInformationChange(index, "butt", e.target.value)
                    }
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`handDoor-${index}`}
                    id={`handDoor-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("hand-door")}`}
                    value={item.itemInformation.handDoor}
                    onChange={(e) =>
                      handleItemInformationChange(
                        index,
                        "handDoor",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            ))}
            {items.map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <BaseInput
                    type="number"
                    name={`lowerWaist-${index}`}
                    id={`lowerWaist-${index}`}
                    placeholder=" "
                    types={inputType.order}
                    label={`${t("lower-waist")}`}
                    value={item.itemInformation.lowerWaist}
                    onChange={(e) =>
                      handleItemInformationChange(
                        index,
                        "lowerWaist",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xl">{t("shirt")}</p>
          <FormOrderShirt />
        </div>
        <div>
          <p className="text-xl">{t("trouser")}</p>
          <FormOderTrouser />
        </div>
        <ButtonBase type="submit">{t("submit")}</ButtonBase>
      </form>
    </div>
  );
}
