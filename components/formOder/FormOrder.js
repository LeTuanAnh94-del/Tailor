import BaseInput, { inputType } from "../baseInput/BaseInput";

export const FormOrderShirt = () => {
  return (
    <div className="px-10">
      <div className="grid md:grid-cols-3 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="shoulder"
            id="shoulder"
            placeholder=" "
            required
            types={inputType.order}
            label="Shoulder"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="longShirt"
            id="longShirt"
            placeholder=" "
            required
            types={inputType.order}
            label="Long Shirt"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="calfArm"
            id="calfArm"
            placeholder=" "
            required
            types={inputType.order}
            label="Calf Arm"
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
            required
            types={inputType.order}
            label="Neck"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="gile"
            id="gile"
            placeholder=" "
            required
            types={inputType.order}
            label="Gile"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="text"
            name="chestType"
            id="chestType"
            placeholder=" "
            required
            types={inputType.order}
            label="Chest Type"
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
            required
            types={inputType.order}
            label="Down Shoulder"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="longArm"
            id="longArm"
            placeholder=" "
            required
            types={inputType.order}
            label="Long Arm"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="withinArmpit"
            id="withinArmpit"
            placeholder=" "
            required
            types={inputType.order}
            label="Within Armpit"
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
            required
            types={inputType.order}
            label="Chest"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="butt"
            id="butt"
            placeholder=" "
            required
            types={inputType.order}
            label="Butt"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="handDoor"
            id="handDoor"
            placeholder=" "
            required
            types={inputType.order}
            label="Hand Door"
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
            required
            types={inputType.order}
            label="Lower Waist"
          />
        </div>
      </div>
    </div>
  );
};

export const FormOderTrouser = () => {
  return (
    <div className="px-10">
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="belly"
            id="belly"
            placeholder=" "
            required
            types={inputType.order}
            label="Belly"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="femoral"
            id="femoral"
            placeholder=" "
            required
            types={inputType.order}
            label="Femoral"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="pipe"
            id="pipe"
            placeholder=" "
            required
            types={inputType.order}
            label="Pipe"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="bottom"
            id="bottom"
            placeholder=" "
            required
            types={inputType.order}
            label="Bottom"
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
            required
            types={inputType.order}
            label="Butt"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="knee"
            id="knee"
            placeholder=" "
            required
            types={inputType.order}
            label="Knee"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="longTrouser"
            id="longTrouser"
            placeholder=" "
            required
            types={inputType.order}
            label="Long Trouser"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <BaseInput
            type="number"
            name="calfLeg"
            id="calfLeg"
            placeholder=" "
            required
            types={inputType.order}
            label="Calf Leg"
          />
        </div>
      </div>
    </div>
  );
};
