import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import eng from "../language/en.json";
import vie from "../language/vi.json";

const resources = {
  en: {
    translation: eng,
  },
  vi: {
    translation: vie,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
