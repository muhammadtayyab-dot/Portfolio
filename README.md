# AI Wizard Portfolio

A modern, full-stack AI wizard's portfolio website featuring an intelligent chat widget, project showcase, and service offerings. Built with Next-generation tech stack combining React, Express, and Tailwind CSS.

## Features

✨ **AI-Powered Chat Widget** - Interactive AI assistant using LangChain and LLM integration  
🎨 **Beautiful Dark-Mode UI** - Wizard-themed dark mode with smooth animations  
📱 **Fully Responsive** - Mobile-first design with perfect scaling  
⚡ **Fast Performance** - Vite-powered frontend with optimized bundle size  
🔒 **Secure Backend** - Express.js with session management and database integration  
🎭 **Animated Components** - Framer Motion animations throughout  
🧠 **AI Integration Ready** - OpenAI and LLM support built-in  

## Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form management
- **TanStack React Query** - Data fetching

### Backend
- **Node.js with Express** - Server framework
- **PostgreSQL** - Relational database
- **Drizzle ORM** - Type-safe database access
- **Passport.js** - Authentication
- **WebSockets** - Real-time communication

### AI & Automation
- **LangChain** - LLM framework
- **OpenAI API** - Language models
- **n8n/Zapier** - Workflow automation
- **Vector Databases** - Pinecone integration

### DevOps & Deployment
- **Docker** - Containerization
- **AWS/Vercel** - Cloud deployment
- **GitHub Actions** - CI/CD

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/muhammadtayyab-dot/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Set up the database:
```bash
npm run db:push
```

### Development

Start the development server:
```bash
npm run dev
```

Or run client and server separately:
```bash
# Terminal 1 - Frontend
npm run dev:client

# Terminal 2 - Backend
npm run dev
```

Visit `http://localhost:5000` in your browser.

### Type Checking

```bash
npm run check
```

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utilities and helpers
│   │   └── styles/      # Global styles
│   └── index.html       # HTML entry point
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Database operations
│   └── static.ts        # Static file serving
├── shared/              # Shared types and schemas
│   └── schema.ts        # Zod schemas
└── script/              # Build scripts
    └── build.ts         # Production build
```

## API Documentation

### Chat Widget
- **Endpoint**: `/api/chat`
- **Method**: `POST`
- **Body**: `{ message: string }`
- **Response**: `{ reply: string }`

### Portfolio Data
- **Endpoint**: `/api/portfolio`
- **Method**: `GET`
- **Response**: Portfolio projects and services

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
NODE_ENV=development
PORT=5000
OPENAI_API_KEY=sk_...
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Contact

- **Email**: muhammad@example.com
- **WhatsApp**: +92 324-1067371
- **GitHub**: [@muhammadtayyab-dot](https://github.com/muhammadtayyab-dot)
- **Website**: https://muhammadtayyab-dot.github.io/Portfolio/

## Services Offered

- 🤖 **AI Agent Development** - Custom LLM solutions
- 🚀 **Full-Stack Development** - End-to-end web applications
- 📱 **Mobile Development** - iOS/Android with React Native & Flutter
- 🔧 **Freelance Services** - Web development & consulting
- ⚙️ **API Integration** - Third-party integrations
- 🎨 **UI/UX Design** - Beautiful, responsive interfaces

---

Built with ✨ by Muhammad | AI Wizard & Full-Stack Developer
