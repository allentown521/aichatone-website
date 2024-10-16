import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { i18n, type Locale } from "../../i18n-config";

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
  title: "AI Chat One - Chat with AI Models",
  robots: "max-image-preview:large",
  description: "Free Chrome extension for interactive chats with ChatGPT, Gemini, Claude, and Bing Copilot. Enjoy seamless AI conversations and switch between Typingmind, Chathub, and Chatbox to enhance entertainment, information sourcing, or productivity.",
  keywords: "AIChatOne,ai chatone, aichatone web, Chrome extension, aichatone windows, aichatone mac, ChatGPT, Gemini, Claude, Bing Copilot, AI conversations, Typingmind, Chathub, Chatbox, chatbox desktop, chatbox windows, chat hub, chat box",
  // Add the canonical URL here
  alternates: {
    canonical: 'https://aichatone.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://aichatone.com/',
    title: 'AIChatOne : ALL-In-One ChatGPT Copilot & chathub & chatbox',
    description: 'Free Chrome extension for interactive chats with ChatGPT, Gemini, Claude, and Bing Copilot. Enjoy seamless AI conversations and switch between Typingmind, Chathub, and Chatbox to enhance entertainment, information sourcing, or productivity',
    siteName: 'AIChatOne',
    images: [
      {
        url: 'https://framerusercontent.com/images/5iMLpc3RvbViTmHDN5lCQvEy2w.png', // 替换为你的实际 OG 图片 URL
        width: 1200,
        height: 630,
        alt: 'AI Chat One Preview',
      },
    ],
  },
  // ... other existing metadata ...
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-F6D56ZXKCM`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F6D56ZXKCM');
          `}
        </Script>
      </body>
    </html>
  );
}
