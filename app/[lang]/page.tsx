import { LandingPageComponent } from "@/app/[lang]/components/landing-page"
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  
  return <LandingPageComponent lang={lang} dictionary={dictionary}/>
}