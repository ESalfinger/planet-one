import i18next from "i18next";

import english from "./english";
import german from "./german";

i18next.init({
  lng: localStorage.getItem("lng") || "de",
  debug: true,
  resources: {
    en: { translation: english },
    de: { translation: german }
  }
});

// Add this line to your app entrypoint. Usually it is src/index.js
// import './i18n/init';
