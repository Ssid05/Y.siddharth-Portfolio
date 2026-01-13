import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Sparkles, Zap } from 'lucide-react'
import { siteData } from '../data/siteData'
import { aiKnowledgeBase } from '../data/aiKnowledgeBase'

// ═══════════════════════════════════════════════════════════════════════════════
// AI AGENT - ChatGPT-Powered Portfolio Assistant
// ═══════════════════════════════════════════════════════════════════════════════

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export const AIAgent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hi! I'm Siddharth's AI assistant powered by ChatGPT. I can answer detailed questions about his experience, projects, skills, and background. What would you like to know?`
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [apiError, setApiError] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Create comprehensive context from siteData
  const createSystemPrompt = () => {
    const { personal, experience, education, skills, projects, contact } = siteData
    
    return `You are Siddharth's AI assistant. You have comprehensive knowledge about him and should answer questions professionally and accurately.

ABOUT SIDDHARTH:
Name: ${personal.name}
Title: ${personal.title}
Tagline: ${personal.tagline}
Bio: ${personal.bio}

EXPERIENCE:
${experience.map(exp => `
- ${exp.title} at ${exp.company} (${exp.period})
  Location: ${exp.location}
  Description: ${exp.description.join(' ')}
  Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${education.map(edu => `
- ${edu.degree} at ${edu.institution} (${edu.period})
  ${edu.description || ''}
  ${edu.gpa ? `GPA: ${edu.gpa}` : ''}
`).join('\n')}

SKILLS:
${skills.map(skill => `
- ${skill.category}: ${skill.skills.map((s: any) => `${s.name} (${s.level}% proficiency)`).join(', ')}
`).join('\n')}

PROJECTS:
${projects.map(proj => `
- ${proj.title}
  Description: ${proj.description}
  Technologies: ${proj.technologies.join(', ')}
  ${proj.github ? `GitHub: ${proj.github}` : ''}
  ${proj.demo ? `Demo: ${proj.demo}` : ''}
`).join('\n')}

CONTACT:
Email: ${contact.email}
GitHub: ${contact.github}
LinkedIn: ${contact.linkedin}
Location: ${contact.location}

INSTRUCTIONS:
- Answer questions about Siddharth professionally and accurately
- Use the information provided above
- Be concise but informative
- If asked about something not in the data, politely say you don't have that information
- Highlight his AI/ML expertise and achievements
- Be friendly and engaging`
  }

  const generateChatGPTResponse = async (userMessage: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY
    
    if (!apiKey || apiKey === 'your_openai_api_key_here') {
      // Fallback to enhanced keyword-based responses if no API key
      return generateSmartFallback(userMessage)
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: createSystemPrompt() },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 300
        })
      })

      if (!response.ok) {
        throw new Error('API request failed')
      }

      const data = await response.json()
      return data.choices[0].message.content
    } catch (error) {
      console.error('ChatGPT API Error:', error)
      setApiError(true)
      return generateSmartFallback(userMessage)
    }
  }

  const generateSmartFallback = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // First, check knowledge base for pattern matches
    for (const qa of aiKnowledgeBase) {
      for (const pattern of qa.patterns) {
        if (lowerMessage.includes(pattern.toLowerCase())) {
          return qa.response
        }
      }
    }

    // Greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
      return `Hello! I'm Siddharth's AI assistant. I can help you learn about his experience as an AI/ML Researcher & Developer, his projects, skills, education, and how to contact him. What would you like to know?`
    }

    // Thank you / Acknowledgments
    if (lowerMessage.match(/^(thanks|thank you|ok thanks|okay thanks|cool|awesome|great|nice|perfect|good|ok|okay)\b/)) {
      return `You're welcome! Feel free to ask me anything else about Siddharth's work, skills, projects, or how to get in touch with him. I'm here to help! 😊`
    }

    // Goodbye
    if (lowerMessage.match(/^(bye|goodbye|see you|later|gtg|gotta go)\b/)) {
      return `Thank you for your interest in Siddharth's portfolio! Feel free to reach out to him at ${siteData.contact.email}. Have a great day! 👋`
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      const exp = siteData.experience[0]
      return `Siddharth currently works as ${exp.title} at ${exp.company}. ${exp.description[0]} He has extensive experience with ${exp.technologies.slice(0, 3).join(', ')}, among other technologies. Would you like to know more about specific projects or roles?`
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      const topSkills = siteData.skills[0].skills.slice(0, 4).map((s: any) => s.name)
      return `Siddharth is highly skilled in ${topSkills.join(', ')}. He has expertise across multiple domains including ML/AI, deep learning, and neural networks. His strongest areas are in transformer architectures, CNNs, and production-grade AI deployment. What specific technology would you like to know more about?`
    }

    if (lowerMessage.includes('project')) {
      const proj = siteData.projects.find(p => p.featured) || siteData.projects[0]
      return `One of Siddharth's notable projects is "${proj.title}" - ${proj.description} This project uses ${proj.technologies.slice(0, 3).join(', ')}. ${proj.demo ? 'There\'s a live demo available!' : 'The code is available on GitHub.'} Would you like to hear about other projects?`
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('university')) {
      const edu = siteData.education[0]
      return `Siddharth is pursuing ${edu.degree} at ${edu.institution}. ${edu.description || ''} ${edu.gpa ? `He maintains an impressive GPA of ${edu.gpa}.` : ''} His academic focus includes AI/ML research and advanced neural network architectures.`
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('hire')) {
      return `You can reach Siddharth at ${siteData.contact.email}. He's also active on GitHub (${siteData.contact.github}) and LinkedIn (${siteData.contact.linkedin}). Feel free to connect for collaboration opportunities, research discussions, or project inquiries!`
    }

    if (lowerMessage.includes('where') || lowerMessage.includes('location')) {
      return `Siddharth is based in ${siteData.contact.location}. He's open to both remote and on-site opportunities.`
    }

    if (lowerMessage.includes('who') || lowerMessage.includes('about') || lowerMessage.includes('tell me') || lowerMessage.includes('siddharth')) {
      return `Siddharth Yellapragada is an ${siteData.personal.title}. ${siteData.personal.bio} He currently works as ${siteData.experience[0].title} at ${siteData.experience[0].company}. He specializes in ${siteData.skills[0].skills.slice(0, 3).map((s: any) => s.name).join(', ')} and has worked on cutting-edge AI/ML projects. Would you like to know more about his specific experience, projects, or skills?`
    }

    // Check if message is too short, random characters, or unclear
    if (lowerMessage.length < 3 || /^[^a-z]*$/.test(lowerMessage) || lowerMessage.split(' ').length === 1 && !lowerMessage.match(/\b(experience|work|skill|project|education|contact|who|what|where|when|why|how)\b/)) {
      return `Sorry, I didn't quite understand that. I can help you learn about Siddharth's experience, projects, skills, education, or how to contact him. What would you like to know?`
    }

    return `I'm sorry, I don't have specific information about that. I can help you with questions about Siddharth's work experience, technical skills, projects, education, or how to get in touch with him. What would you like to know?`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isTyping) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsTyping(true)
    setApiError(false)

    setTimeout(async () => {
      const response = await generateChatGPTResponse(userMessage)
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
      setIsTyping(false)
    }, 800)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-magenta shadow-2xl flex items-center justify-center text-white overflow-hidden border-2 border-white/20 cursor-pointer"
        style={{ zIndex: 99999 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5 }}
      >
        {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-4 right-4 sm:bottom-24 sm:left-6 sm:right-auto sm:w-96 lg:bottom-28 lg:left-8 lg:w-[420px] h-[70vh] sm:h-[600px] max-h-[700px] rounded-2xl overflow-hidden shadow-2xl cursor-auto"
            style={{
              background: 'rgba(26, 10, 31, 0.95)',
              backdropFilter: 'blur(40px) saturate(200%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              zIndex: 99999
            }}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-gradient-to-r from-gradient-purple/20 to-gradient-magenta/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-magenta flex items-center justify-center relative">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">AI Assistant</h3>
                  <p className="text-xs text-white/60">Ask me anything about Siddharth</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[440px] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((message, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-gradient-purple to-gradient-magenta text-white'
                        : 'bg-white/5 text-white/90 border border-white/10'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-white/60 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-white/60 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-white/60 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-gradient-magenta/50 transition-colors cursor-text"
                  disabled={isTyping}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isTyping || !input.trim()}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-gradient-purple to-gradient-magenta text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
