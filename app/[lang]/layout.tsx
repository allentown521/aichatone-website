import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "@/get-dictionary";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  robots: "max-image-preview:large",
  keywords:
    "AIChatOne,ai chatone, aichatone web, Chrome extension, aichatone windows, aichatone mac, ChatGPT, Gemini, Claude, Bing Copilot, AI conversations, Typingmind, Chathub, Chatbox, chatbox desktop, chatbox windows, chat hub, chat box",
  // Add the canonical URL here
  alternates: {
    canonical: "https://aichatone.com/",
  },
  openGraph: {
    type: "website",
    url: "https://aichatone.com/",
    title: "AIChatOne : ALL-In-One ChatGPT Copilot & chathub & chatbox",
    description:
      "Free Chrome extension for interactive chats with ChatGPT, Gemini, Claude, and Bing Copilot. Enjoy seamless AI conversations and switch between Typingmind, Chathub, and Chatbox to enhance entertainment, information sourcing, or productivity",
    siteName: "AIChatOne",
    images: [
      {
        url: "https://framerusercontent.com/images/5iMLpc3RvbViTmHDN5lCQvEy2w.png", // 替换为你的实际 OG 图片 URL
        width: 1200,
        height: 630,
        alt: "AI Chat One Preview",
      },
    ],
  },
  // ... other existing metadata ...
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        <title>{dictionary?.pageTitle}</title>
        <meta name="description" content={dictionary?.pageDescription} />
        <link rel="alternate" hrefLang="en" href={`https://aichatone.com/en`} />
        <link
          rel="alternate"
          hrefLang="zh-CN"
          href={`https://aichatone.com/zh-CN`}
        />
        <link
          rel="alternate"
          hrefLang="zh-TW"
          href={`https://aichatone.com/zh-TW`}
        />
        <link rel="alternate" hrefLang="ja" href={`https://aichatone.com/ja`} />
        <link rel="alternate" hrefLang="de" href={`https://aichatone.com/de`} />
        <link rel="alternate" hrefLang="fr" href={`https://aichatone.com/fr`} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://aichatone.com"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://umami.aichatone.com/script.js"
          data-website-id="f2919cc6-2394-4136-8ec7-19cd4b36b0f3"
          strategy="afterInteractive"
        />
        {/* AW-11065067122 是 Google ads不是Google Analytics的id */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-11065067122`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11065067122');
          `}
        </Script>
      </body>
    </html>
  );
}
