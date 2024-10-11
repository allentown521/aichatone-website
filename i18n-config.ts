export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de", "ja","zh-CN","zh-TW","fr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
