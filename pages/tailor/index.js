import { useTranslation } from "react-i18next";

import BaseInput, { inputType } from "@/components/baseInput/BaseInput";
import ButtonBase from "@/components/buttonBase/ButtonBase";
import { FormOderTrouser, FormOrderShirt } from "@/components/formOder";
import Header from "@/components/header/Header";

export default function Tailor() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <p className="text-center text-6xl text-red-900 mt-4 uppercase mx-2 max-sm:text-4xl">
        {t("information")}
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
              label={`${t("customer-name")}`}
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
              label={`${t("phone-number")}`}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6"></div>
        <p className="text-xl uppercase my-10 max-sm:text-base">diagram</p>
        <div>
          <p className="text-xl">{t("shirt")}</p>
          <FormOrderShirt />
        </div>
        <div>
          <p className="text-xl">{t("trouser")}</p>
          <FormOderTrouser />
        </div>
        <div>
          <p className="text-xl">{t("suit")}</p>
          <FormOrderShirt />
        </div>
        <ButtonBase>{t("submit")}</ButtonBase>
      </form>
    </div>
  );
}
