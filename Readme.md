# SayEase - Simplify Study & Life

A personal digital companion for students built with React, Express, and in-memory storage.

## Features

### 1. User Authentication
- Secure registration and login with JWT access and refresh tokens
- Token-based authentication for all protected routes
- User credentials stored with bcrypt hashing

### 2. Study Planner & Task Manager
- Create, edit, and delete study tasks
- Set priorities (low, medium, high) and due dates
- Mark tasks as complete
- Filter tasks by status (all, active, completed)
- Beautiful visual indicators for task priority

### 3. Smart Notes & AI Summarizer
- Create and organize study notes
- Categorize notes (lecture, assignment, general)
- AI-powered summarization using Google Gemini API
- Generate student-friendly summaries of complex notes

### 4. Daily Journal
- Record daily activities and reflections
- Track mood with visual emoji indicators
- Add activity tags
- View weekly insights and mood patterns

### 5. Mental Wellness Hub
- Daily motivational quotes
- Embedded YouTube study/productivity videos
- Wellness tips and daily affirmations
- Focus on student mental health

## Tech Stack

### Frontend
- React 18 (JSX files only)
- Tailwind CSS with custom color palette
- TanStack Query for data fetching
- Wouter for conditional routing
- Shadcn UI components

### Backend
- Express.js
- In-memory storage (MemStorage)
- JWT authentication (jsonwebtoken)
- Password hashing (bcrypt)
- Google Gemini AI integration

### Design System
- Color Palette: #FFBDBD, #FFA4A4, #FEE2AD, #FFF2EF, #FFDCDC, #8174A0, #A888B5, #CD2C58, #B33791, #FDCFFA
- Typography: Inter (body), Outfit (headings), Quicksand (accents)
- Rounded, soft aesthetic with gradient backgrounds
- Consistent spacing and visual hierarchy

## API Routes

### Authentication
- POST `/api/auth/register` - Create new user account
- POST `/api/auth/login` - Login and receive tokens
- POST `/api/auth/refresh` - Refresh access token

### Tasks
- GET `/api/tasks` - Get all tasks for authenticated user
- POST `/api/tasks` - Create new task
- PATCH `/api/tasks/:id` - Update task
- DELETE `/api/tasks/:id` - Delete task

### Notes
- GET `/api/notes` - Get all notes for authenticated user
- POST `/api/notes` - Create new note
- POST `/api/notes/summarize` - Generate AI summary for note
- DELETE `/api/notes/:id` - Delete note

### Journals
- GET `/api/journals` - Get all journal entries for authenticated user
- POST `/api/journals` - Create new journal entry
- DELETE `/api/journals/:id` - Delete journal entry

## Environment Variables

- `GEMINI_API_KEY` - Google Gemini API key for AI summarization
- `ACCESS_TOKEN_SECRET` - JWT access token secret (auto-generated)
- `REFRESH_TOKEN_SECRET` - JWT refresh token secret (auto-generated)

## Architecture

The application follows a clean architecture with:
- **Shared schemas** - TypeScript types shared between frontend and backend
- **Storage interface** - Abstract storage layer (currently in-memory)
- **Route handlers** - Express routes with JWT middleware protection
- **React components** - Modular, reusable UI components
- **TanStack Query** - Centralized data fetching with automatic caching

## Development

The application runs on port 5000 with both frontend (Vite) and backend (Express) served together.

All authentication tokens are stored in localStorage and automatically included in API requests via custom queryClient configuration.
