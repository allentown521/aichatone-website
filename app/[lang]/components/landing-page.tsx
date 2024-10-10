'use client'

import { Button } from "@/app/[lang]/components/ui/button"
import { Card } from "@/app/[lang]/components/ui/card"
import { CheckIcon, StarIcon, ChevronDownIcon, ChevronUpIcon, MessageCircleIcon, SearchIcon, ImageIcon, MicIcon, FolderIcon, UploadIcon, PlugIcon, PenToolIcon, GlobeIcon, LinkIcon, FilterIcon, LockIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Script from 'next/script'
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/get-dictionary"

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

// Define the translations
const translations = {
  'English': {
    home: 'Home',
    features: 'Features',
    testimonials: 'Testimonials',
    compare: 'Compare',
    faq: 'FAQ',
    // Add more translations as needed
  },
  'Deutsch': {
    home: 'Startseite',
    features: 'Funktionen',
    testimonials: 'Erfahrungsberichte',
    compare: 'Vergleichen',
    faq: 'FAQ',
    // Add more translations as needed
  },
  'Français': {
    home: 'Accueil',
    features: 'Fonctionnalités',
    testimonials: 'Témoignages',
    compare: 'Comparer',
    faq: 'FAQ',
    // Add more translations as needed
  },
  '日本語': {
    home: 'ホーム',
    features: '機能',
    testimonials: '推薦の声',
    compare: '比較',
    faq: 'よくある質問',
    // Add more translations as needed
  },
  '简体中文': {
    home: '首页',
    features: '功能',
    testimonials: '用户评价',
    compare: '对比',
    faq: '常见问题',
    // Add more translations as needed
  },
  '繁體中文': {
    home: '首頁',
    features: '功能',
    testimonials: '用戶評價',
    compare: '對比',
    faq: '常見問題',
    // Add more translations as needed
  }
}

export async function LandingPageComponent({ lang,dictionary }: { lang: Locale,dictionary: any}) {
const [openFAQ, setOpenFAQ] = useState<number | null>(null)
const [language, setLanguage] = useState('English')

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

const changeLanguage = (lang: string) => {
  setLanguage(lang)
  // Here you would typically update your app's language context
  // and possibly reload certain components or refetch data
}


return (
  <div className="flex flex-col min-h-screen">
    <header className="flex items-center justify-between p-4 sticky top-0 bg-white/80 backdrop-blur-md z-10 shadow-sm">
      <div className="flex items-center space-x-2">
        <Image src="/favicon.ico" alt="AIChatOne Logo" width={32} height={32} />
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
          {language}
        </Button>
        <div id="language-menu" className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {Object.keys(translations).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  changeLanguage(lang)
                  document.getElementById('language-menu')?.classList.add('hidden')
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
    <main className="flex-grow">
      <section id="home" className="text-center py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <h1 className="text-5xl font-bold mb-4 text-purple-800">All-in-One AI Assistant</h1>
        <p className="text-xl text-gray-600 mb-8 w-1/2 mx-auto">AIChatOne is an all-in-one AI assistant with the most advanced AI models (GPT-4, Claude 3, Gemini, etc.) to help you Chat, Search, Write, Read and more. </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((avatar) => (
              <Image
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
          <span className="text-gray-600 text-center md:text-left">(from 2k+ happy customers)</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg">Try for free</Button>
          <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full text-lg">Watch demo</Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Add to Chrome", imageSrc: "/images/chrome.png", url: "https://chrome.google.com/webstore/detail/ejlkdnjeljojepglcdjifkedjbfdakbb" },
            { name: "Add to Edge", imageSrc: "/images/edge.png", url: "https://microsoftedge.microsoft.com/addons/detail/aichatone-your-ai-copil/gpophbebhcadnhofieemjpbkkiannbeb" },
            { name: "Web App", imageSrc: "/images/internet.png", url: "https://web.aichatone.com/" },
            { name: "Windows", imageSrc: "/images/windows.png", url: "https://github.com/allentown521/AIChatOne-archive/releases" },
            { name: "Mac", imageSrc: "/images/mac.png", url: "https://github.com/allentown521/AIChatOne-archive/releases" }
          ].map((browser) => (
            <Button
              key={browser.name}
              variant="outline"
              className="bg-white hover:bg-gray-50 shadow-sm"
              onClick={() => window.open(browser.url, '_blank')}
            >
              <Image src={browser.imageSrc} alt={`${browser.name} logo`} width={24} height={24} className="mr-2" />
              Add to {browser.name}
            </Button>
          ))}
        </div>
      </section>
      <section id="features" className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">The Best AI Chatbots + Powerful Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Multiple AI Models", icon: <MessageCircleIcon className="w-8 h-8 text-purple-600" />, description: "Access various AI models for diverse capabilities" },
            { title: "Web Access", icon: <GlobeIcon className="w-8 h-8 text-purple-600" />, description: "Integrate real-time web information into your conversations" },
            { title: "Custom AI Characters", icon: <PenToolIcon className="w-8 h-8 text-purple-600" />, description: "Create and interact with personalized AI characters" },
            { title: "Prompt Library", icon: <FolderIcon className="w-8 h-8 text-purple-600" />, description: "Access a vast library of pre-written prompts for various tasks" },
            { title: "Chat Folders", icon: <FolderIcon className="w-8 h-8 text-purple-600" />, description: "Organize your conversations with a structured folder system" },
            { title: "Upload docs", icon: <UploadIcon className="w-8 h-8 text-purple-600" />, description: "Instantly feed the AI important context by uploading a doc file right into the chat" },
            { title: "Speech to Text", icon: <MicIcon className="w-8 h-8 text-purple-600" />, description: "Convert spoken words to text with high accuracy." },
            //{ title: "Image Generate", icon: <ImageIcon className="w-8 h-8 text-purple-600" />, description: "Create stunning visuals with AI-powered image generation." },
            { title: "Secure & Respect Your Privacy", icon: <LockIcon className="w-8 h-8 text-purple-600" />, description: "Api keys encrypted and stored locally. No in-app analytics. No middle servers. Your prompts are sent directly to OpenAI" },
            { title: "AI Search", icon: <SearchIcon className="w-8 h-8 text-purple-600" />, description: "Get AI search result in the sidebar" },
            { title: "Social Write", icon: <PenToolIcon className="w-8 h-8 text-purple-600" />, description: "Help you write for Twitter(X) & Reddit With AI" },
            { title: "Chat with Web page", icon: <LinkIcon className="w-8 h-8 text-purple-600" />, description: "Summaries chat with web page  & Youtube" },
            { title: "Search + Filter", icon: <FilterIcon className="w-8 h-8 text-purple-600" />, description: "Powerful search and filter so you can find any of your previous chats instantly" },
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
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">What&apos;s the Difference Between ChatGPT and AIChatOne?</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-purple-100">
              <tr>
                <th className="py-3 px-4 text-left text-purple-800">Feature</th>
                <th className="py-3 px-4 text-center text-purple-800">ChatGPT</th>
                <th className="py-3 px-4 text-center text-purple-800">AIChatOne</th>
              </tr>
            </thead>
            <tbody>
              {[
                "GPT-4 AI Model",
                "Web Access",
                "Chat with Multiple Chatbots  at once",
                "Chat with Web page",
                "AI Assistant on any website & sidebar",
                "Custom AI Characters",
                "Search Enhance",
                "Twitter (X) & Reddit AI Assistant",
                "Webpage  & Youtube summary",
                "Search / Filter Chats",
                "Prompt Library",
                "Chat Folders",
                "ChatGPT temperature",
                "Access to Claude 、Gemini、Llama 2、Perplexity、Mixtral、Gemma",
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
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">What people are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              text: "I’m so amazed at what AIChatOne has allowed me to accomplish. Being able to organize my ChatGPT chats has been so nice. And the personas make it really easy to get better results than just using the generic assistant mode.",
              name: "Paige Bliss",
              title: "Author",
              avatar: "/images/Paige-Bliss.png"
            },
            {
              text: "AIChatOne is quickly becoming a daily go-to tool for myself and my team. I particularly love the personas which really help give me the best possible results.",
              name: "Samarinda",
              title: "Business Owner",
              avatar: "/images/Samarinda.webp"
            },
            {
              text: "Imagine if all the top generative AI tools were packaged in oneplace, with an easy-to-use interface, to save time and minimize frustration? That’s AIChatOne.",
              name: "James Brook",
              title: "Brook Creative Co.",
              avatar: "/images/James-Brook.webp"
            },
            {
              text: "I’ve used multiple AI tools in the past. Most have not given me the results that I wanted. AIChatOne has been more on than off and that’s amazing. I love thinking of something, typing out the idea, and seeing AIChatOne create content that can be used as-is or with slight tweaking. I can’t wait to see where AIChatOne goes from here.",
              name: "Kim Reynold",
              title: "AI Advantage Agency",
              avatar: "/images/Kim-Reynold.jpeg"
            },
            {
              text: "As an avid ChatGPT user, I am well aware of the platform’s limitations in terms of user interface and functionality. AIChatOne addresses these issues, and then some! I really like the ability to save prompts, edit conversations, and create different personas.  I’m just so much more productive with AIChatOne.",
              name: "Shalone Cason",
              title: "Author",
              avatar: "/images/Shalone-Cason.webp"
            },
            {
              text: "AIChatOne is your fantastic AI-Powered copilot in chrome. You can chat with AIChatOne about anything, anywhere. While it may not have all the bells and whistles of some other ChatGPT products out there, it's incredibly polished and user-friendly. One of my favorite features is the ability to customize quick actions and prompts - with my own actions in place. Let AIChatOne help you create effortlessly. Highly recommend giving it a try!",
              name: "Jamal Khan",
              title: "Founder",
              avatar: "/images/Jamal-Khan.webp"
            },
            {
              text: "AIChatOne is everything you wish OpenAI was but isn’t. The most compelling reason why I love AIChatOne is having the ability to organize my prompts and chats in folders. This was a huge breath of digital fresh air for me as an AI user and as someone who manages the brands of my clients. My ONE word challenge to you is this: SUBSCRIBE. You won’t regret the AIChatOne Magic! 😎",
              name: "leah mendez",
              title: "Business Class",
              avatar: "/images/leah-mendez.webp"
            },
            {
              text: "I just wanted to leave a quick comment to say how impressed I am with this extension. The user interface is intuitive and easy to navigate, and the features are both useful and innovative. I especially appreciate the attention to detail in the design and the responsiveness of the extension. Overall, I'm very satisfied with my experience using",
              name: "Adam",
              title: "Best-Selling Author",
              avatar: "/images/Adam.webp"
            },
            {
              text: "I personally use AIChatOne every day and it has drastically increased my productivity. I highly recommend that everyone give it a try. If you have any feedback or requests for new features, please let the team know by leaving a comment so they can continue to improve the product.",
              name: "Abdulaziz Benjober",
              title: "Nava Church Marketing",
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
                <Image src={testimonial.avatar} alt={`${testimonial.name} avatar`} width={40} height={40} className="rounded-full mr-4" />
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
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {[
            {
              question: "What is AIChatOne?",
              answer: "AIChatOne is free a chrome extension powered by ChatGPT API, designed to be your personal AI assistant for effortless chatting and copywriting."
            },
            {
              question: "Is AIChatOne the same as ChatGPT?",
              answer: "Yes! But better. AIChatOne uses OpenAI’s ChatGPT (GPT-4) API to interface with ChatGPT for you. So you get all the power of the worlds most advanced AI with additional tools and utilities to skyrocket your productivity"
            },
            {
              question: "Is AIChatOne free?",
              answer: "Yes, most features of AIChatOne is free to use, and we also have premium plans"
            },
            {
              question: "Do I need a ChatGPT account to use AIChatOne?",
              answer: "Yes, we do not provide an OpenAI API key"
            },
            {
              question: "How can i use AIChatOne?",
              answer: "Simply hit Cmd/Ctrl+B to open sidebar or  Cmd/Ctrl+M to open full chat page ,then start chatting with her"
            },
            {
              question: "What chatbots does AIChatOne offer access to?",
              answer: "AIChatOne currently supports ChatGPT, Bing Copilot, Google Gemini, Claude and 10+ open-source chatbots"
            },
            {
              question: "What browsers does AIChatOne support?",
              answer: "AIChatOne works on all Chromium-based browsers, including Chrome, Edge, Brave etc."
            },
            {
              question: "Can I get a refund?",
              answer: "Absolutely. If for any reason you're not satisfied with your purchase, you can request a refund within 14 days of purchase"
            },
            {
              question: "Is my data protected?",
              answer: "Absolutely. AIChatOne operates locally on your device, and no user input or prompts are stored or sent to us. Your OpenAI API key is securely stored in local"
            },
            {
              question: "Do you offer team plan license?",
              answer: "Yes, we do! If you're interested in obtaining a team license, please contact us directly via email product@aichatone.com"
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
          <h4 className="font-semibold mb-4 text-lg text-purple-800">Features</h4>
          <h5 className="font-medium mb-2 text-gray-700">AI Tools</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="https://blog.aichatone.com/blog/how-to-access-gpt4-for-free" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Ask GPT-4</a></li>
            <li><a href="https://blog.aichatone.com/blog/how-to-chat-with-all-chatbots" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Ask Multiple AIs</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-gray-700">Productivity</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="#https://blog.aichatone.com/blog/search-agent-better-faster-way-to-write" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Search Agent</a></li>
            <li><a href="https://blog.aichatone.com/blog/search-enhance-with-chatgpt" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Search Enhance</a></li>
            <li><a href="https://blog.aichatone.com/blog/how-to-utilize-ai-for-10x-growth-twitter-x" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Twitter (X) Agent</a></li>
            <li><a href="https://blog.aichatone.com/blog/how-to-utilize-ai-for-10x-growth-reddit" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Reddit Agent</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-gray-700">Summary</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="https://blog.aichatone.com/blog/youtube-summary-with-chatgpt" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Youtube Summary</a></li>
            <li><a href="https://blog.aichatone.com/blog/webpage-summary-with-chatgpt" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Web Summary</a></li>
          </ul>
          <h5 className="font-medium mb-2 mt-4 text-gray-700">Comparisons</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="https://blog.aichatone.com/blog/chathub-alternative" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">ChatHub vs AIChatOne</a></li>
            <li><a href="https://blog.aichatone.com/blog/chatbox-alternative" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Chatbox vs AIChatOne</a></li>
            <li><a href="https://blog.aichatone.com/blog/typingmind-alternative" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">TypingMind vs AIChatOne</a></li>
            <li><a href="https://blog.aichatone.com/blog/choose-a-gpt-wrapper" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Which Product to Choose</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg text-purple-800">Company</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="https://aichatone.canny.io/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Help Center</a></li>
            <li><a href="https://docs.aichatone.com/getting-started/get-started-with-aichatone" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Pricing</a></li>
            <li><a href="https://blog.aichatone.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">AIChatOne Blog</a></li>
            <li><a href="https://docs.aichatone.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Docs</a></li>
            <li><a href="mailto://product@aichatone.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Contact Us</a></li>
            <li><a href="https://focus.hk.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Other Apps</a></li>
            <li><a href="https://twitter.com/allentown521" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Twitter (X)</a></li>
            <li><a href="https://shop.aichatone.com/affiliates" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Affiliates</a></li>
            <li><a href="https://sites.google.com/view/privacypolicyofaichatone" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg text-purple-800">Friends</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="https://www.toolpilot.ai/?utm_source=aichatone/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">toolpilot</a></li>
            <li><a href="https://www.aitoolnet.com/?utm_source=aichatone/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">aitoolnet</a></li>
            <li><a href="https://www.dang.ai/?utm_source=aichatone/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">dang.ai</a></li>
            <li><a href="https://theresanaiforthat.com/ai/aichatone/?ref=featured&v=1002170" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">theresanaiforthat</a></li>
          </ul>
        </div>
        <div>
          <Image src="/images/toolpilot.svg?height=48&width=48" alt="TP Logo" width={48} height={48} />
          <Image src="/images/aitoolnet.svg?height=48&width=48" alt="AIChatOne Logo" width={264} height={96} className="mt-4" />
          <Image src="/images/theresanaiforthat.avif?height=48&width=48" alt="There's an AI for That Logo" width={264} height={96} className="mt-4" />
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