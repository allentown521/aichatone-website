'use client'

import { Button } from "@/app/[lang]/components/ui/button"
import { Card } from "@/app/[lang]/components/ui/card"
import { CheckIcon, StarIcon, ChevronDownIcon, ChevronUpIcon, MessageCircleIcon, SearchIcon, ImageIcon, MicIcon, FolderIcon, UploadIcon, PlugIcon, PenToolIcon, GlobeIcon, LinkIcon, FilterIcon, LockIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Script from 'next/script'
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/get-dictionary"
import { usePathname } from "next/navigation"

// 添加 Google Analytics 跟踪代码
const GA_TRACKING_ID = 'G-F6D56ZXKCM' // 替换为您的 Google Analytics 跟踪 ID

// 添加 pageview 函数
const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}


const languageNames: { [key: string]: string } = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
  "zh-CN": '简体中文',
  "zh-TW": '繁體中文'
}

export function LandingPageComponent({ lang,dictionary }: { lang: Locale,dictionary: any}) {
const [openFAQ, setOpenFAQ] = useState<number | null>(null)
const pathname = usePathname();
// 添加默认语言处理
const validLang = languageNames[lang] ? lang : 'en'; // 如果 lang 无效，使用默认语言 'en'
useEffect(() => {
  const handleScroll = () => {
  }

  window.addEventListener('scroll', handleScroll)

  // 添加 Google Analytics 页面浏览跟踪
  pageview(window.location.pathname)

  return () => window.removeEventListener('scroll', handleScroll)
}, [])
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleFAQ = (index: number) => {
  setOpenFAQ(openFAQ === index ? null : index)
}

const redirectedPathname = (locale: Locale) => {
  if (!pathname) return "/";
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/");
};

const changeLanguage = (lang: Locale) => {
  // Here you would typically update your app's language context
  // and possibly reload certain components or refetch data
  window.location.href = redirectedPathname(lang);
}


return (
  <div className="flex flex-col min-h-screen">
    <header className="flex items-center justify-between p-4 sticky top-0 bg-white/80 backdrop-blur-md z-10 shadow-sm">
      <div className="flex items-center space-x-2">
        <img src="/favicon.ico" alt="AIChatOne Logo" width={32} height={32} />
        <span className="text-xl font-bold">AIChatOne</span>
      </div>
      <nav className="hidden md:flex space-x-4">
        <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900">{dictionary.home}</button>
        <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900">{dictionary.features}</button>
        <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-gray-900">{dictionary.testimonials}</button>
        <button onClick={() => scrollToSection('compare')} className="text-gray-600 hover:text-gray-900">{dictionary.compare}</button>
        <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900">{dictionary.faq}</button>
      </nav>
      <div className="relative">
        <Button
          onClick={() => document.getElementById('language-menu')?.classList.toggle('hidden')}
          variant="outline"
          className="text-gray-600 hover:text-gray-900"
        >
          {languageNames[validLang]}
        </Button>
        <div id="language-menu" className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {Object.entries(languageNames).map(([key, value]) => (
              <button
                key={key}
                onClick={() => {
                  changeLanguage(key as Locale)
                  document.getElementById('language-menu')?.classList.add('hidden')
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
    <main className="flex-grow">
      <section id="home" className="text-center py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <h1 className="text-5xl font-bold mb-4 text-purple-800">{dictionary.appTitle}</h1>
        <p className="text-xl text-gray-600 mb-8 w-1/2 mx-auto">{dictionary.appSubtitle}</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((avatar) => (
              <img
                key={avatar}
                src={`/images/avatar${avatar}.webp`}
                alt={`User avatar ${avatar}`}
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
              />
            ))}
          </div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-gray-600 text-center md:text-left">({dictionary.happyUsers})</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg">{dictionary.tryFree}</Button>
          <Button variant="outline" className="text-purple-600 hidden border-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full text-lg">{dictionary.watchDemo}</Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: dictionary.addToChrome, imageSrc: "/images/chrome.png", url: "https://chrome.google.com/webstore/detail/ejlkdnjeljojepglcdjifkedjbfdakbb" },
            { name: dictionary.addToEdge, imageSrc: "/images/edge.png", url: "https://microsoftedge.microsoft.com/addons/detail/aichatone-your-ai-copil/gpophbebhcadnhofieemjpbkkiannbeb" },
            { name: dictionary.webApp, imageSrc: "/images/internet.png", url: "https://web.aichatone.com/" },
            { name: "Windows", imageSrc: "/images/windows.png", url: "https://github.com/allentown521/AIChatOne-archive/releases" },
            { name: "Mac", imageSrc: "/images/mac.png", url: "https://github.com/allentown521/AIChatOne-archive/releases" }
          ].map((browser) => (
            <Button
              key={browser.name}
              variant="outline"
              className="bg-white hover:bg-gray-50 shadow-sm"
              onClick={() => window.open(browser.url, '_blank')}
            >
              <img src={browser.imageSrc} alt={`${browser.name} logo`} width={24} height={24} className="mr-2" />
              {browser.name}
            </Button>
          ))}
        </div>
      </section>
      <section id="features" className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">{dictionary.appSubTitle2}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: dictionary.multiModels, icon: <MessageCircleIcon className="w-8 h-8 text-purple-600" />, description: dictionary.multiModelsDesc },
            { title: dictionary.webAccess, icon: <GlobeIcon className="w-8 h-8 text-purple-600" />, description: dictionary.webAccessDesc },
            { title: dictionary.customAICharacters, icon: <PenToolIcon className="w-8 h-8 text-purple-600" />, description: dictionary.customAICharactersDesc },
            { title: dictionary.promptLibrary, icon: <FolderIcon className="w-8 h-8 text-purple-600" />, description: dictionary.promptLibraryDesc },
            { title: dictionary.chatFolders, icon: <FolderIcon className="w-8 h-8 text-purple-600" />, description: dictionary.chatFoldersDsec },
            { title: dictionary.uploadDocs, icon: <UploadIcon className="w-8 h-8 text-purple-600" />, description: dictionary.uploadDocsDesc },
            { title: dictionary.speechToText, icon: <MicIcon className="w-8 h-8 text-purple-600" />, description: dictionary.speechToTextDsec },
            //{ title: "Image Generate", icon: <imgIcon className="w-8 h-8 text-purple-600" />, description: "Create stunning visuals with AI-powered image generation." },
            { title: dictionary.securePrivacy, icon: <LockIcon className="w-8 h-8 text-purple-600" />, description: dictionary.securePrivacyDsec },
            { title: dictionary.aiSearch, icon: <SearchIcon className="w-8 h-8 text-purple-600" />, description: dictionary.aiSearchDsec },
            { title: dictionary.socialWrite, icon: <PenToolIcon className="w-8 h-8 text-purple-600" />, description: dictionary.socialWriteDesc },
            { title: dictionary.chatWithWeb, icon: <LinkIcon className="w-8 h-8 text-purple-600" />, description: dictionary.chatWithWebDesc },
            { title: dictionary.searchFilter, icon: <FilterIcon className="w-8 h-8 text-purple-600" />, description: dictionary.searchFilterDesc },
          ].map((feature, index) => (
            <Card key={index} className="p-6 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="font-semibold text-lg ml-2">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>
      <section id="compare" className="py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">{dictionary.whatIsTheDifferenceBetweenChatGPT}</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-purple-100">
              <tr>
                <th className="py-3 px-4 text-left text-purple-800">{dictionary.feature}</th>
                <th className="py-3 px-4 text-center text-purple-800">ChatGPT</th>
                <th className="py-3 px-4 text-center text-purple-800">AIChatOne</th>
              </tr>
            </thead>
            <tbody>
              {[
                dictionary.gpt4AIModel,
                dictionary.webAccess,
                dictionary.chatWithMultipleChatbots,
                dictionary.chatWithWebPage,
                dictionary.aiAssistantOnAnyWebsiteSidebar,
                dictionary.customAICustomCharacters,
                dictionary.searchEnhance,
                dictionary.twitterXRedditAIAssistant,
                dictionary.webpageYoutubeSummary,
                dictionary.searchFilterChats,
                dictionary.promptLibrary,
                dictionary.chatFolders,
                dictionary.chatGPTTemperature,
                dictionary.accessAllLLMs,
              ].map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="py-3 px-4 border-b">{feature}</td>
                  <td className="py-3 px-4 text-center border-b">
                    {index === 0 || index === 1 ? <CheckIcon className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-red-500">✕</span>}
                  </td>
                  <td className="py-3 px-4 text-center border-b">
                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">{dictionary.whatPeopleAreSaying}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              text: dictionary.testimonial1,
              name: "Paige Bliss",
              title: dictionary.author,
              avatar: "/images/Paige-Bliss.png"
            },
            {
              text: dictionary.testimonial2,
              name: "Samarinda",
              title: dictionary.businessOwner,
              avatar: "/images/Samarinda.webp"
            },
            {
              text: dictionary.testimonial3,
              name: "James Brook",
              title: dictionary.brookCreativeCo,
              avatar: "/images/James-Brook.webp"
            },
            {
              text: dictionary.testimonial4,
              name: "Kim Reynold",
              title: dictionary.aiAdvantageAgency,
              avatar: "/images/Kim-Reynold.jpeg"
            },
            {
              text: dictionary.testimonial5,
              name: "Shalone Cason",
              title: dictionary.author,
              avatar: "/images/Shalone-Cason.webp"
            },
            {
              text: dictionary.testimonial6,
              name: "Jamal Khan",
              title: dictionary.founder,
              avatar: "/images/Jamal-Khan.webp"
            },
            {
              text: dictionary.testimonial7,
              name: "leah mendez",
              title: dictionary.businessClass,
              avatar: "/images/leah-mendez.webp"
            },
            {
              text: dictionary.testimonial8,
              name: "Adam",
              title: dictionary.bestSellingAuthor,
              avatar: "/images/Adam.webp"
            },
            {
              text: dictionary.testimonial9,
              name: "Abdulaziz Benjober",
              title: dictionary.navaChurch,
              avatar: "/images/Abdulaziz-Benjober.webp"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="p-6 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={`${testimonial.name} avatar`} width={40} height={40} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">{dictionary.faqAsk}</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {[
            {
              question: dictionary.question1,
              answer: dictionary.answer1
            },
            {
              question: dictionary.question2,
              answer: dictionary.answer2
            },
            {
              question: dictionary.question3,
              answer: dictionary.answer3
            },
            {
              question: dictionary.question4,
              answer: dictionary.answer4
            },
            {
              question: dictionary.question5,
              answer: dictionary.answer5
            },
            {
              question: dictionary.question6,
              answer: dictionary.answer6
            },
            {
              question: dictionary.question7,
              answer: dictionary.answer7
            },
            {
              question: dictionary.question8,
              answer: dictionary.answer8
            },
            {
              question: dictionary.question9,
              answer: dictionary.answer9
            },
            {
              question: dictionary.question10,
              answer: dictionary.answer10
            },
            // ... add more questions and answers as needed
          ].map((faq, index) => (
            <div key={index} className="mb-6 border-b border-gray-200 last:border-b-0">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-purple-600" />
                )}
              </button>
              {openFAQ === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        <div>
          <h4 className="font-semibold mb-4 text-lg text-purple-800">{dictionary.feature}</h4>
          <h5 className="font-medium mb-2 text-gray-700">{dictionary.aITools}</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="https://blog.aichatone.com/blog/how-to-access-gpt4-for-free" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.askGPT}</a></li>
            <li><a href="https://blog.aichatone.com/blog/how-to-chat-with-all-chatbots" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.askMultipleAI}</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-gray-700">{dictionary.productivity}</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="#https://blog.aichatone.com/blog/search-agent-better-faster-way-to-write" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.searchAgent}</a></li>
            <li><a href="https://blog.aichatone.com/blog/search-enhance-with-chatgpt" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.searchEnhance}</a></li>
            <li><a href="https://blog.aichatone.com/blog/how-to-utilize-ai-for-10x-growth-twitter-x" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.twitterXAgent}</a></li>
            <li><a href="https://blog.aichatone.com/blog/how-to-utilize-ai-for-10x-growth-reddit" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.redditAgent}</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-gray-700">{dictionary.summary}</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="https://blog.aichatone.com/blog/youtube-summary-with-chatgpt" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Youtube Summary</a></li>
            <li><a href="https://blog.aichatone.com/blog/webpage-summary-with-chatgpt" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Web Summary</a></li>
          </ul>
          <h5 className="font-medium mb-2 mt-4 text-gray-700">{dictionary.comparisons}</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="https://blog.aichatone.com/blog/chathub-alternative" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">ChatHub vs AIChatOne</a></li>
            <li><a href="https://blog.aichatone.com/blog/chatbox-alternative" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Chatbox vs AIChatOne</a></li>
            <li><a href="https://blog.aichatone.com/blog/typingmind-alternative" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">TypingMind vs AIChatOne</a></li>
            <li><a href="https://blog.aichatone.com/blog/choose-a-gpt-wrapper" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.whichProduct}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg text-purple-800">{dictionary.company}</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="https://aichatone.canny.io/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.helpCenter}</a></li>
            <li><a href="https://docs.aichatone.com/getting-started/get-started-with-aichatone" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.pricing}</a></li>
            <li><a href="https://blog.aichatone.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.blog}</a></li>
            <li><a href="https://docs.aichatone.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.docs}</a></li>
            <li><a href="mailto://product@aichatone.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.contact}</a></li>
            <li><a href="https://focus.hk.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.otherApps}</a></li>
            <li><a href="https://twitter.com/allentown521" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Twitter (X)</a></li>
            <li><a href="https://shop.aichatone.com/affiliates" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.affiliates}</a></li>
            <li><a href="https://sites.google.com/view/privacypolicyofaichatone" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">{dictionary.privacy}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg text-purple-800">{dictionary.friends}</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="https://www.toolpilot.ai/?utm_source=aichatone/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">toolpilot</a></li>
            <li><a href="https://www.aitoolnet.com/?utm_source=aichatone/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">aitoolnet</a></li>
            <li><a href="https://www.dang.ai/?utm_source=aichatone/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">dang.ai</a></li>
            <li><a href="https://theresanaiforthat.com/ai/aichatone/?ref=featured&v=1002170" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">theresanaiforthat</a></li>
          </ul>
        </div>
        <div>
          <img src="/images/toolpilot.svg?height=48&width=48" alt="TP Logo" width={48} height={48} />
          <img src="/images/aitoolnet.svg?height=48&width=48" alt="AIChatOne Logo" width={264} height={96} className="mt-4" />
          <img src="/images/theresanaiforthat.avif?height=48&width=48" alt="There's an AI for That Logo" width={264} height={96} className="mt-4" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">© 2024 AIChatOne. All rights reserved.</p>
      </div>
    </footer>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID`}
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'YOUR_GA_MEASUREMENT_ID');
      `}
    </Script>
  </div>
)
}