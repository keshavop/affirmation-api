# Affirmation API

A high-performance backend API built with **Bun** and **Express**, using **Google Gemini AI** to generate personalized affirmations. This project follows the **MVC (Model-View-Controller)** architecture.

## Features

- **Random Affirmations**: Generate a spontaneous positive affirmation.
- **Categorized Affirmations**: Request affirmations for specific topics like "Love", "Success", "Health", etc.
- **Category List**: Retrieve available affirmation categories.
- **AI-Powered**: Uses Google's Gemini models for dynamic content generation.
- **Fast & Modern**: Built on the Bun runtime for superior performance.

## Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [Express.js](https://expressjs.com/)
- **AI Integration**: [Google GenAI SDK](https://www.npmjs.com/package/@google/genai)
- **Language**: TypeScript

## Project Structure (MVC)

```
src/
├── controllers/    # Request handlers (Affirmation logic)
├── models/         # TypeScript interfaces and types
├── routes/         # API route definitions
├── services/       # External services (Google Gemini integration)
└── index.ts        # Application entry point
```

## Prerequisites

- [Bun](https://bun.sh/) installed (`curl -fsSL https://bun.sh/install | bash`)
- A Google Gemini API Key (Get one from [Google AI Studio](https://aistudio.google.com/))

## Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd affirmation-api
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    ```

3.  **Configure Environment**:
    Create a `.env` file in the root directory:
    ```env
    PORT=3000
    GOOGLE_GENAI_API_KEY=your_gemini_api_key_here
    ```

## Usage

### Development
Run the server in watch mode:
```bash
bun run dev
```

### Build & Production
Build the project to a standalone file (optional with Bun, but good for distribution):
```bash
bun run build
```

Start the server:
```bash
bun start
```

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/affirmations/random` | Get a random affirmation. |
| `GET` | `/api/affirmations?category=Love` | Get an affirmation for a specific category. |
| `GET` | `/api/categories` | Get the list of supported categories. |
| `GET` | `/api/health` | Check API health status. |

## License

MIT
