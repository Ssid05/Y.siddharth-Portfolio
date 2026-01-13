# 🤖 ChatGPT AI Agent Setup Guide

Your portfolio now has a ChatGPT-powered AI assistant! Follow these steps to connect it to OpenAI's API.

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy your API key (starts with `sk-`)

### Step 2: Add API Key to Your Project

1. Create a `.env` file in your project root:
   ```bash
   touch .env
   ```

2. Add your API key to `.env`:
   ```
   VITE_OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

3. **Important**: Never commit `.env` to Git! (It's already in `.gitignore`)

### Step 3: Restart Dev Server

```bash
npm run dev
```

## ✨ Features

### With ChatGPT API Key:
- 🧠 **Real AI Responses** - Powered by GPT-3.5-turbo
- 💬 **Context-Aware** - Understands conversation history
- 🎯 **Personalized** - Trained on your portfolio data
- 🚀 **Natural Language** - Handles complex questions

### Without API Key (Fallback):
- 📝 **Smart Keyword Matching** - Enhanced responses
- ⚡ **Instant** - No API latency
- 🔒 **Privacy** - No external calls
- ✅ **Always Works** - No API costs

## 💰 Pricing

- **Free Tier**: $5 in free credits
- **Pay-as-you-go**: ~$0.002 per conversation
- **Monthly**: Typically $1-5 for portfolio usage

## 🎨 Visual Indicators

- 🟢 **Green dot**: ChatGPT connected
- ⚡ **Zap icon**: Powered by OpenAI
- No indicators: Smart fallback mode

## 🔧 Advanced Configuration

Edit `src/components/AIAgent.tsx` to customize:

```typescript
model: 'gpt-3.5-turbo',  // or 'gpt-4' for better responses
temperature: 0.7,         // 0.0-1.0 (creativity)
max_tokens: 300          // Response length
```

## 🐛 Troubleshooting

**"API request failed"**
- Check your API key is correct
- Verify you have API credits
- Check network connection

**Fallback mode activating**
- Normal if no API key set
- AI agent still works with smart responses

**Rate limiting**
- OpenAI free tier: 3 requests/minute
- Paid tier: Higher limits

## 📚 Resources

- [OpenAI API Docs](https://platform.openai.com/docs)
- [API Key Management](https://platform.openai.com/api-keys)
- [Pricing](https://openai.com/pricing)

## 🎯 How It Works

1. **System Prompt**: Loads your entire portfolio data
2. **Context**: Includes all experience, projects, skills
3. **Conversation**: Maintains chat history for context
4. **Fallback**: Smart keyword responses if API unavailable

Your AI agent now provides intelligent, context-aware responses about your work, experience, and projects! 🚀
