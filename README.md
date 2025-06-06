# Talka Utility Bot by Meckury

This is a Node.js WhatsApp bot that accepts voice notes, photos, videos, and documents — then uses AI (OpenAI + ElevenLabs) to transcribe, summarize, and respond smartly.

## 🚀 Features
- Voice-to-text transcription
- AI-powered response to text
- OCR for images
- Document parsing
- Token-based and subscription-based usage
- File output suggestion: PDF, DOCX, XLSX, JPEG

---

## 🛠 Requirements
- Node.js (v16+)
- Railway or Render account
- 360dialog or WhatsApp Business API access
- Firebase project (Firestore enabled)
- OpenAI + ElevenLabs API keys

---

## 🔧 Setup Instructions

### 1. Clone the Project
```bash
git clone https://github.com/yourusername/talka-utility-bot.git
cd talka-utility-bot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File
Copy from the `.env.example` and add your actual keys:
```bash
cp .env.example .env
```

### 4. Deploy
Use [Railway](https://railway.app) or [Render](https://render.com):
- Connect your GitHub repo
- Set environment variables using the `.env` structure
- Use `node index.js` as the start command

---

## 🧪 Webhook Setup (Meta or 360dialog)
- Set webhook URL: `https://your-app-url/webhook`
- Use the verify token from `.env`

---

## 💰 Manual Payment Options
- Displayed automatically when user's plan expires or tokens run out
- You can customize them in `services/manualPayment.js`

---

## 📁 Folder Structure
```
├── index.js
├── package.json
├── .env.example
├── config/
├── routes/
├── services/
└── utils/
```

---

## 👨🏽‍💻 Made by Meckury for the Talka Project
Part of the Talka Suite — empowering AI-first voice interaction for African creators, businesses, and educators.

📞 For questions: drop a voice note, obviously 😉
