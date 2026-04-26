setp-1 
npm i 

step 2
npm install @clerk/react


# CodePulse - Project Report

## Project Overview
**CodePulse** is a high-performance, real-time collaborative coding platform designed for technical interviews, peer-to-peer coding sessions, and competitive programming practice. It combines a state-of-the-art code editor with integrated video calling and live chat, providing a seamless environment for developers to solve problems together.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/santoshpadhiali/Code-Plus-)

## Key Features
1. **Collaborative Code Editor**:
   - Integrated **Monaco Editor** (the same engine powering VS Code).
   - Real-time code synchronization between users using low-latency messaging.
   - Multi-language support: JavaScript, Python, Java, C, and C++.

2. **Real-time Video & Audio**:
   - Seamless peer-to-peer video calls integrated directly into the coding workspace.
   - Powered by GetStream Video SDK for robust, high-quality communication.

3. **Live Chat**:
   - Persistent sidebar chat for session-specific communication.
   - Real-time event broadcasting for system notifications and code updates.

4. **Code Execution Engine**:
   - Secure, local code execution on the backend.
   - Captures output, errors, and precise runtime performance.
   - Automatic cleanup of temporary files and compiled executables.

5. **Session Management**:
   - Create, join, and manage coding sessions with specific difficulty levels and problems.
   - Dashboard to track active sessions and view history of completed sessions.

6. **Authentication & User Management**:
   - Secure authentication handled by **Clerk**, supporting modern SSO and identity providers.

## Technology Stack

### Frontend
- **Core**: React 19, Vite
- **Styling**: Tailwind CSS 4, DaisyUI
- **State Management**: TanStack Query (React Query)
- **Editor**: @monaco-editor/react
- **Collaboration**: GetStream Video & Chat SDKs
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

### Backend
- **Core**: Node.js, Express 5
- **Database**: MongoDB (Mongoose ODM)
- **Background Jobs**: Inngest
- **Auth Middleware**: @clerk/express
- **Execution**: Node.js `child_process` for local compilation and execution.

## Project Structure
```text
talent-IQ-master/
├── frontend/             # React application
│   ├── src/
│   │   ├── components/   # Reusable UI components (Editor, VideoCall, Navbar)
│   │   ├── hooks/        # Custom hooks for Stream and Session logic
│   │   ├── pages/        # Main views (Home, Dashboard, Session)
│   │   └── data/         # Static data like coding problems
│   └── package.json
└── backend/              # Node.js API
    ├── src/
    │   ├── controllers/  # Logic for execution, sessions, and chat
    │   ├── lib/          # Utilities (DB connection, Stream setup)
    │   ├── models/       # MongoDB Schemas (User, Session)
    │   ├── routes/       # API endpoints
    │   └── server.js     # Entry point
    └── package.json
```

## Environment Variables Setup

To run this project, you will need to add the following environment variables to your .env files.

### Backend (`/backend/.env`)
```env
PORT=5000
DB_URL=your_mongodb_uri
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Clerk Auth
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Inngest (Background Jobs)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# GetStream (Video & Chat)
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

### Frontend (`/frontend/.env.local`)
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
VITE_API_URL=http://localhost:5000/api
```


## Detailed Component Analysis

### Code Execution System
The backend uses a specialized `executeController` that:
- Generates a unique execution environment for each request.
- Writes code to temporary files.
- Executes code via system shell:
  - **JavaScript**: runs via `node`.
  - **Python**: runs via `python`.
  - **Java**: compiles with `javac` and runs with `java`.
  - **C/C++**: compiles with `gcc`/`g++` and executes the resulting binary.
- Monitors execution time and returns output/stderr back to the user.

### Collaboration Logic
- **Initialization**: When a session starts, the backend creates a unique "Call ID" and initializes both a video call and a messaging channel.
- **Synchronization**: As a user types, code changes are throttled and broadcasted via the chat channel as a custom `code-update` event. Other participants listen for this event to keep their editors in sync.

## Conclusion
Talent IQ is a robust tool for modern development needs, bridging the gap between coding and communication. Its modular architecture and reliance on battle-tested technologies like GetStream and Clerk ensure scalability and security.

# Code-Plus-