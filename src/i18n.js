import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import lc from "./locales/lc.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    lc: {
      translation: lc,
    },
  },
  lng: "lc",
  fallbackLng: "lc",
  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
});

export default i18n;
