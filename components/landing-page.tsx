'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckIcon, StarIcon, ChevronDownIcon, ChevronUpIcon, MessageCircleIcon, SearchIcon, ImageIcon, MicIcon, FolderIcon, UploadIcon, PlugIcon, PenToolIcon, GlobeIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Script from 'next/script'

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

export function LandingPageComponent() {
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

const t = translations[language as keyof typeof translations]

return (
  <div className="flex flex-col min-h-screen">
    <header className="flex items-center justify-between p-4 sticky top-0 bg-white z-10 shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-600 rounded-full" />
        <span className="text-xl font-bold">AIChatOne</span>
      </div>
      <nav className="hidden md:flex space-x-4">
        <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900">{t.home}</button>
        <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900">{t.features}</button>
        <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-gray-900">{t.testimonials}</button>
        <button onClick={() => scrollToSection('compare')} className="text-gray-600 hover:text-gray-900">{t.compare}</button>
        <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900">{t.faq}</button>
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
        <p className="text-xl text-gray-600 mb-8">Personal, Fast, and Free</p>
        <div className="flex justify-center items-center space-x-2 mb-8">
          <div className="flex -space-x-2 mr-2">
            {[1, 2, 3, 4, 5].map((avatar) => (
              <Image
                key={avatar}
                src={`/placeholder.svg?height=32&width=32`}
                alt={`User avatar ${avatar}`}
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
              />
            ))}
          </div>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
          <span className="text-gray-600">(from 2k+ happy customers)</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg">Try for free</Button>
          <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full text-lg">Watch demo</Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {["Chrome", "Edge", "Firefox", "Safari", "Opera"].map((browser) => (
            <Button key={browser} variant="outline" className="bg-white hover:bg-gray-50 shadow-sm">
              <Image src="/placeholder.svg?height=24&width=24" alt={`${browser} logo`} width={24} height={24} className="mr-2" />
              Add to {browser}
            </Button>
          ))}
        </div>
      </section>
      <section id="features" className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">The Best AI Chatbots + Powerful Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Multiple AI Models", icon: <MessageCircleIcon className="w-8 h-8 text-purple-600" />, description: "Access various AI models for diverse capabilities." },
            { title: "Web Search", icon: <SearchIcon className="w-8 h-8 text-purple-600" />, description: "Integrate real-time web information into your conversations." },
            { title: "Custom AI Characters", icon: <PenToolIcon className="w-8 h-8 text-purple-600" />, description: "Create and interact with personalized AI characters." },
            { title: "Prompt Library", icon: <FolderIcon className="w-8 h-8 text-purple-600" />, description: "Access a vast library of pre-written prompts for various tasks." },
            { title: "Chat Folders", icon: <FolderIcon className="w-8 h-8 text-purple-600" />, description: "Organize your conversations with a structured folder system." },
            { title: "Upload Data", icon: <UploadIcon className="w-8 h-8 text-purple-600" />, description: "Easily upload and reference your own data in conversations." },
            { title: "Speech to Text", icon: <MicIcon className="w-8 h-8 text-purple-600" />, description: "Convert spoken words to text with high accuracy." },
            { title: "Image Generate", icon: <ImageIcon className="w-8 h-8 text-purple-600" />, description: "Create stunning visuals with AI-powered image generation." },
            { title: "Plugins & Suggest Tool", icon: <PlugIcon className="w-8 h-8 text-purple-600" />, description: "Enhance functionality with plugins and smart suggestions." },
            { title: "AI Search", icon: <SearchIcon className="w-8 h-8 text-purple-600" />, description: "Perform advanced searches powered by AI technology." },
            { title: "Social Write", icon: <PenToolIcon className="w-8 h-8 text-purple-600" />, description: "Generate engaging content for social media platforms." },
            { title: "Chat with Web page", icon: <GlobeIcon className="w-8 h-8 text-purple-600" />, description: "Interact with and analyze web pages through chat interface." },
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
                "Multiple AI Models available",
                "Custom AI Characters",
                "Prompt Library",
                "Web Search",
                "Upload Data",
                "AI Search",
                "Social Write",
                "Plugins",
                "ChatGPT Integration",
                "Image Generation",
                "Speech to Text",
                "Chat with Web page",
                "Chat Folders",
              ].map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="py-3 px-4 border-b">{feature}</td>
                  <td className="py-3 px-4 text-center border-b">
                    {index === 0 ? <CheckIcon className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-red-500">✕</span>}
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
              text: "AIChatOne has revolutionized the way I work. Its intuitive interface and powerful features have significantly boosted my productivity.",
              name: "John Doe",
              title: "CEO, Tech Innovators Inc."
            },
            {
              text: "The multiple AI models and custom characters feature in AIChatOne have opened up new possibilities for our creative team. It's an indispensable tool for our projects.",
              name: "Jane Smith",
              title: "Creative Director, Design Studio XYZ"
            },
            {
              text: "As a researcher, the web search and data upload capabilities of AIChatOne have been game-changing. It's like having a super-intelligent research assistant at my fingertips.",
              name: "Dr. Alex Johnson",
              title: "Lead Researcher, Global Institute"
            },
            {
              text: "The AI-powered image generation in AIChatOne has taken our marketing campaigns to the next level. We're creating stunning visuals in record time.",
              name: "Emily Brown",
              title: "Marketing Manager, Brand Solutions Co."
            },
            {
              text: "AIChatOne's speech-to-text feature has made our team meetings more productive. We can focus on discussion while the AI takes care of transcription.",
              name: "Michael Lee",
              title: "Team Lead, Agile Innovations"
            },
            {
              text: "The integration of ChatGPT with additional features in AIChatOne provides a comprehensive solution for our customer service team. It's a game-changer for our operations.",
              name: "Sarah Davis",
              title: "Customer Experience Director, Service First Inc."
            },
            {
              text: "As a content creator, AIChatOne's Social Write feature has been a lifesaver. It helps me generate engaging posts across various platforms effortlessly.",
              name: "Chris Wilson",
              title: "Social Media Influencer"
            },
            {
              text: "The Chat with Web page feature has transformed how I analyze online content. It's like having an AI assistant to discuss and dissect web pages with me.",
              name: "Lisa Chen",
              title: "Digital Analyst, Web Insights Corp"
            },
            {
              text: "AIChatOne's Prompt Library has been a treasure trove for our writing team. It's dramatically improved our efficiency and creativity in content generation.",
              name: "Robert Taylor",
              title: "Head of Content, Global Media Group"
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
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4" />
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