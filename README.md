# 📱 Live Auction MVP

A simple mobile-based **Live Auction Platform** built to demonstrate real-time bidding using GraphQL and WebSockets.

This project serves as a **Minimum Viable Product (MVP)** to showcase the core functionality of a live auction system on mobile devices.

---

## 🚀 Features

- Real-time bidding via WebSocket
- View ongoing auctions and current highest bid
- Participate in live auctions via mobile
- Seamless integration with GraphQL API
- Modular and scalable architecture

---

## 🛠 Tech Stack

### Frontend (Mobile - Expo React Native)

- [Expo](https://expo.dev/) - for fast mobile development
- [`@apollo/client`](https://www.apollographql.com/docs/react/) - GraphQL client for managing API communication
- [Redux Toolkit`](https://redux-toolkit.js.org/) - state management
- [`react-native-reusable`](https://github.com/) - reusable UI components for consistent design

### Backend

- [NestJS](https://nestjs.com/) - modular Node.js framework
- [GraphQL](https://graphql.org/) - GraphQL
- [WebSockets](https://docs.nestjs.com/websockets/gateways) - for real-time auction updates

---

## 📦 Getting Started

### Prerequisites

- Node.js >= 18
- Yarn or npm
- Expo CLI (`npm install -g expo-cli`)
- PostgreSQL (or any preferred database)

---

### 📲 Frontend Setup

```bash
cd client
yarn install
expo start
```

Configure your GraphQL endpoint inside ApolloProvider (e.g., src/graphql/client.ts).

### 🔧 Backend Setup

```bash
cd server
yarn install
yarn start:dev
```

Ensure environment variables for DB and WebSocket configuration are properly set in a .env file.

### 🧠 Why this project?

This MVP is designed to explore and demonstrate the capabilities of real-time apps built with modern frameworks like NestJS and React Native. It’s a foundation for building more complex live auction experiences.

### 🤝 Contributions

This is a learning and showcase project. Contributions, feedback, and feature suggestions are welcome!

### 🧑‍💻 Author

Made with ❤️ by [Kurt Russelle Marmol](github.com/jkrmarmol)
