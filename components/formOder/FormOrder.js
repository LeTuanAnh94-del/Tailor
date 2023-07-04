import { useTranslation } from "react-i18next";

import BaseInput, { inputType } from "../baseInput/BaseInput";

export const FormOrderShirt = () => {
  const { t } = useTranslation();

  return (
    <div className="px-5 mt-4">
      <div className="grid md:grid-cols-3 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="shoulder"
            id="shoulder"
            placeholder=" "
            types={inputType.order}
            label={`${t("shoulder")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="longShirt"
            id="longShirt"
            placeholder=" "
            types={inputType.order}
            label={`${t("long-shirt")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="calfArm"
            id="calfArm"
            placeholder=" "
            types={inputType.order}
            label={`${t("calf-arm")}`}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="neck"
            id="neck"
            placeholder=" "
            types={inputType.order}
            label={`${t("neck")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="gile"
            id="gile"
            placeholder=" "
            types={inputType.order}
            label={`${t("gile")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="text"
            name="chestType"
            id="chestType"
            placeholder=" "
            types={inputType.order}
            label={`${t("chest-type")}`}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="downShoulder"
            id="downShoulder"
            placeholder=" "
            types={inputType.order}
            label={`${t("down-shoulder")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="longArm"
            id="longArm"
            placeholder=" "
            types={inputType.order}
            label={`${t("long-arm")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="withinArmpit"
            id="withinArmpit"
            placeholder=" "
            types={inputType.order}
            label={`${t("within-armpit")}`}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="chest"
            id="chest"
            placeholder=" "
            types={inputType.order}
            label={`${t("chest")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="butt"
            id="butt"
            placeholder=" "
            types={inputType.order}
            label={`${t("butt")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="handDoor"
            id="handDoor"
            placeholder=" "
            types={inputType.order}
            label={`${t("hand-door")}`}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="lowerWaist"
            id="lowerWaist"
            placeholder=" "
            types={inputType.order}
            label={`${t("lower-waist")}`}
          />
        </div>
      </div>
    </div>
  );
};

export const FormOderTrouser = () => {
  const { t } = useTranslation();

  return (
    <div className="px-5 mt-4">
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="belly"
            id="belly"
            placeholder=" "
            types={inputType.order}
            label={`${t("belly")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="femoral"
            id="femoral"
            placeholder=" "
            types={inputType.order}
            label={`${t("femoral")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="pipe"
            id="pipe"
            placeholder=" "
            types={inputType.order}
            label={`${t("pipe")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="bottom"
            id="bottom"
            placeholder=" "
            types={inputType.order}
            label={`${t("bottom")}`}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="butt"
            id="butt"
            placeholder=" "
            types={inputType.order}
            label={`${t("butt")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="knee"
            id="knee"
            placeholder=" "
            types={inputType.order}
            label={`${t("knee")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="longTrouser"
            id="longTrouser"
            placeholder=" "
            types={inputType.order}
            label={`${t("long-trouser")}`}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="calfLeg"
            id="calfLeg"
            placeholder=" "
            types={inputType.order}
            label={`${t("calf-leg")}`}
          />
        </div>
      </div>
    </div>
  );
};
