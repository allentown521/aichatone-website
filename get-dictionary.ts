import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  ja: () => import("./dictionaries/ja.json").then((module) => module.default),
  "zh-CN": () => import("./dictionaries/zhCN.json").then((module) => module.default),
  "zh-TW": () => import("./dictionaries/zhTW.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
