# Wechat Clone

A full-stack chat app inspired by WeChat, built as a monorepo with separate web, mobile, and backend projects.

## What this project does

This app focuses on real-time messaging and day-to-day chat workflows:

- Account auth and session handling
- One-to-one conversations
- Message history and chat list previews
- Mobile + web clients sharing the same backend

## Monorepo structure

```text
.
+-- backend   # API + realtime services
+-- mobile    # React Native client
+-- web       # Web client
```

## Tech stack

- Frontend (web): TypeScript + modern React tooling
- Frontend (mobile): React Native
- Backend: Node.js API services
- Realtime/data/auth: configured inside `backend`

> Note: exact framework and package details may vary by folder as the project evolves.

## Local development

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd "Wechat clone"
```

### 2) Install dependencies

Install dependencies in each app folder:

```bash
cd backend && npm install
cd ../web && npm install
cd ../mobile && npm install
```

### 3) Configure environment variables

Create environment files in the projects that need them (typically `backend/.env`, and client-side env files where required).

Typical values include:

- API base URL
- Auth or token secrets
- Realtime/data provider keys

### 4) Run the apps

Run each service in its own terminal:

```bash
# terminal 1
cd backend
npm run dev

# terminal 2
cd web
npm run dev

# terminal 3
cd mobile
npm start
```

## Current status

This repository is under active development. Core messaging flow works, but features and architecture are still being refined.

Planned improvements:

- Group chats
- Message delivery/read receipts
- Media upload optimization
- Better end-to-end test coverage

## Contributing

Contributions are welcome. For substantial changes, open an issue first to discuss scope and implementation approach.

## License

This project is licensed under the MIT License. See `LICENSE.md` for details.
