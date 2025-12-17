# Discord-like Chat App (Personal Project)

This repository contains a personal, educational project that explores how a Discord-like chat application can be built using a modern web frontend and a cloud-native, serverless backend.

The goal of this project is learning and experimentation, not production use. It focuses on real-time messaging concepts, AWS serverless architecture, and clean separation between client and server.

⚠️ This project is not affiliated with Discord. All branding, assets, and UI are original or sourced from open libraries.

⸻

## 📂 Repository Structure

root/
├── client/ # Frontend (React)
├── server/ # Backend (AWS + Go)
└── README.md

⸻

## 🖥️ Client (Frontend)

Tech Stack
• React
• TypeScript
• WebSocket (via API Gateway)
• Modern component-based UI

Responsibilities
• User interface (channels, chat, messages)
• WebSocket connection management
• Sending and receiving real-time messages
• Authentication token handling

Run locally

```
cd client
pnpm install
pnpm run dev
```

⸻

## ☁️ Server (Backend)

Tech Stack
• Go (Golang)
• AWS Lambda
• API Gateway (WebSocket API)
• DynamoDB
• S3 (optional, for attachments)

Responsibilities
• WebSocket connection lifecycle ($connect, $disconnect)
• Message routing and fan-out
• Message persistence
• Channel membership management

Typical Architecture

```
Client (Web)
   ↓ WebSocket
API Gateway (WebSocket)
   ↓
AWS Lambda (Go)
   ↓
DynamoDB / S3
```

🧠 Learning Goals

This project is designed to help understand:
• Real-time systems using WebSockets
• Serverless architecture on AWS
• Event-driven backend design
• Go for cloud-native services
• Cost-efficient scaling for small workloads

📄 License

This project is licensed under the MIT License.

You are free to use, modify, and learn from this project.

⸻

✨ Author

Built as a personal learning project to explore real-time systems, AWS serverless infrastructure, and Go backend development.
